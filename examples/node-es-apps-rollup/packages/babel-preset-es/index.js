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
  ],
  plugins: [
    [require('@babel/plugin-proposal-class-properties'), { loose: true }],
    require('@babel/plugin-proposal-object-rest-spread'),
  ],
});
