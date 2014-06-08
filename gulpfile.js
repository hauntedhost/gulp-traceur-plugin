var gulp = require('gulp');

// gulp plugins
var concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    traceur = require('gulp-traceur');

// script paths
var paths = {
  vendor: 'js/vendor/*.js',
  modules: 'js/modules/*.js',
  app: 'js/app/*.js'
}

var onError = function(err) {
  gutil.beep();
  console.log(err);
};

// task: compile scripts
gulp.task('scripts', function () {
  // vendor
  gulp.src(paths.vendor)
      .pipe(plumber({
        errorHandler: onError
      }))
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('dist'))

  // app
  gulp.src(paths.app)
      .pipe(plumber({
        errorHandler: onError
      }))
      .pipe(concat('app.js'))
      .pipe(traceur())
      .pipe(gulp.dest('dist'))
});

// watch
gulp.task('watch', function() {
  gulp.watch([paths.vendor, paths.modules, paths.app], ['scripts']);
});

gulp.task('default', ['scripts']);
