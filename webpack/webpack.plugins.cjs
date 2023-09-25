const webpack = require('webpack');
const { inDev } = require('./webpack.helpers.cjs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  inDev() && new webpack.HotModuleReplacementPlugin(),
  inDev() && new ReactRefreshWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].chunk.css',
  }),
  new BundleAnalyzerPlugin()
].filter(Boolean);