const gulp = require('gulp');
const sass = require('gulp-sass');

function styles() {
  return gulp.src('./public').pipe(hulp.dest())
}

function script() {

}

gulp.task('styles', styles());
