import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

const env = process.env.NODE_ENV || 'development';
const isDevelopmentEnv = env === 'development';
const isProductionEnv = env === 'production';

const pkg = require(path.resolve('package.json'));

module.exports = {
  input: './src/index.ts',

  plugins: [
    resolve(),

    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: true,
      clean: true,
      cacheRoot: 'node_modules/.rts2_cache',
    }),

    commonjs(),

    isProductionEnv && terser(),

    autoExternal(),

    filesize({ showMinifiedSize: isProductionEnv, showGzippedSize: false }),
  ].filter(Boolean),

  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: isDevelopmentEnv,
    },
  ],

  watch: {
    include: 'src/**',
    clearScreen: false,
  },
};
