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
const sum = require('./sum');

const total = sum(10, 9);
console.log(total);
