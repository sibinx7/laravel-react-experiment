let mix = require('laravel-mix');
// let webpack = require('webpack');
// require('mix-tailwindcss');
// mix.postCss('resources/css/app.css', 'public/css', [
//   require("tailwindcss"),
// ]);
mix
  .js('resources/react-laravel/index.js', 'public/frontend/').react()
  // .js('resources/react-laravel/dashboard/index.js', 'public/dashboard/js').react()
mix.webpackConfig({
  output: {
    chunkFilename: "vendor.js",
    filename: "bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  stats: {
    children: true 
  }
});