import { NextSeo, NextSeoProps } from "next-seo";
import { SITE_NAME } from "lib/constants";

// NOTE: copied from next-seo since it doesn't export this type.
export interface OpenGraphImages {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface Props {
  seo?: NextSeoProps;
}

export enum OpenGraphType {
  WEBSITE = "website",
  ARTICLE = "article",
}

export interface MetaProps {
  titlePrefix?: string;
  titleSuffix?: string;
  titleSeparator?: string;
  description?: string;
  images?: OpenGraphImages[];
  relativeUrl?: string;
  type?: OpenGraphType;
  seo?: NextSeoProps;
}

export const Meta = ({
  titlePrefix,
  titleSeparator = " | ",
  titleSuffix = SITE_NAME,
  type = OpenGraphType.WEBSITE,
  description,
  seo = { openGraph: { images: [] } },
  relativeUrl = "",
}: MetaProps) => {
  const title = `${titlePrefix}${titleSeparator}${titleSuffix}`;
  const url = `${process.env.SITE_BASE_URL}${relativeUrl}`;
  const openGraph = {
    url,
    title,
    description,
    site_name: SITE_NAME,
    type,
    ...seo.openGraph,
  };
  const twitter = {
    handle: "@mcavaliere",
    cardType: "summary",
    ...seo.twitter,
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={openGraph}
        twitter={twitter}
        {...seo}
      />
    </>
  );
};
