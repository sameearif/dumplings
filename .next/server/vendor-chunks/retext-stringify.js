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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index.js */ \"(rsc)/./node_modules/retext-stringify/lib/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV0ZXh0LXN0cmluZ2lmeS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUU1QyxpRUFBZUEscURBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVycmVhY3RlZC8uL25vZGVfbW9kdWxlcy9yZXRleHQtc3RyaW5naWZ5L2luZGV4LmpzPzE4NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJldGV4dFN0cmluZ2lmeSBmcm9tICcuL2xpYi9pbmRleC5qcydcblxuZXhwb3J0IGRlZmF1bHQgcmV0ZXh0U3RyaW5naWZ5XG4iXSwibmFtZXMiOlsicmV0ZXh0U3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/retext-stringify/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/retext-stringify/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/retext-stringify/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retextStringify)\n/* harmony export */ });\n/* harmony import */ var nlcst_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nlcst-to-string */ \"(rsc)/./node_modules/nlcst-to-string/lib/index.js\");\n/**\n * @typedef {import('nlcst').Root} Root\n */ \n/** @type {import('unified').Plugin<void[], Root, string>} */ function retextStringify() {\n    Object.assign(this, {\n        Compiler\n    });\n}\n/** @type {import('unified').CompilerFunction<Root, string>} */ function Compiler(tree) {\n    return (0,nlcst_to_string__WEBPACK_IMPORTED_MODULE_0__.toString)(tree);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV0ZXh0LXN0cmluZ2lmeS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Q0FFQyxHQUV1QztBQUV4QywyREFBMkQsR0FDNUMsU0FBU0M7SUFDdEJDLE9BQU9DLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFBQ0M7SUFBUTtBQUMvQjtBQUVBLDZEQUE2RCxHQUM3RCxTQUFTQSxTQUFTQyxJQUFJO0lBQ3BCLE9BQU9MLHlEQUFRQSxDQUFDSztBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL292ZXJyZWFjdGVkLy4vbm9kZV9tb2R1bGVzL3JldGV4dC1zdHJpbmdpZnkvbGliL2luZGV4LmpzPzZjYTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdubGNzdCcpLlJvb3R9IFJvb3RcbiAqL1xuXG5pbXBvcnQge3RvU3RyaW5nfSBmcm9tICdubGNzdC10by1zdHJpbmcnXG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPHZvaWRbXSwgUm9vdCwgc3RyaW5nPn0gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldGV4dFN0cmluZ2lmeSgpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCB7Q29tcGlsZXJ9KVxufVxuXG4vKiogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLkNvbXBpbGVyRnVuY3Rpb248Um9vdCwgc3RyaW5nPn0gKi9cbmZ1bmN0aW9uIENvbXBpbGVyKHRyZWUpIHtcbiAgcmV0dXJuIHRvU3RyaW5nKHRyZWUpXG59XG4iXSwibmFtZXMiOlsidG9TdHJpbmciLCJyZXRleHRTdHJpbmdpZnkiLCJPYmplY3QiLCJhc3NpZ24iLCJDb21waWxlciIsInRyZWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/retext-stringify/lib/index.js\n");

/***/ })

};
;