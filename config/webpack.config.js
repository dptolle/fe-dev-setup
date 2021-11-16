const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourceDir = path.resolve(__dirname, '../src');
const contentBase = path.resolve(__dirname, '../dist');

module.exports = {
	mode: 'development',
	entry: sourceDir + '/index.tsx',
	devtool: 'inline-source-map',
	devServer: {
		static: contentBase + '/',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader',
					options: {
						configFile: path.resolve(__dirname, 'tsconfig.json'),
					},
				},
				exclude: [/node_modules/],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Frontend Development Setup',
			template: sourceDir + '/index.html',
		}),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
	},
	output: {
		filename: '[name].bundle.js',
		path: contentBase,
	},
};
