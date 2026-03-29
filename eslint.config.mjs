// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default [
    eslint.configs.recommended,

    ...tseslint.configs.recommendedTypeChecked,

    {
        files: ['**/*.ts'],

        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        },

        rules: {
            // ❗ Your custom rules
            'no-console': 'warn', // better than error in backend
            quotes: ['error', 'single', { allowTemplateLiterals: true }],

            // 🔥 Important TS rules
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-floating-promises': 'error'
        }
    },
    // MUST BE LAST
    eslintConfigPrettier
]
