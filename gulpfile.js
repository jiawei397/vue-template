const gulp = require('gulp');
const del = require('del');
const utils = require('gulp-plugins-dcv');
const pluginMap = require('./build/pluginMap');

gulp.task('inject', function () {
  let arr = Object.keys(pluginMap);
  let defaultOptions = {
    entryDir: 'public',
    destDir: 'temp',
    commonPluginsJs: arr.map((str) => {
      let pkg = require(str + '/package');
      return pluginMap[str].dest + '?ver=' + pkg.version;
    })
  };
  return utils.inject('index.html', defaultOptions);
});

gulp.task('del', function () {
  return del('./temp');
});
