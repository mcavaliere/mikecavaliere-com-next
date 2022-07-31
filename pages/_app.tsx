import { ChakraProvider } from "@chakra-ui/react";

import { getLayout as getSiteOuterLayout } from "layouts/SiteOuterLayout";
import { getLayout as getMaxWidthContainerLayout } from "layouts/MaxWidthContainerLayout";
import { theme } from "../lib/theme";
import { AppPropsWithLayout } from "lib/types";
import { useAnalytics } from "lib/analytics";

import "@fontsource/barlow/400.css";
import "@fontsource/barlow/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const defaultLayout = (page) =>
  getSiteOuterLayout(getMaxWidthContainerLayout(page));

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Grab the layout if set; otherwise default to the default layout.
  const getLayout = Component.getLayout || defaultLayout;

  // Report pageviews and events to Google Analytics.
  useAnalytics();

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </ChakraProvider>
  );
}

export default MyApp;
