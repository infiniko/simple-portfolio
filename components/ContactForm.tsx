"use client";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { GlassCard } from "./glass-card";
import { CardContent } from "./ui/card";
import { GlassButton } from "./glass-button";

export function ContactForm() {
  const [result, setResult] = useState("");
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY as string);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <GlassCard glassVariant="subtle" className="w-10/12">
      <CardContent className="flex justify-center w-full">
        <form className="w-full max-w-8/12 py-8" onSubmit={onSubmit}>
          <FieldGroup>
            <div className="grid sm:grid-cols-2 gap-6">
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
            </div>
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
            <Field orientation="horizontal">
              <GlassButton glassVariant="liquid" type="submit">
                Submit
              </GlassButton>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </GlassCard>
  );
}
