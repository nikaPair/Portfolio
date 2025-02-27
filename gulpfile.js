import gulp from "gulp";
import sass from "gulp-sass";
import * as sassCompiler from "sass";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import uglify from "gulp-uglify";

const sassTask = sass(sassCompiler);

export function styles() {
    return gulp
        .src("./src/styles/*.scss")
        .pipe(sassTask().on("error", sassTask.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./dist/styles"));
}

export function scripts() {
    return gulp
        .src("./src/js/*.js")
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./dist/js"));
}

export function html() {
    return gulp.src("./*.html").pipe(gulp.dest("./dist"));
}

export function images() {
    return gulp.src("./src/images/**/*").pipe(gulp.dest("./dist/images"));
}

export function watch() {
    gulp.watch("./src/styles/*.scss", styles);
    gulp.watch("./src/js/*.js", scripts);
    gulp.watch("./src/*.html", html);
    gulp.watch("./src/images/**/*", images);
}

export const build = gulp.series(gulp.parallel(styles, scripts, html, images));

export default watch;
