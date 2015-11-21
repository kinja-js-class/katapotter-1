const gulp = require('gulp')
const babel = require('gulp-babel')
const jasmine = require('gulp-jasmine')

gulp.task('default', ['build'])

gulp.task('build', _ => {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
})

gulp.task('test', ['build'], _ => {
	return gulp.src('spec/*.spec.js')
		.pipe(jasmine())
})
