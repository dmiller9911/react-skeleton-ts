const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  contentBase: path.resolve(__dirname, '../dist'),
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
		colors: true,
		chunks: false,
		version: false,
		cachedAssets: false,
		hash: false,
		exclude: ["node_modules"]
	}
})
.listen(3000, 'localhost', (err, result) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});