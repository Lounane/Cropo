import tw, { styled } from "twin.macro";

type LINK = {
  is_Btn?: boolean;
  is_Btn_Hollow?: boolean;
};
const Link = styled.a<LINK>(({ is_Btn, is_Btn_Hollow }) => [
  tw`px-8 py-2 rounded cursor-pointer bg-red-700 grayscale focus:outline-none transform duration-75 brightness-0 color[var(--color)]
  `,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,

  // is_Primary ? tw`text-black` : tw`text-blue-700`,
  // is_Big ? tw`text-sm` : tw`text-lg`,
]);

export default Link;
