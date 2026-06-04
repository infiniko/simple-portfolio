"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { AtIcon, CopyrightIcon } from "@phosphor-icons/react";
import { GlassSeparator } from "./glass-separator";
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-1 mx-auto">
          <AtIcon size={20} weight="duotone" />
          abhishekacr@gmail.com
        </div>
      </div>
      <GlassSeparator glassVariant="subtle" />
      <div className="text-center sm:flex items-center justify-between mt-12">
        <p className="flex text-muted-foreground items-center">
          <CopyrightIcon size={20} weight="duotone" /> 2026 A_A. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
