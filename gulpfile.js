var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-ais-css', function() {
  console.log('test');
});

gulp.task('concat-aisforms-css', function() {
  return gulp.src('./app/aisforms/styles/aisforms-common/*.css')
    .pipe(concat('aisformsCommon.css'))
    .pipe(gulp.dest('./dist/aisforms/styles/'));
});