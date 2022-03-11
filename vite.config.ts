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
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".svg"],
    // alias: {
    //   "@": path.resolve("./src"),
    //   "@imgs": path.resolve("./src/assets/images"),
    //   "@components": path.resolve("./src/components"),
    //   "@atoms": path.resolve("./src/components/atoms"),
    //   // "@": path.resolve(__dirname, "./src"),
    //   // "@imgs": path.resolve(__dirname, "./src/assets/images"),
    //   // "@components": path.resolve(__dirname, "./src/components"),
    //   // "@atoms": path.resolve(__dirname, "./src/components/atoms"),
    // },
  },
});
