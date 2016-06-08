(function(){
	"use strict";
	var sass = require("gulp-sass");
	var gulp = require("gulp");

	//编译scss
	gulp.task("sass", function(){
		return	gulp.src(
						"main.scss"
					).pipe(
						sass().on('error', sass.logError)
					).pipe(
						gulp.dest("./build")
					);
	})

	//监听文件变化
	gulp.task("watch", function () {
        gulp.watch("main.scss", ["sass"]); 

    });

    
}())