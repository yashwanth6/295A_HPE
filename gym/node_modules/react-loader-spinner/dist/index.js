'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-loader-spinner.cjs.production.js')
} else {
  module.exports = require('./react-loader-spinner.cjs.development.js')
}
