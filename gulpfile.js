const {series, parallel, task, src, dest} = require('gulp');
const fs = require('fs');
const less = require('gulp-less');
const swc = require('gulp-swc');

const clean = done =>
{
    done();
};

//https://www.npmjs.com/package/gulp-less
task('build-styles', () =>
    src('src/**/*.less')
    .pipe(less({
        js: true
    }))
    .pipe(dest('dist')));

//https://github.com/konclave/gulp-swc
task('build-codebase', () =>
    src('src/**/*.js')
    .pipe(swc(JSON.parse(fs.readFileSync('.swcrc').toString())))
    .pipe(dest('dist'))
);

task('build', done =>
    series(clean, parallel('build-styles', 'build-codebase'))(done));
