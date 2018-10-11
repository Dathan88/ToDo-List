const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	mode: 'development',
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
		new HtmlWebpackPlugin({
			title: 'ToDo List',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'output'),
		publicPath: '/',
	},
	devServer: {
		contentBase: path.join(__dirname, 'output'),
		compress: true,
		port: 9000,
		historyApiFallback: true,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread'],
					},
				},
			},
		],
	},
};
