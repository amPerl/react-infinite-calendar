/* eslint-disable */

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
  },
  babel: {
    cherryPick: ['recompose'],
    plugins: [
      ['css-modules-transform', {
        generateScopedName: 'Cal__[name]__[local]',
        "preprocessCss": "./preprocess-css.js",
        "extensions": [".scss"],
        "extractCss": "./styles.css"
      }]
    ]
  },
  webpack: {
    rules: {
      'sass-css': {
        modules: true,
        localIdentName: 'Cal__[name]__[local]',
      }
    }
  }
}
