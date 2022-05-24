// / <reference types="vite/client" />
// / <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
// import reactRefresh from "vite-plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      /**
       * Storybook (specifically the interactions addon) requires that we use their
       *   instrumented version of jest-expect. So our storybook does so. To make
       *   these interactions still work in vitest we have @storybook/jest aliased
       *   to resolve to vitest which, critically, exports { expect } as well.
       */
      "@storybook/jest": "vitest",
    },
  },
  // test: {
  //   environment: "happy-dom",
  //   // environment: "jsdom",
  //   // globals: true,
  //   includeSource: ["components/**/*.{ts,tsx}"],
  // },
  plugins: [
    WindiCSS(),
    tsconfigPaths(),
    legacy(),
    react({
      babel: {
        plugins: [
          "babel-plugin-macros",
          [
            "@emotion/babel-plugin-jsx-pragmatic",
            {
              export: "jsx",
              import: "__cssprop",
              module: "@emotion/react",
            },
          ],
          [
            "@babel/plugin-transform-react-jsx",
            { pragma: "__cssprop" },
            "twin.macro",
          ],
        ],
      },
    }),
  ],
});
