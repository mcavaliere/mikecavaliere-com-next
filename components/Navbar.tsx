"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { NAVBAR_LINKS } from "@/lib/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          {/* <NavigationMenuItem className="font-bold flex">
            <a rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">
              {APP_NAME}
            </a>
          </NavigationMenuItem> */}

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)} />
                <span className="sr-only">Menu Icon</span>
              </SheetTrigger>

              <SheetContent side={"left"}>
                {/* <SheetHeader>
                  <SheetTitle className="font-bold text-xl">{APP_NAME}</SheetTitle>
                </SheetHeader> */}
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {NAVBAR_LINKS.map(({ href, title }) => (
                    <a
                      rel="noreferrer noopener"
                      key={title}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {title}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {NAVBAR_LINKS.map((route, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.title}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
