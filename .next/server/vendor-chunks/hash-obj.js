"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hash-obj";
exports.ids = ["vendor-chunks/hash-obj"];
exports.modules = {

/***/ "(rsc)/./node_modules/hash-obj/index.js":
/*!****************************************!*\
  !*** ./node_modules/hash-obj/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hashObject)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var is_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-obj */ \"(rsc)/./node_modules/is-obj/index.js\");\n/* harmony import */ var sort_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sort-keys */ \"(rsc)/./node_modules/sort-keys/index.js\");\n\n\n\n\nfunction hashObject(object, {encoding = 'hex', algorithm = 'sha512'} = {}) {\n\tif (!(0,is_obj__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(object)) {\n\t\tthrow new TypeError('Expected an object');\n\t}\n\n\tif (encoding === 'buffer') {\n\t\tencoding = undefined;\n\t}\n\n\treturn crypto__WEBPACK_IMPORTED_MODULE_0__.createHash(algorithm)\n\t\t.update(JSON.stringify((0,sort_keys__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(object, {deep: true})), 'utf8')\n\t\t.digest(encoding);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzaC1vYmovaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUNFO0FBQ0c7O0FBRWxCLDZCQUE2Qix3Q0FBd0MsSUFBSTtBQUN4RixNQUFNLGtEQUFRO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSw4Q0FDSztBQUNiLHlCQUF5QixxREFBUSxVQUFVLFdBQVc7QUFDdEQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL292ZXJyZWFjdGVkLy4vbm9kZV9tb2R1bGVzL2hhc2gtb2JqL2luZGV4LmpzP2UxYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2lzLW9iaic7XG5pbXBvcnQgc29ydEtleXMgZnJvbSAnc29ydC1rZXlzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzaE9iamVjdChvYmplY3QsIHtlbmNvZGluZyA9ICdoZXgnLCBhbGdvcml0aG0gPSAnc2hhNTEyJ30gPSB7fSkge1xuXHRpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbiBvYmplY3QnKTtcblx0fVxuXG5cdGlmIChlbmNvZGluZyA9PT0gJ2J1ZmZlcicpIHtcblx0XHRlbmNvZGluZyA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBjcnlwdG9cblx0XHQuY3JlYXRlSGFzaChhbGdvcml0aG0pXG5cdFx0LnVwZGF0ZShKU09OLnN0cmluZ2lmeShzb3J0S2V5cyhvYmplY3QsIHtkZWVwOiB0cnVlfSkpLCAndXRmOCcpXG5cdFx0LmRpZ2VzdChlbmNvZGluZyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/hash-obj/index.js\n");

/***/ })

};
;