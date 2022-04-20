const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    // require('postcss-import'),
    // require('postcss-preset-env')({
    //   browsers: 'last 2 versions, > 0.5%, IE >= 10',
    //   stage: 1,
    //   features: {
    //     'nesting-rules': true,
    //   },
    //   autoprefixer: {
    //     grid: true,
    //   }
    // }),
    postcssPresetEnv({
      browsers: 'last 2 versions, > 0.5%, IE >= 10',
      stage: 2,
      features: {
        'nesting-rules': true,
      },
      autoprefixer: {
        grid: true,
      },
    }),
  ],
}
