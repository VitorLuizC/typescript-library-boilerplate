// @ts-check

/* global module -- Global defined by Node.js */

/**
 * An object with Jest options.
 * @type {import('ts-jest').JestConfigWithTsJest}
 */
const options = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      /**
       * These extra configuration is required because 'ts-jest' doesn't support
       * 'verbatimModuleSyntax' that was enabled in our './tsconfig.json'.
       * @see {@link https://github.com/kulshekhar/ts-jest/issues/4081}
       */
      {
        isolatedModules: true,
        useESM: true,
      },
    ],
  },
  resolver: 'ts-jest-resolver',
};

module.exports = options;
