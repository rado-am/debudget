import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { Language, Theme } from "app/enums";
import { useLanguage } from "app/hooks/useLanguage";
import { useTheme } from "app/hooks/useTheme";

import styles from "./LandingPage.module.scss";

const LandingPage: FC = () => {
  const { t } = useTranslation(["landing"]);

  const { setCurrentLanguage } = useLanguage();
  const { setCurrentTheme } = useTheme();

  return (
    <div className={styles.landing}>
      <h1>{t("landing")}</h1>
      <button onClick={() => setCurrentLanguage(Language.EN)}>EN</button>
      <button onClick={() => setCurrentLanguage(Language.PL)}>PL</button>
      <br />
      <button onClick={() => setCurrentTheme(Theme.LIGHT)}>Light</button>
      <button onClick={() => setCurrentTheme(Theme.DARK)}>Dark</button>
      <p>test husky</p>
    </div>
  );
};

export default LandingPage;
