import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassCard } from "./glass-card";
import { GlassBadge } from "./glass-badge";

const SkillCard = ({
  title,
  children,
  entries,
}: {
  title: string;
  children: React.ReactNode;
  entries: string[];
}) => {
  return (
    <GlassCard
      glassVariant="frosted"
      className="hover:shadow-sm hover:bg-card-highlight hover:-translate-y-1 duration-500"
    >
      <CardHeader>
        <CardTitle className="font-bricolage text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>{children}</div>
        <div className="flex gap-x-2 flex-wrap mt-2 min-h-20 align-bottom">
          {entries.map((entry) => (
            <GlassBadge
              glassVariant="subtle"
              className="px-4 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1"
              key={entry}
            >
              {entry}
            </GlassBadge>
          ))}
        </div>
      </CardContent>
    </GlassCard>
  );
};

export default SkillCard;
