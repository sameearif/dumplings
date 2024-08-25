"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-smartypants";
exports.ids = ["vendor-chunks/remark-smartypants"];
exports.modules = {

/***/ "(rsc)/./node_modules/remark-smartypants/index.js":
/*!**************************************************!*\
  !*** ./node_modules/remark-smartypants/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkSmartypants)\n/* harmony export */ });\n/* harmony import */ var retext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! retext */ \"(rsc)/./node_modules/retext/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unist-util-visit */ \"(rsc)/./node_modules/unist-util-visit/lib/index.js\");\n/* harmony import */ var retext_smartypants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! retext-smartypants */ \"(rsc)/./node_modules/retext-smartypants/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('retext-smartypants').Options} Options\n */ \n\n\n/**\n * remark plugin to implement SmartyPants.\n *\n * @type {import('unified').Plugin<[Options?] | void[], Root>}\n */ function remarkSmartypants(options) {\n    const processor = (0,retext__WEBPACK_IMPORTED_MODULE_0__.retext)().use(retext_smartypants__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n    const transformer = (tree)=>{\n        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_2__.visit)(tree, \"text\", (node)=>{\n            node.value = String(processor.processSync(node.value));\n        });\n    };\n    return transformer;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXNtYXJ0eXBhbnRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0NBR0MsR0FFOEI7QUFDUztBQUNJO0FBRTVDOzs7O0NBSUMsR0FDYyxTQUFTRyxrQkFBa0JDLE9BQU87SUFDL0MsTUFBTUMsWUFBWUwsOENBQU1BLEdBQUdNLEdBQUcsQ0FBQ0osMERBQVdBLEVBQUVFO0lBQzVDLE1BQU1HLGNBQWNDLENBQUFBO1FBQ2xCUCx1REFBS0EsQ0FBQ08sTUFBTSxRQUFRQyxDQUFBQTtZQUNsQkEsS0FBS0MsS0FBSyxHQUFHQyxPQUFPTixVQUFVTyxXQUFXLENBQUNILEtBQUtDLEtBQUs7UUFDdEQ7SUFDRjtJQUNBLE9BQU9IO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVycmVhY3RlZC8uL25vZGVfbW9kdWxlcy9yZW1hcmstc21hcnR5cGFudHMvaW5kZXguanM/ZDgzYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgncmV0ZXh0LXNtYXJ0eXBhbnRzJykuT3B0aW9uc30gT3B0aW9uc1xuICovXG5cbmltcG9ydCB7IHJldGV4dCB9IGZyb20gJ3JldGV4dCdcbmltcG9ydCB7IHZpc2l0IH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdCdcbmltcG9ydCBzbWFydHlwYW50cyBmcm9tICdyZXRleHQtc21hcnR5cGFudHMnXG5cbi8qKlxuICogcmVtYXJrIHBsdWdpbiB0byBpbXBsZW1lbnQgU21hcnR5UGFudHMuXG4gKlxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbT3B0aW9ucz9dIHwgdm9pZFtdLCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtYXJrU21hcnR5cGFudHMob3B0aW9ucykge1xuICBjb25zdCBwcm9jZXNzb3IgPSByZXRleHQoKS51c2Uoc21hcnR5cGFudHMsIG9wdGlvbnMpXG4gIGNvbnN0IHRyYW5zZm9ybWVyID0gdHJlZSA9PiB7XG4gICAgdmlzaXQodHJlZSwgJ3RleHQnLCBub2RlID0+IHtcbiAgICAgIG5vZGUudmFsdWUgPSBTdHJpbmcocHJvY2Vzc29yLnByb2Nlc3NTeW5jKG5vZGUudmFsdWUpKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybWVyXG59XG4iXSwibmFtZXMiOlsicmV0ZXh0IiwidmlzaXQiLCJzbWFydHlwYW50cyIsInJlbWFya1NtYXJ0eXBhbnRzIiwib3B0aW9ucyIsInByb2Nlc3NvciIsInVzZSIsInRyYW5zZm9ybWVyIiwidHJlZSIsIm5vZGUiLCJ2YWx1ZSIsIlN0cmluZyIsInByb2Nlc3NTeW5jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/remark-smartypants/index.js\n");

/***/ })

};
;