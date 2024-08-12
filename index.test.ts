import { convertCountryCode } from ".";

describe("convertCountryCode", () => {
  it("converts ISO 3 to ISO 2 correctly", () => {
    expect(convertCountryCode("USA", "ISO3")).toBe("US");
    expect(convertCountryCode("JPN", "ISO3")).toBe("JP");
    expect(convertCountryCode("XYZ", "ISO3")).toBe("Invalid ISO 3 code");
  });

  it("converts ISO 2 to ISO 3 correctly", () => {
    expect(convertCountryCode("US", "ISO2")).toBe("USA");
    expect(convertCountryCode("JP", "ISO2")).toBe("JPN");
    expect(convertCountryCode("XY", "ISO2")).toBe("Invalid ISO 2 code");
  });
});
