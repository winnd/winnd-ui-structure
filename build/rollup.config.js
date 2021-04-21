import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'
import html from 'rollup-plugin-gen-html'
import _html from '@rollup/plugin-html'
import postcss from 'rollup-plugin-postcss'
import minify from 'rollup-plugin-babel-minify'
import clear from 'rollup-plugin-clear'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'

const path = require('path')

const _resolve = (src) => path.join(__dirname, '..', src)

const plugins = [
  clear({
    targets: ['dist_rollup']
  }),
  alias({
    entries: {
      'components': _resolve('/src/components')
    }
  }),
  copy({
    'src/assets': 'dist_rollup/assets'
  }),
  vue(),
  json(),
  postcss({
    extract: true,
    plugins: [] // 这里有一堆 postcss 的插件定义略去
  }),
  resolve({
    module: true,
    jsnext: true,
    main: true,
    browser: true,
    extensions: ['.vue', 'js']
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    sourceMap: false,
    extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
  }),
  // html({
  //   template: _resolve('src/index.html'),
  //   target: '../aa.html',
  //   hash: true,
  //   replaceToMinScripts: true
  // }),
  _html(),
  minify({
    comments: false,
    sourceMap: false
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]

export default {
  input: 'src/index.js',
  output: {
    file: 'dist_rollup/app.js',
    format: 'iife',
    sourcemap: false
  },
  plugins
}
