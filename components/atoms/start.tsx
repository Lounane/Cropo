// import { describe, expect, it } from "vitest";

export {};

if (vitest) {
  //   const { describe, it, expect } = import.meta.vitest;

  describe("test", () => {
    it("should work", () => {
      expect(true).toBe(true);
      expect(1).toEqual(1);
    });
    it("yup work", () => {
      expect(true).toBe(true);
      expect(1).toEqual(1);
    });
  });
}
