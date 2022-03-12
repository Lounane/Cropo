import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { svgrComponent } from "vite-plugin-svgr-component";
const path = require("path");
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    svgrComponent(),
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
  ],
});
