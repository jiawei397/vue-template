const fs = require('fs');
const path = require('path');

const mkdirsSync = (dirname) => {
  //console.log(dirname);
  if (fs.existsSync(dirname)) {
    return true;
  }
  if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
};

module.exports = {mkdirsSync};
