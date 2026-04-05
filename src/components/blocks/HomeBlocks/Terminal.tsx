import { FaRegWindowMinimize } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa6";
import { MdClose } from "react-icons/md";


const Terminal = () => {
    const gray = "#434444"
    return (
        <div
            className={`w-200 h-120 bg-black border-3 border-[#434444] rounded-lg text-white/70`}
        >
            {/** HEADER */}
            <div className={`w-full h-1 bg-[#434444]`}></div>
            <div className="flex">
                <div className="w-8 h-8 bg-[#434444]"></div>
                <div className="flex items-center gap-2 px-4 py-2 w-64 h-8 bg-black rounded-full">
                    <div className="bg-white/40 h-full w-4 h-4 rounded-full"></div>
                    <span className="text-white">Daily Routine</span>
                </div>
                <div className="flex justify-end px-4 py-1 gap-8 w-full h-8 bg-[#434444]">
                    <span className="">
                        <FaRegWindowMinimize />
                        <span></span>
                    </span>
                    <span>
                        <FaRegSquare />
                    </span>
                    <span >
                        <MdClose />
                    </span>
                    
                </div>
            </div>
            {/** CONTENT */}
            <div className="p-2">
                <span>C:\Programmer\Ron{'>'}</span>
            </div>
        </div>
    )
}

export default Terminal