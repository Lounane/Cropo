import { render, screen, describe, it, expect } from "@utils/test";
import second from "first";

describe("test", () => {
  it("should work", () => {
    const label = "hello";
    render(<Primary>{label}</Primary>);
    const element = screen.getByText(label);
    //   element.click();
    expect(element).toBeTruthy();
    expect(element).toBeDefined();
    expect(5).toBe(5);
  });
});
