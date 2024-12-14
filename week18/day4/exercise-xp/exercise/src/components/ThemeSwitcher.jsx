import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: '10px 20px',
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                border: '1px solid',
                borderColor: theme === 'light' ? '#ccc' : '#444',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ThemeSwitcher;