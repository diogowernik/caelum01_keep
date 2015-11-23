var gulp = require('gulp');

var del = require('del');

var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');

gulp.task('clean', function(){
  return del('build');
});

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*').pipe(gulp.dest('build'));
})

gulp.task('usemin', ['copy'], function() {
  return gulp.src('build/*.html')
    .pipe(usemin({
      html: [ minifyHtml() ],
      css: [ minifyCss() ],
      js: [ uglify()],
      inlinecss: [ minifyCss()],
      inlinejs: [ uglify() ]
    }))
    .pipe(gulp.dest('build'));
});
 
gulp.task('default', function() {
  gulp.start('usemin');
});


