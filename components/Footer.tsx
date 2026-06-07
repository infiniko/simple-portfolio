"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import {
  AtIcon,
  CopyrightIcon,
  HandHeartIcon,
  LaptopIcon,
} from "@phosphor-icons/react";
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
      <div className="text-center sm:flex items-end justify-between mt-12 px-5 pb-2">
        <div className="flex text-muted-foreground items-center gap-1">
          <CopyrightIcon size={20} weight="duotone" /> 2026 A_A. All rights
          reserved.
        </div>
        <div></div>
        <div className="text-muted-foreground flex flex-col items-center">
          <span className="flex gap-2 items-center">
            <HandHeartIcon size={24} weight="duotone" color="#EC003F" />
            Built with Next.js
          </span>
          <span className="flex gap-2 items-center">
            <LaptopIcon size={20} weight="duotone" /> Designed and developed by
            Abhishek Agrawal.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
