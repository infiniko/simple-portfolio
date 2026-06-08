"use client";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/data";
import Link from "next/link";
import { GlassButton } from "./glass-button";
import { SquareHalfIcon } from "@phosphor-icons/react";
import { GlassDropdownMenuContent } from "./glass-dropdown-menu";

export function RightSideDrop() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <GlassButton
            glassVariant="liquid-refract"
            size="icon-lg"
            className=" rounded-full"
          >
            <SquareHalfIcon
              weight="duotone"
              className="h-[1.2rem] w-[1.2rem]"
            />
          </GlassButton>
        }
      />
      <GlassDropdownMenuContent
        glassVariant="clear"
        sideOffset={10}
        alignOffset={-10}
        align="end"
      >
        <DropdownMenuGroup>
          {navLinks.map(({ title, href }) => {
            return (
              <DropdownMenuItem key={title}>
                <Link href={href}>{title}</Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </GlassDropdownMenuContent>
    </DropdownMenu>
  );
}
