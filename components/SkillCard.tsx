import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

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
    <Card className="hover:shadow-sm hover:bg-card-highlight hover:-translate-y-1 duration-500">
      <CardHeader>
        <CardTitle className="font-bricolage text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>{children}</div>
        <div className="flex gap-2 py-2 flex-wrap justify-start px-2 mt-2 min-h-24">
          {entries.map((entry) => (
            <Badge variant="outline" className="px-4" key={entry}>
              {entry}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
