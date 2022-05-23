import { ReactNode } from "react";
import { useRouter } from "next/router";
import { Box, useColorModeValue } from "@chakra-ui/react";
// import { Footer } from 'components/Footer';
import { Navbar } from "components/Navbar";
// import { HeadContent } from 'components/HeadContent';

export type SiteOuterLayoutProps = {
  children: ReactNode;
};

export const SiteOuterLayout = ({ children }: SiteOuterLayoutProps) => {
  const router = useRouter();
  const bg =
    router.pathname === "/"
      ? useColorModeValue("white", "gray.900")
      : "transparent";
  return (
    <Box>
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
