import React from 'react';
import { useTheme } from './context/ThemeContext';

const ThemeStyles = ({ children }) => {
    const { theme } = useTheme();

    const themeStyles = {
        light: {
            backgroundColor: '#f9f9f9',
            color: '#333',
        },
        dark: {
            backgroundColor: '#333',
            color: '#f9f9f9',
        },
    };

    return (
        <div style={{ ...themeStyles[theme], height: '100vh', margin: 0 }}>
            {children}
        </div>
    );
};

export default ThemeStyles;