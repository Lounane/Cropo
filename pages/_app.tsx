import { AppProps } from 'next/app'
import GlobalStyles from './../styles/GlobalStyles'

import './keyframe.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
