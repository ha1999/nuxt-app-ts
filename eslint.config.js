// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['**/fixtures', '.yarn', '.nuxt', 'node_modules', '.vscode'],
    // Or customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
  },
  {
    rules: {},
  },
)
