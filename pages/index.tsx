import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "uno.css";
import Test from "./Test";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
    <Test />
  </StrictMode>
);
