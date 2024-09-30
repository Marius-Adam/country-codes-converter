<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
<h2 align="center">Country Codes Converter</h2>

  <p align="center">
    A simple library for converting country codes between ISO, name and numeric formats.
    <br />
    <br />
    <a href="https://stackblitz.com/edit/vitejs-vite-ymdwb7?file=src%2FApp.tsx">View Demo</a>
    ·
    <a href="https://github.com/Marius-Adam/country-codes-converter/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Marius-Adam/country-codes-converter/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<br/>

<summary><b>Table of contents</b></summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api">API</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>

<br/>

## Installation

You can install the package using npm or yarn:

```bash
npm install country-codes-converter

yarn add country-codes-converter
```

<br/>

## Usage

`country-codes-converter` is fully TypeScript-supported, ensuring type safety and improved development experience. Additionally, it boasts 100% code test coverage, which guarantees the reliability and stability of the library.

```javascript
import { iso3ToIso2, nameToIso3 } from "country-codes-converter";

// Convert ISO3 to ISO2
iso3ToIso2("USA").then((iso2) => {
  console.log(`ISO2 Code: ${iso2}`);
});

// Convert country name to ISO3
nameToIso3("Canada").then((iso3) => {
  console.log(`ISO3 Code: ${iso3}`);
});
```

<br/>

## API

### Functions

The library exposes the following functions:

1.  **`iso3ToIso2(iso3: string): Promise<string | null>`**

    - Converts an ISO3 code to an ISO2 code.

2.  **`iso2ToIso3(iso2: string): Promise<string | null>`**

    - Converts an ISO2 code to an ISO3 code.

3.  **`iso3ToNumeric(iso3: string): Promise<string | null>`**

    - Converts an ISO3 code to its numeric representation.

4.  **`numericToIso3(numeric: string): Promise<string | null>`**

    - Converts a numeric code to an ISO3 code.

5.  **`iso3ToName(iso3: string): Promise<string | null>`**

    - Converts an ISO3 code to the country's name.

6.  **`nameToIso3(name: string): Promise<string | null>`**

    - Converts a country name to its ISO3 code.

7.  **`iso2ToNumeric(iso2: string): Promise<string | null>`**

    - Converts an ISO2 code to its numeric representation.

8.  **`numericToIso2(numeric: string): Promise<string | null>`**

    - Converts a numeric code to an ISO2 code.

9.  **`nameToIso2(name: string): Promise<string | null>`**

    - Converts a country name to its ISO2 code.

10. **`iso2ToName(iso2: string): Promise<string | null>`**

    - Converts an ISO2 code to the country's name.

11. **`numericToName(numeric: string): Promise<string | null>`**

    - Converts a numeric code to the country's name.

12. **`nameToNumeric(name: string): Promise<string | null>`**

    - Converts a country name to its numeric representation.

### Notes

- All functions return a promise that resolves to the corresponding code or name, or `null` if the provided input is invalid or not found in the data.
- The data is cached after the first fetch, making subsequent calls faster.

<br/>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch: `git checkout -b feature/AmazingFeature`
3. Commit your Changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the Branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

<br/>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<br/>

## Contact

Marius Adam - [@Marius Adam LinkedIn](https://www.linkedin.com/in/marius-adam-dev/)

Project Link: [https://github.com/Marius-Adam/country-codes-converter](https://github.com/Marius-Adam/country-codes-converter)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Marius-Adam/country-codes-converter.svg?style=for-the-badge
[contributors-url]: https://github.com/Marius-Adam/country-codes-converter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Marius-Adam/country-codes-converter.svg?style=for-the-badge
[forks-url]: https://github.com/Marius-Adam/country-codes-converter/network/members
[stars-shield]: https://img.shields.io/github/stars/Marius-Adam/country-codes-converter.svg?style=for-the-badge
[stars-url]: https://github.com/Marius-Adam/country-codes-converter/stargazers
[issues-shield]: https://img.shields.io/github/issues/Marius-Adam/country-codes-converter.svg?style=for-the-badge
[issues-url]: https://github.com/Marius-Adam/country-codes-converter/issues
[license-shield]: https://img.shields.io/github/license/Marius-Adam/country-codes-converter.svg?style=for-the-badge
[license-url]: https://github.com/Marius-Adam/country-codes-converter/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/marius-adam-dev
