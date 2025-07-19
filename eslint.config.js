import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'dist/',
      'node_modules/',
      'coverage/',
      'pnpm-lock.yaml',
      'examples/',
      '.*cache',
      '*.log',
      '*.lock',
      'temp/',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier
);
