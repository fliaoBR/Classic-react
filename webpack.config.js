const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./App/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index_bundle.js",
		publicPath: "/",
	},
	module: {f
		rules: [
			{ test: /\.(js|jsx)$/, use: "babel-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
		],
	},
	resolve: {
		extensions: [".jsx", "..."],
	},
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: "app/index.html",
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
};
f;
