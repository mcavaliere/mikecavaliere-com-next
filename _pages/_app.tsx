import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import SEOConfig from "../next-seo.config";

import { getLayout as getSiteOuterLayout } from "layouts/SiteOuterLayout";
import { getLayout as getMaxWidthContainerLayout } from "layouts/MaxWidthContainerLayout";
import { theme } from "../lib/theme";
import { AppPropsWithLayout } from "lib/types";
import { useAnalytics } from "lib/analytics";
import { PostHogProvider, usePostHog } from "posthog-js/react";

import "@fontsource/barlow/400.css";
import "@fontsource/barlow/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { initPostHog } from "lib/client/posthog";

const posthog = initPostHog();

const defaultLayout = (page) => getSiteOuterLayout(getMaxWidthContainerLayout(page));

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Grab the layout if set; otherwise default to the default layout.
  const getLayout = Component.getLayout || defaultLayout;

  // Report pageviews and events to Google Analytics.
  useAnalytics();
  usePostHog();

  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <PostHogProvider client={posthog}>
        <ChakraProvider theme={theme}>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </ChakraProvider>
      </PostHogProvider>
    </>
  );
}

export default MyApp;
