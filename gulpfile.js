(function(){
	"use strict";
	var sass = require("gulp-sass");
	var gulp = require("gulp");

	gulp.task("sass", function(){
		return	gulp.src(
						"main.scss"
					).pipe(
						sass().on('error', sass.logError)
					).pipe(
						gulp.dest("./build")
					);
	})
}())