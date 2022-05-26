// import { expect } from "@storybook/jest";
// import { within, fireEvent, findByRole } from "@storybook/testing-library";

import { Link } from ".";

export default {
  component: Link,
};

export const Primary = { args: { Primary: true, children: "Button" } };
export const Secondary = { args: { children: "Button" } };
