var gulp = require('gulp');
var wrap = require('gulp-wrap-umd');

gulp.task('default', function() {
    // Default task
});

gulp.task('umd', function() {
    gulp.src(['src/*.js'])
        .pipe(wrap({
            namespace: 'UISwitch'
        }))
        .pipe(gulp.dest('dist/'));
});
