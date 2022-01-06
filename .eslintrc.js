module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    rules: {
      'no-console': ["warn", { allow: ["warn", "error"] }],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // Prettier 문제로 인해, 함수 옆 공백을 체크하는 부분 해제 (기본은 공백을 넣는 것으로 한다.)
      'space-before-function-paren': 'off',
      'no-unused-vars': 'warn',
      'prettier/prettier': [
        'warn',
        {
          'semi': false,
          'singleQuote': true,
          'useTabs': false,
          'tabWidth': 2,
          'trailingComma': 'none',
          'endOfLine': 'auto',
          'printWidth': 150
        }
      ]
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
