"use client"

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

export const posthogClient = initPostHog();

export function PHProvider({ children }) {
  return <PostHogProvider client={posthogClient}>{children}</PostHogProvider>;
}

export function initPostHog() {
  // Check that PostHog is client-side (used to handle Next.js SSR)
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
      capture_pageview: false, // We'll capture it manually
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
    });
  }

  return posthog;
}
