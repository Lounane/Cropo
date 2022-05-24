import tw, { styled } from "twin.macro";

type LINK = {
  readonly Btn?: true;
};

const Link = styled.a(({ Btn }: LINK) => [
  tw` px-5 py-2 cursor-pointer outline-none transition duration-300 `,
  Btn
    ? // ? tw`rounded-xl  bg-purple-600  hover:bg-purple-800`
      tw`rounded-xl bg-gradient-to-tr    from-purple-600 hover:opacity-80`
    : tw`ease-out  hover:text-purple-500`,
]);

export { Link };
