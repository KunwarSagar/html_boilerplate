// packages
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const purgecss = require('gulp-purgecss');

// CSS task
function buildCss() {
    return gulp
        .src("src/assets/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(
            plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
          )      
        .pipe(sass({
            outputStyle: "expanded"
        }).on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 2 versions", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"],
            cascade: false
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(browserSync.stream({
            match: "**/*.css"
        }));
}

function minifyCSS() {
    return gulp.src("src/assets/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass({
            outputStyle: "expanded"
        }).on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(cleanCSS({
            compatibility: "ie8"
        }))
        .pipe(gulp.dest("dist/assets/css"));
}
function purge() {
    return gulp.src('dist/**/*.css')
        .pipe(purgecss({
            content: ['dist/*.html', 'dist/*.php']
        }))
        .pipe(gulp.dest('dist/'))
}
// exports
module.exports = {
    buildCss: buildCss,
    minifyCSS: minifyCSS,
    purge: purge
};