const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

gulp.task('mytask', function (done) {
    console.log("HTTP Server Started");
    done();
})

gulp.task('sass', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles/style.css'))
})

gulp.task('js-to-es5', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(transpileTONative(['es8', 'es9'], 'es5'))
        .pipe(gulp.dest('./dist/js/main.js'))
})

gulp.task('js-minify', function () {
    return gulp.src('./src/js/main.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('./dist/styles/style.css'))
})

gulp.task('watch', function () {
    gulp.watch('./src/*', gulp.series(["sass", "js-minify", "js-to-es5"]));
})