import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeStyles from './ThemeStyles';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
    return (
        <ThemeProvider>
            <ThemeStyles>
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h1>Theme Switcher</h1>
                    <ThemeSwitcher />
                </div>
            </ThemeStyles>
        </ThemeProvider>
    );
};

export default App;