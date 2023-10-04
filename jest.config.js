// @ts-check
/* eslint-env node */

/**
 * An object with Jest options.
 * @type {import('ts-jest').JestConfigWithTsJest}
 */
const options = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
        useESM: true
      },
    ],
  },
  resolver: 'ts-jest-resolver'
};

module.exports = options;
