import "./styles/index.scss";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/helpers";
import { Link } from "react-router-dom";
import { Router } from "./context/router/router";
import { Navbar } from "widgets";

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
      <Navbar />
      <Router />
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
};
