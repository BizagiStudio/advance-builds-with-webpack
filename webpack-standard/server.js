var express = require('express');
var path = require('path');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.static(path.normalize(__dirname+'/public')));

//Only if the middleware is in dev mode !important
if(app.get('env') === 'development') {
	var webpackMiddleware = require("webpack-dev-middleware");
	var webpack = require('webpack');
	var config = require('./webpack.config');

	app.use(webpackMiddleware(webpack(config), {

		publicPath: "/build",

		headers: {"X-Custom-Webpack-Header":"yes"},

		stats: {
			colors: true
		}
	}));
}

app.use(function(req, res, next) {
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});

app.listen(8001, function () {
    console.log( "Server modfied by Victor Chavarro: ");
    console.log( "ROOT PATH: "+__dirname+'/public');
    console.log('Server available at http://localhost: 8001');
});