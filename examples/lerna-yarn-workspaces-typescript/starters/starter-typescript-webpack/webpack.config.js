const path = require('path');
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
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },

  optimization: {
    noEmitOnErrors: true,
  },

  plugins: [],
};
