import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

const AboutTerminal = () => {
  return (
    <Terminal className="min-h-60">
      <TypingAnimation>npm info@latest init</TypingAnimation>
      <AnimatedSpan>∿ role : Frontend Developer</AnimatedSpan>
      <AnimatedSpan>
        ∿ strengths : Performance · Scalability · A11y
      </AnimatedSpan>
      <AnimatedSpan>∿ core : React · Next.js · TypeScript</AnimatedSpan>
      <AnimatedSpan>∿ experience : 4+ years · CGI · NIT Allahabad</AnimatedSpan>
      <AnimatedSpan>∿ status : open to work ✓</AnimatedSpan>
      <TypingAnimation>
        Success! Project initialization completed.
      </TypingAnimation>
    </Terminal>
  );
};

export default AboutTerminal;
