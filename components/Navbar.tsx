"use client";;

import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { NAVBAR_LINKS } from "lib/constants";
import { Link } from "@chakra-ui/next-js";

export type NavLinkProps = {
  children: ReactNode;
  href: string;
};

export const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="transparent" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {NAVBAR_LINKS.map(({ title, href }) => (
                <NavLink key={title} href={href}>
                  {title}
                </NavLink>
              ))}
              <Button
                as="a"
                variant="primary"
                colorScheme="teal"
                size="sm"
                mr={4}
                leftIcon={<FaLaptopCode />}
                href="/projects"
              >
                Projects
              </Button>
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {NAVBAR_LINKS.map(({ title, href }) => (
                <NavLink key={title} href={href}>
                  {title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
