const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var path = require("path");

var pages = require('./pages');

module.exports = {

  entry: './render.js',

  output: {
    filename: 'render.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: path.resolve(__dirname, 'public'),
    /* IMPORTANT!
     * You must compile to UMD or CommonJS
     * so it can be required in a Node context: */
    libraryTarget: 'umd'
  },

  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: pages,
      locals: {
        // Properties here are merged into `locals`
        // passed to the exported render function
        greet: 'Greetings'
      }
    })
  ],

  devServer: { inline: false }

};
