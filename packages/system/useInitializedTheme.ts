import { useState, useEffect} from 'react';
import { ThemeMode, getInitialTheme, applyTheme } from '@system/theme-helper';

export const useInitializeTheme = () => {
    const [theme, setTheme] = useState<ThemeMode>('light');
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem('theme') as ThemeMode;
        if (saved) setTheme(saved);
    }, []);

    useEffect(() => {
        applyTheme(theme);

        const timeout = setTimeout(() => {
            document.documentElement.classList.add('theme-body');
        }, 100);

        return () => clearInterval(timeout);

    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev: ThemeMode) => (prev === 'light' ? 'light' : 'dark'));
    } 

    return { theme, toggleTheme };
}