import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

type LINK =
  | {
      Btn: true;
      Hollow?: true;
    }
  | {
      Btn?: never;
      Hollow?: never;
    };
// const Link: React.FC = ({ children }) => (
//   <motion.a
//     tw="bg-indigo-600 w-24 h-24"
//     drag
//     dragConstraints={{
//       top: -50,
//       left: -50,
//       right: 50,
//       bottom: 50,
//     }}
//   >
//     {children}
//   </motion.a>
// );
const Link = tw(motion.a)`bg-red-700 w-24 h-24`;

// const Link = () => <Motion_Link animate={{ x: 100 }} />;
// const Link = styled.a<LINK>(({ Btn, Hollow }) => [
//   tw`px-8 py-2 cursor-pointer grayscale focus:outline-none transform duration-75 brightness-0 color[var(--color)]`,

//   Btn && tw`bg-pink-600 rounded-3xl`,
//   // Use the variant grouping feature to add variants to multiple classes
//   tw`hocus:(scale-105 text-yellow-400)`,

//   // is_Primary ? tw`text-black` : tw`text-blue-700`,
//   // is_Big ? tw`text-sm` : tw`text-lg`,
// ]);

export default Link;
