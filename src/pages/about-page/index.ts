import { lazy } from "react";

export const AboutPageAsync = lazy(
  () => import("pages/about-page/ui/about-page")
);
