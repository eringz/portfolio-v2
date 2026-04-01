import { createContext, useContext, useState, useLayoutEffect } from 'react';

export type ThemeMode = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeMode;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
      // Checking the saved theme on your user's local storage
      const savedTheme = localStorage.getItem('theme') as ThemeMode;
      if (savedTheme) return savedTheme;

      const hour = new Date().getHours();
      console.log(`Hour: ${hour}`)

      return (hour >= 19 || hour < 6) ? 'dark' : 'light';

  });

  console.log(theme)


  useLayoutEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);

    const timeout = setTimeout(() => {
      root.classList.add('theme-ready')
    }, 100)

    return () => clearInterval(timeout)

  }, [theme]);


  // set toggle switch
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};