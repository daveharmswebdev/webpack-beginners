# Babel and Webpack

![jive](https://cdn.meme.am/cache/instances/folder321/400x/55772321.jpg)

The good news is that we have this awesome version of javascript called es2015, the JS formerly knows as ECMA 6. The badnews is that some browsers are not sympatico with it. So we need someone that can speak jive just in case there is a desktop out there using Internet Explorer 11, iOS 9, or Android. Checkout the [ECMAScript 6 compatibility table](https://kangax.github.io/compat-table/es6/).

Look at the devDependencies required to speak jive (ECMAScript 5).
``` javascript
"devDependencies": {
  "babel-core": "^6.23.1",
  "babel-loader": "^6.3.2",
  "babel-preset-env": "^1.1.8",
  "webpack": "^2.2.0-rc.0"
}
```
Babel-core does the translation, babel-loader allows webpack to load the JS into the babel-core, and babel-preset-env is the dictionary used to translate. 
``` javascript
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
```
This projects webpack.config.js just like the barebones except this module entry. Within module is a rules array which has one object. The object says use 'babel-loader' and load anything that ends in `.js`. In other words translate all javascript files with babel. We've accounted for babel-core and babel-loader, but what about that 3rd dependency, babel-present-env. That comes up the .babelrc file in the root of the project. 
``` javascript
{
  "presets": ["babel-preset-env"]
}
```
I suggest running this project with and without the module entry in the webpack.config.js file and then inspecting bundle.js. It should be pretty obvious what babel does, especially with the es2015 array spread operator.
