const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/pages/index.js",
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

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader:"css-loader",
                        options: {
                            importLoaders: 1,
                        }
                    },
                    "postcss-loader"
                ],  
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[name].[hash][ext][query]'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'fonts/[name].[hash][ext][query]'
                }
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ]
}