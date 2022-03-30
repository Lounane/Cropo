import tw, { styled } from 'twin.macro'

const Card = styled.div(() => [
  tw`relative text-center rounded-xl p-4 bg-gradient-to-tr from-gray-800  overflow-hidden
  // flex-grow flex-shrink flex-basis[15rem]
  `,
  // [span]:(text-7xl  font-extrabold opacity-10 absolute top-2 right-4)
  // [h3]:(text-xl font-black)
  // [p]:(opacity-50)
])
export default Card
