import type { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./PageLoader.module.scss";

export const PageLoader: FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles["page-loader"]}>
      <div className={styles.loader}>
        <div className={styles.binding} />
        <div className={styles.pad}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
        <div className={styles.text}>{t("loading")}</div>
      </div>
    </div>
  );
};
