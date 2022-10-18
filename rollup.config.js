import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { terser } from "rollup-plugin-terser";

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    "input": "src/index.ts",
    "output": [
      { 
        "file": "dist/index.js",
        "format": "cjs",
        "sourcemap": true
      },
      {
        "file": "dist/index.es.js",
        "format": "es",
        "sourcemap": true
      }
    ],
    "plugins": [
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
      commonjs(),
      babel({
          exclude: 'node_modules/**',
          presets: ['@babel/preset-react'],
          extensions
      }),
      external(),
      resolve(),
      postcss({
        modules: true,
        plugins: [
          require('postcss-import'),
          require('tailwindcss'),
          require('autoprefixer'),
        ],
        minimize: true,
        sourceMap: false,
        // extract: false,
        minimize: true,
        modules: {
          // see generateScopedName options here
          // https://github.com/css-modules/postcss-modules
          generateScopedName: '[local]',
        },
      }),
      terser()
    ]
  }
]