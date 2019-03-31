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
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },

  optimization: {
    // optimization.noEmitOnErrors prevents Webpack
    // The NoEmitOnErrorsPlugin plugin prevents Webpack
    // from printing out compile time stats to the console.
    noEmitOnErrors: true,
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],
};
