var gulpConf = require('./gulp.conf')();
var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();

function startBrowserSync(config) {
    browserSync.init(config);
    browserSync.reload();
}

var tasks = requireDir('tasks');

for(var key in tasks) {
    if(tasks.hasOwnProperty(key)) {
        var func = tasks[key];
        func(gulp, gulpConf)
    }
}

gulp.task('default', ['tsc-app'], () => {
    startBrowserSync(gulpConf.browserSync.dev)
})