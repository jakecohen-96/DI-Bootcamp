import { useState, createContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./AppThemeMode.css";
/**
 * createContext
 * Share the context
 * useContext
 */
export const ThemeModeContext = createContext();

const AppThemeMode = () => {
  const [mode, setMode] = useState("light");
  return (
    <>
      <h2>AppThemeMode</h2>
      <ThemeModeContext.Provider value={{ mode, setMode }}>
        <Header />
        <Main />
      </ThemeModeContext.Provider>
    </>
  );
};
export default AppThemeMode;
