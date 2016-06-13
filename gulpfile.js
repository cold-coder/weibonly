(function(){
	"use strict";
	var sass = require("gulp-sass");
	var autoprefixer = require('gulp-autoprefixer');
	var cssnano = require('gulp-cssnano');
	var gulp = require("gulp");

	//编译scss
	gulp.task("sass", function(){
		return	gulp.src(
						"main.scss"
					).pipe(
						sass().on('error', sass.logError)
					).pipe(
						autoprefixer()
					).pipe(
						cssnano()
					).pipe(
						gulp.dest("./build")
					);
	})

	//监听文件变化
	gulp.task("watch", function () {
        gulp.watch("main.scss", ["sass"]); 
    });

    gulp.task("dev", ['sass', 'watch']);

    
}())