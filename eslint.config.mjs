// @ts-check

import ESLint from '@eslint/js';
import Prettier from 'eslint-plugin-prettier/recommended';
import TypeScriptESLint from 'typescript-eslint';

export default TypeScriptESLint.config(
  {
    ignores: ['docs/**', 'dist/**', 'types/**'],
  },
  Prettier,
  ESLint.configs.recommended,
  ...TypeScriptESLint.configs.recommended,
);
