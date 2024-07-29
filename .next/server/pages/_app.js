/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/common/analytics.js":
/*!****************************************!*\
  !*** ./components/common/analytics.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initGA: () => (/* binding */ initGA),\n/* harmony export */   logPageView: () => (/* binding */ logPageView)\n/* harmony export */ });\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initGA = (trackingCode)=>{\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default().initialize(trackingCode);\n};\nconst logPageView = ()=>{\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default().set({\n        page: window.location.pathname\n    });\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default().pageview(window.location.pathname);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9hbmFseXRpY3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUV2QixNQUFNQyxTQUFTLENBQUNDO0lBQ25CRiwwREFBa0IsQ0FBQ0U7QUFDdkIsRUFBQztBQUVNLE1BQU1FLGNBQWM7SUFDdkJKLG1EQUFXLENBQUM7UUFBRU0sTUFBTUMsT0FBT0MsUUFBUSxDQUFDQyxRQUFRO0lBQUM7SUFDN0NULHdEQUFnQixDQUFDTyxPQUFPQyxRQUFRLENBQUNDLFFBQVE7QUFDN0MsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N3LXN1aXRlLy4vY29tcG9uZW50cy9jb21tb24vYW5hbHl0aWNzLmpzPzc2NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdEdBID0gKHRyYWNraW5nQ29kZSkgPT4ge1xyXG4gICAgUmVhY3RHQS5pbml0aWFsaXplKHRyYWNraW5nQ29kZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ1BhZ2VWaWV3ID0gKCkgPT4ge1xyXG4gICAgUmVhY3RHQS5zZXQoeyBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSlcclxuICAgIFJlYWN0R0EucGFnZXZpZXcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0R0EiLCJpbml0R0EiLCJ0cmFja2luZ0NvZGUiLCJpbml0aWFsaXplIiwibG9nUGFnZVZpZXciLCJzZXQiLCJwYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhZ2V2aWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/common/analytics.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_common_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/analytics */ \"./components/common/analytics.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\cw suite deployednew 29-7-24\\\\CW-suite-new-version\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNrQztBQUVyQztBQUNGO0FBQ1c7QUFDTTtBQUM5QyxTQUFTRyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDRDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUU1QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3ctc3VpdGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vYW5hbHl0aWNzJ1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJpbml0R0EiLCJsb2dQYWdlVmlldyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ga");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/slick-carousel"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();