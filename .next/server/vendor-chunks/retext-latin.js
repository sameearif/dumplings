"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/retext-latin";
exports.ids = ["vendor-chunks/retext-latin"];
exports.modules = {

/***/ "(rsc)/./node_modules/retext-latin/index.js":
/*!********************************************!*\
  !*** ./node_modules/retext-latin/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Parser: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Parser),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index.js */ \"(rsc)/./node_modules/retext-latin/lib/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV0ZXh0LWxhdGluL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDs7QUFFbkM7QUFDZixpRUFBZSxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL292ZXJyZWFjdGVkLy4vbm9kZV9tb2R1bGVzL3JldGV4dC1sYXRpbi9pbmRleC5qcz8zYmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXRleHRMYXRpbiwge1BhcnNlcn0gZnJvbSAnLi9saWIvaW5kZXguanMnXG5cbmV4cG9ydCB7UGFyc2VyfVxuZXhwb3J0IGRlZmF1bHQgcmV0ZXh0TGF0aW5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/retext-latin/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/retext-latin/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/retext-latin/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Parser: () => (/* binding */ Parser),\n/* harmony export */   \"default\": () => (/* binding */ retextLatin)\n/* harmony export */ });\n/* harmony import */ var unherit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unherit */ \"(rsc)/./node_modules/unherit/index.js\");\n/* harmony import */ var parse_latin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse-latin */ \"(rsc)/./node_modules/parse-latin/lib/index.js\");\n/**\n * @typedef {import('nlcst').Root} Root\n */\n\n\n// @ts-expect-error: untyped.\n\n\n/** @type {import('unified').ParserClass<Root>} */\nconst Parser = parse_latin__WEBPACK_IMPORTED_MODULE_0__.ParseLatin\n\n/** @type {import('unified').Plugin<void[], string, Root>} */\nfunction retextLatin() {\n  Object.assign(this, {Parser: (0,unherit__WEBPACK_IMPORTED_MODULE_1__.unherit)(parse_latin__WEBPACK_IMPORTED_MODULE_0__.ParseLatin)})\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV0ZXh0LWxhdGluL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQzs7QUFFK0I7QUFDL0I7QUFDc0M7O0FBRXRDLFdBQVcscUNBQXFDO0FBQ3pDLGVBQWUsbURBQVU7O0FBRWhDLFdBQVcsZ0RBQWdEO0FBQzVDO0FBQ2YsdUJBQXVCLFFBQVEsZ0RBQU8sQ0FBQyxtREFBVSxFQUFFO0FBQ25EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3ZlcnJlYWN0ZWQvLi9ub2RlX21vZHVsZXMvcmV0ZXh0LWxhdGluL2xpYi9pbmRleC5qcz84ZThlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbmxjc3QnKS5Sb290fSBSb290XG4gKi9cblxuaW1wb3J0IHt1bmhlcml0fSBmcm9tICd1bmhlcml0J1xuLy8gQHRzLWV4cGVjdC1lcnJvcjogdW50eXBlZC5cbmltcG9ydCB7UGFyc2VMYXRpbn0gZnJvbSAncGFyc2UtbGF0aW4nXG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGFyc2VyQ2xhc3M8Um9vdD59ICovXG5leHBvcnQgY29uc3QgUGFyc2VyID0gUGFyc2VMYXRpblxuXG4vKiogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjx2b2lkW10sIHN0cmluZywgUm9vdD59ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXRleHRMYXRpbigpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCB7UGFyc2VyOiB1bmhlcml0KFBhcnNlTGF0aW4pfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/retext-latin/lib/index.js\n");

/***/ })

};
;