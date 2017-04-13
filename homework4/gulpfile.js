var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');
gulp.task('sass',function(){
	return gulp.src('sass/*.sass')
			.pipe(sass())
			.pipe(gulp.dest('css'))
})
gulp.task('server',function(){
	gulp.watch('sass/*.sass',['sass']);
	return gulp.src('./')
			.pipe(server({
				livereload: true,
				directoryListing: true,
				open: "shopping.html"
			}))
})
