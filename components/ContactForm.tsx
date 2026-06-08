"use client";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { GlassCard } from "./glass-card";
import { CardContent } from "./ui/card";
import { GlassButton } from "./glass-button";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  fieldVariant,
  formContainer,
  formSubmitVariant,
} from "@/data/variants";
import { toast } from "sonner";

export function ContactForm() {
  const onSubmit = async (event: any) => {
    event.preventDefault();
    toast("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY as string);
    const response = await fetch(process.env.NEXT_PUBLIC_FORM_URL as string, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      toast("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast(data.message);
    }
  };
  return (
    <GlassCard glassVariant="subtle" className="w-10/12">
      <CardContent className="flex justify-center w-full">
        <motion.form
          className="w-full max-w-full md:max-w-8/12 py-4 md:py-8"
          onSubmit={onSubmit}
          variants={formContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <FieldGroup>
            <motion.div
              variants={fieldVariant}
              className="grid sm:grid-cols-2 gap-3 md:gap-6"
            >
              <Field>
                <FieldLabel htmlFor="form-name" className="px-3">
                  Name
                </FieldLabel>
                <Input
                  className="flex-1 p-3"
                  id="form-name"
                  type="text"
                  placeholder="Enter your name."
                  required
                  name="name"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-email" className="px-3">
                  Email
                </FieldLabel>
                <Input
                  className="flex-1 p-3"
                  id="form-email"
                  type="email"
                  placeholder="Enter your email."
                  name="email"
                />
              </Field>
            </motion.div>
            <motion.div variants={fieldVariant}>
              <Field>
                <FieldLabel htmlFor="textarea-message" className="px-3">
                  Message
                </FieldLabel>
                <Textarea
                  id="textarea-message"
                  placeholder="Type your message here."
                  className="w-full min-h-24"
                  name="message"
                />
              </Field>
            </motion.div>
            <motion.div variants={formSubmitVariant}>
              <Field orientation="horizontal">
                <GlassButton
                  glassVariant="liquid"
                  type="submit"
                  className="rounded-full flex gap-2 group/submit hover:scale-110"
                >
                  Submit
                  <ArrowRightIcon
                    size={32}
                    weight="bold"
                    className="group-hover/submit:translate-x-1 duration-500"
                  />
                </GlassButton>
              </Field>
            </motion.div>
          </FieldGroup>
        </motion.form>
      </CardContent>
    </GlassCard>
  );
}
