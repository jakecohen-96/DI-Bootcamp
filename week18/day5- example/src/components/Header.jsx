import { useContext } from "react";
import { ThemeModeContext } from "../AppThemeMode";

const Header = () => {
  const { setMode,mode } = useContext(ThemeModeContext);
  return (
    <>
      <h2>Header</h2>
      <button
        onClick={() => setMode((mode) => (mode === "light" ? "dark" : "light"))}
      >
        Change Mode: {(mode === 'light') ? 'Dark mode': 'Light Mode'}
      </button>
    </>
  );
};
export default Header;
