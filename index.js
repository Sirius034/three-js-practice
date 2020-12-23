const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config');
const squareRouter = require('./src/server/routes/square');

const app = express();
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

app.get('/square', squareRouter);

app.post('/square', squareRouter);

app.listen(3000, () => {
    console.log('Он работате !@_@!');
})