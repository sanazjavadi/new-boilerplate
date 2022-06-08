const webpack = require('webpack');
const bundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').bundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('codevolution'),
    }),
    new bundleAnalyzerPlugin(),
  ],
};
