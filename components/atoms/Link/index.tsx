import tw, { styled } from "twin.macro";

type LINK = {
  readonly Primary?: true;
};

const Link = styled.a(({ Primary }: LINK) => [
  tw`box-border px-5 py-2 cursor-pointer outline-none transition duration-300  `,
  Primary
    ?
    // ? tw`rounded-xl  bg-purple-600  hover:bg-purple-800 dark:text-green-500`
    tw`rounded-xl bg-gradient-to-tr   from-indigo-600 via-purple-600  to-pink-600 text-white`
    : tw`ease-out hover:text-purple-500 `,
]);

export { Link };
