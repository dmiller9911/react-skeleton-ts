const path = require('path');
const cssimport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const failPlugin = require('webpack-fail-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/index.tsx')
  ],
  output: {
    filename: 'bundle.js',
		publicPath: '/',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
		loaders: [
			{ loader: 'ts-loader', test: /\.ts(x)?$/ },
			{ loader: 'style-loader!css-loader!postcss-loader', test: /\.css$/ },
			{ loader: 'file-loader', test: /\.(png|jpg|gif)$/ }
		]
	},
	resolve: {
		root: path.resolve('.'),
		extensions: ['.ts', '.tsx', '.js', ''],
		alias: {
			aphrodite: 'aphrodite/no-important'
		}
	},
	ts: {
		compilerOptions: {
			noEmit: false
		}
	},
	plugins: [
		failPlugin,
		new HtmlWebpackPlugin({
			template: '!!html!./src/index.html'
		})
	],
	postcss: (webpack) => [
		cssimport({
			path: path.resolve(__dirname, '../src/styles'),
      addDependencyTo: webpack
		}),
		cssnext()
	],

};
