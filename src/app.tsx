import { Suspense, lazy, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import MainPage from "./pages/main-page/main-page";

import "./styles/index.scss";
import { useTheme } from "./hooks";

const AboutPageAsync = lazy(() => import("./pages/about-page/about-page"));
const CounterAsync = lazy(() => import("./components/counter/counter"));

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
