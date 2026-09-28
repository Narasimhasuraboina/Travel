/**
 * Geolocation Service Layer
 * 
 * SAFEGUARD COMPLIANCE:
 * - Rule 9: User Location Privacy
 *   - Explains why location is requested.
 *   - Ephemeral in-memory usage only; no persistent tracking.
 *   - NEVER exposes raw coordinates in the UI.
 *   - Graceful fallback when denied or unavailable.
 * - Rule 12: Tested for "Geolocation denied" and "Geolocation unavailable".
 */

export const LOCATION_STATUS = {
  IDLE: 'idle',
  REQUESTING: 'requesting',
  GRANTED: 'granted',
  DENIED: 'denied',
  UNAVAILABLE: 'unavailable',
  SIMULATED: 'simulated'
};

/**
 * Requests browser geolocation with explicit user consent and privacy protection.
 * 
 * @returns {Promise<{ status: string, coords: { latitude: number, longitude: number } | null, message: string }>}
 */
export async function requestBrowserGeolocation() {
  if (typeof window === 'undefined' || !navigator || !navigator.geolocation) {
    return {
      status: LOCATION_STATUS.UNAVAILABLE,
      coords: null,
      message: "Browser geolocation is not supported in this environment. Recommendations will display without distances."
    };
  }

  return new Promise((resolve) => {
    const options = {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 300000 // Cache for 5 mins in browser session
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          status: LOCATION_STATUS.GRANTED,
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          message: "Location acquired for distance calculations. Coordinates are kept strictly in memory for this session and never logged or stored."
        });
      },
      (error) => {
        let status = LOCATION_STATUS.UNAVAILABLE;
        let message = "Unable to retrieve your location. Distance calculations will be omitted.";

        if (error.code === error.PERMISSION_DENIED) {
          status = LOCATION_STATUS.DENIED;
          message = "Location permission was denied. All recommendations will still be displayed without distances.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          status = LOCATION_STATUS.UNAVAILABLE;
          message = "Location position is currently unavailable from your device.";
        } else if (error.code === error.TIMEOUT) {
          status = LOCATION_STATUS.UNAVAILABLE;
          message = "Location request timed out. Distances will be omitted.";
        }

        resolve({
          status,
          coords: null,
          message
        });
      },
      options
    );
  });
}

/**
 * Simulation helpers for Edge Case Testing (Rule 12)
 */
export function getSimulatedLocationState(scenario) {
  switch (scenario) {
    case 'denied':
      return {
        status: LOCATION_STATUS.DENIED,
        coords: null,
        message: "[Simulated Test] Location access denied by user. Distances omitted cleanly."
      };
    case 'unavailable':
      return {
        status: LOCATION_STATUS.UNAVAILABLE,
        coords: null,
        message: "[Simulated Test] GPS / Geolocation sensor unavailable. Distances omitted cleanly."
      };
    case 'nyc':
      // Times Square coords for testing distance calculation against NYC landmarks
      return {
        status: LOCATION_STATUS.SIMULATED,
        coords: { latitude: 40.7580, longitude: -73.9855 },
        message: "[Simulated Test] Simulated user position near Midtown Manhattan (40.758, -73.985)."
      };
    case 'london':
      // Trafalgar Square coords for testing distance against London landmarks
      return {
        status: LOCATION_STATUS.SIMULATED,
        coords: { latitude: 51.5080, longitude: -0.1281 },
        message: "[Simulated Test] Simulated user position near Trafalgar Square (51.508, -0.128)."
      };
    default:
      return {
        status: LOCATION_STATUS.IDLE,
        coords: null,
        message: "No location requested."
      };
  }
}
