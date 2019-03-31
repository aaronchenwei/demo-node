import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const extensions = ['.js', '.jsx'];

const dependencies = Object.keys(pkg.dependencies);

const name = 'StarterBabelRollup';

export default {
  input: './src/index.js',

  external: dependencies,

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Compile ES6 files through babel
    babel({ extensions, include: ['src/**/*'] }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    production && terser(),
  ],

  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.browser,
      format: 'iife',
      name,

      // https://rollupjs.org/guide/en#output-globals-g-globals
      globals: {},
    },
  ],
};
