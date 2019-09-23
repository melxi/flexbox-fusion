var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		sass = require('gulp-sass'),
		notify = require('gulp-notify'),
		plumber = require('gulp-plumber');


function copy() {
  gulp.src('./app/index.html')
			.pipe(gulp.dest('./dist'));
}

function style() {
  return gulp.src('./app/sass/**/*.sass')
    .pipe(plumber({
      errorHandler: notify.onError(function(err) {
        return {
          title: 'Styles',
          message: err.message
        }
      })
    }))
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
};

function server() {
	browserSync.init({
		server: {
			baseDir: './app/'
		}
	});
  gulp.watch('./app/sass/**/*.sass', style);
  gulp.watch('./app/**/*.html').on('change', browserSync.reload);
};

gulp.task('default', gulp.series(server));