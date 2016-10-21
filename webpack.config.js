module.exports = {
	entry: './src/main.js',
	output: {
		path: `${__dirname}/public/js/`,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
		]
	}
};
