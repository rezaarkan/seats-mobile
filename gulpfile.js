var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

var cssSrcPath = 'app/styles',
    cssSrcName = '/main.scss',
    cssDestPath = './dist',
    jsSrcPath = 'app/scripts/**/*.js',
    jsDestPath = './dist',
    jsDestName = 'seats.min.js';

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
});

gulp.task('js', function() {
  return gulp.src(jsSrcPath)
    .pipe($.concat(jsDestName))
    .pipe(gulp.dest(jsDestPath))
});

gulp.task('js:build', function() {
  return gulp.src(jsSrcPath)
    .pipe($.concat(jsDestName))
    .pipe($.uglify())
    .pipe(gulp.dest(jsDestPath))
});

gulp.task('watch', function() {
  gulp.watch(cssSrcPath + '/**/*.scss', ['css']);
  gulp.watch(jsSrcPath, ['js']);
});

gulp.task('css:build', ['css'], function() {
  return gulp.src('./dist/main.css')
             .pipe($.rev())
             .pipe(gulp.dest('./dist'))
             .pipe($.rev.manifest())
             .pipe(gulp.dest('./dist'));
})

gulp.task('clean', function() {
  return gulp.src('./dist')
  .pipe($.rimraf());
})

gulp.task('build', ['clean', 'css:build'], function() {
  return gulp.src('./app/assets/**')
  .pipe(gulp.dest('./dist/assets'));
})
