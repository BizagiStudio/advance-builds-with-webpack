var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve('js'),
	entry: ["./index"],
	output: {
		path: path.resolve('build/js'),
		publicPath: '/public/assets/js',
		filename: "bundle.js"
	},


	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: "raw-loader"
			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('shared.js'),
		new webpack.BannerPlugin("++++ GENERATED BY WEBPACK BANNER PLUGIN +++++++")
	],

	resolve: {
		extensions: ['','.js']
	}
}