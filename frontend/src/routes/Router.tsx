import type { ElementType } from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { PageLoader } from "./components/PageLoader";
import { paths } from "./paths";
import type { Routes } from "./types";

const LandingPage = lazy(() => import("pages/LandingPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

const getRouteElement = (Component: ElementType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const routes: Routes[] = [
  { path: paths.LANDING_PAGE, element: getRouteElement(LandingPage) },
  { path: paths.NOT_FOUND, element: getRouteElement(NotFoundPage) },
];

export default createBrowserRouter(routes);
