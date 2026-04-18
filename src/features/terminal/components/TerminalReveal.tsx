// features/Terminal/components/TerminalRevealElement.tsx
import { motion } from "framer-motion";

interface Props {
  text: string;
  delay: number; // Para sunod-sunod pa rin silang mag-reveal
}

export const TerminalRevealElement = ({ text, delay }: Props) => {
  return (
    <div className="relative inline-block">
      <motion.span 
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ 
          duration: 2, // Binabaan ko ng konti para hindi masyadong mabagal
          delay: delay, 
          ease: "easeInOut" 
        }}
        className="block whitespace-nowrap overflow-hidden text-glow"
      >
        {text}
      </motion.span>
    </div>
  );
};