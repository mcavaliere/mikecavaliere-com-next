import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";
import { NextSeoProps } from "next-seo";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, pageProps?: any) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type FeaturedImage = {
  src: string;
  width: number;
  height: number;
};

export type nodeObjType = {
  tagName: string;
  text?: string;
  children: nodeObjType[];
  meta?: Record<string, any>;
};

export const TAGS_TO_SKIP = ["HTML", "BODY", "HEAD"];

export enum VideoType {
  YOUTUBE = "youtube",
}

export type Interview = {
  title: string;
  videoUrl?: string;
  videoType?: VideoType;
  excerpt?: string;
  description?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  presentedAt?: string;
};

export type Talk = {
  title: string;
  videoUrl?: string;
  videoType?: VideoType;
  excerpt?: string;
  description?: string;
  slidesUrl?: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  presentedAt?: string;
};

export type Project = {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type PageLayoutProps = {
  children: JSX.Element;
};

export type ArticleMetaData = {
  content: string;

  title: string;
  date: Date;
  author: string;
  excerpt: string;

  slug: string;
  toc?: string;
  seo: NextSeoProps;
};
