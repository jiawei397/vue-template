const path = require('path');
const pkg = require('./package');
const proxy = require('./build/proxy');
const pluginMap = require('./build/pluginMap');
const isDist = process.env.NODE_ENV === 'production';
const merge = function (map, map2) {
  for (let key in map2) {
    if (map[key] === undefined) {
      map[key] = map2[key];
    }
  }
  return map;
};
let template = `${isDist ? 'temp' : 'public'}/index.html`;
let defaultPageConfig = {
  version: pkg.version,
  staticPath: isDist ? '.' : 'http://localhost:5003',
  template,
  title: 'Loading...'
  // chunks: ['chunk-vendors', 'chunk-common', 'index']
};

let pages = {
  index: {
    entry: 'src/views/main/index.js',
    filename: 'index.html'
  },
  login: {
    entry: 'src/views/login/index.js',
    filename: 'login.html'
  }
};
for (let key in pages) {
  merge(pages[key], defaultPageConfig);
}

let externals = {};
if (isDist) {
  for (let key in pluginMap) {
    externals[key] = pluginMap[key].name;//value值是代码里要用的
  }
}
module.exports = {
  // css: {
  //   loaderOptions: {
  //     less: {
  //       javascriptEnabled: true
  //     }
  //   }
  // },
  publicPath: isDist
    ? './'
    : '/',
  productionSourceMap: false,
  configureWebpack: {
    externals
  },
  pages,
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', path.resolve('src/assets'))
      .set('@', path.resolve('src'));
    // config.output.filename('[name].js?[hash]').end();
  },
  devServer: {
    port: 5000,
    proxy
  }
};
