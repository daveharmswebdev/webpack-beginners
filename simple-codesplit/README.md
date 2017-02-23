# Introducing Code Splitting
The point of code splitting is efficiency of resources and the optimization of the user experience. The patience of a user is measured at [10 seconds](https://www.quora.com/How-long-will-the-average-user-wait-for-a-webpage-to-load-before-they-abandon). Anything longer than that and the user feels like their is something wrong and they bail. So when we load up large, rich web pages we want to only load what is necessary. Webpack provides the means to load only what we need to load.

``` javascript
const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
  System.import('./image_viewer')
    .then(module => {
      module.default();
    });
};

document.body.appendChild(button);
```

When our app loads we only want to load what the user will initially see and interact with. And when the user creates an event, like click a button, then our app will load more JS. It is the `System.import('./image_viewer')` that tells webpack to create a separate bundle for the image_viewer module. This concept will leveraged for route splitting, which is covered in another section.

For this example, `npm install`, then `npm run build`.

``` bash
Time: 1282ms
      Asset     Size  Chunks             Chunk Names
0.bundle.js    16 kB       0  [emitted]
  bundle.js  5.82 kB       1  [emitted]  main
   [0] ./src/image_viewer.js 458 bytes {0} [built]
   [1] ./src/index.js 249 bytes {1} [built]
   [3] ./styles/image_viewer.css 193 bytes {0} [built]
   [4] ./assets/small.jpg 13.6 kB {0} [built]
```

Notice we have to bundles now: 0.bundle.js and bundle.js. Now open index.html with the dev tools open to the network tab with the js options checked. You only see the bundle.js loaded. Click the button on the page and we see that 0.bundle.js is loaded. That's how we are able to split our code and control what gets loaded.

