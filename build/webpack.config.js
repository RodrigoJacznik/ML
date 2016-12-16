const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../src/client/public');
const APP_DIR = path.resolve(__dirname, '../src/client/app');

const config = {
    entry: [
        'webpack-hot-middleware/client',
        APP_DIR + '/index.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/public'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loaders: ['react-hot', 'babel', 'eslint']
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;

