const { inDev } = require('./webpack.helpers.cjs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    test: /\.(js|jsx)$/, // .js and .jsx files
    exclude: /node_modules/, // excluding the node_modules folder
    use: {
      loader: "babel-loader",
      options: {
        presets: [ '@babel/preset-env','@babel/preset-react']
      }
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
    ],
  },
  {
    // SCSS (SASS) Loader
    test: /\.s[ac]ss$/i,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'sass-loader' },
    ],
  },
  {
    // Assets loader
    // More information here https://webpack.js.org/guides/asset-modules/
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/images/[name][ext]',
    },
  },
  {
    // Assets loader
    // More information here https://webpack.js.org/guides/asset-modules/
    test: /\.(eot|ttf|woff|woff2)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/fonts/[name][ext]',
    },
  },
];