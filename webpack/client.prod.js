const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const res = (p) => path.resolve(__dirname, p);
const entryFile = res('../src/client/client.js');
const outputFolder = path.join(__dirname, '../', '_build_prod', 'client');
const outputFileName = '[name].[chunkhash].js';

const BUILT_ASSETS_FOLDER = '/levels-assets/';

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'production',
  devtool: 'source-map',
  entry: [entryFile],
  output: {
    filename: outputFileName,
    chunkFilename: outputFileName,
    path: outputFolder,
    publicPath: BUILT_ASSETS_FOLDER,
  },
  stats: 'verbose',
  module: {
    rules: [
      {
        test: /(?!.*\.test)\.js$/,
        exclude: [/node_modules/, /__snapshots__/],
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              data:
                `@import "${res(
                  '../src/client/shared/styles/globals.scss'
                )}";` + ` $node-env: ${process.env.NODE_ENV};`,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)|fa-solid-900\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'font-icons/',
            },
          },
        ],
      },
      {
        test: /^(?!fa-solid-900).*\.(png|jpg|gif|svg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, '..', 'src', 'client'), 'node_modules'],
    alias: {
      '@rc-lib-client': path.resolve(__dirname, '..', 'src', 'client'),
      '@rc-lib-server': path.resolve(__dirname, '..', 'src', 'server'),
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
            ascii_only: true,
          },
          compress: {
            comparisons: false,
          },
        },
      }),
    ],
    runtimeChunk: {
      name: 'bootstrap',
    },
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  },
  plugins: [
    new ExtractCssChunks({
      filename: '[name].[contenthash].css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
    }),
    new Dotenv({
      path: path.resolve(__dirname, '../.env'),
      systemvars: true,
      safe: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.HashedModuleIdsPlugin(), // not needed for strategy to work (just good practice)
  ],
};
