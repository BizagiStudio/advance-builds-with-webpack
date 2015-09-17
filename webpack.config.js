var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: path.resolve('js'),
	entry: {
		about: './about_page.js',
		home: './home_page.js',
		contact: './contact_page.js',
	},
	output: {
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
		filename: "[name].js"
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
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
			},
			{
				test: /\.(png|jpg|ttf|eot)$/,
				exclude: /node_modules/,
				loader: "url-loader?limit=100000"
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: "json-loader!" + path.resolve('loader/strip')
			}
		]
	},

	plugins: [
		new ExtractTextPlugin("styles.css"),
		new webpack.optimize.CommonsChunkPlugin('shared.js')
	],

	resolve: {
		extensions: ['','.js']
	}
}