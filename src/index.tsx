import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "app";
import { ThemeContextProvider } from "app/context";

render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
