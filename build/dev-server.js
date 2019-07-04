const express = require('express');
const compression = require('compression');
const path = require('path');
let map = require('./pluginMap');
const port = 5003;
const app = express();

app.use(compression());

for (let key in map) {
  app.use(key, express.static(path.join(__dirname, `../node_modules/${map[key]}`)));
}

app.listen(port, () => {
  console.info(`server started in http://localhost:${port}`);
});
