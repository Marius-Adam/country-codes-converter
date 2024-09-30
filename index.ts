/**
 * Represents a country with its relevant codes and name.
 * @typedef {Object} Country
 * @property {string} cca3 - ISO3 code.
 * @property {string} cca2 - ISO2 code.
 * @property {string} ccn3 - Numeric code (as a string).
 * @property {Object} name - Contains the country name.
 * @property {string} name.common - Country name.
 */
type Country = {
  cca3: string; // ISO3 code
  cca2: string; // ISO2 code
  ccn3: string; // Numeric code (as a string)
  name: {
    common: string; // Country name
  };
};

let countriesCache: Country[] | null = null;

/**
 * Fetches and caches country data from the REST Countries API.
 * @returns {Promise<Country[]>} A promise that resolves to an array of Country objects.
 */
async function fetchCountries(): Promise<Country[]> {
  if (countriesCache) return countriesCache; // Use cache if available

  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = (await response.json()) as Country[];
  countriesCache = data;
  return countriesCache;
}

/**
 * Converts an ISO3 code to an ISO2 code.
 * @param {string} iso3 - The ISO3 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO2 code, or null if not found.
 */
export async function iso3ToIso2(iso3: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.cca3 === iso3.toUpperCase());
  return country ? country.cca2 : null;
}

/**
 * Converts an ISO2 code to an ISO3 code.
 * @param {string} iso2 - The ISO2 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO3 code, or null if not found.
 */
export async function iso2ToIso3(iso2: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.cca2 === iso2.toUpperCase());
  return country ? country.cca3 : null;
}

/**
 * Converts an ISO3 code to its numeric representation.
 * @param {string} iso3 - The ISO3 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the numeric code, or null if not found.
 */
export async function iso3ToNumeric(iso3: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.cca3 === iso3.toUpperCase());
  return country ? country.ccn3 : null;
}

/**
 * Converts a numeric code to an ISO3 code.
 * @param {string} numeric - The numeric code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO3 code, or null if not found.
 */
export async function numericToIso3(numeric: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.ccn3 === numeric);
  return country ? country.cca3 : null;
}

/**
 * Converts an ISO3 code to the country's name.
 * @param {string} iso3 - The ISO3 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the country name, or null if not found.
 */
export async function iso3ToName(iso3: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.cca3 === iso3.toUpperCase());
  return country ? country.name.common : null;
}

/**
 * Converts a country name to its ISO3 code.
 * @param {string} name - The name of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO3 code, or null if not found.
 */
export async function nameToIso3(name: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find(
    (c) => c.name.common.toLowerCase() === name.toLowerCase()
  );
  return country ? country.cca3 : null;
}

/**
 * Converts an ISO2 code to its numeric representation.
 * @param {string} iso2 - The ISO2 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the numeric code, or null if not found.
 */
export async function iso2ToNumeric(iso2: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.cca2 === iso2.toUpperCase());
  return country ? country.ccn3 : null;
}

/**
 * Converts a numeric code to an ISO2 code.
 * @param {string} numeric - The numeric code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO2 code, or null if not found.
 */
export async function numericToIso2(numeric: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.ccn3 === numeric);
  return country ? country.cca2 : null;
}

/**
 * Converts a country name to its ISO2 code.
 * @param {string} name - The name of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO2 code, or null if not found.
 */
export async function nameToIso2(name: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find(
    (c) => c.name.common.toLowerCase() === name.toLowerCase()
  );
  return country ? country.cca2 : null;
}

/**
 * Converts an ISO2 code to the country's name.
 * @param {string} iso2 - The ISO2 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the country name, or null if not found.
 */
export async function iso2ToName(iso2: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.cca2 === iso2.toUpperCase());
  return country ? country.name.common : null;
}

/**
 * Converts a numeric code to the country's name.
 * @param {string} numeric - The numeric code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the country name, or null if not found.
 */
export async function numericToName(numeric: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find((c) => c.ccn3 === numeric);
  return country ? country.name.common : null;
}

/**
 * Converts a country name to its numeric representation.
 * @param {string} name - The name of the country.
 * @returns {Promise<string | null>} A promise that resolves to the numeric code, or null if not found.
 */
export async function nameToNumeric(name: string): Promise<string | null> {
  const countries = await fetchCountries();
  const country = countries.find(
    (c) => c.name.common.toLowerCase() === name.toLowerCase()
  );
  return country ? country.ccn3 : null;
}
