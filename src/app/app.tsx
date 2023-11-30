import { Suspense, lazy } from "react";

import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/helpers";
import { MainPage } from "pages";

const AboutPageAsync = lazy(() => import("../pages/about-page/ui/about-page"));

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { selectable: true, hovered: false }, [
        theme,
        "top-2",
        "left-5",
      ])}
    >
      <Suspense fallback={<>Loading...</>}>
        <Link to="/about">О нас</Link>
        <Link to="/">На главную</Link>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
};
