import { name } from './package.json';
import { Config as Configuration } from 'bili';

const toUpperCase = (
  _: string,
  char: string,
): string => char.toUpperCase();

const moduleName = name.replace(/-(\w)/g, toUpperCase);

const configuration: Configuration = {
  banner: true,
  input: 'src/index.ts',
  output: {
    format: [
      'es',
      'cjs',
      'umd',
      'umd-min'
    ],
    moduleName
  },
  plugins: {
    'typescript2': {
      clean: true,
      tsconfig: 'tsconfig.bundle.json',
      useTsconfigDeclarationDir: true
    }
  }
};

export default configuration;
