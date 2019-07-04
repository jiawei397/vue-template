const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const map = require('../tests/data');
// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({extended: false});
const port = 5002;
const api = '/dcv-api/';

const app = express();
// app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(compression());

app.all('*', function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  // res.header('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

/**
 * 修正格式
 */
const format = (result) => {
  if (typeof result !== 'object' || result.success === undefined) {
    result = {
      success: true,
      data: result
    };
  }
  return result;
};

const start = () => {
  for (let url in map) {
    let result = map[url];
    app.get(`${api}${url}`, (req, res) => {
      res.send(format(result));
    });
    app.post(`${api}${url}`, (req, res) => {
      console.log(url, result);
      if (typeof result === 'function') {
        res.send(result.call(null, req.body));
        return;
      }
      res.send(format(result));
    });
  }
  app.get('/', (req, res) => res.send('Hello mock!'));
};

start();
app.listen(port, () => {
  console.info(`server started in http://localhost:${port}`);
});

const exit = () => {
  process.exit();
};

module.exports = exit;
