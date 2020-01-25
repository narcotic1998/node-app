const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './dist/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    watch : false,
    // sourceType: 'unambiguous',
    plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
        ],
    module: {
        rules: [{
            test: /\.css$/,
            exclude : /node_modules/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // only enable hot in development
                        hmr: process.env.NODE_ENV === 'development',
                        // if hmr does not work, this is a forceful method.
                        reloadAll: true,
                    },
                },
                'css-loader',
            ],
        }, ],
    },
};