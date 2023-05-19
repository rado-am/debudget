import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { setLanguage } from "app/appSlice";
import type { Language } from "app/enums";
import store from "store/store";

import { DEFAULT_LOCALE } from "./consts";
import { resources } from "./resources";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    fallbackLng: DEFAULT_LOCALE,
    saveMissing: true,
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  })
  .then(() => {
    const detectedLanguage = i18next.resolvedLanguage;

    store.dispatch(setLanguage(detectedLanguage as Language));
  });

i18next.changeLanguage();

export default i18next;
