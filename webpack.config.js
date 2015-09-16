var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js')

module.exports = {
	context: path.resolve('js'),
	entry: {
		about: './about_page.js',
		home: './home_page.js',
		contact: './contact_page.js',
	},
	output: {
		path: path.resolve('build/js'),
		publicPath: '/public/assets/js/',
		filename: "[name].js"
	},

	plugins: [commonsPlugin],

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
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},

	resolve: {
		extensions: ['','.js']
	}
}