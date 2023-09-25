const webpack = require('webpack');
const { inDev } = require('./webpack.helpers.cjs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = [
  inDev() && new webpack.HotModuleReplacementPlugin(),
  inDev() && new ReactRefreshWebpackPlugin(),
  !inDev() && new CompressionPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].chunk.css',
  }),
  new BundleAnalyzerPlugin()
].filter(Boolean);