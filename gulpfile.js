(function(){
	"use strict";
	var sass = require("gulp-sass");
	var autoprefixer = require('gulp-autoprefixer');
	var cssnano = require('gulp-cssnano');
	var rename = require('gulp-rename');
	var gulp = require("gulp");

	//编译压缩scss
	gulp.task("style", function(){
		return	gulp.src(
						"main.scss"
					).pipe(
						sass().on('error', sass.logError)
					).pipe(
						autoprefixer()
					).pipe(
						cssnano()
					).pipe(
						rename({
				            suffix: '.min'
        				})
					).pipe(
						gulp.dest("./build")
					);
	})

	//编译scss
	gulp.task("sass", function(){
		return	gulp.src(
						"main.scss"
					).pipe(
						sass().on('error', sass.logError)
					).pipe(
						gulp.dest("./")
					);
	})

	//监听文件变化
	gulp.task("watch", function () {
        gulp.watch("main.scss", ["sass"]); 
    });

    gulp.task("dev", ['sass', 'watch']);

    gulp.task("build", ['style']);

    
}())