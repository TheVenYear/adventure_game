/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Control = function Control() {\n  var _this = this;\n\n  _classCallCheck(this, Control);\n\n  this.left = false;\n  this.up = false;\n  this.right = false;\n\n  this.keyListener = function (event) {\n    var keyState = event.type == \"keydown\";\n\n    switch (event.keyCode) {\n      case 37:\n        _this.left = keyState;\n        break;\n\n      case 38:\n        _this.up = keyState;\n        break;\n\n      case 39:\n        _this.right = keyState;\n        break;\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);\n\n//# sourceURL=webpack://adventure_game/./src/control.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ \"./src/control.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nvar C_HEIGHT = 250;\nvar C_WIDTH = 500;\nvar FRICTION = 0.25;\nvar SPEED_INCREASER = 0.5;\nvar SPEED = 5;\nvar GRAVITY = 0.6;\nvar context = document.querySelector(\"canvas\").getContext(\"2d\");\ncontext.canvas.height = C_HEIGHT;\ncontext.canvas.width = C_WIDTH;\nvar control = new _control__WEBPACK_IMPORTED_MODULE_0__.default();\nvar player = new _player__WEBPACK_IMPORTED_MODULE_1__.default(0, 0, 50, 50);\n\nvar loop = function loop() {\n  if (control.right) {\n    if (player.velX <= SPEED) {\n      player.velX += SPEED_INCREASER;\n    }\n  }\n\n  if (control.left) {\n    if (player.velX >= -SPEED) {\n      player.velX -= SPEED_INCREASER;\n    }\n  }\n\n  if (control.up && !player.jump) {\n    player.velY -= 10;\n    player.jump = true;\n  }\n\n  if (player.x < -player.width) {\n    player.x = C_WIDTH + player.width;\n  }\n\n  if (player.x > C_WIDTH + player.width) {\n    player.x = -player.width;\n  }\n\n  if (player.y > C_HEIGHT - player.height) {\n    player.jump = false;\n    player.velY = 0;\n    player.y = C_HEIGHT - player.height;\n    console.log(\"ПАДАЮ\");\n  } else {\n    player.y += player.velY += GRAVITY;\n  }\n\n  context.fillStyle = \"#3b3b3b\";\n  context.fillRect(0, 0, C_WIDTH, C_HEIGHT);\n  context.fillStyle = \"yellow\";\n  context.fillRect(player.x += player.velX, player.y, player.width, player.height);\n\n  if (player.velX >= FRICTION) {\n    player.velX -= FRICTION;\n  } else if (player.velX <= -FRICTION) {\n    player.velX += FRICTION;\n  }\n\n  window.requestAnimationFrame(loop);\n};\n\nwindow.requestAnimationFrame(loop);\nwindow.addEventListener(\"keydown\", control.keyListener);\nwindow.addEventListener(\"keyup\", control.keyListener);\nalert(\"dsadsafsa\");\n\n//# sourceURL=webpack://adventure_game/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Player = function Player(x, y, height, width) {\n  _classCallCheck(this, Player);\n\n  this.jump = true;\n  this.velX = 0;\n  this.velY = 0;\n  this.x = x;\n  this.y = y;\n  this.height = height;\n  this.width = width;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://adventure_game/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;