import { FaRegWindowMinimize } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import ronPhoto from "../../../assets/ron.png";
import TerminalContent from '../../elements/TerminalElements/TerminalContents'

const Terminal = () => {
    

    return (
        <div
            className={`w-180 h-84 border-3 border-[#434444] bg-black rounded-lg text-white/70`}
        >
            {/** HEADER */}
            <div className={`w-full h-1 bg-[#434444]`}></div>
            <div className="flex">
                <div className="w-8 h-8 bg-[#434444] rounded-br-lg"></div>
                <div className="flex items-center gap-2 px-4 py-2 w-64 h-8 bg-black rounded-tr-lg">
                    <div className="flex justify-center items-center bg-white/40 w-4 h-4 rounded-full">
                        <img 
                            src={ronPhoto}
                            alt="Ron picture"
                        />
                    </div>
                    <span className="text-white">Daily Routine</span>
                </div>
                <div className="flex justify-end px-4 py-1 gap-8 w-full h-8 bg-[#434444] rounded-bl-lg">
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
                <TerminalContent />
            </div>
        </div>
    )
}

export default Terminal