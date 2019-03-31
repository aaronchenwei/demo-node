module.exports = () => ({
  presets: [
    [
      require('@babel/preset-env'),
      {
        targets: {
          node: 'current',
        },
      },
    ],
    [require('@babel/preset-typescript')],
  ],
  plugins: [
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    [require('@babel/plugin-proposal-class-properties'), { loose: true }],
    require('@babel/plugin-proposal-object-rest-spread'),
  ],
});
