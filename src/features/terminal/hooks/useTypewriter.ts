import { useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export const useTypewriter = ( text: string, delay: number, speed: number = 0.6) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: text.length * speed,
            delay: delay,
            ease: "linear",
        });

        return controls.stop;
    }, [text, delay, speed, count])

    return displayText;
}

