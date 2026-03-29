import { useTheme } from '../../contexts/ThemeContext'
import { HiOutlineHomeModern } from "react-icons/hi2";


const CircleButton = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark'
    return (
        <button 
            title="Home"
            onClick={() => alert("Home")}
            className="bg-radial-[at_25%_25%] from-[#E1EDE5]  to-[#254D33] to-65% px-10 w-20 h-20 mb-4 self-end flex justify-center items-center rounded-full  shadow-md shadow-green-900 [clip-path:polygon(0_100%,100%_0,85%_100,15%_100%)]"
        >
            <div className="flex flex-col items-center leading-none ">
                <HiOutlineHomeModern size={60} stroke={isDark ? '#002200' : '#002200'} className="transition-colors duration-1000"/>
            </div>
        </button>
    )
}

export default CircleButton

