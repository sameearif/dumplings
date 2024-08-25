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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hashObject)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var is_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-obj */ \"(rsc)/./node_modules/is-obj/index.js\");\n/* harmony import */ var sort_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sort-keys */ \"(rsc)/./node_modules/sort-keys/index.js\");\n\n\n\nfunction hashObject(object, { encoding = \"hex\", algorithm = \"sha512\" } = {}) {\n    if (!(0,is_obj__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(object)) {\n        throw new TypeError(\"Expected an object\");\n    }\n    if (encoding === \"buffer\") {\n        encoding = undefined;\n    }\n    return crypto__WEBPACK_IMPORTED_MODULE_0__.createHash(algorithm).update(JSON.stringify((0,sort_keys__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(object, {\n        deep: true\n    })), \"utf8\").digest(encoding);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzaC1vYmovaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUNFO0FBQ0c7QUFFbEIsU0FBU0csV0FBV0MsTUFBTSxFQUFFLEVBQUNDLFdBQVcsS0FBSyxFQUFFQyxZQUFZLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN2RixJQUFJLENBQUNMLGtEQUFRQSxDQUFDRyxTQUFTO1FBQ3RCLE1BQU0sSUFBSUcsVUFBVTtJQUNyQjtJQUVBLElBQUlGLGFBQWEsVUFBVTtRQUMxQkEsV0FBV0c7SUFDWjtJQUVBLE9BQU9SLDhDQUNLLENBQUNNLFdBQ1hJLE1BQU0sQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDVixxREFBUUEsQ0FBQ0UsUUFBUTtRQUFDUyxNQUFNO0lBQUksS0FBSyxRQUN2REMsTUFBTSxDQUFDVDtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3ZlcnJlYWN0ZWQvLi9ub2RlX21vZHVsZXMvaGFzaC1vYmovaW5kZXguanM/NTQ3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnaXMtb2JqJztcbmltcG9ydCBzb3J0S2V5cyBmcm9tICdzb3J0LWtleXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNoT2JqZWN0KG9iamVjdCwge2VuY29kaW5nID0gJ2hleCcsIGFsZ29yaXRobSA9ICdzaGE1MTInfSA9IHt9KSB7XG5cdGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFuIG9iamVjdCcpO1xuXHR9XG5cblx0aWYgKGVuY29kaW5nID09PSAnYnVmZmVyJykge1xuXHRcdGVuY29kaW5nID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cmV0dXJuIGNyeXB0b1xuXHRcdC5jcmVhdGVIYXNoKGFsZ29yaXRobSlcblx0XHQudXBkYXRlKEpTT04uc3RyaW5naWZ5KHNvcnRLZXlzKG9iamVjdCwge2RlZXA6IHRydWV9KSksICd1dGY4Jylcblx0XHQuZGlnZXN0KGVuY29kaW5nKTtcbn1cbiJdLCJuYW1lcyI6WyJjcnlwdG8iLCJpc09iamVjdCIsInNvcnRLZXlzIiwiaGFzaE9iamVjdCIsIm9iamVjdCIsImVuY29kaW5nIiwiYWxnb3JpdGhtIiwiVHlwZUVycm9yIiwidW5kZWZpbmVkIiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWVwIiwiZGlnZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/hash-obj/index.js\n");

/***/ })

};
;