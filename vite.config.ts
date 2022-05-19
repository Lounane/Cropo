/// <reference types="vite/client" />
/// <reference types="vitest" />
import type { UserConfigFn, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";
import Unocss from "unocss/vite";
// import { presetUno } from "unocss";
import presetAttributify from "@unocss/preset-attributify";
import presetUno from "@unocss/preset-uno";

import UnocssIcons from "@unocss/preset-icons";

const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config: UserConfig = {
    // root: "pages",
    server: {
      https: true,
    },
    test: {
      environment: "happy-dom",
      // environment: "jsdom",
      // globals: true,
      includeSource: ["components/**/*.{ts,tsx}"],
    },
    plugins: [
      // Unocss({
      //   /* options */
      //   presets: [
      //     presetUno(),
      //     presetAttributify(),

      //     UnocssIcons({
      //       // options
      //       prefix: "i-",
      //       extraProperties: {
      //         display: "inline-block",
      //       },
      //     }),
      //   ],
      // }),
      react({
        // babel: {
        //   plugins: [
        //     "babel-plugin-macros",
        //     [
        //       "@emotion/babel-plugin-jsx-pragmatic",
        //       {
        //         export: "jsx",
        //         import: "__cssprop",
        //         module: "@emotion/react",
        //       },
        //     ],
        //     [
        //       "@babel/plugin-transform-react-jsx",
        //       { pragma: "__cssprop" },
        //       "twin.macro",
        //     ],
        //   ],
        // },
      }),
      tsconfigPaths(),
      legacy(),
      mkcert({
        source: "coding",
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
          },
        },
      },
    },
  };
  return config;
};

export default defineConfig;
