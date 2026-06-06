"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";
import { headingVariant, introVariant, paraVariant } from "@/data/variants";
import { MeteorOrbit } from "@/components/ui/meteor-orbit";
import {
  BinaryIcon,
  CalendarStarIcon,
  CodeIcon,
  DevToLogoIcon,
  GraphIcon,
  PackageIcon,
  StackOverflowLogoIcon,
  TerminalWindowIcon,
  TreeStructureIcon,
} from "@phosphor-icons/react";
import { Separator } from "./ui/separator";

const About = () => {
  return (
    <div id="about" className="w-full sm:px-4 lg:px-2 py-10 scroll-mt-20">
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
      </div>
      <div>
        <BentoGrid className="md:grid-cols-4 lg:grid-cols-6">
          <BentoGridItem
            title=""
            description={""}
            containerClassName="md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2"
          />
          <BentoGridItem
            title="About"
            description=""
            header={
              <div className="md:mt-1 lg:mt-2 xl:mt-4 px-4 w-full h-full overflow-hidden text-ellipsis lg:text-clip ...">
                <span className="text-primary tracking-wider font-bold">
                  Frontend Developer
                </span>
                <span className="text-balance">
                  {" "}
                  with 4+ years of experience specializing in React, Next.js,
                  and TypeScript. I've helped reduce load times, streamline
                  developer workflows, and build component libraries that
                  accelerate entire teams. Whether it's architecting state
                  management systems or mentoring peers, I bring both technical
                  depth and a collaborative mindset to every project.
                </span>
              </div>
            }
            containerClassName="md:col-span-2 lg:col-span-4"
          />
          <BentoGridItem
            title="years of experience"
            icon={<CalendarStarIcon size={32} />}
            header={
              <div className="mt-10 text-center text-7xl text-primary font-bricolage font-semibold">
                4+
              </div>
            }
            containerClassName="md:col-span-2 lg:col-span-1"
          />
          <BentoGridItem
            title="Currently learning"
            header={
              <ul className="text-2xs lg:m-0">
                <li>LLM integration patterns</li>
                <Separator />
                <li className="line-clamp-3">
                  Evaluating & testing AI-powered applications
                </li>
                <Separator />
              </ul>
            }
            containerClassName="md:col-span-2 lg:col-span-1"
          />
          <BentoGridItem
            containerClassName=" md:col-span-2"
            title="Skills"
            header={
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute bottom-0 right-0 translate-x-5 translate-y-5">
                    <div className="relative origin-bottom-right scale-100 translate-x-[20%] translate-y-[43%]">
                      <MeteorOrbit
                        meteorSpeed={1}
                        meteorGradients={[
                          ["#c60036", "#eb384d"],
                          ["#14b8a6", "#06b6d4"],
                          ["#a855f7", "#ec4899"],
                          ["#c60036", "#ff6b35"],
                        ]}
                        rippleCount={4}
                        icons={[
                          {
                            icon: (
                              <StackOverflowLogoIcon
                                size={20}
                                weight="duotone"
                              />
                            ),
                            orbitIndex: 1,
                            position: 350,
                          },
                          {
                            icon: <DevToLogoIcon size={20} weight="duotone" />,
                            orbitIndex: 3,
                            position: 300,
                          },
                          {
                            icon: <GraphIcon size={20} weight="duotone" />,
                            orbitIndex: 2,
                            position: 235,
                          },
                          {
                            icon: (
                              <TreeStructureIcon size={20} weight="duotone" />
                            ),
                            orbitIndex: 3,
                            position: 265,
                          },
                          {
                            icon: (
                              <TerminalWindowIcon size={20} weight="duotone" />
                            ),
                            orbitIndex: 1,
                            position: 190,
                          },
                          {
                            icon: <BinaryIcon size={20} weight="duotone" />,
                            orbitIndex: 3,
                            position: 210,
                          },
                          {
                            icon: <PackageIcon size={20} weight="duotone" />,
                            orbitIndex: 1,
                            position: 270,
                          },
                        ]}
                      >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full">
                          <CodeIcon size={20} weight="duotone" />
                        </div>
                      </MeteorOrbit>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </BentoGrid>
      </div>
    </div>
  );
};

export default About;
