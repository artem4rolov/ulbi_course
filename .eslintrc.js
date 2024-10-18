module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['./src/**/*.tsx', './src/**/*.ts', 'declaration.d.ts'],
      rules: {
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        'import/no-anonymous-default-export': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/unbound-method': 'warn',
        'react/no-children-prop': 'off',
        camelcase: 'off',
      },
      extends: [
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'fsd-plugin-ulbi'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        jsxBracketSameLine: false,
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'prefer-const': 'warn',
    'fsd-plugin-ulbi/path-checker': 'warn',
  },
  ignorePatterns: ['./src/index.tsx'],
  // global: {
  //   __IS_DEV__: true,
  //   __API_URL__: true,
  //   __PROJECT__: true,
  // }
}
