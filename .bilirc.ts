import { Config as Configuration } from 'bili';

const configuration: Configuration = {
  banner: true,
  input: 'src/index.ts',
  output: {
    format: ['es', 'cjs', 'umd', 'umd-min'],
    moduleName: '[libraryCammelCaseName]',
    sourceMap: true
  },
  babel: {
    minimal: true
  },
  plugins: {
    typescript2: {
      clean: true,
      tsconfig: 'tsconfig.bundle.json',
      useTsconfigDeclarationDir: true
    }
  }
};

export default configuration;
