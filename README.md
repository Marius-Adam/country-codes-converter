<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<div align="center">
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
</div>

<br />
<div align="center">
<h2 align="center">ISO Country Codes Converter</h2>

  <p align="center">
    A simple library for converting country codes between ISO 3166 Alpha-2 (ISO2) and ISO 3166 Alpha-3 (ISO3) formats.
    <br />
    <br />
    <a href="https://github.com/Marius-Adam/iso-country-code-converter">View Demo</a>
    ·
    <a href="https://github.com/Marius-Adam/iso-country-code-converter/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Marius-Adam/iso-country-code-converter/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api">API</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>

  </ol>
</details>

## Installation

You can install the package using npm or yarn:

```bash
npm install convert-iso-country-codes
```

## Usage

#### Converting ISO 2 to ISO 3

```
import { convertToISO3 } from 'convert-iso-country-codes';

const iso3Code = convertToISO3('US'); // Returns 'USA'
```

#### Converting ISO 3 to ISO 2

```
import { convertToISO2 } from 'convert-iso-country-codes';

const iso2Code = convertToISO2('USA'); // Returns 'US'
```

## API

### `convertToISO3(ISO2Code: ISO2Code): ISO3Code`

Converts an ISO 2 country code to an ISO 3 country code.

- **Parameters:**
  - `ISO2Code` (ISO2Code): The ISO 2 country code to convert.
- **Returns:** (ISO3Code) The corresponding ISO 3 country code.
- **Throws:** (Error) If the input code is not valid.

### `convertToISO2(ISO3Code: ISO3Code): ISO2Code`

Converts an ISO 3 country code to an ISO 2 country code.

- **Parameters:**
  - `ISO3Code` (ISO3Code): The ISO 3 country code to convert.
- **Returns:** (ISO2Code) The corresponding ISO 2 country code.
- **Throws:** (Error) If the input code is not valid.

### Types
**ISO2Code**: A union type of all valid ISO 2 country codes.
**ISO3Code**: A union type of all valid ISO 3 country codes.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

Marius Adam - [@Marius Adam LinkedIn](https://www.linkedin.com/in/marius-adam-dev/) 

Project Link: [https://github.com/Marius-Adam/iso-country-code-converter](https://github.com/Marius-Adam/iso-country-code-converter)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Marius-Adam/iso-country-code-converter.svg?style=for-the-badge
[contributors-url]: https://github.com/Marius-Adam/iso-country-code-converter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Marius-Adam/iso-country-code-converter.svg?style=for-the-badge
[forks-url]: https://github.com/Marius-Adam/iso-country-code-converter/network/members
[stars-shield]: https://img.shields.io/github/stars/Marius-Adam/iso-country-code-converter.svg?style=for-the-badge
[stars-url]: https://github.com/Marius-Adam/iso-country-code-converter/stargazers
[issues-shield]: https://img.shields.io/github/issues/Marius-Adam/iso-country-code-converter.svg?style=for-the-badge
[issues-url]: https://github.com/Marius-Adam/iso-country-code-converter/issues
[license-shield]: https://img.shields.io/github/license/Marius-Adam/iso-country-code-converter.svg?style=for-the-badge
[license-url]: https://github.com/Marius-Adam/iso-country-code-converter/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/marius-adam-dev
