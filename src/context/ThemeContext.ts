import { createContext } from "react";
import { ColorTheme } from "../types";

export type ThemeContextType = {
  theme: ColorTheme;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
