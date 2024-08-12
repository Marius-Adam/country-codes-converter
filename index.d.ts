/**
 * Converts a country code between ISO 2 and ISO 3 formats.
 *
 * @param {string} code - The country code to convert.
 * @param {string} from - The format of the input code. Must be either "ISO2" or "ISO3".
 * @returns {string} The converted country code, or an error message if the input code is invalid.
 */
export declare function convertCountryCode(code: string, from: "ISO2" | "ISO3"): string;
