import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAndroid } from "react-icons/fa";
import { SiKotlin, SiReact, SiFirebase } from "react-icons/si";
import { SiJetpackcompose } from "react-icons/si";



const AndroidSimulator = () => {
    const [index, setIndex] = useState(0);
    const icons = [
        { id: 1, label: 'KOTLIN', color: "indigo", component: <SiKotlin className="text-purple-500 text-3xl" /> },
        { id: 2, label: 'ANDROID', color: "#317249", component: <FaAndroid className="text-green-500 text-3xl" /> },
        { id: 2, label: 'JETPACK COMPOSE', color: "#317249", component: <SiJetpackcompose   className="text-green-500 text-3xl" /> },
        { id: 3, label: 'REACT', color: "#5ED3F3", component: <SiReact className="text-blue-400 text-3xl" /> },
        { id: 4, label: "FIREBASE", color: "white", component: <SiFirebase className="text-yellow-500 text-3xl" /> },
    ];
    
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % icons.length)
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    return (
        
        <div className="w-[300px] h-[600px] border-[8px] border-black/30 rounded-[36px] shadow-2xl shadow-blue-green blur-2xs">
            <div 
                className="flex flex-col p-1 h-full rounded-[36px] -inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/50            via-transparent to-transparent opacity-75"
            >
                    {/** TOP  */}
                <div className="flex justify-center items-center h-6 w-full p-2">
                    <div className="flex justify-center items-center w-4 h-4  bg-black border border-gray-800 rounded-full" > 
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-900 animate-pulse"></div>
                    </div>
                </div>

                    {/** CONTENT */}
                <div className="flex flex-1 flex-col gap-4 justify-center items-center">
                    {/** ICON */}
                    <div className="relative flex justify-center items-center w-24 h-24">
                        <svg 
                            viewBox="0 0 100 100"
                            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                        >
                            <motion.circle 
                                cx="50"
                                cy="50"
                                r="45"
                                stroke={icons[index].color}
                                strokeWidth="1"
                                fill="transparent"
                                strokeDasharray="0 0"
                                key={index}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ y: 10, opacity: 0, scale: 0.5, rotate: -20 }}
                                animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ y: -10, opacity: 0, scale: 0.5, rotate: 20 }}
                                transition={{ duration: 0.5 }}
                                className=""
                            >
                                {icons[index].component}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                    {/** LABEL */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex"
                        >
                            {icons[index].label.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                staggerChildren: 3
                                            }
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -10,
                                            transition: { duration: 0.7 }
                                        }
                                    }}
                                    className="text-xs text-white/70 font-bold tracking-widest "
                                >
                                   {char === " " ? "\u00A0" : char } 
                                </motion.span>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                    {/** Bottom */}
                <div className="flex justify-center">
                    <div className="w-20 h-1 bg-white/10 rounded" />
                </div>
            </div>
        </div>
    
        
    )
}

export default AndroidSimulator