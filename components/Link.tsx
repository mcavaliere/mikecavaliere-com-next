import { ReactNode } from "react";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbLinkProps as ChakraBreadcrumbLinkProps,
} from "@chakra-ui/react";
import { default as NextLink } from "next/link";

export type LinkProps = ChakraLinkProps & {
  children: ReactNode;
  href: string;
};

export const Link = ({ children, href, ...props }: LinkProps) => (
  <NextLink href={href} passHref>
    <ChakraLink {...props}>{children}</ChakraLink>
  </NextLink>
);

export type BreadcrumbLinkProps = ChakraBreadcrumbLinkProps & {
  children: ReactNode;
  href: string;
};

export const BreadcrumbLink = ({
  children,
  href,
  ...props
}: BreadcrumbLinkProps) => (
  <NextLink href={href} passHref>
    <ChakraBreadcrumbLink {...props}>{children}</ChakraBreadcrumbLink>
  </NextLink>
);
