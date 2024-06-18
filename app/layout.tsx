import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "./providers";
import SiteOuterLayout from "@/layouts/SiteOuterLayout";
import { MaxWidthContainerLayout } from "@/layouts/MaxWidthContainerLayout";
import { fonts } from "./fonts";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mikecavaliere.com"),
  title: "Mike Cavaliere: software engineer, presenter, author.",
  description:
    "The personal website of Mike Cavaliere, software engineer. Here you can find my conference talks, projects, articles and other things I've created.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

import { PHProvider } from "@/lib/client/posthog";

import dynamic from "next/dynamic";

const PostHogPageView = dynamic(() => import("../components/PostHogPageView"), {
  ssr: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <PHProvider>
        <body>
          <PostHogPageView />

          <Providers>
            <SiteOuterLayout>
              <MaxWidthContainerLayout>{children}</MaxWidthContainerLayout>
            </SiteOuterLayout>
          </Providers>
        </body>
      </PHProvider>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && process.env.NODE_ENV !== "development" ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      ) : null}
    </html>
  );
}
