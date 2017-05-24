const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/ts/app.ts',
    vendor: ['jquery', 'lodash', 'three'],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: 'ts-loader'}
        ]
      }
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
  devtool: 'source-map',
  // devServer: {
  //   contentBase: 'dist',
  //   port: 4000,
  //   inline: true
  // }
};
