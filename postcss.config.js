const postcssPresetEnv = require('postcss-preset-env')
const flexGapPolyfill = require('flex-gap-polyfill');

module.exports = {
  plugins: [
    // require('postcss-import'),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
      autoprefixer: {
        "flexbox": "no-2009",
        grid: 'autoplace',
      },
    }),
  ],
}
