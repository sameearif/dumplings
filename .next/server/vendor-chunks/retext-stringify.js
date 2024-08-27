"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/retext-stringify";
exports.ids = ["vendor-chunks/retext-stringify"];
exports.modules = {

/***/ "(rsc)/./node_modules/retext-stringify/index.js":
/*!************************************************!*\
  !*** ./node_modules/retext-stringify/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index.js */ \"(rsc)/./node_modules/retext-stringify/lib/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV0ZXh0LXN0cmluZ2lmeS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0Qzs7QUFFNUMsaUVBQWUscURBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVycmVhY3RlZC8uL25vZGVfbW9kdWxlcy9yZXRleHQtc3RyaW5naWZ5L2luZGV4LmpzPzAwOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJldGV4dFN0cmluZ2lmeSBmcm9tICcuL2xpYi9pbmRleC5qcydcblxuZXhwb3J0IGRlZmF1bHQgcmV0ZXh0U3RyaW5naWZ5XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/retext-stringify/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/retext-stringify/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/retext-stringify/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retextStringify)\n/* harmony export */ });\n/* harmony import */ var nlcst_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nlcst-to-string */ \"(rsc)/./node_modules/nlcst-to-string/lib/index.js\");\n/**\n * @typedef {import('nlcst').Root} Root\n */\n\n\n\n/** @type {import('unified').Plugin<void[], Root, string>} */\nfunction retextStringify() {\n  Object.assign(this, {Compiler})\n}\n\n/** @type {import('unified').CompilerFunction<Root, string>} */\nfunction Compiler(tree) {\n  return (0,nlcst_to_string__WEBPACK_IMPORTED_MODULE_0__.toString)(tree)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV0ZXh0LXN0cmluZ2lmeS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DOztBQUV3Qzs7QUFFeEMsV0FBVyxnREFBZ0Q7QUFDNUM7QUFDZix1QkFBdUIsU0FBUztBQUNoQzs7QUFFQSxXQUFXLGtEQUFrRDtBQUM3RDtBQUNBLFNBQVMseURBQVE7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVycmVhY3RlZC8uL25vZGVfbW9kdWxlcy9yZXRleHQtc3RyaW5naWZ5L2xpYi9pbmRleC5qcz9mZDZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbmxjc3QnKS5Sb290fSBSb290XG4gKi9cblxuaW1wb3J0IHt0b1N0cmluZ30gZnJvbSAnbmxjc3QtdG8tc3RyaW5nJ1xuXG4vKiogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjx2b2lkW10sIFJvb3QsIHN0cmluZz59ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXRleHRTdHJpbmdpZnkoKSB7XG4gIE9iamVjdC5hc3NpZ24odGhpcywge0NvbXBpbGVyfSlcbn1cblxuLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5Db21waWxlckZ1bmN0aW9uPFJvb3QsIHN0cmluZz59ICovXG5mdW5jdGlvbiBDb21waWxlcih0cmVlKSB7XG4gIHJldHVybiB0b1N0cmluZyh0cmVlKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/retext-stringify/lib/index.js\n");

/***/ })

};
;