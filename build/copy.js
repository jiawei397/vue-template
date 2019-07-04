const fs = require('fs');
const path = require('path');
const map = require('./pluginMap');
const {mkdirsSync} = require('./utils');

for (let key in map) {
  let index = map[key].dest.lastIndexOf('/');
  let dir = map[key].dest.substring(0, index);
  mkdirsSync(path.join(__dirname, `../dist/${dir}`));
  fs.writeFileSync(path.join(__dirname, `../dist/${map[key].dest}`), fs.readFileSync(path.join(__dirname, `../${map[key].src}`), 'utf8'), 'utf8');
}

console.info('copy ok!');
