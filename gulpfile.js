
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch');

gulp.task('concat-ais-css', function() {
  return gulp.src(['./assets/shared/styles/*.css','./assets/ais/styles/ais-common/*.css'])
    .pipe(concat('aisCommon.css'))
    .pipe(gulp.dest('./static/styles/'));
});

gulp.task('concat-aisforms-css', function() {
  return gulp.src(['./assets/shared/styles/*.css','./assets/aisforms/styles/aisforms-common/*.css'])
    .pipe(concat('aisformsCommon.css'))
    .pipe(gulp.dest('./static/styles/'));
});

gulp.task('concat-standardcommon-css', function() {
  return gulp.src(['./assets/aisforms/styles/standard-common/*.css','./assets/aisforms/styles/shared-for-forms/*.css']) // only combines files in standard-common folder and shared-forms, not shared
    .pipe(concat('standardCommon.css'))
    .pipe(gulp.dest('./static/styles/'));
});

gulp.task('concat-printcommon-css', function() {
  return gulp.src(['./assets/aisforms/styles/shared-for-forms/*.css',
  './assets/aisforms/styles/print-common/*.css',
  './assets/shared/styles/table-row-numbers.css'])
    .pipe(concat('printCommon.css'))
    .pipe(gulp.dest('./static/styles/'));
});

gulp.task('concat-preform-css', function() {
  return gulp.src(['./assets/shared/styles/*.css','./assets/aisforms/styles/preform/*.css',
    './assets/aisforms/styles/standard-common/tables.css'])
    .pipe(concat('preform.css'))
    .pipe(gulp.dest('./static/styles/'));
});
