import { motion } from "framer-motion";

const SocialButtons = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="mb-4 flex h-12 w-12 items-center justify-center border border-primary text-primary rounded-full hover:text-primary-foreground hover:bg-[#007E87] hover:border-[#007E87]"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.15,
        rotate: [0, -8, 8, -5, 5, 0],
        transition: {
          rotate: { duration: 0.5, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 500, damping: 10 },
        },
      }}
      whileTap={{ scale: 0.88, rotate: -15 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 12,
        delay: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SocialButtons;
