import { motion } from 'framer-motion';

const terminalData = [
  { label: "current_role", value: '"Full Stack Developer (Mobile/Web)"' },
  { label: "active_project", value: '"Fixed Asset Inventory v1.0"' },
  { label: "location", value: '"Makati City, PH"' },
  { label: "availability", value: '"Open for Collaboration"' },
];

const TerminalContent = () => {
    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    const linearVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-4 font-mono text-sm md:text-base leading-relaxed"
        >
            <p className="text-gray-500 mb-2    ">C:\Programmer\Ron&gt; run status.exe</p>

            {terminalData.map((item, index) => (
                <motion.div
                    key={index}
                    variants={linearVariants}
                    className="flex gap-2"
                >
                    <span className="font-bold">&gt; {item.label}</span>
                    <span className="">{item.value}</span>
                </motion.div>
            ))}

            {/** Animation Cursor */}
            <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 bg-green-500 mt-2"
            />
        </motion.div>
    )
}

export default TerminalContent