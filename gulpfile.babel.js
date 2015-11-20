const gulp = require('gulp');
const babel = require('gulp-babel');
const jasmine = require('gulp-jasmine');

gulp.task('default', () => {
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('buildtests', () => {
	return gulp.src('spec/*.spec.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'))
});

gulp.task('test', ['default', 'buildtests'], () => {
	return gulp.src('dist/*.spec.js')
		.pipe(jasmine())
});
