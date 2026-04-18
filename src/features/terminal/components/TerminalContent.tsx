import { useTypewriter } from "../hooks/useTypewriter";
import { motion } from 'framer-motion';

interface Props {
    text: string;
    delay: number;
    className?: string;
}

const TerminalContent = ({ text, delay, className } : Props) => {
    const displayText = useTypewriter(text, delay);

    return (
        <motion.span className={`${className} text-glow`}>
            {displayText}
        </motion.span>
    )
}

export default TerminalContent;