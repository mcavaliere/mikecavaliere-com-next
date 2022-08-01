import { SITE_NAME } from "lib/constants";

const title = SITE_NAME;
const description =
  "The personal website of Mike Cavaliere: software engineer, conference speaker, author.";

export const SEOConfig = {
  title,
  description,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_BASE_URL,
    title,
    description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_BASE_URL}/images/headshot 1024 square 72DPI.jpeg`,
        width: 1200,
        height: 630,
        alt: "Mike Cavaliere's headshot",
      },
    ],
    site_name: SITE_NAME,
    type: "website",
  },
  twitter: {
    handle: "@mcavaliere",
    cardType: "summary",
  },
};

export default SEOConfig;
