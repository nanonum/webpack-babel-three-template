const gulp = require('gulp');

// html
const pug   = require('gulp-pug');
// const htmlv = require('gulp-html-validator');
// const intercept = require('gulp-intercept');

// css
const sass   = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const autoprefixer = require('gulp-autoprefixer');

// utility
const path = require('path');
const eslint = require('gulp-eslint');
const notify  = require('gulp-notify');
const plumber = require('gulp-plumber');
const changed  = require('gulp-changed');

// setting
const dist_dir = 'dist';

gulp.task('watch', () => {
  gulp.watch([path.join( 'src/pug/**/*.pug'), path.join('!'+ 'src/pug/**/_*.pug')], ['pug']);
  gulp.watch([path.join( 'src/sass/**/*.scss'), path.join('!'+ 'src/sass/**/_*.scss')], ['sass']);
  // gulp.watch([path.join('dist', '**/*.html')], ['reload']); // static html watch(not pug)
});

gulp.task('pug', () => {
  gulp.src([path.join( 'src/pug/**/*.pug'), path.join('!'+ 'src/pug/**/_*.pug')])
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(path.join(dist_dir)))
});

const src_dir = 'src';
const sass_dir = 'sass';
gulp.task('sass', () => {
  var processors = [
      cssnext({browsers: ['last 2 version', "ie 10", 'ie 11', 'Android >= 4.2']})
  ];
  gulp.src([
    path.join(src_dir, sass_dir, '**', '*.scss'),
    path.join('!', src_dir, sass_dir, '**', '_*.scss')
  ])
  .pipe(changed(path.join(dist_dir), {extension: '.css'}))
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
  .pipe(sass({
    outputStyle: 'expanded',
    includePaths: require('node-bourbon').includePaths
  }))
  .pipe(postcss(processors))
  .pipe(autoprefixer())
  .pipe(gulp.dest(dist_dir))
  // .pipe(browserSync.reload({stream: true}));
});




gulp.task('default', ['watch']);
