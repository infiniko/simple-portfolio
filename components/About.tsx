"use client";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";
import { headingVariant, introVariant } from "@/data/variants";
import AboutWhatIDo from "./about/AboutWhatIDo";
import AboutTerminal from "./about/AboutTerminal";
import { GlassSeparator } from "./glass-separator";
import AboutToolOrbit from "./about/AboutToolOrbit";

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
        className="text-center text-5xl font-bricolage mb-12"
        variants={headingVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        About me
      </motion.h2>
      <div>
        <BentoGrid className="md:grid-cols-4 lg:grid-cols-6">
          <BentoGridItem
            title=""
            description={<AboutTerminal />}
            containerClassName="md:col-span-2 lg:col-span-2 md:row-span-1 lg:row-span-1"
          />
          <BentoGridItem
            title="About"
            description=""
            header={
              <div className="md:mt-1 lg:mt-2 xl:mt-4 px-4 w-full h-full overflow-hidden text-ellipsis lg:text-clip ...">
                <span className="text-primary tracking-wider font-bold">
                  Frontend Developer
                </span>
                <span className="text-balance text-card-content">
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
            title="What I Do"
            header={<AboutWhatIDo />}
            containerClassName="md:col-span-2 lg:col-span-3"
          />
          <BentoGridItem
            title="Currently learning"
            header={
              <ul className="text-card-content lg:m-0 md:px-5 lg:px-0 xl:mt-4">
                <GlassSeparator glassVariant="clear" />
                <li>LLM integration patterns</li>
                <GlassSeparator glassVariant="clear" />
                <li className="line-clamp-3">
                  Evaluating & testing AI-powered applications
                </li>
                <GlassSeparator glassVariant="clear" />
              </ul>
            }
            containerClassName="md:col-span-2 lg:col-span-1"
          />
          <BentoGridItem
            containerClassName=" md:col-span-4 lg:col-span-2"
            title="Tools"
            header={<AboutToolOrbit />}
          />
        </BentoGrid>
      </div>
    </div>
  );
};

export default About;
