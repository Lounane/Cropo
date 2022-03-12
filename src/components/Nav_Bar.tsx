import { useState } from "react";
import tw from "twin.macro";
import { Link, Logo } from "./atoms";
import { not } from "ramda";

const Nav_Container = tw.header`fixed p-2 w-full h-14 flex justify-between duration-300 
       stroke[aqua] items-stretch	
hover:all-child:not-first:bg-green-600
hover:all-child:first:stroke[brown]
// hover:(bg-indigo-500 --color[red])
`;

const Flex_Container = tw.div`flex`;

const Nav_Bar = () => {
  // const [is_Focused, set_Focused] = useState(false);

  // const negate_is_Focused = () => set_Focused(not);
  return (
    // <Nav_Container>
    // <Logo />
    <Link>hello</Link>
    // <Flex_Container>{/* <Link Btn>Try for free</Link> */}</Flex_Container>
    // </Nav_Container>
  );
};
export default Nav_Bar;
