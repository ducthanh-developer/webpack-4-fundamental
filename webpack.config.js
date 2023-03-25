// Thêm plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {merge} = require("webpack-merge");
// require là 1 function
const modeConfig = env => require(`./build-ultis/webpack.${env}`)(env);

module.exports = ({mode, presets} = {mode: "production", presets: []}) => {
  console.log(mode, presets);
    return merge({
        mode: mode,
        output: {
            filename: "bundle.js",
        },
        plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode));
};
