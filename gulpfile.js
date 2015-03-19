var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var jest = require('gulp-jest');
var debug = require('gulp-debug');
var path = require('path');

gulp.task('build', function () {
  browserify({
    entries: './src/UserStream.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('react-stream.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('jest', function () {
    var nodeModules = path.resolve('./node_modules');
    return gulp.src('**')
        .pipe(jest({
            scriptPreprocessor: nodeModules + '/babel-jest',
            testPathIgnorePatterns: [
                "node_modules",
                "test/support"
            ],
            moduleFileExtensions: [
                "jsx",
                "js",
                "json",
                "react"
            ],
            //rootDir: "src",
            testDirectoryName: "test",
            unmockedModulePathPatterns: [nodeModules + '/react']
        }));
});

gulp.task('test', ['jest']);
gulp.task('default', ['build']);
