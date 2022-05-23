import { ReactNode } from "react";
// import { Footer } from 'components/Footer';
// import { Navbar } from 'components/Navbar';
// import { HeadContent } from 'components/HeadContent';

export type SiteOuterLayoutProps = {
  children: ReactNode;
};

export const SiteOuterLayout = ({ children }: SiteOuterLayoutProps) => (
  <>
    {/* <HeadContent />
    <Navbar /> */}
    {children}
    {/* <Footer /> */}
  </>
);

export const getLayout = (page) => {
  return <SiteOuterLayout>{page}</SiteOuterLayout>;
};

export default SiteOuterLayout;
