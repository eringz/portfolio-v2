import { useTypewriter } from "../hooks/useTypewriter";
import { motion } from 'framer-motion';

interface Props {
    text: string;
    delay: number;
    className?: string;
}

export const TerminalTextElement = ({ text, delay, className } : Props) => {
    const displayText = useTypewriter(text, delay);

    return (
        <motion.span className={`${className} text-glow`}>
            {displayText}
        </motion.span>
    )
}