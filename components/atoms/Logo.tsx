import 'twin.macro'
import tw, { styled } from 'twin.macro'
import { FiCrop } from 'react-icons/fi'

const Logo_Link = tw.a`flex content-center items-center gap-2 text-xl font-bold tracking-wider   mr-auto`
const Logo_Icon = tw(FiCrop)`text-purple-500 w-8 h-full `
const Logo_Text = tw.span`hidden xsm:block`
const Logo = () => (
  <Logo_Link href="/">
    <Logo_Icon />
    <Logo_Text>CROPO</Logo_Text>
  </Logo_Link>
)

export default Logo
