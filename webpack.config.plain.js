const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/js/main.js',
    vendor: ['jquery', 'lodash', 'moment'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules: [
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
