import "./assets/terminal.css";

import DeviceSpecs from './device/DeviceSpecs';
import ronPhoto from "@/assets/ron.png";
import { useTheme } from "@/contexts/ThemeContext";



const Terminal = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`p-6 mt-120 lg:mt-0 w-full text-xs lg:text-lg ${isDark ? 'dark-terminal-window' : 'terminal-window'}  rounded-lg font-mono text-sm shadow-lg transition duration-1000`}>
            {/** HEADER */}
            <div className="flex justify-center items-center gap-2 p-4 mb-2 border-b border-green-900/20">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/50" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <span className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="space-y-3">
                    <DeviceSpecs />
                    {/* {terminalLines.map((line, index) => (
                        <div
                            key={index}
                            className="flex flex-wrap items-center gap-x-2"
                        >
                            
                            <span>
                                {line.type === "command" ? "λ" : ">"} {line.label}
                            </span>
                            <TerminalRevealElement 
                                text={line.value}
                                delay={terminalSettings.lineStagger * index}
                            />
                            <TerminalContent 
                                text="Ronasfjsdjfs;kjfsdkfj"
                                delay={1}
                            />
                        </div>
                    ))} */}
                </div>
                <div className="w-full">
                    <img 
                        src={ronPhoto}
                        alt="ron"
                        className="w-12 h-12 lg:w-40 lg:h-40  rounded-full border"
                    />
                </div>
 
            </div>
        </div>
    )
};

export default Terminal