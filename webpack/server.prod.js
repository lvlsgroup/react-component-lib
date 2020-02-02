const path = require('path');
const webpack = require('webpack');
const res = (p) => path.resolve(__dirname, p);

const entry = res('../src/server/render.js');
const output = res('../_build_prod/server');

module.exports = {
  mode: 'production',
  name: 'server',
  target: 'node',
  entry: [entry],
  output: {
    path: output,
    filename: 'render.js',
    libraryTarget: 'commonjs2',
    publicPath: '/levels-assets/',
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
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      'process.env.SERVER': JSON.stringify(true),
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
};
