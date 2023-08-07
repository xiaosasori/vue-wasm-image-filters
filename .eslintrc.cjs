module.exports = {
  root: true,
  extends: [
    '@antfu',
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    'antfu/if-newline': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
