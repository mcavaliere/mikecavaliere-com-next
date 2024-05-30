import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "components/Navbar";

export type SiteOuterLayoutProps = {
  children: ReactNode;
};

export const SiteOuterLayout = ({ children, ...props }: SiteOuterLayoutProps) => {
  return (
    <Box {...props}>
      <Navbar />
      {children}
    </Box>
  );
};

export const getLayout = (page) => {
  return <SiteOuterLayout>{page}</SiteOuterLayout>;
};

export default SiteOuterLayout;
