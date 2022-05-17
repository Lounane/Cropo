import {
  tw,
  css,
  theme,
  Global,
  GlobalStyles as BaseStyles,
} from "@utils/twin";

const custom_styles = css({
  body: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

// eslint-disable-next-line functional/functional-parameters
function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <Global styles={custom_styles} />
    </>
  );
}

export default GlobalStyles;
