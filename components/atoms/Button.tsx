import { render, screen } from "@utils/test";
import tw from "twin.macro";

const Button = tw.button``;
// function Button({ children }: BUTTON) {
//   return <button>{children}</button>;
// }

/* eslint-disable */
if (import.meta.vitest) {
  describe("test", () => {
    it("should work", () => {
      const label = "hel";
      render(<Button>{label}</Button>);
      const element = screen.getByText(label);
      //   element.click();
      expect(element).toBeTruthy();
      expect(element).toBeDefined();
      expect(5).toBe(5);
    });
  });
}
