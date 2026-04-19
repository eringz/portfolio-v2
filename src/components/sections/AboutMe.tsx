import { motion } from "framer-motion";
import ronPhoto from "@/assets/ron.png";


const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div 
      className="min-h-full bg-[#1a1a1a] text-[#4af626] p-8 font-mono"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Window Bar */}
      <div className="max-w-4xl mx-auto bg-[#252525] rounded-t-lg p-3 flex items-center gap-2 border-b border-[#333]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <span className="text-xs text-gray-400 ml-4">ron_santos / about_me.kt</span>
      </div>

      {/* Main Editor Body */}
      <div className="max-w-4xl mx-auto  rounded-b-lg shadow-2xl p-6 md:p-10 border border-[#333] flex flex-col md:flex-row gap-8">
        
        {/* Profile Image & Quick Info */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#4af626] p-1 overflow-hidden">
             <img 
               src={ronPhoto} 
               alt="Ron" 
               className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold italic">"Build. Test. Fix."</h2>
          </div>
        </div>

        {/* Technical Bio (Code Style) */}
        <div className="flex-grow text-sm md:text-base leading-relaxed">
          <span className="text-purple-400">class</span> <span className="text-yellow-300">RonSantos</span> {"{"}
          <div className="pl-6 mt-2">
            <p>
              <span className="text-blue-400">val</span> role = <span className="text-orange-300">"Computer Engineer / Developer"</span>
            </p>
            <p>
              <span className="text-blue-400">val</span> mission = <span className="text-orange-300">"Building tools that bridge the gap between imagination and utility."</span>
            </p>
            
            <div className="mt-4">
              <span className="text-gray-500">// Technical Stack</span>
              <p>
                <span className="text-blue-400">var</span> skills = [
                  <span className="text-orange-300">"Kotlin"</span>, 
                  <span className="text-orange-300">"Jetpack Compose"</span>, 
                  <span className="text-orange-300">"React"</span>, 
                  <span className="text-orange-300">"SQL"</span>
                ]
              </p>
            </div>

            <div className="mt-4">
              <span className="text-gray-500">// Brief Background</span>
              <p className="text-gray-300 mt-1 max-w-md">
                I'm a solution-oriented developer who enjoys the "Innovation Workbench" workflow. 
                Whether it's automating inventory systems or creating high-performance 
                Android apps, I focus on clean architecture and efficiency.
              </p>
            </div>
          </div>
          <p className={"mt-2"}>{"}"}</p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-2 border border-[#4af626] text-[#4af626] hover:bg-[#4af626] hover:text-black transition-all"
          >
            Download_CV.pdf
          </motion.button>
        </div>

      </div>
    </motion.div>
  );
};

export default AboutMe;