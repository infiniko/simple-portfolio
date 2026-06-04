"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navLinks } from "@/data";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowSquareInIcon, SquareHalfIcon } from "@phosphor-icons/react";
import GradientTop from "./GradientTop";
import { RightSideDrop } from "./RightSideDrop";
import { useEffect } from "react";
import { GlassButton } from "./glass-button";

const Navbar = () => {
  useEffect(() => {}, []);
  return (
    <>
      <nav>
        <GradientTop />
        <NavigationMenu>
          <NavigationMenuList className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-3 flex items-center justify-between z-50 navbar-scroll">
            <NavigationMenuItem>
              <Link href="#top">
                <Image
                  src={assets.logo}
                  alt="logo"
                  className="w-28 cursor-pointer mr-14"
                />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:flex items-center gap-8 lg:gap-8 rounded-full px-12 py-1 menu-scroll">
              {navLinks.map(({ title, href }) => {
                return (
                  <NavigationMenuLink key={title} asChild className="">
                    <Link href={href}>{title}</Link>
                  </NavigationMenuLink>
                );
              })}
            </NavigationMenuItem>
            <NavigationMenuItem className="flex gap-2">
              <ThemeToggle />
              <GlassButton
                glassVariant="liquid-refract"
                className="hidden lg:flex rounded-full"
              >
                <Link
                  className="items-center gap-3 px-10 py-2.5 rounded-full"
                  href="#contact"
                >
                  Contact
                  <ArrowSquareInIcon size={32} weight="duotone" />
                </Link>
              </GlassButton>
              <RightSideDrop>
                <Button
                  variant="outline"
                  size="icon"
                  className="flex md:hidden"
                >
                  <SquareHalfIcon
                    weight="duotone"
                    className="h-[1.2rem] w-[1.2rem]"
                  />
                </Button>
              </RightSideDrop>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
};

export default Navbar;
