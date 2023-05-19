import type { FC } from "react";

import PawIcon from "assets/icons/paw-icon.svg";

import styles from "./PageLoader.module.scss";

export const PageLoader: FC = () => (
  <div className={styles["page-loader"]}>
    <div className={styles.paw}>
      <img src={PawIcon} alt="Paw Icon" className={styles.icon} />
    </div>
    <div className={styles.paw}>
      <img src={PawIcon} alt="Paw Icon" className={styles.icon} />
    </div>
    <div className={styles.paw}>
      <img src={PawIcon} alt="Paw Icon" className={styles.icon} />
    </div>
    <div className={styles.paw}>
      <img src={PawIcon} alt="Paw Icon" className={styles.icon} />
    </div>
    <div className={styles.paw}>
      <img src={PawIcon} alt="Paw Icon" className={styles.icon} />
    </div>
    <div className={styles.paw}>
      <img src={PawIcon} alt="Paw Icon" className={styles.icon} />
    </div>
  </div>
);
