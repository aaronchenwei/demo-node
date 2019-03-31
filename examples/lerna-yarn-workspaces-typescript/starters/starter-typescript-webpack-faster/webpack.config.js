const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',

  devtool: 'source-map',

  externals: nodeExternals({
    modulesFromFile: true,
  }),

  entry: path.resolve(__dirname, 'src/index.ts'),

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
      },
    ],
  },

  optimization: {
    noEmitOnErrors: true,
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      useTypescriptIncrementalApi: true,
    }),
  ],
};
