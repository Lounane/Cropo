import { useDarkMode } from "storybook-dark-mode";

import {
  Global,
  themes,
  ThemeProvider,
  createReset,
  convert,
  styled,
  useTheme,
} from "@storybook/theming";
import {
  pipe,
  map,
  concat,
  dropLast,
  multiply,
  flip,
  over,
  lensPath,
} from "rambda";
import { __ } from "ramda";
import { useEffect } from "react";
import isChromatic from "chromatic/isChromatic";
import { Symbols } from "@storybook/components";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addons } from "@storybook/addons";

const Base = styled.div({
  // position: "absolute",
  top: 0,
  left: 0,
  right: 0,

  // height: "100vh",
  bottom: 0,
  overflow: "auto",
  padding: 10,
  // display: "grid",
  // placeItems: "center",
});

const ThemeBlock = styled.div(
  {
    position: "absolute",
    top: 0,
    left: 0,
    right: "50%",
    width: "50%",
    // height: "100vh",
    bottom: 0,
    overflow: "auto",
    display: "grid",
    placeItems: "center",
  },
  ({ theme }) => ({
    background: theme.background.app,
    color: theme.color.defaultText,
  }),
  ({ side }) =>
    side === "left"
      ? {
          left: 0,
          right: "50%",
        }
      : {
          right: 0,
          left: "50%",
        }
);

const ThemeStack = styled.div(
  {
    position: "relative",
    minHeight: "calc(50vh - 15px)",
    display: "grid",
    placeItems: "center",
  },
  ({ theme }) => ({
    background: theme.background.app,
    color: theme.color.defaultText,
  })
);

const ThemedSetRoot = () => {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.background = theme.background.app;
    document.body.style.color = theme.defaultText;
    return () => {
      //
    };
  });

  return null;
};

export const decorators = [
  (Story, { globals, parameters }) => {
    const theme =
      globals.theme ||
      parameters.theme ||
      (isChromatic() ? "stacked" : "light");

    console.log(themes);
    switch (theme) {
      case "side-by-side": {
        return (
          <>
            <Symbols
              icons={["folder", "component", "document", "bookmarkhollow"]}
            />
            <ThemeProvider theme={convert(themes.light)}>
              <Global styles={createReset} />
            </ThemeProvider>
            <ThemeProvider theme={convert(themes.light)}>
              <ThemeBlock side="left" data-side="left">
                <Story />
              </ThemeBlock>
            </ThemeProvider>
            <ThemeProvider theme={convert(themes.dark)}>
              <ThemeBlock side="right" data-side="right" className="dark">
                <Story />
              </ThemeBlock>
            </ThemeProvider>
          </>
        );
      }
      case "stacked": {
        return (
          <>
            <Symbols
              icons={["folder", "component", "document", "bookmarkhollow"]}
            />
            <ThemeProvider theme={convert(themes.light)}>
              <Global styles={createReset} />
            </ThemeProvider>
            <ThemeProvider theme={convert(themes.light)}>
              <ThemeStack side="left" data-side="left">
                <Story />
              </ThemeStack>
            </ThemeProvider>
            <ThemeProvider theme={convert(themes.dark)}>
              <ThemeStack side="right" data-side="right" className="dark">
                <Story />
              </ThemeStack>
            </ThemeProvider>
          </>
        );
      }
      default: {
        return (
          <ThemeProvider theme={convert(themes[theme])}>
            <Symbols
              icons={["folder", "component", "document", "bookmarkhollow"]}
            />
            <Global styles={createReset} />
            <ThemedSetRoot />
            <Base className={theme === "dark" && "dark"}>
              <Story />
            </Base>
          </ThemeProvider>
        );
      }
    }
  },
];

const customViewports = {
  smallMobile: {
    name: "Small Mobile",
    styles: {
      width: 2 * 320 + "px",
      height: "568px",
    },
  },
  bigMobile: {
    name: "Kindle Fire HD",
    styles: {
      width: "828px",
      height: "896px",
    },
  },
};
const dualScreenViewPorts = map(double_viewport_width, INITIAL_VIEWPORTS);

export const parameters = {
  viewport: {
    viewports: {
      ...dualScreenViewPorts,
      ...customViewports,
    },
  },
  darkMode: {
    darkClass: "dark",
  },

  // themes: {
  // green: { appBg: "red" },
  // },

  // bac
};

type VIEW_PORT_VAL = {
  name: string;
  type: string;
  styles: {
    height: string;
    width: string;
  };
};
type VIEW_PORT = [key: string, val: VIEW_PORT_VAL];

function double_viewport_width(ViewPort: VIEW_PORT_VAL) {
  const get_width_prop = lensPath(["styles", "width"]);
  const rm_px_unit = dropLast(2);
  const append_px_unit = flip(concat)("px");
  const double_size_in_px = pipe(
    rm_px_unit,
    Number,
    multiply(2),
    String,
    append_px_unit
  );
  const UpdatedViewPort = over(get_width_prop, double_size_in_px, ViewPort);
  return UpdatedViewPort;
}

// console.log(globals.theme);

export const globalTypes = {
  foo: { defaultValue: "fooDefaultValue" },
  bar: { defaultValue: "barDefaultValue" },
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "circlehollow",
      title: "Theme",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
        { value: "side-by-side", icon: "sidebar", title: "side by side" },
        { value: "stacked", icon: "bottombar", title: "stacked" },
      ],
    },
  },
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      shortcuts: {
        next: {
          label: "Go to next language",
          keys: ["L"],
        },
        previous: {
          label: "Go to previous language",
          keys: ["K"],
        },
        reset: {
          label: "Reset language",
          keys: ["meta", "shift", "L"],
        },
      },
      items: [
        { title: "Reset locale", type: "reset" },
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "es", right: "🇪🇸", title: "Español" },
        { value: "zh", right: "🇨🇳", title: "中文" },
        { value: "kr", right: "🇰🇷", title: "한국어" },
      ],
    },
  },
};
