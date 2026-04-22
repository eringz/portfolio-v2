import { useState, useEffect } from 'react';
import type { IDeviceSpecs  } from '../types/index.ts';
import { motion } from 'framer-motion';

const getEasyOS = () => {
  const platform = navigator.platform.toLowerCase();
  if (platform.includes('win')) return 'Windows';
  if (platform.includes('mac')) return 'macOS';
  if (platform.includes('linux')) return 'Linux';
  if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
  if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) return 'iOS';
  return 'Unknown OS';
};

const DeviceSpecs = () => {
    const [specs, setSpecs] = useState<IDeviceSpecs | null>(null);
    const osName = getEasyOS();
    
    useEffect(() => {

        const getSpecs = async () => {
            const battery = await (navigator as any).getBattery?.();
      
            setSpecs({
                os: navigator.platform,
                cores: navigator.hardwareConcurrency || "Unknown",
                ram: (navigation as any).deviceMemory ? `${(navigation as any).deviceMemory}GB` : "Unknown",
                screen: `${window.screen.width}x${window.screen.height}`,
                battery: battery ? `${Math.round(battery.level * 100)}%` : "N/A",
            });
        };

        console.log(navigator);

        getSpecs();

    }, []);


    return (
        <motion.div 
            className="flex flex-col p-4 w-48 lg:w-128 font-mono rounded-lg"
        >
            <p> Your system Specs...</p>
            {/* <p> OS: {specs?.os}</p> */}
            <p> OS: {osName}</p>
            <p> CPU CORES: {specs?.cores}</p>
            <p> RAM: ~{specs?.ram}</p>
            <p> RESOLUTION: {specs?.screen}</p>
            <p> BATTERY: {specs?.battery}</p>
        </motion.div>
    )
}

export default DeviceSpecs;