// Facebook Pixel helper utilities
// Replace YOUR_PIXEL_ID with actual Pixel ID from Meta Business Suite

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";

// Extend Window interface for fbq
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
}

/**
 * Track a standard Facebook Pixel event
 * @see https://developers.facebook.com/docs/meta-pixel/reference
 */
export function fbEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("track", eventName, params);
    } else {
      window.fbq("track", eventName);
    }
  }
}

/**
 * Track a custom Facebook Pixel event
 */
export function fbCustomEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("trackCustom", eventName, params);
    } else {
      window.fbq("trackCustom", eventName);
    }
  }
}
