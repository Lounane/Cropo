import tw, { styled } from 'twin.macro'
import { Link, Logo } from '@atoms'
import { useState } from 'react'

type NAV_ACTIVE = { Nav_Active?: boolean }
const Nav_Container = tw.div`
  py-2 w-full h-14 flex justify-between duration-300 stroke[white] items-stretch`

// const Flex_Container = tw.div`flex`

const Nav_Bar = () => {
  function set_Nav_Status() {}
  return (
    <Nav_Container>
      <Logo />
      {/* <Flex_Container> */}
      <Link opacity-10>Login</Link>
      <Link Btn>Try for free</Link>
      {/* </Flex_Container> */}
    </Nav_Container>
  )
}
export default Nav_Bar
