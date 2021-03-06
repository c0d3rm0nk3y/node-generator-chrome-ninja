<% if (modules === 'es6') { -%>
import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
<% } else { -%>
const gulp = require('gulp')
    , imagemin = require('gulp-imagemin')
<% } -%>

const IMAGES = 'app/**/*.{jpg,png,jpeg,gif}'
    , REST = [ 'app/**/*.{ico,txt,html,webp,svg}'
             , 'app/**/*.css'
             , 'app/_locales/**/*.json'
             , 'app/styles/fonts/**/*.*' ]

gulp.task('assets:imagemin', () => {
  return gulp.src(IMAGES)
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('dist'))
})

gulp.task('assets:rest', () => {
  return gulp.src(REST, { base: 'app' }).pipe(gulp.dest('dist'))
})

gulp.task('assets:watch', (done) => {
  gulp.watch(IMAGES, ['assets:imagemin'])
  gulp.watch(REST, ['assets:rest'])

  done()
})

gulp.task('assets', ['assets:imagemin', 'assets:rest'])
