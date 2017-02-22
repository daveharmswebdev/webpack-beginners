# Context

## Browserify

Before we jump into Webpack I wanted to add some context. I want to start with Browserify, at the end of the day Webpack is a module bundler just like the logo states. And since this holds true for Browserify I'd like to talk about that first.

A lot of us are familiar with Browserify, it was a favorite at my boot camp.

``` javascript
const $ = require('./jquery.min.js')
const add = require('./add')
const subtract = require('./subtract')
const math = require('./math')
// const multiply = require('./math').multiply
const multiply = math.multiply
const { square, findSquareRoot } = require('./squares')
const world = require('./world')
```

Both bundling tools have an entry file, often named index.js. And uses the `require` keyword to add modules to the bundled javascript file.

A simple, effective way to run Browserify is as an NPM script written in the package.json file.

``` javascript
{
  "name": "calc",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "watch": "watchify src/index.js -o dist/bundle.js -v -d",
    "build": "browserify src/index.js -o dist/bundle.js -v"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "browserify": "^13.1.0",
    "watchify": "^3.7.0"
  }
}
```
This project installs browserify for the build, and watchify for the watching browserify used in development. The script calls the command with the first argument as the 'entry' file, in this case 'src/index.js' which is convention. Following the entry point is the -o flag followed by the output/destination. `browserify src/index.js -o dist/bundle.js -v` will take index.js and all it's required modules and it bundle it into dist/bundle.js. The `-v` flag stands for verbose, a report will print out in the terminal as browserify executes. The `-d` flag in the watch script stands for debug, meaning that Browserify will create source maps when you are developing your project.



