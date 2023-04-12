import { createRequire } from 'module';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import * as banner from 'bannerjs';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: {
      name: 'copyTextToClipboard',
      file: pkg.browser,
      format: 'umd',
      banner: banner.multibanner(),
      sourcemap: true,
    },
    plugins: [
      nodeResolve(), // so Rollup can find `ms`
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/copy-to-clipboard.umd.min.js',
      format: 'umd',
      name: 'copyTextToClipboard',
      banner: banner.onebanner(),
      sourcemap: true
    },
    plugins: [
      nodeResolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      terser(),
    ]
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify 
  // `file` and `format` for each target)
  {
    input: 'src/main.js',
    external: ['ms'],
    output: [
      // { file: pkg.main, format: 'umd', banner: banner.multibanner() },
      { file: pkg.main, format: 'cjs', banner: banner.multibanner(), exports: 'auto' },
      { file: pkg.module, format: 'es', banner: banner.multibanner(), exports: 'auto' }
    ]
  }
];