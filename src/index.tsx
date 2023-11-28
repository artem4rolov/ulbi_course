import { render } from "react-dom";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/theme-context/theme-context-provider";

render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
