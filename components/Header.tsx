"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Button } from "./ui/button";
import { SmileyMeltingIcon } from "@phosphor-icons/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I'm Abhishek
        <SmileyMeltingIcon size={32} weight="light" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bricolage">
        frontend web developer
      </h1>
      <p className="max-w-2xl mx-auto font-bricolage">
        description
        descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
        description
      </p>
      <div>
        <Button size={"lg"}>Some random button</Button>
      </div>
    </div>
  );
};

export default Header;
