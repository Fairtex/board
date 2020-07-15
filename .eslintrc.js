module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended', 'prettier/react'],
  env: { es6: true },
  plugins: ['simple-import-sort', 'prettier', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
    react: {
      version: '16.13.1',
    },
  },
  rules: {
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          // polyfills
          ['react-app-polyfill'],
          // Packages.
          ['^react$', '^@?\\w'],
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          // Side effect imports.
          ['^state/store$, ^\\u0000'],
          // Project related absolute imports.
          [
            '^(components|constants|hocs|layout|libs|pages|routes|services|state|utils|hooks|vendors)(/.*|$)',
          ],
          // Project assets.
          ['^(assets)(/.*|$)'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    "jsx-a11y/anchor-is-valid": 0,
    "react/require-default-props": 0,
    'sort-imports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'prettier/prettier': 'error',
    'global-require': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Use lodash-es instead!',
          },
        ],
      },
    ],
    camelcase: [0, { properties: 'never' }],
    'react/require-default-props': ['error', { ignoreFunctionalComponents: true }],
    'react/jsx-no-target-blank': [0, { ignore: 0, enforceDynamicLinks: 'always' }],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 1,
    'react/no-deprecated': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-irregular-whitespace': 0,
  },
  globals: {
    window: true,
    document: true,
  },
};