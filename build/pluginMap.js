//key值是要复制到dist的位置，value是node_modules中文件
let map = {
  'vue': {
    name: 'Vue', //代码里要用的
    src: 'vue/dist/vue.min.js'//源文件
  },
  'jquery': {
    name: '$',
    src: 'jquery/dist/jquery.min.js'
  },
  'uino-i18n': {
    name: 'L',
    src: 'uino-i18n/index.js'
  },
  'uino-iview': {
    name: 'iview',
    src: 'uino-iview/dist/iview.min.js'
  }
};
for (let key in map){
  let obj = map[key];
  if (!obj.dest){
    obj.dest = `plugins/${key}.min.js`;
  }
  if (!obj.isOrigin){
    obj.src = `node_modules/${obj.src}`;
  }
}

module.exports = map;
