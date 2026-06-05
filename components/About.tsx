"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";
import { headingVariant, introVariant, paraVariant } from "@/data/variants";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        className="text-center mb-2 text-lg font-bricolage"
        variants={introVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-bricolage"
        variants={headingVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        About me
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-15">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="img"
            className="w-full rounded-3xl "
          />
        </div>
        <div className="flex-1">
          <motion.p
            className="mb-10 max-w-2xl font-bricolage"
            variants={paraVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            Frontend Developer with 4+ years of experience specializing in
            React, Next.js, and TypeScript. I've helped reduce load times,
            streamline developer workflows, and build component libraries that
            accelerate entire teams. Whether it's architecting state management
            systems or mentoring peers, I bring both technical depth and a
            collaborative mindset to every project.
          </motion.p>

          <div className="grid grid-cols-1 max-w-2xl">
            <BentoGrid>
              <BentoGridItem
                title="The Power of Collaboration"
                description={""}
                containerClassName="md:col-span-1"
              />
              <BentoGridItem
                title="Smart Automation"
                description="dada"
                containerClassName="md:col-span-1"
              />
              <BentoGridItem
                title="The Power of Collaboration"
                description="Enable real-time collaboration with your team."
                containerClassName="md:col-span-1"
              />
            </BentoGrid>
          </div>
        </div>
      </div>
      <div className="">
        <BentoGrid className="md:grid-cols-6">
          <BentoGridItem
            title="The Power of Collaboration"
            description={""}
            containerClassName="md:col-span-2 md:row-span-2"
          />
          <BentoGridItem
            title=""
            description=""
            header={
              <div className="py-10 px-4 w-full h-fit bg-amber-300">
                <span className="text-primary tracking-wider font-bold">
                  Frontend Developer
                </span>{" "}
                with 4+ years of experience specializing in React, Next.js, and
                TypeScript. I've helped reduce load times, streamline developer
                workflows, and build component libraries that accelerate entire
                teams. Whether it's architecting state management systems or
                mentoring peers, I bring both technical depth and a
                collaborative mindset to every project.
              </div>
            }
            containerClassName="md:col-span-4"
          />
          <BentoGridItem
            title="The Power of Collaboration"
            description="Enable real-time collaboration with your team."
            containerClassName="md:col-span-1"
          />
          <BentoGridItem
            title="The Power of Collaboration"
            description="Enable real-time collaboration with your team."
            containerClassName="md:col-span-1"
          />
          <BentoGridItem
            title="The Power of Collaboration"
            description="Enable real-time collaboration with your team."
            containerClassName="md:col-span-2"
          />
        </BentoGrid>
      </div>
    </div>
  );
};

export default About;
