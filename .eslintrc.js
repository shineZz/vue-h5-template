module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'generator-star-spacing': 0, // 生成器函数*的前后空格
    'semi': [0, 'always'],//分号
    "space-before-blocks": [1, "always"], //代码块前的空格
    "space-before-function-paren": [1, "always"],//函数定义时，function关键字后面的小括号前是否需要加空格

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
