var gulp = require('gulp');
var uglify = require('gulp-uglify');
var foreach = require('gulp-foreach');
var filter = require('gulp-filter');
var less = require('gulp-less');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gulpFilter = require('gulp-filter');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');

var dest_path =  'public/asset';

gulp.task("app", function(){
    var jsFilter = gulpFilter('app/*.js', {restore: true}),
        cssFilter = gulpFilter('app/*.css', {restore: true});

    return gulp.src('app/*')
        .pipe(jsFilter)
        .pipe(gulp.dest(dest_path+'/app/js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(dest_path + '/app//js/'))
        .pipe(jsFilter.restore)

        .pipe(cssFilter)
        .pipe(gulp.dest(dest_path+'/app//css'))
        .pipe(minifycss())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(dest_path + '/app//css/'))
        .pipe(cssFilter.restore)
        ;
});

gulp.task('bowerfix', function() {
    gulp.src(['bower_components/mjolnic-bootstrap-colorpicker/dist/img/**/*']).pipe(gulp.dest(dest_path + '/vendor/img'));
});
gulp.task('bower', function() {
    var jsFilter = gulpFilter('**/*.js', {restore: true}),
        cssFilter = gulpFilter('**/*.css', {restore: true}),
        lessFilter = gulpFilter('**/*.less', {restore: true}),
        sassFilter = gulpFilter('**/*.sass', {restore: true}),
        fontFilter = gulpFilter(['**/*.eot', '**/*.woff', '**/*.woff2', '**/*.svg', '**/*.ttf'], {restore: true});

    return gulp.src(mainBowerFiles())

        .pipe(jsFilter)
        .pipe(gulp.dest(dest_path + '/vendor/js/'))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(dest_path + '/vendor/js/'))
        .pipe(jsFilter.restore)




        .pipe(lessFilter)
        .pipe(less())
        .pipe(gulp.dest(dest_path + '/vendor/css'))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(dest_path + '/vendor/css'))
        .pipe(lessFilter.restore)

        .pipe(sassFilter)
        .pipe(sass())
        .pipe(gulp.dest(dest_path + '/vendor/css'))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(dest_path + '/vendor/css'))
        .pipe(sassFilter.restore)


        .pipe(cssFilter)
        .pipe(gulp.dest(dest_path + '/vendor/css'))
        .pipe(minifycss())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(dest_path + '/vendor/css'))
        .pipe(cssFilter.restore)


        .pipe(fontFilter)
        // .pipe(flatten())
        .pipe(gulp.dest(dest_path + '/vendor/fonts'))
        .pipe(fontFilter.restore)
        ;

});

var paths = {
    allScripts: [
        'app/**/*.js'
    ],
    allCss:[
        'app/**/*.css'
    ]
};

gulp.task('default', ['bower', 'bowerfix','app']);

gulp.task('lint', function() {
    return gulp.src(paths.allScripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});  

gulp.task('watch', function() {
    gulp.watch(paths.allScripts, ['lint','app']);
    gulp.watch(paths.allCss, ['app']);
});