import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const pkg = require(path.resolve(process.cwd(), 'package.json'));

module.exports = {
  input: './src/index.js',

  plugins: [
    resolve(),

    babel({ include: ['src/**/*'] }),

    commonjs(),

    production && terser(),

    autoExternal(),
  ].filter(Boolean),

  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],

  watch: {
    include: 'src/**',
    clearScreen: false,
  },
};
