"use client";
import { headingVariant, introVariant } from "@/data/variants";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        variants={introVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-2 text-lg font-bricolage text-card-content"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        variants={headingVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center text-5xl font-bricolage mb-12"
      >
        Contract
      </motion.h2>

      <ContactForm />
    </div>
  );
};

export default Contact;
