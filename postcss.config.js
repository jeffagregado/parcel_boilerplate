const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    // require('postcss-import'),
    postcssPresetEnv({
      browsers: 'last 2 versions, > 0.5%, IE >= 10',
      stage: 2,
      features: {
        'nesting-rules': true,
        'gap-properties': true,
      },
      autoprefixer: {
        grid: true,
      },
    }),
  ],
}
