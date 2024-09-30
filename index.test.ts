import {
  iso3ToIso2,
  iso2ToIso3,
  iso3ToNumeric,
  numericToIso3,
  nameToIso3,
  iso3ToName,
  iso2ToNumeric,
  numericToIso2,
  nameToIso2,
  iso2ToName,
  numericToName,
  nameToNumeric
} from "./index";

describe("Country code conversions", () => {
  test("iso3ToIso2 should convert ISO3 to ISO2", async () => {
    expect(await iso3ToIso2("USA")).toBe("US");
    expect(await iso3ToIso2("CAN")).toBe("CA");
  });

  test("iso2ToIso3 should convert ISO2 to ISO3", async () => {
    expect(await iso2ToIso3("US")).toBe("USA");
    expect(await iso2ToIso3("CA")).toBe("CAN");
  });

  test("iso3ToNumeric should convert ISO3 to Numeric", async () => {
    expect(await iso3ToNumeric("USA")).toBe("840");
    expect(await iso3ToNumeric("CAN")).toBe("124");
  });

  test("numericToIso3 should convert Numeric to ISO3", async () => {
    expect(await numericToIso3("840")).toBe("USA");
    expect(await numericToIso3("124")).toBe("CAN");
  });

  test("nameToIso3 should convert Country Name to ISO3", async () => {
    expect(await nameToIso3("United States")).toBe("USA");
    expect(await nameToIso3("Canada")).toBe("CAN");
  });

  test("iso3ToName should convert ISO3 to Country Name", async () => {
    expect(await iso3ToName("USA")).toBe("United States");
    expect(await iso3ToName("CAN")).toBe("Canada");
  });

  test("iso2ToNumeric should convert ISO2 to Numeric", async () => {
    expect(await iso2ToNumeric("US")).toBe("840");
    expect(await iso2ToNumeric("CA")).toBe("124");
  });

  test("numericToIso2 should convert Numeric to ISO2", async () => {
    expect(await numericToIso2("840")).toBe("US");
    expect(await numericToIso2("124")).toBe("CA");
  });

  test("nameToIso2 should convert Country Name to ISO2", async () => {
    expect(await nameToIso2("United States")).toBe("US");
    expect(await nameToIso2("Canada")).toBe("CA");
  });

  test("iso2ToName should convert ISO2 to Country Name", async () => {
    expect(await iso2ToName("US")).toBe("United States");
    expect(await iso2ToName("CA")).toBe("Canada");
  });

  test("numericToName should convert Numeric to Country Name", async () => {
    expect(await numericToName("840")).toBe("United States");
    expect(await numericToName("124")).toBe("Canada");
  });

  test("nameToNumeric should convert Country Name to Numeric", async () => {
    expect(await nameToNumeric("United States")).toBe("840");
    expect(await nameToNumeric("Canada")).toBe("124");
  });
});
