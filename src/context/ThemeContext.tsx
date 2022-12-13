import React, { useState, useMemo, createContext, ReactNode, FC } from "react";
import { ColorTheme } from "../types";

export type ThemeContextType = {
  theme: ColorTheme;
  switchTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(ColorTheme.Light);

  const themeState = useMemo(
    () => ({
      theme,
      switchTheme: () =>
        setTheme(
          theme === ColorTheme.Dark ? ColorTheme.Light : ColorTheme.Light
        ),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};
