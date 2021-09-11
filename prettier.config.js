// @ts-check
/* eslint-env node */

/**
 * An object with Prettier.js options.
 * @type {import('prettier').Options}
 */
const options = {
  // @ts-expect-error because '@types/prettier' doesn't have this option yet.
  bracketSameLine: true,
  quoteProps: 'consistent',
  singleQuote: true,
  trailingComma: 'all',
};

module.exports = options;
