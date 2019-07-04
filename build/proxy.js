const {ip} = require('../info');

module.exports = {
    '/mock-api/': {
      target: ip,
      pathRewrite: {'^/mock-api': '/XXX'}
    }
  };
