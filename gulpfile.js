var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifycss = require("gulp-minify-css");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var livereload = require("gulp-livereload");
var base64 = require("gulp-base64");
var spritesmith = require('gulp.spritesmith');
var compass = require('gulp-compass');
var gconcat = require('gulp-concat');

// gulp.task("css",function(){
// 	return gulp
// 		.src("public/css/*.css")
// 		.pipe(autoprefixer('last 2 version'))
// 		.pipe(minifycss())
// 		.pipe(rename({suffix: '.min'} ))
// 		.pipe(gulp.dest("public/build/css"));
// })


//默认启动任务
gulp.task("default",function(){
	gulp.run("uglify");
	gulp.run("compass");
	gulp.run("sprite");
	gulp.run("watch");

});

//合并压缩js
gulp.task('uglify', function() {
	return gulp
	  	.src('public/js/**/*.js')
	  	.pipe(gconcat("app.min.js"))
	  	.pipe(uglify()) 	
	  	.pipe(gulp.dest('public/build/js'));
});

//编译scss文件
gulp.task('compass', function() {
	return gulp
	  	.src('public/sass/*.scss')
	  	.pipe(compass({
	    	config_file: 'public/config.rb',
	    	css: 'public/stylesheets',
	    	sass: 'public/sass'
	  	}))
	  	.pipe(gulp.dest('public/stylesheets'));
});

//图片sprite任务
gulp.task('sprite', function () {
  var spriteData = gulp.src('public/img/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    algorithm:'',
    cssTemplate:'public/build/css/sp.css'
  }));
  spriteData.img.pipe(gulp.dest('public/build/img/'));
  spriteData.css.pipe(gulp.dest('public/build/css/'));
});

//gulp监听任务，任何js或css改变时执行
gulp.task("watch",function(){	
	gulp.watch("public/sass/**/*.scss",["compass"]);
	gulp.watch("public/js/**/*.js",["uglify"]);

	var sever = livereload();
	gulp.watch(["public/stylesheets/style.css","public/index.html","public/build/js/app.min.js","public/views/*.html"]).on("change",function(file){
		sever.changed(file.path);
	});
})
