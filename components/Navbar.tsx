"use client";
import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
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
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <a href="#top">
                  <svg
                    viewBox="61.89 106.29 368.35 368.35"
                    className="w-13 text-[#009095] fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M284,379.81l-4.86,13.95L168.78,117.01h-32.23l36.2,90.7L69.89,470.51l32.23-0.47l44.59-115.82l83.44,0.47l50.33,114.42l19.87-49.77L284,379.81z M161.06,320.97l28.36-71.05l27.7,71.05H161.06z" />
                    <path d="M208.13,204.98l4.86-13.95l110.36,276.76h32.23l-36.2-90.7l102.86-262.8l-32.23,0.47l-44.59,115.82l-83.44-0.47l-50.33-114.42l-19.87,49.77L208.13,204.98z M331.07,263.82l-28.36,71.05l-27.7-71.05H331.07z" />
                  </svg>
                </a>
              </motion.div>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:flex items-center gap-8 lg:gap-8 rounded-full px-12 py-1 menu-scroll">
              {navLinks.map(({ title, href }) => {
                return (
                  <NavigationMenuLink
                    key={title}
                    asChild
                    className={`not-dark:hover:bg-accent duration-300 ${navigationMenuTriggerStyle()}`}
                  >
                    <a href={href}>{title}</a>
                  </NavigationMenuLink>
                );
              })}
            </NavigationMenuItem>
            <NavigationMenuItem className="flex gap-2">
              <ThemeToggle />
              <div className="hidden lg:flex">
                <GlassButton glassVariant="liquid-refract">
                  <Link
                    className="flex items-center justify-center mt-1 group/github"
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
