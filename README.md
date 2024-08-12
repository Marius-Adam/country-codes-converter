# Country Code Converter

A simple library for converting country codes between ISO 2 and ISO 3 formats.

## Installation

To install the package, run the following command:

```
npm install country-code-converter
```

## Usage

Here's an example of how to use the `convertCountryCode` function:

```javascript
import { convertCountryCode } from "country-code-converter";

console.log(convertCountryCode("USA", "ISO3")); // Outputs: US
console.log(convertCountryCode("US", "ISO2")); // Outputs: USA
console.log(convertCountryCode("XYZ", "ISO3")); // Outputs: Invalid ISO 3 code
console.log(convertCountryCode("XY", "ISO2")); // Outputs: Invalid ISO 2 code
```
