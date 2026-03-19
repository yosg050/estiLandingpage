// Unified analytics tracking — GA4 + Facebook Pixel
// Import this in any Client Component that needs to track events

import { fbEvent, fbCustomEvent } from "./fbpixel";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

/**
 * Send a GA4 custom event
 */
function gaEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

// ──────────────────────────────────────────────────
// High-level tracking functions — call these from components
// ──────────────────────────────────────────────────

/** Form submitted successfully (HomeCTA or ContactForm) */
export function trackFormSubmit(formLocation: "home" | "contact") {
  // GA4
  gaEvent("generate_lead", {
    event_category: "form",
    event_label: formLocation,
    value: 1,
  });
  // FB Pixel — standard Lead event
  fbEvent("Lead", {
    content_name: formLocation === "home" ? "home_cta_form" : "contact_page_form",
  });
}

/** Cal.com booking button clicked (opens the iframe) */
export function trackCalBookingClick(location: string) {
  // GA4
  gaEvent("booking_click", {
    event_category: "cta",
    event_label: location,
  });
  // FB Pixel — standard Schedule event
  fbEvent("Schedule", {
    content_name: "cal_booking",
    content_category: location,
  });
}

/** WhatsApp button / link clicked */
export function trackWhatsAppClick(location: string) {
  // GA4
  gaEvent("whatsapp_click", {
    event_category: "cta",
    event_label: location,
  });
  // FB Pixel — standard Contact event
  fbEvent("Contact", {
    content_name: "whatsapp",
    content_category: location,
  });
}

/** Phone number link clicked */
export function trackPhoneClick() {
  gaEvent("phone_click", { event_category: "cta" });
  fbEvent("Contact", { content_name: "phone_call" });
}

/** Service page viewed */
export function trackServiceView(serviceName: string) {
  gaEvent("view_service", {
    event_category: "engagement",
    event_label: serviceName,
  });
  fbEvent("ViewContent", {
    content_name: serviceName,
    content_type: "service",
  });
}

/** Blog post viewed */
export function trackBlogView(postSlug: string) {
  gaEvent("view_blog_post", {
    event_category: "engagement",
    event_label: postSlug,
  });
  fbEvent("ViewContent", {
    content_name: postSlug,
    content_type: "blog_post",
  });
}

/** Generic custom event (for anything else) */
export function trackEvent(action: string, params?: Record<string, unknown>) {
  gaEvent(action, params);
  if (params) {
    fbCustomEvent(action, params);
  } else {
    fbCustomEvent(action);
  }
}
