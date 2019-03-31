module.exports = {
  configureWebpack: {
    // https://github.com/vuejs/vue-cli/issues/2643
    // https://github.com/vuejs/vue-cli/issues/2675
    // https://webpack.js.org/configuration/resolve/#resolvesymlinks
    resolve: { symlinks: false },
  },
};
