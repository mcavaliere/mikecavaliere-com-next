import { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, pageProps?: any) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
