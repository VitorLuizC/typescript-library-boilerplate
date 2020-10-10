/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const { readdir, readFile, unlink, writeFile } = require('fs/promises');
const { resolve } = require('path');
const { createInterface } = require('readline');

const ENCODING = 'utf-8';

const EXCLUDED_PATHS = ['.git', 'setup.js', 'node_modules'];

const resolveToFiles = (directory) => (dirent) => {
  const direntPath = resolve(directory, dirent.name);
  if (!EXCLUDED_PATHS.includes(dirent.name) && dirent.isFile())
    return [direntPath];
  if (!EXCLUDED_PATHS.includes(dirent.name) && dirent.isDirectory())
    return getFiles(direntPath);
  return [];
};

const getFiles = (directory) =>
  readdir(directory, {
    encoding: ENCODING,
    withFileTypes: true,
  })
    .then((filesWithTypes) => filesWithTypes.map(resolveToFiles(directory)))
    .then(Promise.all)
    .then((files) => files.flat(1));

const replaceInFile = (matcher, replacer) => (path) =>
  readFile(path, { encoding: ENCODING })
    .then((contents) => contents.replace(matcher, replacer))
    .then((contents) => writeFile(path, contents, ENCODING));

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const replaceVariable = (variable, value) =>
  getFiles(resolve(__dirname))
    .then((files) => {
      const matcher = new RegExp(`\\[${variable}\\]`, 'g');
      return files.map(replaceInFile(matcher, value));
    })
    .then(Promise.all);

const fillTemplateVariable = (variable, question, defaultValue = '') =>
  new Promise((resolve) => {
    readline.question(question, async (receivedValue) => {
      const value = receivedValue?.trim() || defaultValue;

      await replaceVariable(variable, value);

      readline.write(`Replaced ${variable} to "${value}".\n`);

      resolve();
    });
  });

replaceVariable('year', new Date().getFullYear())
  .then(() =>
    fillTemplateVariable(
      'libraryNameWithSpacesAndUpperCases',
      `
Library name (can have upper/lower case letters, spaces, numbers and special characters)
Ex. React.js, Vue.js, Fetch Interceptors, GraphQL Loader for Webpack etc.
> `,
    ),
  )
  .then(() =>
    fillTemplateVariable(
      'libraryName',
      `
Module name (only lower case letters, "." or "-") and optionally with scope.
Ex. react, vue, fetch-interceptors, @webpack/graphql-loader etc.
> `,
    ),
  )
  .then(() =>
    fillTemplateVariable(
      'libraryCamelCaseName',
      `
What is you library name in camel-case for UMD bundles?
Ex. React, Vue, fetchInterceptors, graphqlLoaderForWebpack etc.
> `,
    ),
  )
  .then(() =>
    fillTemplateVariable(
      'repositoryOwner',
      `
What is your nickname on GitHub?
> `,
      '',
    ),
  )
  .then(() =>
    fillTemplateVariable(
      'repositoryName',
      `
What will be this repository name on GitHub?
> `,
    ),
  )
  .then(() =>
    fillTemplateVariable(
      'authorFullName',
      `
What is your full name? (used in MIT License)
> `,
      '',
    ),
  )
  .then(() => {
    unlink(resolve(__filename));
    readline.close();
  })
  .catch((error) => {
    console.error(error?.message ?? error ?? 'Unknown error.');
    readline.close();
  });
