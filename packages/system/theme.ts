export type ThemeMode = 'light' | 'dark';

export const getInitialTheme = (): ThemeMode => {
    if (typeof  window === 'undefined') return 'light';

    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) return savedTheme;

    const hour = new Date().getHours();
    return (hour > 19 || hour < 6) ? 'dark' : 'light';
}


export const applyTheme = (theme: ThemeMode) => {
    if (typeof window === 'undefined') return;
    
    const root = window.document.documentElement;
    if (theme == 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
}