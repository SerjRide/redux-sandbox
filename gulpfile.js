var gulp = require('gulp');
var sass = require('gulp-sass');

function taskSass(a,b){
   console.log(a * b);
   return a * b
};

gulp.task('sass', taskSass(2,3));




