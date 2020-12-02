var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function(){
  return gulp.src('assets/sass/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function(){
  gulp.watch( 'assets/sass/style.scss', gulp.series( 'sass' ) ); 
  // Other watchers
})


var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '/'
    },
  })
})

