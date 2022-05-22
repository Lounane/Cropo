import tw, { styled } from "twin.macro";
type BTN = {
  primary?: true;
};
export const Button = styled.button<BTN>(({ primary }) => [
  tw` px-5 py-2 rounded-xl cursor-pointer outline-none transition duration-300 
  `,
  primary
    ? // ? tw`rounded-xl  bg-purple-600  hover:bg-purple-800`
      tw` bg-gradient-to-tr    from-purple-600 hover:opacity-80`
    : tw`ease-out  hover:text-purple-500`,
]);
