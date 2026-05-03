export type ThemeMode = 'light' | 'dark';

export const getInitialTheme = (): ThemeMode => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;

    if (savedTheme) return savedTheme;

    const hour = new Date().getHours();

    return (hour > 19) ? 'dark' : 'light';
}


export const setTheme = (theme: ThemeMode) => {
    const root = window.document.documentElement;

    console.log(root);

    return root;
}