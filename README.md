# [libraryNameWithSpacesAndUpperCases]

[![Continuous Integrations](https://github.com/[repositoryOwner]/[repositoryName]/actions/workflows/continuous-integrations.yaml/badge.svg?branch=main)](https://github.com/[repositoryOwner]/[repositoryName]/actions/workflows/continuous-integrations.yaml)
[![License](https://badgen.net/github/license/[repositoryOwner]/[repositoryName])](./LICENSE)
[![Package tree-shaking](https://badgen.net/bundlephobia/tree-shaking/[libraryName])](https://bundlephobia.com/package/[libraryName])
[![Package minified & gzipped size](https://badgen.net/bundlephobia/minzip/[libraryName])](https://bundlephobia.com/package/[libraryName])
[![Package dependency count](https://badgen.net/bundlephobia/dependency-count/react[libraryName])](https://bundlephobia.com/package/[libraryName])

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install [libraryName] --save

# For Yarn, use the command below.
yarn add [libraryName]
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/[libraryName]"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/[libraryName]"></script>

<script>
  // UMD module is exposed through the "[libraryCamelCaseName]" global variable.
  console.log([libraryCamelCaseName]);
</script>
```

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
