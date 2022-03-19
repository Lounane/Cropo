import { Nav_Bar, Steps } from '@molecules'
import tw from 'twin.macro'

const Header_Container = tw.header`min-h-[70vh] w-full px-[5vw] py-[2vh] flex flex-col gap-[6vh]`
const Header = () => (
  <Header_Container>
    <Nav_Bar />

    <Steps />
  </Header_Container>
)
export default Header
