"use client";
import { workData } from "@/data";
import { GlassCard, GlassCardFooter } from "./glass-card";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { GlassButton } from "./glass-button";
import { ArrowSquareUpRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { headingVariant, introVariant, paraVariant } from "@/data/variants";
import { StripedPattern } from "./magicui/striped-pattern";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative w-full px-[12%] py-10 scroll-mt-20 overflow-hidden"
    >
      <StripedPattern className="-z-20 opacity-40 dark:opacity-20 text-[#00ABAD]" />
      <motion.h4
        variants={introVariant}
        className="text-center mb-2 text-lg font-bricolage text-card-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        work on
      </motion.h4>
      <motion.h2
        variants={headingVariant}
        className="text-center text-5xl font-bricolage"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        Projects
      </motion.h2>
      <motion.p
        variants={paraVariant}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-bricolage"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        Explore a collection of projects
      </motion.p>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 my-10">
        {workData.map((project, index) => {
          return (
            <article key={index} className="group relative">
              <GlassCard
                glassVariant="clear"
                className="transform group-hover:shadow-xl transition-shadow duration-500"
              >
                <CardContent className="">
                  <div className="relative w-full aspect-video overflow-hidden  rounded-lg">
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      unoptimized
                      priority
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardContent className="text-muted-foreground"></CardContent>
                </CardHeader>
                <GlassCardFooter className="flex gap-2">
                  <GlassButton
                    glassVariant="liquid"
                    className="rounded-full hover:scale-105 transition-transform duration-500 group/open"
                  >
                    Source{" "}
                    <ArrowSquareUpRightIcon
                      size={24}
                      weight="bold"
                      className="group-hover/open:translate-x-0.5 transition-transform duration-500"
                    />
                  </GlassButton>
                  <GlassButton
                    glassVariant="liquid"
                    className="rounded-full hover:scale-105 transition-transform duration-500 group/open"
                  >
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1"
                    >
                      Open{" "}
                      <ArrowSquareUpRightIcon
                        size={24}
                        weight="bold"
                        className="group-hover/open:translate-x-0.5 transition-transform duration-500"
                      />
                    </Link>
                  </GlassButton>
                </GlassCardFooter>
              </GlassCard>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
