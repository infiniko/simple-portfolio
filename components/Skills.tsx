"use client";
import { skillSet } from "@/data";
import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-bricolage">
        A perfect blend of frontend,backend, cloud, data, and architecture
        skills
      </h4>
      <h2 className="text-center text-5xl font-bricolage">Skills</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-bricolage">
        A perfect blend of frontend,backend, cloud, data, and architecture
        skills
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {skillSet.map(({ id, title, entries, icon: Icon, color }) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
