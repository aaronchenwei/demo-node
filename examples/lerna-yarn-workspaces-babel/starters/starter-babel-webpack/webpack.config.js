const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',

  devtool: 'source-map',

  externals: nodeExternals({
    modulesFromFile: true,
  }),

  resolve: {
    extensions: ['.js', '.json'],
  },

  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },

  optimization: {
    // optimization.noEmitOnErrors prevents Webpack
    // The NoEmitOnErrorsPlugin plugin prevents Webpack
    // from printing out compile time stats to the console.
    noEmitOnErrors: true,
  },

  plugins: [],
};
