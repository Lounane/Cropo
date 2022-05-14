import {
  render,
  screen,
  vitest,
  describe,
  it,
  expect,
} from "@utils/test_utils";

// import { render, screen } from "@testing-library/react";
export default function App() {
  return <div m-50>hello world</div>;
}

/* eslint-disable */
if (vitest) {
  // const { describe, it, expect } = import.meta.vitest;
  describe("test", () => {
    it("should work", () => {
      render(<App />);
      const element = screen.getByText(/Hello World/i);
      //   element.click();
      expect(element).toBeTruthy();
      expect(element).toBeDefined();

      expect(5).toBe(5);
    });
  });
}
