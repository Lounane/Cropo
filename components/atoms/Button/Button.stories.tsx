import { ComponentStory, ComponentMeta } from "@utils/storybook";

import { Button } from "./index";

{
  /* <Meta title="Button" component={Button} />


<Story name="Primary">
  <Button primary>Button </Button>
</Story> */
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button primary>Button</Button>
);
