import "./styles/index.scss";
import { useTheme } from "shared/hooks";
import { classNames } from "shared/helpers";
import { Router } from "./context/router/router";
import { Navbar, Sidebar } from "widgets";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames("app", { selectable: true, hovered: false }, [
        theme,
        "top-2",
        "left-5",
      ])}
    >
      <Navbar />
      <div className={"app-content"}>
        <Sidebar />
        <Router />
      </div>
    </div>
  );
};
