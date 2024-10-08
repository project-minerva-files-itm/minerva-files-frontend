import React, { useState, ReactNode, useEffect } from 'react';
import { DarkContext } from '../context/dart_context';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [isDark, setIsDark] = useState<boolean>(false);

    const dark = () => setIsDark(true);
    const light = () => setIsDark(false);

    useEffect(() => {
        document.body.className = `app ${isDark ? "dark" : "light"}`;
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark]);

    return (
        <DarkContext.Provider value={{ isDark, dark, light }}>
            {children}
        </DarkContext.Provider>
    );
};