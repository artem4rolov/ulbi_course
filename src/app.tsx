import { Suspense, lazy } from "react";
import { useTheme } from "./hooks";
import { classNames } from "./helpers/classNames";

import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/main-page";

const AboutPageAsync = lazy(() => import("./pages/about-page/about-page"));
const CounterAsync = lazy(() => import("./components/counter/counter"));

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
        <Link to="/counter">Счетчик</Link>
        <Link to="/about">О нас</Link>
        <Link to="/">На главную</Link>
        <Routes>
          <Route path="/counter" element={<CounterAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
};
