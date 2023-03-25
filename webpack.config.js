// Thêm plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
    return {
        mode: argv.mode,
        output: {
            filename: "bundle.js",
        },
        plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    };
};
