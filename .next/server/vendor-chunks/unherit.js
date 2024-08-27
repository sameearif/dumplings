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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   unherit: () => (/* binding */ unherit)\n/* harmony export */ });\n/**\n * Create a subclass that can be modified without affecting the super class.\n *\n * @template {{prototype: object, new (...args: any[]): any}} Class\n * @param {Class} Super\n * @return {Class}\n */\nfunction unherit(Super) {\n  const Of = class extends Super {}\n\n  // Clone values.\n  const proto = Of.prototype\n  /** @type {string} */\n  let key\n\n  // We specifically want to get *all* fields, not just own fields.\n  // eslint-disable-next-line guard-for-in\n  for (key in proto) {\n    /** @type {unknown} */\n    const value = proto[key]\n\n    if (value && typeof value === 'object') {\n      // @ts-expect-error: shallow clone arrays or other values.\n      proto[key] = 'concat' in value ? value.concat() : Object.assign({}, value)\n    }\n  }\n\n  return Of\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5oZXJpdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBK0M7QUFDOUQsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVycmVhY3RlZC8uL25vZGVfbW9kdWxlcy91bmhlcml0L2luZGV4LmpzPzIxOTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGUgYSBzdWJjbGFzcyB0aGF0IGNhbiBiZSBtb2RpZmllZCB3aXRob3V0IGFmZmVjdGluZyB0aGUgc3VwZXIgY2xhc3MuXG4gKlxuICogQHRlbXBsYXRlIHt7cHJvdG90eXBlOiBvYmplY3QsIG5ldyAoLi4uYXJnczogYW55W10pOiBhbnl9fSBDbGFzc1xuICogQHBhcmFtIHtDbGFzc30gU3VwZXJcbiAqIEByZXR1cm4ge0NsYXNzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5oZXJpdChTdXBlcikge1xuICBjb25zdCBPZiA9IGNsYXNzIGV4dGVuZHMgU3VwZXIge31cblxuICAvLyBDbG9uZSB2YWx1ZXMuXG4gIGNvbnN0IHByb3RvID0gT2YucHJvdG90eXBlXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICBsZXQga2V5XG5cbiAgLy8gV2Ugc3BlY2lmaWNhbGx5IHdhbnQgdG8gZ2V0ICphbGwqIGZpZWxkcywgbm90IGp1c3Qgb3duIGZpZWxkcy5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICBmb3IgKGtleSBpbiBwcm90bykge1xuICAgIC8qKiBAdHlwZSB7dW5rbm93bn0gKi9cbiAgICBjb25zdCB2YWx1ZSA9IHByb3RvW2tleV1cblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBzaGFsbG93IGNsb25lIGFycmF5cyBvciBvdGhlciB2YWx1ZXMuXG4gICAgICBwcm90b1trZXldID0gJ2NvbmNhdCcgaW4gdmFsdWUgPyB2YWx1ZS5jb25jYXQoKSA6IE9iamVjdC5hc3NpZ24oe30sIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPZlxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unherit/index.js\n");

/***/ })

};
;