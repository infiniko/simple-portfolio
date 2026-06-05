"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion, Variants } from "framer-motion";
import PixelBackground from "@/components/ui/pixel-background";
import { FancyText } from "./ui/fancy-text";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const profileVariant: Variants = {
  hidden: { scale: 0.7, opacity: 0, filter: "blur(10px)" },
  show: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 160, damping: 14 },
  },
};

const greetingVariant: Variants = {
  hidden: { opacity: 0, y: -30, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fancyVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const headingVariant: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const paraVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const btnVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 8 },
  },
};

const Header = () => {
  return (
    <PixelBackground
      className="fixed inset-0 w-full h-full -z-10"
      opacity={0.4}
      gap={8}
      colors="#a50036,#1a5f7a,#3b8ba8,#5eb3d6,#a8d8f0"
      direction="top"
    >
      <motion.div
        className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2 pt-10"
        variants={container}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={profileVariant}>
          <Image
            src={assets.profile_img}
            alt="profile"
            className="rounded-full w-32"
          />
        </motion.div>
        <motion.h3 variants={greetingVariant} className="text-2xl ">
          Hi! I'm{" "}
          <span className="text-primary font-semibold font-bricolage tracking-wider">
            Abhishek
          </span>
        </motion.h3>
        <motion.div variants={fancyVariant}>
          <FancyText
            className="text-3xl sm:text-6xl lg:text-[66px] font-bricolage font-black leading-normal text-black/10 dark:text-white/10"
            fillClassName="text-black dark:text-white"
            stagger={0.05}
            duration={0.5}
            delay={0.2}
          >
            frontend Engineer
          </FancyText>
        </motion.div>
        <motion.h1
          variants={headingVariant}
          className="text-3xl sm:text-6xl lg:text-[66px] font-bricolage text-secondary-foreground"
        >
          crafting scalable web experiences
        </motion.h1>
        <motion.p
          variants={paraVariant}
          className="max-w-2xl mx-auto font-bricolage"
        >
          Creating high-performance, accessible web experiences. I love building
          scalable applications and solving complex frontend challenges.
        </motion.p>
        <motion.div variants={btnVariant}>
          <Button size={"lg"} className="rounded-full">
            Some random button
          </Button>
        </motion.div>
      </motion.div>
    </PixelBackground>
  );
};

export default Header;
