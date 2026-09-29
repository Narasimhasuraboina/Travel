import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

async function expectAccessible(page) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  const summary = results.violations.map(({ id, impact, nodes }) => ({
    id,
    impact,
    count: nodes.length,
    contrasts: [...new Map(nodes.map((node) => {
      const data = node.any.find((check) => check.id === 'color-contrast')?.data;
      return data ? [`${data.fgColor} on ${data.bgColor}`, data] : null;
    }).filter(Boolean))].map(([, data]) => data)
  }));
  expect(summary).toEqual([]);
}

test('light theme renders without automated WCAG violations', async ({ page }) => {
  const runtimeErrors = [];
  page.on('pageerror', (error) => runtimeErrors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Where does your mood want to go?' })).toBeVisible();
  expect(runtimeErrors).toEqual([]);
  await expect(page.getByRole('button', { name: 'Romantic' })).toHaveAttribute('aria-pressed', 'true');
  const peacefulMood = page.getByRole('button', { name: 'Peaceful' });
  await peacefulMood.focus();
  await page.keyboard.press('Enter');
  await expect(peacefulMood).toHaveAttribute('aria-pressed', 'true');
  await expectAccessible(page);
});

test('dark theme toggle persists and meets automated WCAG checks', async ({ page }) => {
  const runtimeErrors = [];
  page.on('pageerror', (error) => runtimeErrors.push(error.message));
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('button', { name: 'Switch to light mode' })).toBeVisible();
  await expectAccessible(page);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(runtimeErrors).toEqual([]);
});

test('mobile layout has no horizontal overflow and meets automated WCAG checks', async ({ page }) => {
  const runtimeErrors = [];
  page.on('pageerror', (error) => runtimeErrors.push(error.message));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Where does your mood want to go?' })).toBeVisible();
  const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(hasHorizontalOverflow).toBe(false);
  await expectAccessible(page);
  expect(runtimeErrors).toEqual([]);
});
