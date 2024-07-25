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

/***/ "./components/LayoutProvider.js":
/*!**************************************!*\
  !*** ./components/LayoutProvider.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LayoutProvider: () => (/* binding */ LayoutProvider),\n/* harmony export */   useLayoutContext: () => (/* binding */ useLayoutContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst LayoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LayoutProvider = ({ children })=>{\n    const [menuData, setMenuData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isSidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchMenuData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/getmenuData\");\n                const apiData = JSON.parse(response.data.documents[0].content);\n                setMenuData(apiData);\n            } catch (error) {\n                console.error(\"Error fetching menu data:\", error);\n            }\n        };\n        fetchMenuData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayoutContext.Provider, {\n        value: {\n            menuData,\n            isSidebarOpen,\n            setSidebarOpen\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\components\\\\LayoutProvider.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\nconst useLayoutContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LayoutContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dFByb3ZpZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBQ3BEO0FBRTFCLE1BQU1NLDhCQUFnQkwsb0RBQWFBO0FBRTVCLE1BQU1NLGlCQUFpQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNPLGVBQWVDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFFakRELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVUsZ0JBQWdCO1lBQ2xCLElBQUk7Z0JBQ0EsTUFBTUMsV0FBVyxNQUFNVCxpREFBUyxDQUFDO2dCQUNqQyxNQUFNVyxVQUFVQyxLQUFLQyxLQUFLLENBQUNKLFNBQVNLLElBQUksQ0FBQ0MsU0FBUyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTztnQkFDN0RYLFlBQVlNO1lBQ2hCLEVBQUUsT0FBT00sT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7WUFDL0M7UUFDSjtRQUVBVDtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDUCxjQUFja0IsUUFBUTtRQUFDQyxPQUFPO1lBQUVoQjtZQUFVRTtZQUFlQztRQUFlO2tCQUNwRUo7Ozs7OztBQUdiLEVBQUU7QUFFSyxNQUFNa0IsbUJBQW1CLElBQU14QixpREFBVUEsQ0FBQ0ksZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2N3LXN1aXRlLy4vY29tcG9uZW50cy9MYXlvdXRQcm92aWRlci5qcz8wZDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgTGF5b3V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFttZW51RGF0YSwgc2V0TWVudURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2lzU2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoTWVudURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZ2V0bWVudURhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlEYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmRvY3VtZW50c1swXS5jb250ZW50KTtcclxuICAgICAgICAgICAgICAgIHNldE1lbnVEYXRhKGFwaURhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lbnUgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmV0Y2hNZW51RGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbWVudURhdGEsIGlzU2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9MYXlvdXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMYXlvdXRDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChMYXlvdXRDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTGF5b3V0Q29udGV4dCIsIkxheW91dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJtZW51RGF0YSIsInNldE1lbnVEYXRhIiwiaXNTaWRlYmFyT3BlbiIsInNldFNpZGViYXJPcGVuIiwiZmV0Y2hNZW51RGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiYXBpRGF0YSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJkb2N1bWVudHMiLCJjb250ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUxheW91dENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LayoutProvider.js\n");

/***/ }),

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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_common_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/analytics */ \"./components/common/analytics.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_LayoutProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LayoutProvider */ \"./components/LayoutProvider.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LayoutProvider__WEBPACK_IMPORTED_MODULE_7__]);\n_components_LayoutProvider__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LayoutProvider__WEBPACK_IMPORTED_MODULE_7__.LayoutProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\pages\\\\_app.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\pages\\\\_app.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDa0M7QUFFckM7QUFDRjtBQUNXO0FBQ007QUFDZ0I7QUFFOUQsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0gsc0VBQWNBO2tCQUNiLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBSTlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdy1zdWl0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9hbmFseXRpY3MnXHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCB7IExheW91dFByb3ZpZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRQcm92aWRlcic7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0xheW91dFByb3ZpZGVyPlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJpbml0R0EiLCJsb2dQYWdlVmlldyIsIkxheW91dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

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