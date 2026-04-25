import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Local interface definition na may ibang pangalan para hindi mag-clash
interface TerminalDeviceData {
    os: string;
    cores: number | string;
    ram: string;
    screen: string;
    battery: string;
}

const getEasyOS = () => {
    if (typeof window === 'undefined') return 'Unknown';
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (platform.includes('win')) return 'Windows';
    if (platform.includes('mac')) return 'macOS';
    if (platform.includes('linux')) return 'Linux';
    if (/android/.test(userAgent)) return 'Android';
    if (/iphone|ipad|ipod/.test(userAgent)) return 'iOS';
    return 'Unknown OS';
};

const DeviceSpecsComponent = () => {
    const [specs, setSpecs] = useState<TerminalDeviceData | null>(null);
    const osName = getEasyOS();
    
    useEffect(() => {
        const getSpecs = async () => {
            let batteryLevel = "N/A";
            try {
                const battery = await (navigator as any).getBattery?.();
                if (battery) {
                    batteryLevel = `${Math.round(battery.level * 100)}%`;
                }
            } catch (e) {
                console.error("Battery API not supported");
            }

            setSpecs({
                os: navigator.platform,
                cores: navigator.hardwareConcurrency || "Unknown",
                ram: (navigator as any).deviceMemory ? `${(navigator as any).deviceMemory}GB` : "Unknown",
                screen: `${window.screen.width}x${window.screen.height}`,
                battery: batteryLevel,
            });
        };

        getSpecs();
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col p-4 w-48 lg:w-128 font-mono rounded-lg"
        >
            <p className="text-green-500 mb-2"># System Diagnostics:</p>
            <p> OS: <span className="text-blue-400">{osName}</span></p>
            <p> CPU CORES: <span className="text-blue-400">{specs?.cores}</span></p>
            <p> RAM: <span className="text-blue-400">~{specs?.ram}</span></p>
            <p> RESOLUTION: <span className="text-blue-400">{specs?.screen}</span></p>
            <p> BATTERY: <span className="text-blue-400">{specs?.battery}</span></p>
        </motion.div>
    );
};

export default DeviceSpecsComponent;