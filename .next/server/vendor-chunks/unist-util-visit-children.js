"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit-children";
exports.ids = ["vendor-chunks/unist-util-visit-children"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-visit-children/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-visit-children/lib/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   visitChildren: () => (/* binding */ visitChildren)\n/* harmony export */ });\n/**\n * @typedef {import('unist').Parent} Parent\n */ /**\n * @template {Parent} Kind\n *   Node type.\n * @callback Visitor\n *   Callback called for each `child` in `parent` later given to `visit`.\n * @param {Kind['children'][number]} child\n *   Child of parent.\n * @param {number} index\n *   Position of `child` in parent.\n * @param {Kind} parent\n *   Parent node.\n * @returns {void}\n *   Nothing.\n */ /**\n * @template {Parent} Kind\n *   Node type.\n * @callback Visit\n *   Function to call the bound `visitor` for each child in `parent`.\n * @param {Kind} node\n *   Parent node.\n * @returns {void}\n *   Nothing.\n */ /**\n * Wrap `visitor` to be called for each child in the nodes later given to\n * `visit`.\n *\n * @template {Parent} Kind\n *   Node type.\n * @param {Visitor<Kind>} visitor\n *   Callback called for each `child` in `parent` later given to `visit`.\n * @returns {Visit<Kind>}\n *   Function to call the bound `visitor` for each child in `parent`.\n */ function visitChildren(visitor) {\n    return visit;\n    /** @type {Visit<Kind>} */ function visit(parent) {\n        const children = parent && parent.children;\n        let index = -1;\n        if (!children) {\n            throw new Error(\"Missing children in `parent` for `visit`\");\n        }\n        while(++index in children){\n            visitor(children[index], index, parent);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1jaGlsZHJlbi9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztDQUVDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxHQUVEOzs7Ozs7Ozs7Q0FTQyxHQUVEOzs7Ozs7Ozs7O0NBVUMsR0FDTSxTQUFTQSxjQUFjQyxPQUFPO0lBQ25DLE9BQU9DO0lBRVAsd0JBQXdCLEdBQ3hCLFNBQVNBLE1BQU1DLE1BQU07UUFDbkIsTUFBTUMsV0FBV0QsVUFBVUEsT0FBT0MsUUFBUTtRQUMxQyxJQUFJQyxRQUFRLENBQUM7UUFFYixJQUFJLENBQUNELFVBQVU7WUFDYixNQUFNLElBQUlFLE1BQU07UUFDbEI7UUFFQSxNQUFPLEVBQUVELFNBQVNELFNBQVU7WUFDMUJILFFBQVFHLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFQSxPQUFPRjtRQUNsQztJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdmVycmVhY3RlZC8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LWNoaWxkcmVuL2xpYi9pbmRleC5qcz81OGIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5QYXJlbnR9IFBhcmVudFxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHtQYXJlbnR9IEtpbmRcbiAqICAgTm9kZSB0eXBlLlxuICogQGNhbGxiYWNrIFZpc2l0b3JcbiAqICAgQ2FsbGJhY2sgY2FsbGVkIGZvciBlYWNoIGBjaGlsZGAgaW4gYHBhcmVudGAgbGF0ZXIgZ2l2ZW4gdG8gYHZpc2l0YC5cbiAqIEBwYXJhbSB7S2luZFsnY2hpbGRyZW4nXVtudW1iZXJdfSBjaGlsZFxuICogICBDaGlsZCBvZiBwYXJlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqICAgUG9zaXRpb24gb2YgYGNoaWxkYCBpbiBwYXJlbnQuXG4gKiBAcGFyYW0ge0tpbmR9IHBhcmVudFxuICogICBQYXJlbnQgbm9kZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogICBOb3RoaW5nLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHtQYXJlbnR9IEtpbmRcbiAqICAgTm9kZSB0eXBlLlxuICogQGNhbGxiYWNrIFZpc2l0XG4gKiAgIEZ1bmN0aW9uIHRvIGNhbGwgdGhlIGJvdW5kIGB2aXNpdG9yYCBmb3IgZWFjaCBjaGlsZCBpbiBgcGFyZW50YC5cbiAqIEBwYXJhbSB7S2luZH0gbm9kZVxuICogICBQYXJlbnQgbm9kZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogICBOb3RoaW5nLlxuICovXG5cbi8qKlxuICogV3JhcCBgdmlzaXRvcmAgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGNoaWxkIGluIHRoZSBub2RlcyBsYXRlciBnaXZlbiB0b1xuICogYHZpc2l0YC5cbiAqXG4gKiBAdGVtcGxhdGUge1BhcmVudH0gS2luZFxuICogICBOb2RlIHR5cGUuXG4gKiBAcGFyYW0ge1Zpc2l0b3I8S2luZD59IHZpc2l0b3JcbiAqICAgQ2FsbGJhY2sgY2FsbGVkIGZvciBlYWNoIGBjaGlsZGAgaW4gYHBhcmVudGAgbGF0ZXIgZ2l2ZW4gdG8gYHZpc2l0YC5cbiAqIEByZXR1cm5zIHtWaXNpdDxLaW5kPn1cbiAqICAgRnVuY3Rpb24gdG8gY2FsbCB0aGUgYm91bmQgYHZpc2l0b3JgIGZvciBlYWNoIGNoaWxkIGluIGBwYXJlbnRgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRDaGlsZHJlbih2aXNpdG9yKSB7XG4gIHJldHVybiB2aXNpdFxuXG4gIC8qKiBAdHlwZSB7VmlzaXQ8S2luZD59ICovXG4gIGZ1bmN0aW9uIHZpc2l0KHBhcmVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50ICYmIHBhcmVudC5jaGlsZHJlblxuICAgIGxldCBpbmRleCA9IC0xXG5cbiAgICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY2hpbGRyZW4gaW4gYHBhcmVudGAgZm9yIGB2aXNpdGAnKVxuICAgIH1cblxuICAgIHdoaWxlICgrK2luZGV4IGluIGNoaWxkcmVuKSB7XG4gICAgICB2aXNpdG9yKGNoaWxkcmVuW2luZGV4XSwgaW5kZXgsIHBhcmVudClcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2aXNpdENoaWxkcmVuIiwidmlzaXRvciIsInZpc2l0IiwicGFyZW50IiwiY2hpbGRyZW4iLCJpbmRleCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-visit-children/lib/index.js\n");

/***/ })

};
;