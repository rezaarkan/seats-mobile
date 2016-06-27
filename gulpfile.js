var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

var cssSrcPath = 'app/styles',
    cssSrcName = '/main.scss',
    cssDestPath = './dist';

gulp.task('css', function() {
  return gulp.src(cssSrcPath + cssSrcName)
           .pipe($.sourcemaps.init())
           .pipe($.sass().on('error', $.sass.logError))
           .pipe($.autoprefixer({
             browsers: ['last 2 versions'],
             cascade: false
           }))
           .pipe($.sourcemaps.write())
           .pipe(gulp.dest(cssDestPath));
})

gulp.task('css:watch', function() {
  gulp.watch(cssSrcPath + '/**/*.scss', ['css']);
});

gulp.task('css:build', ['css'], function() {
  return gulp.src('./dist/main.css')
             .pipe($.rev())
             .pipe(gulp.dest('./dist'))
             .pipe($.rev.manifest())
             .pipe(gulp.dest('./dist'));
})
