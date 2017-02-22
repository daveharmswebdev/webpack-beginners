# Barebones -- bundling only
Disclosure: I relied on Stephen Grider's [Webpack 2: The Complete Developer's Guide](https://www.udemy.com/webpack-2-the-complete-developers-guide) for guidance, as well as Nader Dabit's [Beginner's Guide to webpack](https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.uc1g7ujoa).

The simplest thing you can do is install webpack globally:

``` bash
npm install webpack -g
```

Then create a app.js and an index.html, with the following script tag `<script src="bundle.js"></script>`. And then execute the following:

``` bash
webpack ./app.js bundle.js
```

We call the webpack command, the first argument is the source and the second argument is the destination. This is similar to the Browserify scripts in the Context example. As simple as it is this is hardly a sustainable way to run webpack.

## Require vs. Import
In this project we use Node style `require` and `module.exports` statements to pull in our modules. In subsequent projects we will use `import` and `export`. They both work.

## First webpack.config.js
The webpack.config.js file is how we instruct webpack to execute. Here is a bare bones config file:

``` javascript
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};

module.exports = config;
```

We create a config file and then export it (we could have easily just exported, either style works). The entry key declares where get the code to be bundled and the output declares it. The output key has two keys of its own. Filename is obvious and so is path. But notices where entry takes a relative path for its source file, filename must use an explicit path, that's why we are using the node [path](https://nodejs.org/api/path.html) module to create the path value. [__dirname](https://nodejs.org/docs/latest/api/globals.html) is a variable that holds the directory name of the current module. Thus, `path.resolve(__dirname, 'build')` take two arguments representing paths, the first is __dirname, which is prepended to the second -- 'build'. Finally we get `/Users/dave/beginners/webpack-beginners/barebones/build`.

## Executing Webpack

We execute with `npm run build` (or yarn) which calls the following script: `"build": "webpack"`. Is it mandatory to run webpack locally? I'm not sure, I simply prefer it. Grider prefers it, and so do most blog writers. The reason is version control.

``` bash
> barebones@1.0.0 build /Users/dave/beginners/webpack-beginners/barebones
> webpack

Hash: 0e4c50013081bf1fbb1f
Version: webpack 2.2.1
Time: 62ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.72 kB       0  [emitted]  main
   [0] ./src/sum.js 51 bytes {0} [built]
   [1] ./src/index.js 77 bytes {0} [built]
```
The last three lines tell the story that bundle.js was created and it was created from two files below it, and that bundle.js file is literally greater than the sum of its parts. The reason is obvious after inspecting bundle.js.