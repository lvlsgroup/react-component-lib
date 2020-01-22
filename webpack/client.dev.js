process.traceDeprecation = true;
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin'); // here so you can see what chunks are built
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const postcssPresetEnv = require('postcss-preset-env');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const res = (p) => path.resolve(__dirname, p);
const entryFile = res('../src/client/client.js');
const outputFolder = res('../_build_dev/client');
const outputFile = '[name].js';

const BUILT_ASSETS_FOLDER = '/levels-assets/';

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
    entryFile,
  ],
  output: {
    filename: outputFile,
    chunkFilename: outputFile,
    path: outputFolder,
    publicPath: BUILT_ASSETS_FOLDER,
  },
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
            options: {
              ident: 'postcss',
              plugins: () => [postcssPresetEnv()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
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
      'react-dom': '@hot-loader/react-dom',
    },
  },
  optimization: {
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
    new CaseSensitivePathsPlugin(),
    new WriteFilePlugin(),
    new ExtractCssChunks({ hot: true, reloadAll: true, cssModules: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', '.env'),
      safe: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
