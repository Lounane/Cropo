import tw from "twin.macro";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within, fireEvent, findByRole } from "@storybook/testing-library";

const Button = tw.button`
bg-opacity-0 cursor-pointer`;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.label}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
Primary.play = async () => {
  await expect(5).toBe(5);
};

export default {
  title: "Button",
  component: "Button",
};
