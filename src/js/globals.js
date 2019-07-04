import {version} from '../../package';

const api = process.env.VUE_APP_API;
console.log(api);
console.log(process.env.NODE_ENV);
window.VERSION = version;

export default {
  api
};
