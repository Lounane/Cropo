// import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

export default function TestComponent() {
  return <button>Hello World</button>;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe("test", () => {
    it("should work", () => {
      render(<TestComponent />);
      const element = screen.getByText(/Hello World/i);
      element.click();
      expect(element).toBeTruthy();
      expect(element).toBeDefined();

      const a: string = 5;
      expect(a).toBe(5);
    });
  });
}
