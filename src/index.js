// Module System

/* @ CommonJS
 * require, module.exports
 * */

/* @ AMD (Asynchronous Module Definition)
 * require, define
 * */

/* @ ES2015
 * import, export
 * */

// CommonJS implementation
// const sum = require('./sum');

// ES2015 Module System
/*
import sum from './sum';
import './image_viewer';

const total = sum(10, 9);
console.log(total);
*/

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then((module) => {
    // console.log(module);
    module.default();
  });
};

document.body.appendChild(button);
