import { createContext, Dispatch, SetStateAction } from "react";
import { Theme } from "./theme-context.types";

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
