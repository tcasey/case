var gulp = require('gulp'),
    styles = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    // deploy = require('gulp-gh-pages');
    // uglifycss = require('gulp-uglifycss'),
    ngAnnotate = require('gulp-ng-annotate'),
    watcher = gulp.watch(['./main/**/*.js', './main/css/*.scss', './main/**/*.html'], ['default']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});
//browser sync to get live server like features with gulp

gulp.task('styles', function() { // .scss is newer file version of .sass
  gulp.src('./main/**/*.scss')
    .pipe(styles())
    // .pipe(uglifycss())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'))
});

gulp.task('javascript', function() {
  gulp.src(['./main/**/*.js'])
    .pipe(ngAnnotate())
    // .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/scripts'))
});

gulp.task('html', function() {
  gulp.src('./main/**/*.html')
    // .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public/html'))
});


//  Push build to gh-pages

// gulp.task('deploy', function () {
//  return gulp.src("./public/**/*")
//    .pipe(deploy())
// });


gulp.task('default', ['styles', 'javascript', 'html']);
