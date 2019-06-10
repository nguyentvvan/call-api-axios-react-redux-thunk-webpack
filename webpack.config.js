const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    "axios",
    "bootstrap",
    // "font-awesome",
    "jquery",
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-thunk",
];

const devServer = {
    port: 4000,
    open: true,
    disableHostCheck: true, //remove info in terminal
    historyApiFallback: true, //remove info in terminal
    overlay: true, //remove info in terminal
    stats: 'minimal', //remove info in terminal
    inline: true, //remove info in terminal
    compress: true, //remove info in terminal
    contentBase: '/'
}

const config = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        filename: '[name].[chunkhash].js',
        // path: path.resolve(__dirname, 'build')
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                use: ['babel-loader'],
                test: /\.js$/,
                exclude: '/node_modules'
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery",
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    devServer
}

module.exports = config;