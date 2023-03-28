module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{ loader: "ts-loader" }],
            },
        ],
    },
});
