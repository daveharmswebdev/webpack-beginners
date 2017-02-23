# Vendor Splitting
This is probably 

``` javascript
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'react-router'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: 'build/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
```

A lot going on here, let's start with the entry key:

``` javascript
entry: {
  bundle: './src/index.js',
  vendor: VENDOR_LIBS
}
```

What this says to webpack is that we are going to have to bundles and they are going to be called bundle.js and vendor.js. The bundle.js is going to contain everything imported in index.js and vendor.js is going to contain everything listed in the VENDOR_LIBS array. Here's the thing, unless we instruct otherwise webpack will pack everything that is in the vendor.js bundle into bundle.js. This is a complete waste. We want a slim bundle.js trimmed of all the vendor libs. Execute this project after removing this section: 

``` javascript
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor'
}),
```

You will get this result:

``` bash
Time: 2849ms
        Asset       Size  Chunks                    Chunk Names
    bundle.js     897 kB       0  [emitted]  [big]  bundle
    vendor.js     891 kB       1  [emitted]  [big]  vendor
```

Notice the two files are nearly the same size, this because both bundles have the vendor lib assets. Return the config file to original and we get:

``` bash
Time: 2255ms
        Asset       Size  Chunks                    Chunk Names
    bundle.js    6.25 kB       0  [emitted]         bundle
    vendor.js     894 kB       1  [emitted]  [big]  vendor
```

What the CommonsChunkPlugin does is remove whatever is in vendor.js from bundle.js.
