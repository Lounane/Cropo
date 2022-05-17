import { render, screen } from "@utils/test";

type BUTTON = { readonly children: string };

function Button({ children }: BUTTON) {
  return <button>{children}</button>;
}

/* eslint-disable */
if (import.meta.vitest) {
  describe("test", () => {
    it("should work", () => {
      render(<Button>Hello</Button>);
      const element = screen.getByText(/Hello World/i);
      //   element.click();
      expect(element).toBeTruthy();
      expect(element).toBeDefined();
      expect(5).toBe(5);
    });
  });
}
