// Thêm plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
// require là 1 function
const modeConfig = (env) => require(`./build-ultis/webpack.${env}`)(env);
const presetConfig = require(`./build-ultis/loadPresets`);
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return merge(
        {
            mode: mode,
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/,
                        use: [
                            {
                                loader: "url-loader",
                                options: {
                                    // Giới hạn dung lượng file
                                    limit: 5000,
                                },
                            },
                        ],
                    },
                ],
            },
            output: {
                filename: "bundle.js",
            },
            plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
        },
        modeConfig(mode),
        presetConfig({ mode, presets })
    );
};
