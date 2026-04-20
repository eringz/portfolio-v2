import { motion } from 'framer-motion';
import { useGithubStats } from '../hooks/use-github-stats';
import type { Week, ContributionDay } from '../types';
import "@/features/terminal/assets/terminal.css";
import { useTheme } from "@/contexts/ThemeContext";

const containerVariants = {
    hidden: { opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 5
        }
    }
};

const itemVariants = {
    hidden: { scale: 0, opacity: 0},
    show: { scale: 1, opacity: 1, transition: {duration: 3} }
};

const getLevelColor = (count: number) => {
  if (count === 0) return 'bg-[#787d81]'; // Empty
  if (count <= 2)  return 'bg-[#9BE9A8]'; // Low
  if (count <= 5)  return 'bg-[#40C463]'; // Medium
  if (count <= 9)  return 'bg-[#30A14E]'; // High
  return 'bg-[#216E39]'; // Very High
};

const GithubStats = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const { stats, loading, error } = useGithubStats();

    return (
        <motion.div
            initial={{ y: 5, opacity: 0, filter: "blur(10px)" }} 
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={`p-6 w-full h-64 rounded-2xl shadow-2xl ${isDark ? 'dark-terminal-window' : 'terminal-window'} rounded-lg text-xs lg:text-xl`}
        >
            <div className="mb-4">
                <h2>Github Activity</h2>
                {loading && <p>Loading Contributions...</p>}
                {error || !stats && <p>{error || "No data"}</p>}
            </div>
            <p className="mb-4 text-xs lg:text-sm">
                <span className="font-extrabold">
                    {stats?.totalContributions} 
                    <span className="font-normal"> contibutions in the last year</span>    
                </span>
            </p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className={`grid grid-flow-col gap-1 p-4 overflow-x-auto ${isDark ? 'bg-white/50' : 'bg-green-900/40'} rounded-lg`}
            >
                {stats?.weeks.slice(12).map((week: Week, wIndex: number) => (
                    <div
                        key={wIndex}
                        className="flex flex-col gap-1"
                    >
                        {week.contributionDays.map((day: ContributionDay, dIndex: number) => (
                            <motion.div
                                key={dIndex}
                                variants={itemVariants}
                                title={`${day.date}: ${day.contributionCount} contributions `}
                                className={`w-2.5 h-2.5 rounded-xs ${getLevelColor(day.contributionCount)}`}
                                // style={{ backgroundColor: day.contributionCount > 0 ? day.color : '#787d81' }}
                            >
                            </motion.div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default GithubStats;