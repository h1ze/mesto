const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./pages/index.js",
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer:  {
        static: path.resolve(__dirname, 'dist'),
        open: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}