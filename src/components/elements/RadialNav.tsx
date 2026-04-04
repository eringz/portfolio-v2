import {useNavigate, useLocation } from 'react-router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

// ICON IMPORTS
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { IoIosPerson } from 'react-icons/io';
import { GrProjects } from 'react-icons/gr';
import { IoMail } from 'react-icons/io5'


const RadialNav = () => {
    const navigate = useNavigate();
    const location = useLocation(); 

    const [isDisplay, setIsDisplay] = useState(false)

    const menuItems = [
        {label: 'HOME', path:'/', icon: <HiOutlineHomeModern /> },
        {label: 'ABOUT', path: '/about', icon: <IoIosPerson /> },
        {label: 'PROJECTS', path: '/projects', icon: <GrProjects /> },
        {label: 'MAIL ME', path: '/contact', icon: <IoMail /> }
    ];

    const activeItem = menuItems.find(item => item.path === location.pathname) || menuItems[0]

    const filteredItems = menuItems.filter(item => item.path !== location.pathname)

    return (
        <div
            onMouseEnter={() => setIsDisplay(true) }
            onMouseLeave={() => setIsDisplay(false)}
            className="relative flex justify-center items-center w-40 h-40"
        >
            <motion.div
                animate={{boxShadow: isDisplay ? "0 0 30px rgba(34, 197, 94, 0.6)" : "0 0 15px rgba(34, 197, 94, 0.2)"}}
                className="flex justify-center items-center z-50 w-20 h-20 rounded-full "
            >
                {/** ACTIVE MENU ITEM */}
                <span className="text-4xl tracking-tighter group-hover:scale-110 transition-transform">{activeItem.icon}</span>
            </motion.div>


            <AnimatePresence>
                {isDisplay && filteredItems.map((item, index) => {
                    // ANGLE CALCULATION 
                    const startAngle = -160;
                    const endAngle = -20;
                    const totalSatellites = filteredItems.length;

                    const angle = totalSatellites > 1 ? startAngle + (index * (endAngle - startAngle) / (totalSatellites - 1)) : (startAngle + endAngle) / 2
                    
                    const radius = 115;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                        <motion.button
                            key={item.label}
                            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                            animate ={{x, y, scale: 1, opacity: 1}}
                            exit={{ x: 0, y: 0, scale: 0, opacity: 0}}
                            whileHover={{ scale: 1.2, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                            onClick={() => {
                                navigate(item.path)
                                setIsDisplay(false)
                            }}
                            className="absolute flex flex-col justify-center items-center  z-40 w-20 h-20 border border-[#22C55E30]  rounded-full backdrop-blur-sm shadow-xl"
                        >
                            <span className="text-sm">{item.icon}</span>
                            <span className="text-[8px]">{item.label}</span>
                        </motion.button>
                        )
                    })
                }
            </AnimatePresence>
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear"}}
                className="absolute w-24 h-24 border border-[#2C55E10] rounded-full border-dashed bg-radial-[at_25%_25%] from-[#E0055] to-[#25E10] to_60%"
            />
        </div>
    )
}

export default RadialNav