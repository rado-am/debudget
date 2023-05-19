import { useCallback } from "react";

import { setLanguage } from "app/appSlice";
import type { Language } from "app/enums";
import i18next from "i18n/i18n";
import { useAppDispatch, useAppSelector } from "store/hooks";
import type { RootState } from "store/types";

export const useLanguage = () => {
  const dispatch = useAppDispatch();

  const { language } = useAppSelector((state: RootState) => state.app);

  const setCurrentLanguage = useCallback((language: Language) => {
    i18next.changeLanguage(language);
    dispatch(setLanguage(language));
  }, []);

  return { language, setCurrentLanguage };
};
