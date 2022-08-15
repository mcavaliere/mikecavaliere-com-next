import { getLayout as getMaxWidthContainerLayout } from "layouts/MaxWidthContainerLayout";
import { getLayout as getSiteOuterLayout } from "layouts/SiteOuterLayout";
import { ArticlesBreadcrumb } from "components/ArticlesBreadcrumb";
import { PageLayoutProps } from "lib/types";
import { ArticleMetaData } from "lib/types";
import { Meta } from "components/meta";

export type ArticleLayoutProps = PageLayoutProps & { post: ArticleMetaData };

export const ArticleLayout = ({ children, post }: ArticleLayoutProps) => {
  const { title, excerpt } = post;

  const relativeUrl = `/${post.slug}`;
  const canonical = `${process.env.NEXT_PUBLIC_SITE_BASE_URL}${relativeUrl}`;
  return (
    <>
      <Meta
        titlePrefix={title}
        description={excerpt}
        relativeUrl={relativeUrl}
        seo={{ canonical }}
      />
      <ArticlesBreadcrumb />
      {children}
    </>
  );
};

export const getLayout = (page, pageProps) => {
  return getSiteOuterLayout(
    getMaxWidthContainerLayout(
      <ArticleLayout {...pageProps}>{page}</ArticleLayout>
    )
  );
};

ArticleLayout.getLayout = getLayout;
