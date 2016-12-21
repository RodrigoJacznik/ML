const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../src/client/public');
const APP_DIR = path.resolve(__dirname, '../src/client/app');

const config = {
    devtool: 'cheap-eval-source-map',
    entry: path.join(APP_DIR, 'index.js'),
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loaders: ['react-hot', 'babel', 'eslint']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;

