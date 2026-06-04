"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonStarsIcon, SunDimIcon } from "@phosphor-icons/react";
import { GlassButton } from "./glass-button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <GlassButton
      glassVariant="liquid-refract"
      size="icon-lg"
      className="rounded-full"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
    >
      <SunDimIcon
        weight="duotone"
        className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <MoonStarsIcon
        weight="duotone"
        className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
    </GlassButton>
  );
}
