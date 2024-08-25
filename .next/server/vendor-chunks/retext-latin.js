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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Parser: () => (/* reexport safe */ _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Parser),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index.js */ \"(rsc)/./node_modules/retext-latin/lib/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV0ZXh0LWxhdGluL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUVuQztBQUNmLGlFQUFlQSxxREFBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL292ZXJyZWFjdGVkLy4vbm9kZV9tb2R1bGVzL3JldGV4dC1sYXRpbi9pbmRleC5qcz9hNmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXRleHRMYXRpbiwge1BhcnNlcn0gZnJvbSAnLi9saWIvaW5kZXguanMnXG5cbmV4cG9ydCB7UGFyc2VyfVxuZXhwb3J0IGRlZmF1bHQgcmV0ZXh0TGF0aW5cbiJdLCJuYW1lcyI6WyJyZXRleHRMYXRpbiIsIlBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/retext-latin/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/retext-latin/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/retext-latin/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Parser: () => (/* binding */ Parser),\n/* harmony export */   \"default\": () => (/* binding */ retextLatin)\n/* harmony export */ });\n/* harmony import */ var unherit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unherit */ \"(rsc)/./node_modules/unherit/index.js\");\n/* harmony import */ var parse_latin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse-latin */ \"(rsc)/./node_modules/parse-latin/lib/index.js\");\n/**\n * @typedef {import('nlcst').Root} Root\n */ \n// @ts-expect-error: untyped.\n\n/** @type {import('unified').ParserClass<Root>} */ const Parser = parse_latin__WEBPACK_IMPORTED_MODULE_0__.ParseLatin;\n/** @type {import('unified').Plugin<void[], string, Root>} */ function retextLatin() {\n    Object.assign(this, {\n        Parser: (0,unherit__WEBPACK_IMPORTED_MODULE_1__.unherit)(parse_latin__WEBPACK_IMPORTED_MODULE_0__.ParseLatin)\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV0ZXh0LWxhdGluL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0NBRUMsR0FFOEI7QUFDL0IsNkJBQTZCO0FBQ1M7QUFFdEMsZ0RBQWdELEdBQ3pDLE1BQU1FLFNBQVNELG1EQUFVQSxDQUFBO0FBRWhDLDJEQUEyRCxHQUM1QyxTQUFTRTtJQUN0QkMsT0FBT0MsTUFBTSxDQUFDLElBQUksRUFBRTtRQUFDSCxRQUFRRixnREFBT0EsQ0FBQ0MsbURBQVVBO0lBQUM7QUFDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVycmVhY3RlZC8uL25vZGVfbW9kdWxlcy9yZXRleHQtbGF0aW4vbGliL2luZGV4LmpzP2EyNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdubGNzdCcpLlJvb3R9IFJvb3RcbiAqL1xuXG5pbXBvcnQge3VuaGVyaXR9IGZyb20gJ3VuaGVyaXQnXG4vLyBAdHMtZXhwZWN0LWVycm9yOiB1bnR5cGVkLlxuaW1wb3J0IHtQYXJzZUxhdGlufSBmcm9tICdwYXJzZS1sYXRpbidcblxuLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QYXJzZXJDbGFzczxSb290Pn0gKi9cbmV4cG9ydCBjb25zdCBQYXJzZXIgPSBQYXJzZUxhdGluXG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPHZvaWRbXSwgc3RyaW5nLCBSb290Pn0gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldGV4dExhdGluKCkge1xuICBPYmplY3QuYXNzaWduKHRoaXMsIHtQYXJzZXI6IHVuaGVyaXQoUGFyc2VMYXRpbil9KVxufVxuIl0sIm5hbWVzIjpbInVuaGVyaXQiLCJQYXJzZUxhdGluIiwiUGFyc2VyIiwicmV0ZXh0TGF0aW4iLCJPYmplY3QiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/retext-latin/lib/index.js\n");

/***/ })

};
;