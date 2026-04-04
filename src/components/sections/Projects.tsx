import { motion } from 'framer-motion'
import { getProjects } from '../../core/data/ProjectRepository'

const ProjectBento = () => {
    const projects = getProjects()
    const main = projects[0]

    return (

        //
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 w-full max-w-6xl p-4 h-full">
            
            {/* 🟢 HERO CARD: THE FLAGSHIP */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-2 md:row-span-4 bg-black/40 border border-[#22c55e30] rounded-3xl p-8 flex flex-col justify-between hover:border-[#22c55e60] transition-all relative overflow-hidden group"
            >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-4 opacity-5 font-black text-8xl italic select-none">01</div>
                
                <div>
                    <div className="flex justify-between items-start mb-8">
                        <div className="space-y-1">
                            <p className="text-[10px] font-mono text-[#22c55e] tracking-[0.3em] uppercase">Deployment_Status</p>
                            <h2 className="text-4xl font-black tracking-tighter text-white uppercase">{main.title}</h2>
                        </div>
                        <span className="bg-[#22c55e10] text-[#22c55e] text-[10px] font-mono px-3 py-1 rounded-full border border-[#22c55e30]">
                            {main.version}
                        </span>
                    </div>

                    <div className="flex gap-2 mb-8">
                        {main.tech.map(t => (
                            <span key={t} className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded bg-white/5 uppercase">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* STAR SYSTEM: Interactive Style */}
                <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <p className="text-[9px] font-mono text-[#22c55e] mb-1">01_SITUATION</p>
                        <p className="text-xs text-gray-400 leading-relaxed italic">"{main.star?.s}"</p>
                    </div>
                    <div className="bg-[#22c55e05] p-4 rounded-2xl border border-[#22c55e20]">
                        <p className="text-[9px] font-mono text-[#22c55e] mb-1">02_CORE_RESULT</p>
                        <p className="text-sm font-bold text-gray-200">{main.star?.r}</p>
                    </div>
                </div>
            </motion.div>

            {/* 🟡 TECH STACK METRIC (The Engineer's Side) */}
            <div className="md:col-span-2 md:row-span-2 bg-black/20 border border-white/5 rounded-3xl p-6 flex flex-col justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e05] to-transparent pointer-events-none" />
                <p className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Architecture_Pattern</p>
                <h4 className="text-3xl font-black text-white">{main.architecture}</h4>
                <p className="text-xs text-gray-500 mt-2 font-light">
                    Clean separation of <span className="text-[#22c55e]">Domain</span>, Data, and Presentation layers. 
                    Scalable and unit-test ready.
                </p>
            </div>

            {/* 🟢 SMALL METRIC CARDS */}
            <div className="md:col-span-1 md:row-span-2 bg-[#22c55e] rounded-3xl p-6 flex flex-col justify-between text-black">
                <div className="font-mono text-[10px] font-bold uppercase tracking-tighter opacity-70">Project_Focus</div>
                <div className="text-2xl font-black leading-tight">AUTOMATION & OPTIMIZATION</div>
                <div className="text-[20px]">⚡</div>
            </div>

            <div className="md:col-span-1 md:row-span-2 bg-black/60 border border-[#22c55e30] rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#22c55e10] transition-all cursor-pointer">
                <div className="text-[10px] font-mono text-[#22c55e] mb-4 tracking-widest uppercase">Source_Control</div>
                <div className="w-12 h-12 rounded-full border border-[#22c55e30] flex items-center justify-center mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </div>
                <p className="text-[10px] font-mono text-gray-400">GITHUB_REPO</p>
            </div>

        </div>
    )
}

export default ProjectBento