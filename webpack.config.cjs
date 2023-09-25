const path = require('path');
const isProduction = process.env.production ? true : false;
const sourcePath = path.resolve(__dirname, './resources/react-laravel/index.js');
const buildPath = path.resolve(__dirname, './public/frontend');

console.log(sourcePath, 'Source Path');
console.log(buildPath, "Build Path");
module.exports = {
  mode: isProduction,
  entry: sourcePath,
  module: {
    rules: require('./webpack/webpack.rules'),
  },
  output: {
    path: buildPath,
    filename: 'bundle.js',  
    chunkFilename: "vendors.js",  
    assetModuleFilename: 'images/[name].[ext]'
  },
  plugins: require('./webpack/webpack.plugins.cjs'),
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
  performance: {
    hints: false,
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    port: 9800,
  },

  mode: 'development'
};