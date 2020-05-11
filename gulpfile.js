var gulp = require('gulp');
var concat = require('gulp-concat');
var count = require('gulp-count');

gulp.task('concat-ais-css', function() {
  console.log('test');
});

gulp.task('concat-aisforms-css', function() {
  return gulp.src('./assets/aisforms/styles/shared/styles/*.css', './assets/aisforms/styles/aisforms-common/aisformsCommon.css')
  	.pipe(count('## css-files selected'))
    .pipe(concat('aisformsCommon.css'))
    .pipe(gulp.dest('./static/aisforms/styles/'));
});