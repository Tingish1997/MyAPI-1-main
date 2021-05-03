const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

/*
 --TOP LEVEL FUNCTIONS--
    gulp.task - Define tasks
    gulp.scr - Point tofiles to use
    gulp.dest - Ponts to folder to output
    gulp.watch - watch files and folders for changes
*/

//Logs Message
gulp.task('message', async function(){
    return console.log('Gulp is running...');
});

//Copy All HTML files
gulp.task('copyHtml', async function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//Optimize Images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

//Minify JS
gulp.task('minify', async function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//Scripts
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});
