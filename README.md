# jsModules Project (Webpack Integration)

Sup! Welcome to the **jsModules** project. I'm thrilled to share this cutting-edge demonstration of modern JavaScript development with Webpack with you. This project showcases the powerful capabilities of Webpack, including module bundling, code splitting, and asset management, using a variety of loaders and plugins to optimize and streamline the build process.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration Details](#configuration-details)
  - [Webpack Configuration](#webpack-configuration)
  - [Loaders](#loaders)
  - [Plugins](#plugins)
- [Code Splitting](#code-splitting)
- [Scripts](#scripts)
- [License](#license)
- [Screenshots](#screenshots)

## Introduction

In the ever-evolving landscape of web development, managing and optimizing your assets is crucial for performance and maintainability. With **jsModules**, I've created a comprehensive guide to harnessing the power of Webpack, the most popular module bundler for modern JavaScript applications. This project is designed to help you master the intricacies of Webpack, providing a real-world example that highlights essential features such as loaders, plugins, and dynamic imports for code splitting.

## Features

- **Advanced Module Bundling**: Efficiently bundles JavaScript, CSS, and image assets.
- **Sophisticated Loaders**: Integrates `babel-loader`, `css-loader`, `url-loader`, and `image-webpack-loader` for versatile file handling.
- **Robust Plugins**: Utilizes `extract-text-webpack-plugin` for extracting CSS into separate files.
- **Dynamic Code Splitting**: Implements dynamic imports to optimize loading times.
- **Modern ES2015 Modules**: Demonstrates the use of ES2015 module syntax for cleaner and more maintainable code.

![jsmodules webpack](https://i.imgur.com/h6v2nV7.png)

![jsmodules webpack](https://i.imgur.com/Oo3A8cq.png)

![jsmodules webpack](https://i.imgur.com/KaIgqIV.png)

![jsmodules webpack](https://i.imgur.com/K9sOaqn.png)

![jsmodules webpack](https://i.imgur.com/5kfoplp.png)

![jsmodules webpack](https://i.imgur.com/s3Ocfg1.png)

![jsmodules webpack](https://i.imgur.com/OVnswfk.png)

![jsmodules webpack](https://i.imgur.com/buK1C2i.png)

![jsmodules webpack](https://i.imgur.com/FoOTPVN.png)

![jsmodules webpack](https://i.imgur.com/fnR74jN.png)

![jsmodules webpack](https://i.imgur.com/T9JcLyb.png)

![jsmodules webpack](https://i.imgur.com/gvkaPry.png)

![jsModules webpack](https://i.imgur.com/XRMsSBK.png)

## Getting Started

To get up and running with the **jsModules** project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/colson0x1/js-modules.git
   cd js-modules
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Build the project:**

   ```sh
   npm run build
   ```

4. **Open `index.html` in your browser** to see the application in action.

## Project Structure

Here's a quick overview of the project structure to help you navigate:

```
jsModules/
├── assets/
│   ├── big.jpg
│   └── small.jpg
├── build/
│   └── bundle.js
├── src/
│   ├── image_viewer.js
│   ├── index.js
│   └── sum.js
├── styles/
│   └── image_viewer.css
├── .babelrc
├── package.json
└── webpack.config.js
```

## Configuration Details

### Webpack Configuration

The main configuration for Webpack is in `webpack.config.js`. Here's a peek at it:

```javascript
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
        test: /\.css$/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  plugins: [new ExtractTextPlugin('style.css')],
};

module.exports = config;
```

### Loaders

- **`babel-loader`**: Transpiles modern JavaScript to ES5, ensuring compatibility across browsers.
- **`css-loader`**: Processes CSS files, resolving `@import` and `url()` statements.
- **`url-loader`**: Converts files into base64 URIs if they are below the specified size threshold (40kb).
- **`image-webpack-loader`**: Optimizes images to reduce file size without compromising quality.

### Plugins

- **`ExtractTextPlugin`**: Extracts CSS into separate files, enhancing load times and allowing for parallel loading of assets.

## Code Splitting

One of the coolest features of Webpack is **code splitting**. This technique allows you to split your code into various bundles that can be loaded on demand, reducing the initial load time of your application. By leveraging dynamic imports, Webpack can automatically split your code based on different entry points or asynchronous imports, resulting in more efficient and performant applications.

### Why Code Splitting is Important

- **Performance Optimization**: By splitting code into smaller chunks, you ensure that the browser only loads the necessary parts of your application initially, leading to faster load times.
- **Lazy Loading**: Load parts of your application only when needed, improving the user experience by reducing the time to interactive.
- **Better Caching**: Smaller chunks of code can be cached more effectively, minimizing the amount of code that needs to be reloaded on subsequent visits.

### How I Used Code Splitting

In **jsModules**, I've used dynamic imports to demonstrate code splitting. Check out the `index.js` file where I dynamically import the `image_viewer.js` module when a button is clicked:

```javascript
const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then((module) => {
    module.default();
  });
};

document.body.appendChild(button);
```

This approach ensures that the `image_viewer` module is only loaded when the user interacts with the button, showcasing an efficient way to manage code and resources in modern web applications.

## Scripts

- **`npm run build`**: Executes Webpack to bundle the project files.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Screenshots

![jsModules webpack](https://i.imgur.com/7CrwhdU.png)

![jsModules webpack](https://i.imgur.com/5n6fF6Q.png)

![jsModules webpack](https://i.imgur.com/h6v2nV7.png)

![jsModules webpack](https://i.imgur.com/Oo3A8cq.png)

![jsModules webpack](https://i.imgur.com/KaIgqIV.png)

![jsModules webpack](https://i.imgur.com/K9sOaqn.png)

![jsModules webpack](https://i.imgur.com/mHJ9X3U.png)

![jsModules webpack](https://i.imgur.com/g97ly5C.png)

![jsModules webpack](https://i.imgur.com/5kfoplp.png)

![jsModules webpack](https://i.imgur.com/s3Ocfg1.png)

![jsModules webpack](https://i.imgur.com/OVnswfk.png)

![jsModules webpack](https://i.imgur.com/IHIMh3A.png)

![jsModules webpack](https://i.imgur.com/M3Hv8Pe.png)

![jsModules webpack](https://i.imgur.com/3CVctUv.png)

![jsModules webpack](https://i.imgur.com/qtNjtOa.png)

![jsModules webpack](https://i.imgur.com/Zk9UeyP.png)

![jsModules webpack](https://i.imgur.com/P3oVfma.png)

![jsModules webpack](https://i.imgur.com/8Ouh33y.png)

![jsModules webpack](https://i.imgur.com/rLuFzgv.png)

![jsModules webpack](https://i.imgur.com/buK1C2i.png)

![jsModules webpack](https://i.imgur.com/eiFHkLv.png)

![jsModules webpack](https://i.imgur.com/FoOTPVN.png)

![jsModules webpack](https://i.imgur.com/UIkWgUW.png)

![jsModules webpack](https://i.imgur.com/h4baqN2.png)

![jsModules webpack](https://i.imgur.com/lK1orbX.png)

![jsModules webpack](https://i.imgur.com/h6I5aNt.png)

![jsModules webpack](https://i.imgur.com/CjlToaL.png)

![jsModules webpack](https://i.imgur.com/xNJmvCb.png)

![jsModules webpack](https://i.imgur.com/2pSXHaN.png)

![jsModules webpack](https://i.imgur.com/V2Z40E2.png)

![jsModules webpack](https://i.imgur.com/XRMsSBK.png)

![jsModules webpack](https://i.imgur.com/wMk7NfW.png)

![jsModules webpack](https://i.imgur.com/iYjUod4.png)

![jsModules webpack](https://i.imgur.com/yPr0RFA.png)

![jsModules webpack](https://i.imgur.com/fnR74jN.png)

![jsModules webpack](https://i.imgur.com/T9JcLyb.png)

![jsModules webpack](https://i.imgur.com/gvkaPry.png)
