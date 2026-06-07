"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import {
  AtIcon,
  CopyrightIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  HandHeartIcon,
  LaptopIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { GlassSeparator } from "./glass-separator";
import Link from "next/link";
import SocialButtons from "./SocialButtons";
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 justify-center md:mt-12 px-5 pb-2 text-xs">
        <div className="flex text-muted-foreground items-center gap-1">
          <CopyrightIcon size={18} weight="duotone" /> 2026 Abhishek Agrawal.
          All rights reserved.
        </div>
        <div className="flex gap-4 justify-center">
          <SocialButtons>
            <Link
              href="https://www.linkedin.com/in/abhishek-agrawal-fe/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogoIcon size={24} weight="duotone" />
            </Link>
          </SocialButtons>
          <SocialButtons>
            <Link target="_blank" href="https://github.com/infiniko/">
              <GithubLogoIcon size={24} weight="duotone" />
            </Link>
          </SocialButtons>
          <SocialButtons>
            <Link href="mailto:abhishekacr@gmail.com">
              <EnvelopeIcon size={24} weight="duotone" />
            </Link>
          </SocialButtons>
        </div>
        <div className="text-muted-foreground flex flex-col items-center justify-center">
          <span className="flex gap-1 items-center">
            <HandHeartIcon size={24} weight="duotone" color="#EC003F" />
            Built with Next.js
          </span>
          <span className="flex gap-1 items-center justify-center">
            <LaptopIcon size={18} weight="duotone" />
            <span>Designed and developed by Abhishek Agrawal.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
