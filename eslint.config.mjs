/** @type {import('@eslint/js').Linter.FlatConfig} */

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
  {
    ignores: [
      'dist',
      '.astro/**',
      'playwright-report',
      'test-results',
      '.lighthouseci',
      'coverage',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        node: true,
      },
    },
  },
];