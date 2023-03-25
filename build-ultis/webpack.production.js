const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => ({
    output: {
        // Tên thay đổi mỗi lần build
        filename: "[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
})