"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navLinks } from "@/data";
import { ThemeToggle } from "./ThemeToggle";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { RightSideDrop } from "./RightSideDrop";
import { GlassButton } from "./glass-button";

const Navbar = () => {
  return (
    <>
      <nav>
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
                  <NavigationMenuLink
                    key={title}
                    asChild
                    className="not-dark:hover:bg-accent duration-300"
                  >
                    <Link href={href}>{title}</Link>
                  </NavigationMenuLink>
                );
              })}
            </NavigationMenuItem>
            <NavigationMenuItem className="flex gap-2">
              <ThemeToggle />
              <div className="hidden lg:flex">
                <GlassButton glassVariant="liquid-refract">
                  <Link
                    className="flex items-center justify-center gap-2 px-2 mt-1 group/github"
                    target="_blank"
                    href="https://github.com/infiniko/"
                  >
                    Github
                    <GithubLogoIcon
                      size={32}
                      weight="duotone"
                      className="transition-transform duration-500 group-hover/github:scale-125"
                    />
                  </Link>
                </GlassButton>
              </div>
              <div className="flex md:hidden">
                <RightSideDrop />
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
};

export default Navbar;
