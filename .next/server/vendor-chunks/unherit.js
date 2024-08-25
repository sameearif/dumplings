"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unherit";
exports.ids = ["vendor-chunks/unherit"];
exports.modules = {

/***/ "(rsc)/./node_modules/unherit/index.js":
/*!***************************************!*\
  !*** ./node_modules/unherit/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   unherit: () => (/* binding */ unherit)\n/* harmony export */ });\n/**\n * Create a subclass that can be modified without affecting the super class.\n *\n * @template {{prototype: object, new (...args: any[]): any}} Class\n * @param {Class} Super\n * @return {Class}\n */ function unherit(Super) {\n    const Of = class extends Super {\n    };\n    // Clone values.\n    const proto = Of.prototype;\n    /** @type {string} */ let key;\n    // We specifically want to get *all* fields, not just own fields.\n    // eslint-disable-next-line guard-for-in\n    for(key in proto){\n        /** @type {unknown} */ const value = proto[key];\n        if (value && typeof value === \"object\") {\n            // @ts-expect-error: shallow clone arrays or other values.\n            proto[key] = \"concat\" in value ? value.concat() : Object.assign({}, value);\n        }\n    }\n    return Of;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5oZXJpdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztDQU1DLEdBQ00sU0FBU0EsUUFBUUMsS0FBSztJQUMzQixNQUFNQyxLQUFLLGNBQWNEO0lBQU87SUFFaEMsZ0JBQWdCO0lBQ2hCLE1BQU1FLFFBQVFELEdBQUdFLFNBQVM7SUFDMUIsbUJBQW1CLEdBQ25CLElBQUlDO0lBRUosaUVBQWlFO0lBQ2pFLHdDQUF3QztJQUN4QyxJQUFLQSxPQUFPRixNQUFPO1FBQ2pCLG9CQUFvQixHQUNwQixNQUFNRyxRQUFRSCxLQUFLLENBQUNFLElBQUk7UUFFeEIsSUFBSUMsU0FBUyxPQUFPQSxVQUFVLFVBQVU7WUFDdEMsMERBQTBEO1lBQzFESCxLQUFLLENBQUNFLElBQUksR0FBRyxZQUFZQyxRQUFRQSxNQUFNQyxNQUFNLEtBQUtDLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdIO1FBQ3RFO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3ZlcnJlYWN0ZWQvLi9ub2RlX21vZHVsZXMvdW5oZXJpdC9pbmRleC5qcz8yMzc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlIGEgc3ViY2xhc3MgdGhhdCBjYW4gYmUgbW9kaWZpZWQgd2l0aG91dCBhZmZlY3RpbmcgdGhlIHN1cGVyIGNsYXNzLlxuICpcbiAqIEB0ZW1wbGF0ZSB7e3Byb3RvdHlwZTogb2JqZWN0LCBuZXcgKC4uLmFyZ3M6IGFueVtdKTogYW55fX0gQ2xhc3NcbiAqIEBwYXJhbSB7Q2xhc3N9IFN1cGVyXG4gKiBAcmV0dXJuIHtDbGFzc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaGVyaXQoU3VwZXIpIHtcbiAgY29uc3QgT2YgPSBjbGFzcyBleHRlbmRzIFN1cGVyIHt9XG5cbiAgLy8gQ2xvbmUgdmFsdWVzLlxuICBjb25zdCBwcm90byA9IE9mLnByb3RvdHlwZVxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgbGV0IGtleVxuXG4gIC8vIFdlIHNwZWNpZmljYWxseSB3YW50IHRvIGdldCAqYWxsKiBmaWVsZHMsIG5vdCBqdXN0IG93biBmaWVsZHMuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgZm9yIChrZXkgaW4gcHJvdG8pIHtcbiAgICAvKiogQHR5cGUge3Vua25vd259ICovXG4gICAgY29uc3QgdmFsdWUgPSBwcm90b1trZXldXG5cbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogc2hhbGxvdyBjbG9uZSBhcnJheXMgb3Igb3RoZXIgdmFsdWVzLlxuICAgICAgcHJvdG9ba2V5XSA9ICdjb25jYXQnIGluIHZhbHVlID8gdmFsdWUuY29uY2F0KCkgOiBPYmplY3QuYXNzaWduKHt9LCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gT2Zcbn1cbiJdLCJuYW1lcyI6WyJ1bmhlcml0IiwiU3VwZXIiLCJPZiIsInByb3RvIiwicHJvdG90eXBlIiwia2V5IiwidmFsdWUiLCJjb25jYXQiLCJPYmplY3QiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unherit/index.js\n");

/***/ })

};
;