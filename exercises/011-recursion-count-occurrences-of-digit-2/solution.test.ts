import { describe, it, expect } from "vitest";
import { countDigit } from "./solution";

describe("#011 - Recursion: Count Occurrences of Digit 2", () => {
  it("example 1", () => {
    // countDigit(77127)->1
    expect(countDigit(77127)).toEqual(1);
  });
  it("example 2", () => {
    // countDigit(0)->0
    expect(countDigit(0)).toEqual(0);
  });
  it("edge case: n = 1", () => {
    expect(countDigit(1)).toEqual(0);
  });
  it("single digit 2", () => {
    expect(countDigit(2)).toEqual(1);
  });
  it("all digits are 2", () => {
    expect(countDigit(222)).toEqual(3);
  });
  it("2s separated by zeros", () => {
    expect(countDigit(20202)).toEqual(3);
  });
  it("trailing zero does not count", () => {
    expect(countDigit(10)).toEqual(0);
  });
  it("2 as the last digit", () => {
    expect(countDigit(12)).toEqual(1);
  });
  it("2 as the first digit", () => {
    expect(countDigit(21)).toEqual(1);
  });
  it("mixed digits", () => {
    expect(countDigit(12345678902)).toEqual(2);
  });
  it("upper bound n = 10^15", () => {
    expect(countDigit(10 ** 15)).toEqual(0);
  });
  it("15 digits all 2", () => {
    expect(countDigit(222222222222222)).toEqual(15);
  });
  it("large number with no 2s", () => {
    expect(countDigit(999999999999999)).toEqual(0);
  });
});
