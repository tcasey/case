var gulp = require('gulp'),
    styles = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    htmlmin = require('gulp-htmlmin'),
    uglifycss = require('gulp-uglifycss'),
    minifyCss = require('gulp-minify-css'),
    ngAnnotate = require('gulp-ng-annotate'),
    watcher = gulp.watch(['./main/**/*.js', './main/css/*.scss', './main/**/*.html'], ['default']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});
//browser sync to get live server like features with gulp

gulp.task('styles', function() {
  return gulp.src('./main/**/*.scss')
    .pipe(styles())
    .pipe(minifyCss())
    .pipe(plumber())
    .pipe(concat('style.css'))
    .pipe(rename({
      basename : 'style',
      extname : '.min.css'
    }))
    .pipe(gulp.dest('./docs/styles'))
});

gulp.task('javascript', function() {
  return gulp.src(['./main/**/*.js'])
    .pipe(ngAnnotate())
    .pipe(plumber())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename({
      basename : 'all',
      extname : '.min.css'
    }))
    .pipe(gulp.dest('./docs/scripts'))
});

gulp.task('vendor', function() {
  return gulp.src(['./node_modules/image-loader-angular/js/image-loader.js'])
    .pipe(ngAnnotate())
    .pipe(plumber())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(rename({
      basename : 'vendor',
      extname : '.min.css'
    }))
    .pipe(gulp.dest('./docs/scripts'))
});

gulp.task('html', function() {
  return gulp.src('./main/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./docs/html'))
});




gulp.task('default', ['styles', 'javascript', 'vendor', 'html']);
