import { FaRegWindowMinimize } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import ronPhoto from "../../../assets/ron.png";


const Terminal = () => {
    

    return (
        <div
            className={`w-180 h-84 bg-black border-3 border-[#434444] rounded-lg text-white/70`}
        >
            {/** HEADER */}
            <div className={`w-full h-1 bg-[#434444]`}></div>
            <div className="flex">
                <div className="w-8 h-8 bg-[#434444]"></div>
                <div className="flex items-center gap-2 px-4 py-2 w-64 h-8 bg-black rounded-full">
                    <div className="flex justify-center items-center bg-white/40 w-4 h-4 rounded-full">
                        <img 
                            src={ronPhoto}
                            alt="Ron picture"
                        />
                    </div>
                    <span className="text-white">Daily Routine</span>
                </div>
                <div className="flex justify-end px-4 py-1 gap-8 w-full h-8 bg-[#434444]">
                    <span className="">
                        <FaRegWindowMinimize />
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