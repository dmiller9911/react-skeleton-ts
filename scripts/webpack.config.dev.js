const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');

module.exports = Object.assign({}, baseConfig, {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/dev-server',
		...baseConfig.entry
  ],
	module: Object.assign({}, baseConfig.module, {
		preLoaders: [
			{ loader: 'tslint', test: /\.ts(x)?$/ }
		]
	}),
  plugins: [
		new webpack.HotModuleReplacementPlugin(),
		...baseConfig.plugins
	],
});