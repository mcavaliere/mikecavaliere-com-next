import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";

export type SiteOuterLayoutProps = {
  children: ReactNode;
};

export const SiteOuterLayout = ({ children, ...props }: SiteOuterLayoutProps) => {
  return (
    <div {...props}>
      <Navbar className="bg-transparent" />
      {children}
    </div>
  );
};

export default SiteOuterLayout;
