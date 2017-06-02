const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/js/main.js',
    vendor: ['jquery', 'lodash', 'three'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(path.join(__dirname, 'dist', 'js'))
  },
  module:{
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({ minimize:true }),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app']
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })
  ],
  devtool: 'source-map'
};
