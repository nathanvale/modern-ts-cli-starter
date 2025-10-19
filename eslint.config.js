import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    name: 'eslint/base',
    linterOptions: { reportUnusedDisableDirectives: true },
    rules: { ...js.configs.recommended.rules },
  },

  ...tseslint.configs.recommended,

  // Optional: enable when you want type-aware checks (slower).
  // ...tseslint.configs.recommendedTypeChecked,
  // {
  //   languageOptions: {
  //     parserOptions: { project: ['./tsconfig.json'] }
  //   }
  // },

  {
    name: 'project/custom',
    rules: {
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'no-implicit-coercion': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-throw-literal': 'error',
      'no-unused-vars': 'off', // handled by TS
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  {
    name: 'project/ignores',
    ignores: ['dist/**', 'coverage/**'],
  },
)
