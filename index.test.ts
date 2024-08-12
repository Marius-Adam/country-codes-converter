import { convertToISO2, convertToISO3 } from ".";

describe("convertToISO3", () => {
  it("converts ISO 2 to ISO 3 correctly", () => {
    expect(convertToISO3("US")).toBe("USA");
    expect(convertToISO3("JP")).toBe("JPN");
    //@ts-ignore - for testing purposes
    expect(() => convertToISO3("XY")).toThrow("Invalid ISO 2 code");
  });
});

describe("convertToISO2", () => {
  it("converts ISO 3 to ISO 2 correctly", () => {
    expect(convertToISO2("USA")).toBe("US");
    expect(convertToISO2("JPN")).toBe("JP");
    //@ts-ignore - for testing purposes
    expect(() => convertToISO2("XYZ")).toThrow("Invalid ISO 3 code");
  });
});
