import { MaxWidthContainer } from "components/MaxWidthContainer";

export const MaxWidthContainerLayout = ({ children }) => (
  <MaxWidthContainer>{children}</MaxWidthContainer>
);

export const getLayout = (page) => (
  <MaxWidthContainerLayout>{page}</MaxWidthContainerLayout>
);
