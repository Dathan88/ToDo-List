const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
	target: 'web',
	//externals: [nodeExternals()],
	context: __dirname,
	entry: {
		app: './src/index.js',
	},
	mode: 'development',
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
	},
	plugins: [
		//new webpack.AutomaticPrefetchPlugin(),
		new CleanWebpackPlugin(['dist']),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
		new HtmlWebpackPlugin({
			title: 'ToDo List',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'output'),
		publicPath: '/',
		pathinfo: false,
	},
	devServer: {
		contentBase: path.join(__dirname, 'output'),
		watchContentBase: true,
		compress: true,
		port: 666,
		historyApiFallback: true,
		publicPath: '/',
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader?cacheDirectory=true',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread'],
					},
				},
			},
			{
				test: require.resolve('jquery'),
				use: [
					{
						loader: 'expose-loader',
						options: 'jQuery',
					},
					{
						loader: 'expose-loader',
						options: '$',
					},
				],
			},
		],
	},
});
