//@ts-nocheck - for invalid test cases

import {
  convertISO3ToISO2,
  convertISO2ToISO3,
  convertISO3ToNumeric,
  convertNumericToISO3,
  convertISO2ToNumeric,
  convertNumericToISO2
} from ".";

describe("convertISO2ToISO3", () => {
  it("converts ISO 2 to ISO 3 correctly", () => {
    expect(convertISO2ToISO3("US")).toBe("USA");
    expect(convertISO2ToISO3("JP")).toBe("JPN");
    expect(() => convertISO2ToISO3("XY")).toThrow("Invalid ISO 2 code");
    expect(() => convertISO2ToISO3("123")).toThrow("Invalid ISO 2 code"); // numeric input
    expect(() => convertISO2ToISO3("")).toThrow("Invalid ISO 2 code"); // empty input
    expect(() => convertISO2ToISO3(undefined)).toThrow("Invalid ISO 2 code"); // undefined input
    expect(() => convertISO2ToISO3(null)).toThrow("Invalid ISO 2 code"); // null input
  });
});

describe("convertISO3ToISO2", () => {
  it("converts ISO 3 to ISO 2 correctly", () => {
    expect(convertISO3ToISO2("USA")).toBe("US");
    expect(convertISO3ToISO2("JPN")).toBe("JP");
    expect(() => convertISO3ToISO2("XYZ")).toThrow("Invalid ISO 3 code");
    expect(() => convertISO3ToISO2("123")).toThrow("Invalid ISO 3 code"); // numeric input
    expect(() => convertISO3ToISO2("")).toThrow("Invalid ISO 3 code"); // empty input
    expect(() => convertISO3ToISO2(undefined)).toThrow("Invalid ISO 3 code"); // undefined input
    expect(() => convertISO3ToISO2(null)).toThrow("Invalid ISO 3 code"); // null input
  });
});

describe("convertToNumeric", () => {
  it("converts ISO 3 to numeric correctly", () => {
    expect(convertISO3ToNumeric("USA")).toBe(840);
    expect(convertISO3ToNumeric("JPN")).toBe(392);
    expect(() => convertISO3ToNumeric("XYZ")).toThrow("Invalid ISO 3 code");
    expect(() => convertISO3ToNumeric("123")).toThrow("Invalid ISO 3 code"); // numeric input
    expect(() => convertISO3ToNumeric("")).toThrow("Invalid ISO 3 code"); // empty input
    expect(() => convertISO3ToNumeric(undefined)).toThrow("Invalid ISO 3 code"); // undefined input
    expect(() => convertISO3ToNumeric(null)).toThrow("Invalid ISO 3 code"); // null input
  });
});

describe("convertNumericToISO3", () => {
  it("converts numeric to ISO 3 correctly", () => {
    expect(convertNumericToISO3(840)).toBe("USA");
    expect(convertNumericToISO3(392)).toBe("JPN");
    expect(() => convertNumericToISO3(1234)).toThrow("Invalid numeric code");
    expect(() => convertNumericToISO3(-1)).toThrow("Invalid numeric code"); // negative input
    expect(() => convertNumericToISO3(0)).toThrow("Invalid numeric code"); // zero input
    expect(() => convertNumericToISO3(undefined)).toThrow("Invalid numeric code"); // undefined input
    expect(() => convertNumericToISO3(null)).toThrow("Invalid numeric code"); // null input
  });
});

describe("convertISO2ToNumeric", () => {
  it("converts ISO 2 to numeric correctly", () => {
    expect(convertISO2ToNumeric("US")).toBe(840);
    expect(convertISO2ToNumeric("JP")).toBe(392);
    expect(() => convertISO2ToNumeric("XY")).toThrow("Invalid ISO 2 code");
    expect(() => convertISO2ToNumeric("123")).toThrow("Invalid ISO 2 code"); // numeric input
    expect(() => convertISO2ToNumeric("")).toThrow("Invalid ISO 2 code"); // empty input
    expect(() => convertISO2ToNumeric(undefined)).toThrow("Invalid ISO 2 code"); // undefined input
    expect(() => convertISO2ToNumeric(null)).toThrow("Invalid ISO 2 code"); // null input
  });
});

describe("convertNumericToISO2", () => {
  it("converts numeric to ISO 2 correctly", () => {
    expect(convertNumericToISO2(840)).toBe("US");
    expect(convertNumericToISO2(392)).toBe("JP");
    expect(() => convertNumericToISO2(1234)).toThrow("Invalid numeric code");
    expect(() => convertNumericToISO2(-1)).toThrow("Invalid numeric code"); // negative input
    expect(() => convertNumericToISO2(0)).toThrow("Invalid numeric code"); // zero input
    expect(() => convertNumericToISO2(undefined)).toThrow("Invalid numeric code"); // undefined input
    expect(() => convertNumericToISO2(null)).toThrow("Invalid numeric code"); // null input
  });
});
