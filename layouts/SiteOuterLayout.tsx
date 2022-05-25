import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
// import { Footer } from 'components/Footer';
import { Navbar } from "components/Navbar";
// import { HeadContent } from 'components/HeadContent';

export type SiteOuterLayoutProps = {
  children: ReactNode;
};

export const SiteOuterLayout = ({
  children,
  ...props
}: SiteOuterLayoutProps) => {
  return (
    <Box {...props}>
      {/* <HeadContent />
       */}
      <Navbar />
      {children}
      {/* <Footer /> */}
    </Box>
  );
};

export const getLayout = (page) => {
  return <SiteOuterLayout>{page}</SiteOuterLayout>;
};

export default SiteOuterLayout;
