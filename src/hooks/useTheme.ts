import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY } from "../constants";
import { ThemeContext } from "../context/theme-context/theme-context";
import { Theme } from "../context/theme-context/theme-context.types";

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
    localStorage.setItem(
      LOCAL_STORAGE_THEME_KEY,
      theme === Theme.light ? Theme.dark : Theme.light
    );
  };

  return { theme, toggleTheme };
};
