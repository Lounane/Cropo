import { Nav_Bar, Steps } from '@molecules'
import tw from 'twin.macro'
import { create_Account } from '../../services/appwrite'

const Header_Container = tw.header`min-h-[70vh] w-full px-[5vw] py-[2vh] flex flex-col gap-[6vh]`
const Header = () => (
  <Header_Container>
    <Nav_Bar />

    <Steps />
    <button onClick={create_Account}>test App write</button>
  </Header_Container>
)
export default Header
