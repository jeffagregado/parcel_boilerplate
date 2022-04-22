const postcssPresetEnv = require('postcss-preset-env')
const flexGapPolyfill = require('flex-gap-polyfill');

module.exports = {
  plugins: [
    // require('postcss-import'),
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
