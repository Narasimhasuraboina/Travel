import { access, mkdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(projectRoot, 'public', 'images', 'destinations');
const photos = JSON.parse(await readFile(path.join(projectRoot, 'src', 'data', 'destinationPhotos.json'), 'utf8'));
const requestDelayMs = 1500;
const forceRebuild = process.argv.includes('--force');

await mkdir(outputDirectory, { recursive: true });

async function downloadAndOptimize(photo) {
  if (!/^[a-z0-9-]+$/i.test(photo.id)) {
    throw new Error(`Unsafe destination id: ${photo.id}`);
  }

  const outputPath = path.join(outputDirectory, `${photo.id}.webp`);
  if (!forceRebuild) {
    try {
      await access(outputPath);
      return;
    } catch {
      // Build the file if it has not been downloaded yet.
    }
  }

  let response;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    response = await fetch(photo.imageUrl, {
      headers: { 'User-Agent': 'MoodTrip destination image build (photo credits in app)' }
    });
    if (response.ok) break;
    if (response.status !== 429 || attempt === 5) {
      throw new Error(`Could not download ${photo.id}: HTTP ${response.status}`);
    }
    const retryAfterMs = Number(response.headers.get('retry-after')) * 1000;
    const backoffMs = Number.isFinite(retryAfterMs) && retryAfterMs > 0
      ? retryAfterMs
      : Math.min(5000 * (2 ** attempt), 60000);
    console.warn(`Rate limited while downloading ${photo.id}; retrying in ${Math.ceil(backoffMs / 1000)}s.`);
    await new Promise((resolve) => setTimeout(resolve, backoffMs));
  }

  const source = Buffer.from(await response.arrayBuffer());
  await sharp(source)
    .rotate()
    .resize({ width: 1440, height: 1000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(outputPath);
}

for (let index = 0; index < photos.length; index += 1) {
  await downloadAndOptimize(photos[index]);
  if ((index + 1) % 4 === 0 || index === photos.length - 1) {
    console.log(`Optimized ${index + 1} / ${photos.length} destination photos`);
  }
  if (index < photos.length - 1) {
    await new Promise((resolve) => setTimeout(resolve, requestDelayMs));
  }
}

const outputBytes = (await Promise.all(
  photos.map(async ({ id }) => (await stat(path.join(outputDirectory, `${id}.webp`))).size)
)).reduce((total, size) => total + size, 0);
console.log(`Finished ${photos.length} photos (${(outputBytes / 1024 / 1024).toFixed(1)} MiB total).`);
