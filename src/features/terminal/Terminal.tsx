import "./assets/terminal.css";
import { terminalLines, terminalSettings } from './data/terminalConfig';
import { TerminalRevealElement } from './components/TerminalReveal';
import { motion } from 'framer-motion';
import ronPhoto from "@/assets/ron.png";
import { useTheme } from "@/contexts/ThemeContext";
import TerminalContent  from '@/features/terminal/components/TerminalContent';


const Terminal = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`p-6 w-full ${isDark ? 'dark-terminal-window' : 'terminal-window'} terminal-flicker border border-green-900/40 rounded-lg font-mono text-sm shadow-lg transition duration-1000`}>
            {/** HEADER */}
            <div className="flex justify-center items-center gap-2 p-4 mb-2 border-b border-green-900/20">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/50" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <span className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
            </div>

            <div className="flex justify-between">
                <div className="space-y-3">
                    {terminalLines.map((line, index) => (
                        <div
                            key={index}
                            className="flex flex-wrap items-center gap-x-2"
                        >
                            {/* <span>
                                {line.type === "command" ? "λ" : ">"} {line.label}
                            </span> */}
                            <TerminalRevealElement 
                                text={line.value}
                                delay={terminalSettings.lineStagger * index}
                            />
                            {/* <TerminalContent 
                                text="Ronasfjsdjfs;kjfsdkfj"
                                delay={1}
                            /> */}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <img 
                        src={ronPhoto}
                        alt="ron"
                        className="w-40 h-40 rounded-full border"
                    />
                </div>
 
            </div>
        </div>
    )
};

export default Terminal