import { ReactNode } from "react";

export enum Theme {
  dark = "dark",
  light = "light",
}

export interface ThemeContextProviderProps {
  children: ReactNode;
}
