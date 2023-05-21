import commonEn from "assets/locales/en/common.json";
import landingEn from "assets/locales/en/landing.json";
import commonPl from "assets/locales/pl/common.json";
import landingPl from "assets/locales/pl/landing.json";

export const resources = {
  en: {
    common: commonEn,
    landing: landingEn,
  },
  pl: {
    common: commonPl,
    landing: landingPl,
  },
} as const;
