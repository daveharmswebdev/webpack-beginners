# Angular Tooling with Gulp
It's worth looking at common Angular tooling with gulp.

First let's look at the package.json file:
``` javascript
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-preset-es2015": "^6.18.0",
    "gulp": "^3.9.1",
    "gulp-babel": "^6.1.2",
    "gulp-concat": "^2.6.1",
    "gulp-load-plugins": "^1.4.0",
    "gulp-ng-annotate": "^2.0.0",
    "gulp-sourcemaps": "^2.2.2",
    "gulp-uglify": "^2.0.0"
  }
}
```
Let's talk about each devDependencies. Gulp is a task runner, like Grunt. Gulp concat is going to concat all the files that we tell it to. For a better explanation let's look at the gulpfile.js.
``` javascript
'use strict'

const gulp = require('gulp')
const $ = require('gulp-load-plugins')()

gulp.task('default', function(){
	gulp.src('js/**/*.js')
		.pipe($.babel({
			presets: ['es2015']
		}))
		.pipe($.ngAnnotate())
		.pipe($.sourcemaps.init())
		.pipe($.concat('bundle.js'))
		.pipe($.uglify())
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('bin/js'))
})
```
Like Browserify and Webpack, Gulp declares an entry point, but instead of a file it's an entire directory. For this project we are declaring the `/js` directory. If we look at the last .pipe chain we see the destination directory: `bin/js`. The name of the file is declared by the `$.concat`: `bundle.js`. If we commented out every pipe except concat, the resulting bundle file will be all the files in the src directory concatonated. This the file will execute because of the nature of angular, but other than some development convenience you wouldn't be any mileage out of the this tooling process.

That's why we have the accompanying gulp modules. Gulp-uglify minifies. Gulp-ng-annotate is required for uglifying angular modules, see [https://github.com/Kagami/gulp-ng-annotate](https://github.com/Kagami/gulp-ng-annotate) for details why and how. Long story short, if you don't use it your module will fail in the browswer. Gulp-sourcemaps creates sources maps. That way you can see your source files in a browser's dev tools and be able to step through break points. 

Gulp-babel as it used in this project translates es2015 JS to ecma5. Without this your code will not run in browsers today. 

The point of looking at this and looking at Browserify is that Webpack does the same thing, but in my opinion more elegantly.

