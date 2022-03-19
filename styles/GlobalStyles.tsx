import React from 'react'
import { Global, Interpolation, Theme } from '@emotion/react'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}) as Interpolation<Theme>

// const Global_Styles = tw.div`text-gray-300 bg-gradient-to-tl from-gray-900 to-gray-800 `
const GlobalStyles = () => (
  <>
    <BaseStyles />
    {/* <Global_Styles /> */}
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
