const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const jasmine = require('gulp-jasmine');

gulp.task('default', () => {
	return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

gulp.task('buildtests', () => {
	return gulp.src('spec/*.spec.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('spec/temp'))
});

gulp.task('test', ['buildtests'], () => {
	return gulp.src('spec/temp/*.spec.js')
		.pipe(jasmine())
});
