import type { ReactNode } from "react";

export interface Paths {
  [key: string]: string;
}

export interface Routes {
  path: string;
  element: ReactNode;
}
