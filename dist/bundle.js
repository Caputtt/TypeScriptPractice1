/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./users.ts\");\n/* harmony import */ var _userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo */ \"./userInfo.ts\");\n\r\n\r\nfunction getUsersJobPositions(usersArray) {\r\n    const UsersJobPositions = [];\r\n    usersArray.forEach(function (v, i) {\r\n        const newUserJobPosition = {\r\n            name: v.name,\r\n            position: _userInfo__WEBPACK_IMPORTED_MODULE_1__.usersInfoArray[i].organization.position,\r\n            age: _userInfo__WEBPACK_IMPORTED_MODULE_1__.usersInfoArray[i].age,\r\n            gender: v.gender\r\n        };\r\n        UsersJobPositions.unshift(newUserJobPosition);\r\n    });\r\n    return UsersJobPositions;\r\n}\r\nconst usersPositions = getUsersJobPositions(_users__WEBPACK_IMPORTED_MODULE_0__.usersArray);\r\nconsole.log('userPositions', usersPositions);\r\n\n\n//# sourceURL=webpack://PracticeTS1/./index.ts?");

/***/ }),

/***/ "./userInfo.ts":
/*!*********************!*\
  !*** ./userInfo.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersInfoArray\": () => (/* binding */ usersInfoArray)\n/* harmony export */ });\nconst usersInfoArray = [\r\n    {\r\n        userid: '127e4567-e89b-12d3-a458-426614174000',\r\n        name: 'John',\r\n        birthdate: '1982-02-17T21:00:00.000Z',\r\n        age: 40,\r\n        organization: {\r\n            name: 'Amazon',\r\n            position: 'General manager'\r\n        }\r\n    },\r\n    {\r\n        userid: '127e4567-e89a-12f3-a458-327395154000',\r\n        name: 'Anna',\r\n        birthdate: '1988-02-17T21:00:00.000Z',\r\n        age: 34,\r\n        organization: {\r\n            name: 'Amazon',\r\n            position: 'Manager'\r\n        }\r\n    }\r\n];\r\n\n\n//# sourceURL=webpack://PracticeTS1/./userInfo.ts?");

/***/ }),

/***/ "./users.ts":
/*!******************!*\
  !*** ./users.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersArray\": () => (/* binding */ usersArray)\n/* harmony export */ });\nconst usersArray = [\r\n    {\r\n        userid: '127e4567-e89b-12d3-a458-426614174000',\r\n        name: 'John',\r\n        gender: 'man'\r\n    },\r\n    {\r\n        userid: '127e4567-e89a-12f3-a458-327395154000',\r\n        name: 'Anna',\r\n        gender: 'woman'\r\n    }\r\n];\r\n\n\n//# sourceURL=webpack://PracticeTS1/./users.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./index.ts");
/******/ 	__webpack_require__("./users.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./userInfo.ts");
/******/ 	
/******/ })()
;