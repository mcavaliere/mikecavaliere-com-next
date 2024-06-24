import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";

// import remarkGfm from 'remark-gfm'
// import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below

  images: {
    domains: ["mikecavaliere.com", "www.mikecavaliere.com", "res.cloudinary.com"],
  },
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/ai-tools-for-js-devs",
        destination: "/ai-for-js-devs",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
