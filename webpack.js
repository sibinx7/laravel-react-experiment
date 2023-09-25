const isProduction = process.env.production ? true : false;
const sourcePath = path.resolve(__dirname, 'resources/react-laravel/index.js');
const buildPath = path.resolve(__dirname, 'public/frontend');
module.exports = {
  mode: isProduction,
  entry: sourcePath,
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    path: buildPath,
    filename: 'bundle.js',    
  },
  plugins: require('./webpack/webpack.plugins'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: require('./webpack.aliases'),
  },
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
};