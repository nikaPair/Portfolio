"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css"); 
const rename = require("gulp-rename");

exports.sass = function () {
    return gulp
        .src("./src/styles/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS()) 
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./dist"));
};

exports.watch = function () {
    gulp.watch("./src/styles/*.scss", gulp.series(exports.sass));
};
