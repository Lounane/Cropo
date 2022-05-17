import { StrictMode, createRoot } from "@utils/react";
import GlobalStyles from "@styles/GlobalStyles";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

// eslint-disable-next-line functional/no-expression-statement
root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
