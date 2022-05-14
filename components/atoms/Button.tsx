import { render, screen, userEvent } from "@utils/test_utils";
export default function Button() {
  return <button>hello world</button>;
}

/* eslint-disable */
if (import.meta.vitest) {
  describe("test", () => {
    it("should work", () => {
      render(<Button />);
      const element = screen.getByText(/Hello World/i);
      //   element.click();
      expect(element).toBeTruthy();
      expect(element).toBeDefined();
      expect(5).toBe(5);
    });
  });
}
