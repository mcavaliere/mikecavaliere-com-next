import { MaxWidthContainer } from "components/MaxWidthContainer";
import { getLayout as getSiteLayout } from "layouts/SiteOuterLayout";

export const MaxWidthContainerLayout = ({ children }) => (
  <MaxWidthContainer>{children}</MaxWidthContainer>
);

export const getLayout = (page) =>
  getSiteLayout(<MaxWidthContainerLayout>{page}</MaxWidthContainerLayout>);
