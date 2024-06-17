/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module '@babel/core'\nRequire stack:\n- /home/colson/reactprod/jsModules/node_modules/babel-loader/lib/index.js\n- /home/colson/reactprod/jsModules/node_modules/loader-runner/lib/loadLoader.js\n- /home/colson/reactprod/jsModules/node_modules/loader-runner/lib/LoaderRunner.js\n- /home/colson/reactprod/jsModules/node_modules/webpack/lib/NormalModule.js\n- /home/colson/reactprod/jsModules/node_modules/webpack/lib/NormalModuleFactory.js\n- /home/colson/reactprod/jsModules/node_modules/webpack/lib/Compiler.js\n- /home/colson/reactprod/jsModules/node_modules/webpack/lib/webpack.js\n- /home/colson/reactprod/jsModules/node_modules/webpack/bin/webpack.js\n babel-loader@9 requires Babel 7.12+ (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1142:15)\n    at Module._load (node:internal/modules/cjs/loader:983:27)\n    at Module.require (node:internal/modules/cjs/loader:1230:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (/home/colson/reactprod/jsModules/node_modules/babel-loader/lib/index.js:3:11)\n    at Module._compile (node:internal/modules/cjs/loader:1368:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)\n    at Module.load (node:internal/modules/cjs/loader:1205:32)\n    at Module._load (node:internal/modules/cjs/loader:1021:12)\n    at Module.require (node:internal/modules/cjs/loader:1230:19)\n    at require (node:internal/modules/helpers:179:18)\n    at loadLoader (/home/colson/reactprod/jsModules/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/home/colson/reactprod/jsModules/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/colson/reactprod/jsModules/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/home/colson/reactprod/jsModules/node_modules/webpack/lib/NormalModule.js:131:2)\n    at NormalModule.build (/home/colson/reactprod/jsModules/node_modules/webpack/lib/NormalModule.js:179:15)\n    at Compilation.buildModule (/home/colson/reactprod/jsModules/node_modules/webpack/lib/Compilation.js:129:9)\n    at Compilation.<anonymous> (/home/colson/reactprod/jsModules/node_modules/webpack/lib/Compilation.js:406:8)\n    at /home/colson/reactprod/jsModules/node_modules/webpack/lib/NormalModuleFactory.js:243:4\n    at /home/colson/reactprod/jsModules/node_modules/webpack/lib/NormalModuleFactory.js:94:13\n    at /home/colson/reactprod/jsModules/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/home/colson/reactprod/jsModules/node_modules/webpack/lib/CompatibilityPlugin.js:52:4)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/home/colson/reactprod/jsModules/node_modules/tapable/lib/Tapable.js:272:13)\n    at onDoneResolving (/home/colson/reactprod/jsModules/node_modules/webpack/lib/NormalModuleFactory.js:69:11)\n    at onDoneResolving (/home/colson/reactprod/jsModules/node_modules/webpack/lib/NormalModuleFactory.js:190:6)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)");

/***/ }
/******/ ]);