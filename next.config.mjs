import createMDX from "@next/mdx";
import { redirects } from "./redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mikecavaliere.com",
      },
      {
        protocol: "https",
        hostname: "www.mikecavaliere.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return redirects;
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  // Using string names for Turbopack compatibility in Next.js 16
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      "remark-gfm",
    ],
    rehypePlugins: [
      "rehype-highlight",
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
