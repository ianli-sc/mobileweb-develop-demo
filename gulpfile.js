var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src('./stylesheets/*.less')
        .pipe(less())
        .pipe(gulp.dest('./stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('./stylesheets/**/*.less', ['less']);
});

gulp.task('default', ['less']);