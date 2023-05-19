import type { FC } from "react";
import { useEffect } from "react";

import { Theme } from "app/enums";
import { useTheme } from "app/hooks/useTheme";

import type { ThemeProviderProps } from "./types";

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { theme, setCurrentTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const colorScheme = isDarkTheme ? Theme.DARK : Theme.LIGHT;

    setCurrentTheme(savedTheme || colorScheme);
  }, []);

  return <div data-theme={theme}>{children}</div>;
};
