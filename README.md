# Convert ISO Country Codes

![npm](https://img.shields.io/npm/v/convert-iso-country-codes)
![GitHub issues](https://img.shields.io/github/issues/Marius-Adam/iso-country-code-converter)
![GitHub license](https://img.shields.io/github/license/Marius-Adam/iso-country-code-converter)

A simple library for converting country codes between ISO 3166 Alpha-2 (ISO2) and ISO 3166 Alpha-3 (ISO3) formats.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the package using npm:

```bash
npm install convert-iso-country-codes
```

## Usage

Converting ISO 2 to ISO 3

```
import { convertToISO3 } from 'convert-iso-country-codes';

const iso3Code = convertToISO3('US'); // Returns 'USA'
```

Converting ISO 3 to ISO 2
```
import { convertToISO2 } from 'convert-iso-country-codes';

const iso2Code = convertToISO2('USA'); // Returns 'US'
```

## API Documentation

## `convertToISO3(ISO2Code: ISO2Code): ISO3Code`

Converts an ISO 2 country code to an ISO 3 country code.

### Parameters:
- `ISO2Code (ISO2Code)`: The ISO 2 country code to convert.

### Returns:
- `(ISO3Code)`: The corresponding ISO 3 country code.

### Throws:
- `(Error)`: If the input code is not valid.

---

## `convertToISO2(ISO3Code: ISO3Code): ISO2Code`

Converts an ISO 3 country code to an ISO 2 country code.

### Parameters:
- `ISO3Code (ISO3Code)`: The ISO 3 country code to convert.

### Returns:
- `(ISO2Code)`: The corresponding ISO 2 country code.

### Throws:
- `(Error)`: If the input code is not valid.


## Types

- **ISO2Code**: A union type of all valid ISO 2 country codes.
- **ISO3Code**: A union type of all valid ISO 3 country codes.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.


## License

This project is licensed under the MIT License.
