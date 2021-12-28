/*
 * @Author: chenqx2
 * @Date: 2021-12-24 16:12:06
 * @Descripttion:
 * @FilePath: \toutiao-m\.postcssrc.js
 */
module.exports = {
  plugins: {
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}

