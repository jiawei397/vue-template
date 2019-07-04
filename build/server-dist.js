const express = require('express');
const compression = require('compression');
const path = require('path');
const proxy = require('./proxy.js');
const http_proxy = require('http-proxy-middleware');
const root = '/tarsier-dcv/dcvWeb/auth/';
const port = 5001;
const app = express();

for (let key in proxy) {
  app.use(key, http_proxy(proxy[key]));
}

app.use(compression());
// app.get('/', (req, res) => res.send('Hello World!'));

app.use(root, express.static(path.join(__dirname, '../dist')));//为了以当前目录为准，必须使用__dirname来处理相当路径
// console.log(path.resolve('C:/Documents/wk/gitlab', 'base-web'));
// app.use('/base/', express.static(path.join(__dirname, '../../base-web/src/')));

app.listen(port, () => {
  let uri = 'http://localhost:' + port + root;
  console.log('Listening at ' + uri + '\n');
});
