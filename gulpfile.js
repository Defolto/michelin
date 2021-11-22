var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(done){
    gulp.src('scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('css'));
      done()
});

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', gulp.series('sass')); 
})