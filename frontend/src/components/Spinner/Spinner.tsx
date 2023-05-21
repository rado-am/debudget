import type { FC } from "react";

import styles from "./Spinner.module.scss";
import type { SpinnerProps } from "./types";

export const Spinner: FC<SpinnerProps> = ({ size = 24 }) => (
  <svg className={styles.spinner} width={size} height={size} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle className={styles.path} fill="none" strokeWidth="4" strokeLinecap="round" cx="33" cy="33" r="30" />
  </svg>
);
