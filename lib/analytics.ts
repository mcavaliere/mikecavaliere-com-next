import { useEffect } from "react";
import { useRouter } from "next/router";

// log the pageview with their URL
export const pageview = (url: string) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
    return;
  }
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
    return;
  }
  window.gtag("event", action, params);
};

export const useAnalytics = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
