"use client";
import { skillSet } from "@/data";
import SkillCard from "./SkillCard";
import { motion, Variants } from "framer-motion";
import { headingVariant, introVariant, paraVariant } from "@/data/variants";

const cardContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Skills = () => {
  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        variants={introVariant}
        className="text-center mb-2 text-lg font-bricolage"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        Stack. Scale. Solve.
      </motion.h4>
      <motion.h2
        variants={headingVariant}
        className="text-center text-5xl font-bricolage"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        Skills
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-bricolage"
        variants={paraVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        A perfect blend of frontend,backend, cloud, data, and architecture
        skills
      </motion.p>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skillSet.map(({ id, title, entries, icon: Icon, color }) => {
          return (
            <motion.div key={id} variants={cardVariant}>
              <SkillCard title={title} entries={entries} key={id}>
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}22`,
                  }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon size={24} weight="duotone" style={{ color }} />
                </motion.div>
              </SkillCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
