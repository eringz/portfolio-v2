import { useState, useLayoutEffect } from 'react';
import { ThemeMode, getInitialTheme, applyTheme } from '@system/theme';

export const useThemeLogic = () => {
    const [theme, setTheme] = useState<ThemeMode>('light');

    useLayoutEffect(() => {
        const initial = getInitialTheme();
        setTheme(initial);
        applyTheme(initial);
    }, []);

    useLayoutEffect(() => {
        applyTheme(theme);

        const timeout = setTimeout(() => {
            document.documentElement.classList.add('theme-body');
        }, 100);

        return () => clearInterval(timeout);

    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'light' : 'dark'));
    } 

    return { theme, toggleTheme };
}