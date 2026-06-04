import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { GlassCard } from "./glass-card";

const InfoCard = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <GlassCard
      glassVariant="frosted"
      className="cursor-pointer hover:bg-card-highlight hover:-translate-y-2 duration-500 hover:shadow-2xl hover:shadow-card-shadow-hov"
    >
      <CardContent>{children}</CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </GlassCard>
  );
};

export default InfoCard;
