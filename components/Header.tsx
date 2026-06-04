"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import PixelBackground from "@/components/ui/pixel-background";
import { FancyText } from "./ui/fancy-text";

const Header = () => {
  return (
    <PixelBackground
      className="w-full flex items-center justify-center"
      opacity={0.4}
      gap={8}
      colors="#a50036,#1a5f7a,#3b8ba8,#5eb3d6,#a8d8f0"
      direction="top"
    >
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.profile_img}
            alt="profile"
            className="rounded-full w-32"
          />
        </motion.div>
        <motion.h3
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 tracking-wider font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
            type: "tween",
          }}
        >
          Hi! I'm Abhishek
        </motion.h3>
        <FancyText
          className="text-3xl sm:text-6xl lg:text-[66px] font-bricolage font-black leading-none text-black/10 dark:text-white/10"
          fillClassName="text-black dark:text-white"
          stagger={0.1}
          duration={1.4}
          delay={0.5}
        >
          frontend Engineer
        </FancyText>
        <motion.h1
          className="text-3xl sm:text-6xl lg:text-[66px] font-bricolage"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            ease: [0.22, 1, 0.36, 1],
            type: "keyframes",
          }}
        >
          crafting scalable web experiences
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto font-bricolage"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
        >
          Creating high-performance, accessible web experiences. I love building
          scalable applications and solving complex frontend challenges.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.8,
            type: "spring",
            stiffness: 180,
            damping: 8,
          }}
        >
          <Button size={"lg"} className="rounded-full">
            Some random button
          </Button>
        </motion.div>
      </div>
    </PixelBackground>
  );
};

export default Header;
