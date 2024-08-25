"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-parse-selector";
exports.ids = ["vendor-chunks/hast-util-parse-selector"];
exports.modules = {

/***/ "(rsc)/./node_modules/hast-util-parse-selector/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseSelector: () => (/* binding */ parseSelector)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Properties} Properties\n * @typedef {import('hast').Element} Element\n */ const search = /[#.]/g;\n/**\n * Create a hast element from a simple CSS selector.\n *\n * @template {string} Selector\n *   Type of selector.\n * @template {string} [DefaultTagName='div']\n *   Type of default tag name.\n * @param {Selector | null | undefined} [selector]\n *   Simple CSS selector.\n *\n *   Can contain a tag name (`foo`), classes (`.bar`), and an ID (`#baz`).\n *   Multiple classes are allowed.\n *   Uses the last ID if multiple IDs are found.\n * @param {DefaultTagName | null | undefined} [defaultTagName='div']\n *   Tag name to use if `selector` does not specify one (default: `'div'`).\n * @returns {Element & {tagName: import('./extract.js').ExtractTagName<Selector, DefaultTagName>}}\n *   Built element.\n */ function parseSelector(selector, defaultTagName) {\n    const value = selector || \"\";\n    /** @type {Properties} */ const props = {};\n    let start = 0;\n    /** @type {string | undefined} */ let previous;\n    /** @type {string | undefined} */ let tagName;\n    while(start < value.length){\n        search.lastIndex = start;\n        const match = search.exec(value);\n        const subvalue = value.slice(start, match ? match.index : value.length);\n        if (subvalue) {\n            if (!previous) {\n                tagName = subvalue;\n            } else if (previous === \"#\") {\n                props.id = subvalue;\n            } else if (Array.isArray(props.className)) {\n                props.className.push(subvalue);\n            } else {\n                props.className = [\n                    subvalue\n                ];\n            }\n            start += subvalue.length;\n        }\n        if (match) {\n            previous = match[0];\n            start++;\n        }\n    }\n    return {\n        type: \"element\",\n        // @ts-expect-error: fine.\n        tagName: tagName || defaultTagName || \"div\",\n        properties: props,\n        children: []\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztDQUdDLEdBRUQsTUFBTUEsU0FBUztBQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCQyxHQUNNLFNBQVNDLGNBQWNDLFFBQVEsRUFBRUMsY0FBYztJQUNwRCxNQUFNQyxRQUFRRixZQUFZO0lBQzFCLHVCQUF1QixHQUN2QixNQUFNRyxRQUFRLENBQUM7SUFDZixJQUFJQyxRQUFRO0lBQ1osK0JBQStCLEdBQy9CLElBQUlDO0lBQ0osK0JBQStCLEdBQy9CLElBQUlDO0lBRUosTUFBT0YsUUFBUUYsTUFBTUssTUFBTSxDQUFFO1FBQzNCVCxPQUFPVSxTQUFTLEdBQUdKO1FBQ25CLE1BQU1LLFFBQVFYLE9BQU9ZLElBQUksQ0FBQ1I7UUFDMUIsTUFBTVMsV0FBV1QsTUFBTVUsS0FBSyxDQUFDUixPQUFPSyxRQUFRQSxNQUFNSSxLQUFLLEdBQUdYLE1BQU1LLE1BQU07UUFFdEUsSUFBSUksVUFBVTtZQUNaLElBQUksQ0FBQ04sVUFBVTtnQkFDYkMsVUFBVUs7WUFDWixPQUFPLElBQUlOLGFBQWEsS0FBSztnQkFDM0JGLE1BQU1XLEVBQUUsR0FBR0g7WUFDYixPQUFPLElBQUlJLE1BQU1DLE9BQU8sQ0FBQ2IsTUFBTWMsU0FBUyxHQUFHO2dCQUN6Q2QsTUFBTWMsU0FBUyxDQUFDQyxJQUFJLENBQUNQO1lBQ3ZCLE9BQU87Z0JBQ0xSLE1BQU1jLFNBQVMsR0FBRztvQkFBQ047aUJBQVM7WUFDOUI7WUFFQVAsU0FBU08sU0FBU0osTUFBTTtRQUMxQjtRQUVBLElBQUlFLE9BQU87WUFDVEosV0FBV0ksS0FBSyxDQUFDLEVBQUU7WUFDbkJMO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTGUsTUFBTTtRQUNOLDBCQUEwQjtRQUMxQmIsU0FBU0EsV0FBV0wsa0JBQWtCO1FBQ3RDbUIsWUFBWWpCO1FBQ1prQixVQUFVLEVBQUU7SUFDZDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3ZlcnJlYWN0ZWQvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yL2xpYi9pbmRleC5qcz9jYWJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlByb3BlcnRpZXN9IFByb3BlcnRpZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKi9cblxuY29uc3Qgc2VhcmNoID0gL1sjLl0vZ1xuXG4vKipcbiAqIENyZWF0ZSBhIGhhc3QgZWxlbWVudCBmcm9tIGEgc2ltcGxlIENTUyBzZWxlY3Rvci5cbiAqXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gU2VsZWN0b3JcbiAqICAgVHlwZSBvZiBzZWxlY3Rvci5cbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBbRGVmYXVsdFRhZ05hbWU9J2RpdiddXG4gKiAgIFR5cGUgb2YgZGVmYXVsdCB0YWcgbmFtZS5cbiAqIEBwYXJhbSB7U2VsZWN0b3IgfCBudWxsIHwgdW5kZWZpbmVkfSBbc2VsZWN0b3JdXG4gKiAgIFNpbXBsZSBDU1Mgc2VsZWN0b3IuXG4gKlxuICogICBDYW4gY29udGFpbiBhIHRhZyBuYW1lIChgZm9vYCksIGNsYXNzZXMgKGAuYmFyYCksIGFuZCBhbiBJRCAoYCNiYXpgKS5cbiAqICAgTXVsdGlwbGUgY2xhc3NlcyBhcmUgYWxsb3dlZC5cbiAqICAgVXNlcyB0aGUgbGFzdCBJRCBpZiBtdWx0aXBsZSBJRHMgYXJlIGZvdW5kLlxuICogQHBhcmFtIHtEZWZhdWx0VGFnTmFtZSB8IG51bGwgfCB1bmRlZmluZWR9IFtkZWZhdWx0VGFnTmFtZT0nZGl2J11cbiAqICAgVGFnIG5hbWUgdG8gdXNlIGlmIGBzZWxlY3RvcmAgZG9lcyBub3Qgc3BlY2lmeSBvbmUgKGRlZmF1bHQ6IGAnZGl2J2ApLlxuICogQHJldHVybnMge0VsZW1lbnQgJiB7dGFnTmFtZTogaW1wb3J0KCcuL2V4dHJhY3QuanMnKS5FeHRyYWN0VGFnTmFtZTxTZWxlY3RvciwgRGVmYXVsdFRhZ05hbWU+fX1cbiAqICAgQnVpbHQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IsIGRlZmF1bHRUYWdOYW1lKSB7XG4gIGNvbnN0IHZhbHVlID0gc2VsZWN0b3IgfHwgJydcbiAgLyoqIEB0eXBlIHtQcm9wZXJ0aWVzfSAqL1xuICBjb25zdCBwcm9wcyA9IHt9XG4gIGxldCBzdGFydCA9IDBcbiAgLyoqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9ICovXG4gIGxldCBwcmV2aW91c1xuICAvKiogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IHRhZ05hbWVcblxuICB3aGlsZSAoc3RhcnQgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICBzZWFyY2gubGFzdEluZGV4ID0gc3RhcnRcbiAgICBjb25zdCBtYXRjaCA9IHNlYXJjaC5leGVjKHZhbHVlKVxuICAgIGNvbnN0IHN1YnZhbHVlID0gdmFsdWUuc2xpY2Uoc3RhcnQsIG1hdGNoID8gbWF0Y2guaW5kZXggOiB2YWx1ZS5sZW5ndGgpXG5cbiAgICBpZiAoc3VidmFsdWUpIHtcbiAgICAgIGlmICghcHJldmlvdXMpIHtcbiAgICAgICAgdGFnTmFtZSA9IHN1YnZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzID09PSAnIycpIHtcbiAgICAgICAgcHJvcHMuaWQgPSBzdWJ2YWx1ZVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BzLmNsYXNzTmFtZSkpIHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lLnB1c2goc3VidmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBbc3VidmFsdWVdXG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ICs9IHN1YnZhbHVlLmxlbmd0aFxuICAgIH1cblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgcHJldmlvdXMgPSBtYXRjaFswXVxuICAgICAgc3RhcnQrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGZpbmUuXG4gICAgdGFnTmFtZTogdGFnTmFtZSB8fCBkZWZhdWx0VGFnTmFtZSB8fCAnZGl2JyxcbiAgICBwcm9wZXJ0aWVzOiBwcm9wcyxcbiAgICBjaGlsZHJlbjogW11cbiAgfVxufVxuIl0sIm5hbWVzIjpbInNlYXJjaCIsInBhcnNlU2VsZWN0b3IiLCJzZWxlY3RvciIsImRlZmF1bHRUYWdOYW1lIiwidmFsdWUiLCJwcm9wcyIsInN0YXJ0IiwicHJldmlvdXMiLCJ0YWdOYW1lIiwibGVuZ3RoIiwibGFzdEluZGV4IiwibWF0Y2giLCJleGVjIiwic3VidmFsdWUiLCJzbGljZSIsImluZGV4IiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJjbGFzc05hbWUiLCJwdXNoIiwidHlwZSIsInByb3BlcnRpZXMiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/hast-util-parse-selector/lib/index.js\n");

/***/ })

};
;