import tw, { styled, css } from 'twin.macro'

type LINK = {
  Btn?: true
}

// const Link = () => <Motion_Link animate={{ x: 100 }} />;
const Link = styled.a<LINK>(({ Btn }) => [
  tw` px-5 py-2 cursor-pointer outline-none transition duration-300 
  `,
  Btn
    ? // ? tw`rounded-xl  bg-purple-600  hover:bg-purple-800`
      tw`rounded-xl bg-gradient-to-tr    from-purple-600 hover:opacity-80`
    : tw`ease-out  hover:text-purple-500`,
])

export default Link
