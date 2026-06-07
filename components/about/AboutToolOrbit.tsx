import { MeteorOrbit } from "@/components/ui/meteor-orbit";
import {
  BinaryIcon,
  CodeIcon,
  DevToLogoIcon,
  GraphIcon,
  PackageIcon,
  StackOverflowLogoIcon,
  TerminalWindowIcon,
  TreeStructureIcon,
} from "@phosphor-icons/react";

const orbitIcons = [
  {
    icon: <StackOverflowLogoIcon size={20} weight="duotone" />,
    orbitIndex: 1,
    position: 350,
  },
  {
    icon: <DevToLogoIcon size={20} weight="duotone" />,
    orbitIndex: 3,
    position: 300,
  },
  {
    icon: <GraphIcon size={20} weight="duotone" />,
    orbitIndex: 2,
    position: 235,
  },
  {
    icon: <TreeStructureIcon size={20} weight="duotone" />,
    orbitIndex: 3,
    position: 265,
  },
  {
    icon: <TerminalWindowIcon size={20} weight="duotone" />,
    orbitIndex: 1,
    position: 190,
  },
  {
    icon: <BinaryIcon size={20} weight="duotone" />,
    orbitIndex: 3,
    position: 210,
  },
  {
    icon: <PackageIcon size={20} weight="duotone" />,
    orbitIndex: 1,
    position: 270,
  },
];

const AboutToolOrbit = () => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute bottom-0 right-0 translate-x-5 translate-y-5">
          <div className="relative origin-bottom-right scale-100 translate-x-[20%] translate-y-[43%]">
            <MeteorOrbit
              meteorSpeed={1}
              meteorGradients={[
                ["#c60036", "#eb384d"],
                ["#14b8a6", "#06b6d4"],
                ["#a855f7", "#ec4899"],
                ["#c60036", "#ff6b35"],
              ]}
              rippleCount={4}
              icons={orbitIcons}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full">
                <CodeIcon size={20} weight="duotone" />
              </div>
            </MeteorOrbit>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutToolOrbit;
