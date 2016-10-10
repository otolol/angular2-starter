var ts = require('gulp-typescript');

module.exports = (gulp, config) => {
    gulp.task('tsc-app', () => {
        return gulp.src(config.tsFiles)
            .pipe(ts('tsconfig.json'))
            .pipe(gulp.dest(config.tmp))
    })
}