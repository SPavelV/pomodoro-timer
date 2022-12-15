import React, {
  useState,
  useMemo,
  createContext,
  ReactNode,
  FC,
  useContext,
} from "react";
import { ColorTheme } from "../types";

export type ThemeContextType = {
  theme: ColorTheme;
  switchTheme: () => void;
  setDarkTheme: (isDark: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: ColorTheme.Light,
  switchTheme: () => {},
  setDarkTheme: (_) => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(ColorTheme.Light);

  const themeState = useMemo(
    () => ({
      theme,
      switchTheme: () =>
        setTheme(
          theme === ColorTheme.Dark ? ColorTheme.Light : ColorTheme.Light
        ),
      setDarkTheme: (isDark: boolean) =>
        isDark ? setTheme(ColorTheme.Dark) : setTheme(ColorTheme.Light),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};
