import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import type { RootState } from "store/types";

import { setTheme } from "../appSlice";
import type { Theme } from "../enums";

export const useTheme = () => {
  const dispatch = useAppDispatch();

  const { theme } = useAppSelector((state: RootState) => state.app);

  const setCurrentTheme = useCallback((theme: Theme) => {
    localStorage.setItem("theme", theme);
    dispatch(setTheme(theme));
  }, []);

  return { theme, setCurrentTheme };
};
