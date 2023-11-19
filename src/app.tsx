import { Suspense, lazy } from "react";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import AboutPage from "./pages/about-page/about-page";
import MainPage from "./pages/main-page/main-page";

function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const AboutPageAsync = lazy(() => import("./pages/about-page/about-page"));
const CounterAsync = lazy(() => import("./components/counter/counter"));

export const App = () => {
  return (
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
  );
};
