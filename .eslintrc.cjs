module.exports = {
   // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
   // This option interrupts the configuration hierarchy at this file
   // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
   root: true,

   // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
   // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
   // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
   parserOptions: {
      parser: require.resolve('@typescript-eslint/parser'),
   },

   env: {
      browser: true,
      es2021: true,
      node: true,
   },

   // Rules order is important, please avoid shuffling them
   extends: [
      // Base ESLint recommended rules
      // 'eslint:recommended',

      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
      // ESLint typescript rules
      'plugin:@typescript-eslint/recommended',

      // https://github.com/prettier/eslint-config-prettier#installation
      // usage with Prettier, provided by 'eslint-config-prettier'.
      'prettier',
   ],

   plugins: [
      // required to apply rules which need type information
      '@typescript-eslint',

      // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
      // Prettier has not been included as plugin to avoid performance impact
      // add it as an extension for your IDE
   ],

   globals: {
      ga: 'readonly', // Google Analytics
      cordova: 'readonly',
      process: 'readonly',
      Capacitor: 'readonly',
      chrome: 'readonly',
   },

   // add your custom rules here
   rules: {
      'prefer-promise-reject-errors': 'off',

      quotes: ['warn', 'single', { avoidEscape: true }],

      // this rule, if on, would require explicit return type on the `render` function
      '@typescript-eslint/explicit-function-return-type': 'off',

      // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
      '@typescript-eslint/no-var-requires': 'off',

      // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',

      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-var': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
   },
};
