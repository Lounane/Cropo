/* eslint-disable */
import React from "react";
import { Global } from "@emotion/react";
import tw, { css, theme, GlobalStyles as BaseStyles } from "twin.macro";

const custom_styles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <Global styles={custom_styles} />
    </>
  );
}

export default GlobalStyles;
