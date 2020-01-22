const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const postcssPresetEnv = require('postcss-preset-env');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const res = (p) => path.resolve(__dirname, p);

const nodeModules = res('../node_modules');
const entry = res('../src/server/render.js');
const output = res('../_build_dev/server');

const BUILT_ASSETS_FOLDER = '/levels-assets/';

// if you're specifying externals to leave unbundled, you need to tell Webpack
// to still bundle `react-universal-component`, `webpack-flush-chunks` and
// `require-universal-module` so that they know they are running
// within Webpack and can properly make connections to client modules:
const externals = fs
  .readdirSync(nodeModules)
  .filter(
    (x) => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x)
  )
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`;
    return externals;
  }, {});

externals['react-dom/server'] = 'commonjs react-dom/server';

module.exports = {
  mode: 'development',
  name: 'server',
  target: 'node',
  devtool: 'source-map',
  entry: [entry],
  externals,
  output: {
    path: output,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: BUILT_ASSETS_FOLDER,
  },
  module: {
    rules: [
      {
        test: /(?!.*\.test)\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [postcssPresetEnv()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data:
                '@import "' +
                res('../src/client/shared/styles/globals.scss') +
                '";' +
                ' $node-env: ' +
                process.env.NODE_ENV +
                ';',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
            },
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
  plugins: [
    new CaseSensitivePathsPlugin(),
    new WriteFilePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new Dotenv({
      path: path.resolve(__dirname, '../.env'),
      safe: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      'process.env.SERVER': JSON.stringify(true),
    }),
  ],
};
