const gulp = require('gulp')
const babel = require('gulp-babel')
const jasmine = require('gulp-jasmine')
const watch = require('gulp-watch')
const del = require('del')

gulp.task('default', ['clean-build', 'test'])

gulp.task('build', _ => {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
})

gulp.task('test', ['build'], _ => {
	return gulp.src('spec/*.spec.js')
		.pipe(jasmine())
})

gulp.task('clean-build', (callback) => {
  del(['dist/*'], callback)
})

gulp.task('ci', _ => {
  watch(['src/**/*.js', 'spec/*.spec.js'], (events, done) => {
    gulp.start('test')
  })
})