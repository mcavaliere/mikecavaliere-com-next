"use client";

import { ReactNode } from "react";

import { FaLaptopCode } from "react-icons/fa";
import { NAVBAR_LINKS } from "lib/constants";
import { Link } from "@/components/Link";
import { Button } from "./ui/button";

export type NavLinkProps = {
  children: ReactNode;
  href: string;
};

export const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    // px={2}
    // py={1}
    // rounded="md"
    // _hover={{
    //   textDecoration: "none",
    //   bg: useColorModeValue("gray.200", "gray.700"),
    // }}
  >
    {children}
  </Link>
);

export function Navbar() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="bg-transparent px-4">
        <div className="h-[16px] items-center justify-between">
          <Button
            // size="md"
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            // display={{ md: "none" }}
            // onClick={isOpen ? onClose : onOpen}
          />
          <div className="flex flex-row gap-[8px] items-center">
            <nav className="flex-row gap-[4px] hidden md:flex">
              {NAVBAR_LINKS.map(({ title, href }) => (
                <NavLink key={title} href={href}>
                  {title}
                </NavLink>
              ))}
              <Link href="/projects">
                <Button
                // as="a"
                // variant="primary"
                // colorScheme="teal"
                // size="sm"
                // mr={4}
                // leftIcon={<FaLaptopCode />}
                >
                  Projects
                </Button>
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Button>
              toggle
              {/* onClick={toggleColorMode} */}
              {/* {colorMode === "light" ? <MooonClick={toggleColorMode}nIcon /> : <SunIcon />} */}
            </Button>
          </div>
        </div>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {NAVBAR_LINKS.map(({ title, href }) => (
                <NavLink key={title} href={href}>
                  {title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </div>
    </>
  );
}
