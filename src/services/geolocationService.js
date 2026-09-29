/**
 * MoodTrip - Geolocation Service Layer
 * 
 * SAFEGUARD & PRIVACY COMPLIANCE:
 * - Rule 9: User Location Privacy
 *   - Clear consent explanation.
 *   - Ephemeral in-memory usage only; no persistent tracking.
 *   - Coordinates are NEVER displayed in the UI.
 *   - Graceful fallback when denied or unavailable.
 * - INDIA-FOCUSED simulation helpers for automated tests.
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
 */
export async function requestBrowserGeolocation() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined' || !navigator.geolocation) {
    return {
      status: LOCATION_STATUS.UNAVAILABLE,
      coords: null,
      message: "Browser location is not supported in this environment. Recommendations will display without distances."
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
          message: "Location acquired for distance calculations. Coordinates are kept strictly in session memory and never stored or shared."
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
 * Indian Location Simulation helpers for testing (Rule 12)
 */
export function getSimulatedLocationState(scenario) {
  switch (scenario) {
    case 'denied':
      return {
        status: LOCATION_STATUS.DENIED,
        coords: null,
        message: "[Test] Location access denied. Distances omitted cleanly."
      };
    case 'unavailable':
      return {
        status: LOCATION_STATUS.UNAVAILABLE,
        coords: null,
        message: "[Test] GPS sensor unavailable. Distances omitted cleanly."
      };
    case 'vijayawada':
      return {
        status: LOCATION_STATUS.SIMULATED,
        coords: { latitude: 16.5062, longitude: 80.6480 },
        message: "Position simulated near Vijayawada, Andhra Pradesh (16.506° N, 80.648° E)."
      };
    case 'hyderabad':
      return {
        status: LOCATION_STATUS.SIMULATED,
        coords: { latitude: 17.3850, longitude: 78.4867 },
        message: "Position simulated near Hyderabad, Telangana (17.385° N, 78.486° E)."
      };
    case 'visakhapatnam':
      return {
        status: LOCATION_STATUS.SIMULATED,
        coords: { latitude: 17.6868, longitude: 83.2185 },
        message: "Position simulated near Visakhapatnam, Andhra Pradesh (17.686° N, 83.218° E)."
      };
    case 'bengaluru':
      return {
        status: LOCATION_STATUS.SIMULATED,
        coords: { latitude: 12.9716, longitude: 77.5946 },
        message: "Position simulated near Bengaluru, Karnataka (12.971° N, 77.594° E)."
      };
    default:
      return {
        status: LOCATION_STATUS.IDLE,
        coords: null,
        message: "No location active."
      };
  }
}
