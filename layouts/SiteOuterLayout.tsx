"use client";

import { ReactNode, SyntheticEvent, useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";

export type SiteOuterLayoutProps = {
  children: ReactNode;
};

export const SiteOuterLayout = ({ children, ...props }: SiteOuterLayoutProps) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classNames = cn("bg-transparent transition-all", scrolled ? "bg-background shadow-md" : "");

  return (
    <div {...props}>
      <Navbar className={classNames} />
      {children}
    </div>
  );
};

export default SiteOuterLayout;
