'use strict';
var gulp = require('gulp'),
    shell = require('gulp-shell'),
    jshint = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    stylish = require('jshint-stylish'),
    jscs = require('gulp-jscs');

gulp.task('jsdoc', shell.task([
  './node_modules/.bin/jsdoc -c ./doc-config.json'
]));

gulp.task('lint', function () {
  return gulp.src(['./src/**/*.js'], ['./test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function () {
  return gulp.src('test/**/*.spec.js')
    .pipe(jasmine());
});


gulp.task('jscs', function () {
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
    .pipe(jscs());
});

gulp.task('build', ['lint', 'jscs', 'test']);
