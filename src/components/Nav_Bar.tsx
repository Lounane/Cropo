import { useState } from "react";
import tw from "twin.macro";
import { Link, Logo } from "./atoms";
import { not } from "ramda";

const Nav_Container = tw.header`fixed w-full flex justify-between duration-300 
      --tw-bg-opacity[0]
hover:all-child:not-first:bg-green-600

// hover:(bg-indigo-500 --color[red])
`;

const Nav_Bar = () => {
  // const [is_Focused, set_Focused] = useState(false);

  // const negate_is_Focused = () => set_Focused(not);
  return (
    // <Nav_Container onMouseEnter={set_Focused((prev) => !prev)}>
    <Nav_Container
    // onMouseEnter={negate_is_Focused}
    // onMouseLeave={negate_is_Focused}
    >
      <Logo />
      <Link>Login</Link>
      <Link>Try for free</Link>
    </Nav_Container>
  );
};
export default Nav_Bar;
