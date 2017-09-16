# Edit Distance

[![npm](https://img.shields.io/npm/v/@zitro/edit-distance.svg)](https://www.npmjs.com/package/@zitro/edit-distance)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](http://npm.anvaka.com/#/view/2d/@zitro/edit-distance)
[![Build Status](https://secure.travis-ci.org/ZitRos/edit-distance.svg?branch=master)](https://travis-ci.org/ZitRos/edit-distance)
[![License](https://img.shields.io/github/license/zitros/edit-distance.svg)](LICENSE)

A tiny optimized package which finds the Levenshtein distance (edit distance) between two words. Having two strings of length N and M, the algorithm has O(N*M) complexity and uses O(N) additional space. The comparison is case sensitive.

## Installation

```bash
npm install --save @zitro/edit-distance
```

## Usage

```javascript
import editDistance from "@zitro/edit-distance";

editDistance("jelly", "fully"); // === 2 (replace 2 letters "je" to "fu")
editDistance("cars", "girls"); // === 3 (replace 2 letters "ca" to "gi", add 1 letter "l")
editDistance(["c", "a", "r", "s"], ["g", "i", "r", "l", "s"]); // yields the same result
```

## License

[MIT](LICENSE) © [Nikita Savchenko](https://nikita.tk)