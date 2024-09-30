/**
 * Converts an ISO3 code to an ISO2 code.
 * @param {string} iso3 - The ISO3 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO2 code, or null if not found.
 */
export declare function iso3ToIso2(iso3: string): Promise<string | null>;
/**
 * Converts an ISO2 code to an ISO3 code.
 * @param {string} iso2 - The ISO2 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO3 code, or null if not found.
 */
export declare function iso2ToIso3(iso2: string): Promise<string | null>;
/**
 * Converts an ISO3 code to its numeric representation.
 * @param {string} iso3 - The ISO3 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the numeric code, or null if not found.
 */
export declare function iso3ToNumeric(iso3: string): Promise<string | null>;
/**
 * Converts a numeric code to an ISO3 code.
 * @param {string} numeric - The numeric code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO3 code, or null if not found.
 */
export declare function numericToIso3(numeric: string): Promise<string | null>;
/**
 * Converts an ISO3 code to the country's name.
 * @param {string} iso3 - The ISO3 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the country name, or null if not found.
 */
export declare function iso3ToName(iso3: string): Promise<string | null>;
/**
 * Converts a country name to its ISO3 code.
 * @param {string} name - The name of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO3 code, or null if not found.
 */
export declare function nameToIso3(name: string): Promise<string | null>;
/**
 * Converts an ISO2 code to its numeric representation.
 * @param {string} iso2 - The ISO2 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the numeric code, or null if not found.
 */
export declare function iso2ToNumeric(iso2: string): Promise<string | null>;
/**
 * Converts a numeric code to an ISO2 code.
 * @param {string} numeric - The numeric code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO2 code, or null if not found.
 */
export declare function numericToIso2(numeric: string): Promise<string | null>;
/**
 * Converts a country name to its ISO2 code.
 * @param {string} name - The name of the country.
 * @returns {Promise<string | null>} A promise that resolves to the ISO2 code, or null if not found.
 */
export declare function nameToIso2(name: string): Promise<string | null>;
/**
 * Converts an ISO2 code to the country's name.
 * @param {string} iso2 - The ISO2 code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the country name, or null if not found.
 */
export declare function iso2ToName(iso2: string): Promise<string | null>;
/**
 * Converts a numeric code to the country's name.
 * @param {string} numeric - The numeric code of the country.
 * @returns {Promise<string | null>} A promise that resolves to the country name, or null if not found.
 */
export declare function numericToName(numeric: string): Promise<string | null>;
/**
 * Converts a country name to its numeric representation.
 * @param {string} name - The name of the country.
 * @returns {Promise<string | null>} A promise that resolves to the numeric code, or null if not found.
 */
export declare function nameToNumeric(name: string): Promise<string | null>;
