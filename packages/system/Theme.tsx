'use client';

import React, { createContext, useContext } from 'react';
import { useInitializeTheme } from './useInitializedTheme';

type ThemeContextType = ReturnType<typeof useInitializeTheme>;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const themeValue = useInitializeTheme();

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) throw new Error('useTheme must be used within ThemeProvider')

    return context;
}