var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    contentBase: '/home/rodrigo/workspace/ml/src/client',
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'src/client/index.html'));
});

app.listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});

//const webpack = require('webpack');
//const WebpackDevServer = require('webpack-dev-server');
//const config = require('./webpack.config');
//const path = require('path');
//const host = 'localhost';
//const port = 3000;

//new WebpackDevServer(webpack(config), {
        //contentBase: '/home/rodrigo/workspace/ml/src/client',
        //publicPath: config.output.publicPath,
        //historyApiFallback: true,
        //hot: true,
        //stats: {
            //colors: true
        //}
    //})
    //.listen(port, host, (err) => {
        //if (err) {
            //console.log(err);
        //}
    //});
