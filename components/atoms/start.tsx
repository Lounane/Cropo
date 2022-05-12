// import { screen, render } from "@testing-library/react";
import { render, screen } from "../../utils/test_utils";

// export default function TestComponent() {
//   return <button type="button">Hello World</button>;
// }

/* eslint-disable */
if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("test", () => {
    it("should work", () => {
      render(<TestComponent />);
      const element = screen.getByText(/Hello World/i);
      element.click();
      expect(element).toBeTruthy();
      expect(element).toBeDefined();
    });
  });
}

/* eslint-disable */
