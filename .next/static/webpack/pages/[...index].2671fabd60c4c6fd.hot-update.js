"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...index]",{

/***/ "./pages/[...index].js":
/*!*****************************!*\
  !*** ./pages/[...index].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_common_PageSEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/PageSEO */ \"./components/common/PageSEO.jsx\");\n/* harmony import */ var _components_common_Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Helper */ \"./components/common/Helper.jsx\");\n/* harmony import */ var _components_renderSections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/renderSections */ \"./components/renderSections/index.js\");\n/* harmony import */ var _custom_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom/animate */ \"./custom/animate.js\");\n/* harmony import */ var _hoc_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hoc/Layout */ \"./hoc/Layout.jsx\");\n/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./404 */ \"./pages/404.js\");\n/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../custom */ \"./custom/index.js\");\n/* harmony import */ var _components_Home_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home/Sidebar */ \"./components/Home/Sidebar.jsx\");\n/* harmony import */ var _components_Home_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Home/Navbar */ \"./components/Home/Navbar.jsx\");\n// [...index].js\n// import React, { useState, useEffect } from \"react\";\n// import PageSEO from \"../components/common/PageSEO\";\n// import { MetaData } from \"../components/common/Helper\";\n// import RenderSections from \"../components/renderSections\";\n// import LoadingAnimation from \"../custom/animate\";\n// import Layout from \"../hoc/Layout\";\n// import axios from \"axios\";\n// import Custom404 from \"./404\";\n// import CustomPages from \"../custom\";\n// export async function getStaticPaths() {\n//   console.log(\"calling11============>\")\n//   const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);\n//   const menuData = JSON.parse(response.data.documents[0].content);\n//   console.log(\"menuData============>\", menuData)\n//   const paths = menuData.map(menuItem => {\n//     const paths = [];\n//     if (menuItem.children) {\n//       menuItem.children.forEach(childItem => {\n//         if (childItem.subchildren) {\n//           childItem.subchildren.forEach(subChildItem => {\n//             paths.push({ params: { index: subChildItem.slug.split('/').filter(Boolean) } });\n//           });\n//         } else {\n//           paths.push({ params: { index: childItem.slug.split('/').filter(Boolean) } });\n//         }\n//       });\n//     } else {\n//       paths.push({ params: { index: menuItem.slug.split('/').filter(Boolean) } });\n//     }\n//     return paths;\n//   }).flat();\n//   return { paths, fallback: 'blocking' };\n// }\n// export async function getStaticProps(context) {\n//   const { params } = context;\n//   const pathSegments = params.index || [];\n//   const path = `/${pathSegments.join(\"/\")}`;\n//   const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getmenuData`);\n//   const menuData = JSON.parse(response.data.documents[0].content);\n//   let matchedMenuItem = null;\n//   for (const menuItem of menuData) {\n//     if (menuItem.slug === path) {\n//       matchedMenuItem = menuItem;\n//       break;\n//     }\n//     if (menuItem.children) {\n//       for (const childItem of menuItem.children) {\n//         if (childItem.slug === path) {\n//           matchedMenuItem = childItem;\n//           break;\n//         }\n//         if (childItem.subchildren) {\n//           for (const subChildItem of childItem.subchildren) {\n//             if (subChildItem.slug === path) {\n//               matchedMenuItem = subChildItem;\n//               break;\n//             }\n//           }\n//           if (matchedMenuItem) {\n//             break;\n//           }\n//         }\n//       }\n//       if (matchedMenuItem) {\n//         break;\n//       }\n//     }\n//   }\n//   const { type, menuId, slug } = matchedMenuItem || {};\n//   if (!matchedMenuItem) {\n//     return {\n//       notFound: true,\n//     };\n//   }\n//   if (type === 'custom') {\n//     return {\n//       props: {\n//         type,\n//         data: null,\n//         slug\n//       },\n//       revalidate: 86400, // Revalidate every 24 hours\n//     };\n//   } else {\n//     try {\n//       let tempSlug = path.substring(1);\n//       const finalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageData?slug=${tempSlug}`;\n//       const headers = {\n//         'Content-Type': 'application/json',\n//       };\n//       const response = await axios.get(finalUrl, headers);\n//       const data = response.data?.documents[0];\n//       if (!data) {\n//         return {\n//           notFound: true,\n//         };\n//       }\n//       return {\n//         props: {\n//           type,\n//           data,\n//           slug\n//         },\n//         revalidate: 86400, // Revalidate every 24 hours\n//       };\n//     } catch (error) {\n//       console.error('Error fetching data:', error);\n//       return {\n//         notFound: true,\n//         revalidate: 86400, // Revalidate every 24 hours\n//       };\n//     }\n//   }\n// }\n// export default function Home({ type, data, slug }) {\n//   const [menuData, setMenuData] = useState([]);\n//   useEffect(() => {\n//     const fetchMenuData = async () => {\n//       try {\n//         const response = await axios.get(\"/api/getmenuData\");\n//         const menuData = JSON.parse(response.data.documents[0].content);\n//         setMenuData(menuData);\n//       } catch (error) {\n//         console.error(\"Error fetching menu data:\", error);\n//       }\n//     };\n//     fetchMenuData();\n//   }, []);\n//   if (!data && type !== 'custom') {\n//     return <Custom404 />;\n//   }\n//   return (\n//     <>\n//       <PageSEO\n//         title={data?.pageTitle}\n//         canonicalTag={\"\"}\n//         metatitleTag={MetaData[0].titleTag}\n//         metaDes={MetaData[0].metaDescription}\n//       />\n//       {data === null && type === \"page\" ? <Layout> <LoadingAnimation /> </Layout> :\n//         type === 'page' && <RenderSections data={data} />\n//       }\n//       {type === 'post' && <PostComponent />}\n//       {type === 'form' && <Layout><h2>Form component</h2></Layout>}\n//       {type === 'custom' && <CustomPages type={type} slug={slug} />}\n//       {data === null && type !== 'custom' && <Custom404 />}\n//     </>\n//   );\n// }\n// pages/[...index].js\n// main code\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n // Adjust the path as needed\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { type, data, slug, menuData } = param;\n    _s();\n    console.log(menuData, \"fdfkldfk\");\n    const [isSidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (!data && type !== \"custom\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_404__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n            lineNumber: 321,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_PageSEO__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: data === null || data === void 0 ? void 0 : data.pageTitle,\n                canonicalTag: \"\",\n                metatitleTag: _components_common_Helper__WEBPACK_IMPORTED_MODULE_3__.MetaData[0].titleTag,\n                metaDes: _components_common_Helper__WEBPACK_IMPORTED_MODULE_3__.MetaData[0].metaDescription\n            }, void 0, false, {\n                fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                lineNumber: 328,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hoc_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                isSidebarOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Sidebar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        isSidebarOpen: isSidebarOpen,\n                        setSidebarOpen: setSidebarOpen,\n                        menuData: menuData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                        lineNumber: 336,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Navbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        className: \"sticky-bar\",\n                        menuData: menuData,\n                        setSidebarOpen: setSidebarOpen,\n                        isSidebarOpen: isSidebarOpen\n                    }, void 0, false, {\n                        fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                        lineNumber: 337,\n                        columnNumber: 9\n                    }, this),\n                    data === null && type === \"page\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_custom_animate__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                        lineNumber: 340,\n                        columnNumber: 11\n                    }, this) : type === \"page\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_renderSections__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                        lineNumber: 344,\n                        columnNumber: 30\n                    }, this),\n                    type === \"post\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostComponent, {}, void 0, false, {\n                        fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                        lineNumber: 346,\n                        columnNumber: 29\n                    }, this),\n                    type === \"form\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {}, void 0, false, {\n                        fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                        lineNumber: 349,\n                        columnNumber: 11\n                    }, this),\n                    type === \"custom\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_custom__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        type: type,\n                        slug: slug\n                    }, void 0, false, {\n                        fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                        lineNumber: 352,\n                        columnNumber: 31\n                    }, this),\n                    data === null && type !== \"custom\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_404__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                        lineNumber: 353,\n                        columnNumber: 48\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\cw newversion11-7-24\\\\CW-suite-new-version\\\\pages\\\\[...index].js\",\n                lineNumber: 335,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"w0MlfrA4dqse1hv2ACbjMntQaGI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmhCLFNBQVMsd0JBRVIsOERBQUNpQjs7Ozs7b0JBR0ZqQixTQUFTLDBCQUFZLDhEQUFDSiwrQ0FBV0E7d0JBQUNJLE1BQU1BO3dCQUFNRSxNQUFNQTs7Ozs7O29CQUNwREQsU0FBUyxRQUFRRCxTQUFTLDBCQUFZLDhEQUFDTCw0Q0FBU0E7Ozs7Ozs7Ozs7Ozs7QUFTekQ7R0E3Q3dCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bLi4uaW5kZXhdLmpzPzY5NTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gWy4uLmluZGV4XS5qc1xyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFBhZ2VTRU8gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1BhZ2VTRU9cIjtcclxuLy8gaW1wb3J0IHsgTWV0YURhdGEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vSGVscGVyXCI7XHJcbi8vIGltcG9ydCBSZW5kZXJTZWN0aW9ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9yZW5kZXJTZWN0aW9uc1wiO1xyXG4vLyBpbXBvcnQgTG9hZGluZ0FuaW1hdGlvbiBmcm9tIFwiLi4vY3VzdG9tL2FuaW1hdGVcIjtcclxuLy8gaW1wb3J0IExheW91dCBmcm9tIFwiLi4vaG9jL0xheW91dFwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCBDdXN0b200MDQgZnJvbSBcIi4vNDA0XCI7XHJcbi8vIGltcG9ydCBDdXN0b21QYWdlcyBmcm9tIFwiLi4vY3VzdG9tXCI7XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbi8vICAgY29uc29sZS5sb2coXCJjYWxsaW5nMTE9PT09PT09PT09PT0+XCIpXHJcblxyXG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfS9hcGkvZ2V0bWVudURhdGFgKTtcclxuLy8gICBjb25zdCBtZW51RGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YS5kb2N1bWVudHNbMF0uY29udGVudCk7XHJcbi8vICAgY29uc29sZS5sb2coXCJtZW51RGF0YT09PT09PT09PT09PT5cIiwgbWVudURhdGEpXHJcblxyXG4vLyAgIGNvbnN0IHBhdGhzID0gbWVudURhdGEubWFwKG1lbnVJdGVtID0+IHtcclxuLy8gICAgIGNvbnN0IHBhdGhzID0gW107XHJcbi8vICAgICBpZiAobWVudUl0ZW0uY2hpbGRyZW4pIHtcclxuLy8gICAgICAgbWVudUl0ZW0uY2hpbGRyZW4uZm9yRWFjaChjaGlsZEl0ZW0gPT4ge1xyXG4vLyAgICAgICAgIGlmIChjaGlsZEl0ZW0uc3ViY2hpbGRyZW4pIHtcclxuLy8gICAgICAgICAgIGNoaWxkSXRlbS5zdWJjaGlsZHJlbi5mb3JFYWNoKHN1YkNoaWxkSXRlbSA9PiB7XHJcbi8vICAgICAgICAgICAgIHBhdGhzLnB1c2goeyBwYXJhbXM6IHsgaW5kZXg6IHN1YkNoaWxkSXRlbS5zbHVnLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pIH0gfSk7XHJcbi8vICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgcGF0aHMucHVzaCh7IHBhcmFtczogeyBpbmRleDogY2hpbGRJdGVtLnNsdWcuc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbikgfSB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgcGF0aHMucHVzaCh7IHBhcmFtczogeyBpbmRleDogbWVudUl0ZW0uc2x1Zy5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKSB9IH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHBhdGhzO1xyXG4vLyAgIH0pLmZsYXQoKTtcclxuXHJcbi8vICAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiAnYmxvY2tpbmcnIH07XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4vLyAgIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xyXG4vLyAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHBhcmFtcy5pbmRleCB8fCBbXTtcclxuLy8gICBjb25zdCBwYXRoID0gYC8ke3BhdGhTZWdtZW50cy5qb2luKFwiL1wiKX1gO1xyXG5cclxuXHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2FwaS9nZXRtZW51RGF0YWApO1xyXG4vLyAgIGNvbnN0IG1lbnVEYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmRvY3VtZW50c1swXS5jb250ZW50KTtcclxuXHJcblxyXG4vLyAgIGxldCBtYXRjaGVkTWVudUl0ZW0gPSBudWxsO1xyXG4vLyAgIGZvciAoY29uc3QgbWVudUl0ZW0gb2YgbWVudURhdGEpIHtcclxuLy8gICAgIGlmIChtZW51SXRlbS5zbHVnID09PSBwYXRoKSB7XHJcbi8vICAgICAgIG1hdGNoZWRNZW51SXRlbSA9IG1lbnVJdGVtO1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIH1cclxuLy8gICAgIGlmIChtZW51SXRlbS5jaGlsZHJlbikge1xyXG4vLyAgICAgICBmb3IgKGNvbnN0IGNoaWxkSXRlbSBvZiBtZW51SXRlbS5jaGlsZHJlbikge1xyXG4vLyAgICAgICAgIGlmIChjaGlsZEl0ZW0uc2x1ZyA9PT0gcGF0aCkge1xyXG4vLyAgICAgICAgICAgbWF0Y2hlZE1lbnVJdGVtID0gY2hpbGRJdGVtO1xyXG4vLyAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmIChjaGlsZEl0ZW0uc3ViY2hpbGRyZW4pIHtcclxuLy8gICAgICAgICAgIGZvciAoY29uc3Qgc3ViQ2hpbGRJdGVtIG9mIGNoaWxkSXRlbS5zdWJjaGlsZHJlbikge1xyXG4vLyAgICAgICAgICAgICBpZiAoc3ViQ2hpbGRJdGVtLnNsdWcgPT09IHBhdGgpIHtcclxuLy8gICAgICAgICAgICAgICBtYXRjaGVkTWVudUl0ZW0gPSBzdWJDaGlsZEl0ZW07XHJcbi8vICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIGlmIChtYXRjaGVkTWVudUl0ZW0pIHtcclxuLy8gICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGlmIChtYXRjaGVkTWVudUl0ZW0pIHtcclxuLy8gICAgICAgICBicmVhaztcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgY29uc3QgeyB0eXBlLCBtZW51SWQsIHNsdWcgfSA9IG1hdGNoZWRNZW51SXRlbSB8fCB7fTtcclxuXHJcbi8vICAgaWYgKCFtYXRjaGVkTWVudUl0ZW0pIHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGlmICh0eXBlID09PSAnY3VzdG9tJykge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICB0eXBlLFxyXG4vLyAgICAgICAgIGRhdGE6IG51bGwsXHJcbi8vICAgICAgICAgc2x1Z1xyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICByZXZhbGlkYXRlOiA4NjQwMCwgLy8gUmV2YWxpZGF0ZSBldmVyeSAyNCBob3Vyc1xyXG4vLyAgICAgfTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgbGV0IHRlbXBTbHVnID0gcGF0aC5zdWJzdHJpbmcoMSk7XHJcbi8vICAgICAgIGNvbnN0IGZpbmFsVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2FwaS9wYWdlRGF0YT9zbHVnPSR7dGVtcFNsdWd9YDtcclxuLy8gICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgICAgICB9O1xyXG5cclxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoZmluYWxVcmwsIGhlYWRlcnMpO1xyXG4vLyAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YT8uZG9jdW1lbnRzWzBdO1xyXG5cclxuLy8gICAgICAgaWYgKCFkYXRhKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgIHR5cGUsXHJcbi8vICAgICAgICAgICBkYXRhLFxyXG4vLyAgICAgICAgICAgc2x1Z1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgcmV2YWxpZGF0ZTogODY0MDAsIC8vIFJldmFsaWRhdGUgZXZlcnkgMjQgaG91cnNcclxuLy8gICAgICAgfTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4vLyAgICAgICAgIHJldmFsaWRhdGU6IDg2NDAwLCAvLyBSZXZhbGlkYXRlIGV2ZXJ5IDI0IGhvdXJzXHJcbi8vICAgICAgIH07XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdHlwZSwgZGF0YSwgc2x1ZyB9KSB7XHJcbi8vICAgY29uc3QgW21lbnVEYXRhLCBzZXRNZW51RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBjb25zdCBmZXRjaE1lbnVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9nZXRtZW51RGF0YVwiKTtcclxuLy8gICAgICAgICBjb25zdCBtZW51RGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YS5kb2N1bWVudHNbMF0uY29udGVudCk7XHJcbi8vICAgICAgICAgc2V0TWVudURhdGEobWVudURhdGEpO1xyXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBtZW51IGRhdGE6XCIsIGVycm9yKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBmZXRjaE1lbnVEYXRhKCk7XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBpZiAoIWRhdGEgJiYgdHlwZSAhPT0gJ2N1c3RvbScpIHtcclxuLy8gICAgIHJldHVybiA8Q3VzdG9tNDA0IC8+O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDw+XHJcbi8vICAgICAgIDxQYWdlU0VPXHJcbi8vICAgICAgICAgdGl0bGU9e2RhdGE/LnBhZ2VUaXRsZX1cclxuLy8gICAgICAgICBjYW5vbmljYWxUYWc9e1wiXCJ9XHJcbi8vICAgICAgICAgbWV0YXRpdGxlVGFnPXtNZXRhRGF0YVswXS50aXRsZVRhZ31cclxuLy8gICAgICAgICBtZXRhRGVzPXtNZXRhRGF0YVswXS5tZXRhRGVzY3JpcHRpb259XHJcbi8vICAgICAgIC8+XHJcblxyXG4vLyAgICAgICB7ZGF0YSA9PT0gbnVsbCAmJiB0eXBlID09PSBcInBhZ2VcIiA/IDxMYXlvdXQ+IDxMb2FkaW5nQW5pbWF0aW9uIC8+IDwvTGF5b3V0PiA6XHJcbi8vICAgICAgICAgdHlwZSA9PT0gJ3BhZ2UnICYmIDxSZW5kZXJTZWN0aW9ucyBkYXRhPXtkYXRhfSAvPlxyXG4vLyAgICAgICB9XHJcblxyXG4vLyAgICAgICB7dHlwZSA9PT0gJ3Bvc3QnICYmIDxQb3N0Q29tcG9uZW50IC8+fVxyXG4vLyAgICAgICB7dHlwZSA9PT0gJ2Zvcm0nICYmIDxMYXlvdXQ+PGgyPkZvcm0gY29tcG9uZW50PC9oMj48L0xheW91dD59XHJcbi8vICAgICAgIHt0eXBlID09PSAnY3VzdG9tJyAmJiA8Q3VzdG9tUGFnZXMgdHlwZT17dHlwZX0gc2x1Zz17c2x1Z30gLz59XHJcbi8vICAgICAgIHtkYXRhID09PSBudWxsICYmIHR5cGUgIT09ICdjdXN0b20nICYmIDxDdXN0b200MDQgLz59XHJcbi8vICAgICA8Lz5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIHBhZ2VzL1suLi5pbmRleF0uanNcclxuLy8gbWFpbiBjb2RlXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFnZVNFTyBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vUGFnZVNFT1wiO1xyXG5pbXBvcnQgeyBNZXRhRGF0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9IZWxwZXJcIjtcclxuaW1wb3J0IFJlbmRlclNlY3Rpb25zIGZyb20gXCIuLi9jb21wb25lbnRzL3JlbmRlclNlY3Rpb25zXCI7XHJcbmltcG9ydCBMb2FkaW5nQW5pbWF0aW9uIGZyb20gXCIuLi9jdXN0b20vYW5pbWF0ZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9ob2MvTGF5b3V0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEN1c3RvbTQwNCBmcm9tIFwiLi80MDRcIjtcclxuaW1wb3J0IEN1c3RvbVBhZ2VzIGZyb20gXCIuLi9jdXN0b21cIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9TaWRlYmFyXCI7IC8vIEFkanVzdCB0aGUgcGF0aCBhcyBuZWVkZWRcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiY2FsbGluZzExPT09PT09PT09PT09PlwiKTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2FwaS9nZXRtZW51RGF0YWApO1xyXG4gIGNvbnN0IG1lbnVEYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmRvY3VtZW50c1swXS5jb250ZW50KTtcclxuICBjb25zb2xlLmxvZyhcIm1lbnVEYXRhPT09PT09PT09PT09PlwiLCBtZW51RGF0YSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gbWVudURhdGFcclxuICAgIC5tYXAoKG1lbnVJdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhdGhzID0gW107XHJcbiAgICAgIGlmIChtZW51SXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgIG1lbnVJdGVtLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGNoaWxkSXRlbS5zdWJjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjaGlsZEl0ZW0uc3ViY2hpbGRyZW4uZm9yRWFjaCgoc3ViQ2hpbGRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcGF0aHMucHVzaCh7IHBhcmFtczogeyBpbmRleDogc3ViQ2hpbGRJdGVtLnNsdWcuc3BsaXQoXCIvXCIpLmZpbHRlcihCb29sZWFuKSB9IH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhdGhzLnB1c2goeyBwYXJhbXM6IHsgaW5kZXg6IGNoaWxkSXRlbS5zbHVnLnNwbGl0KFwiL1wiKS5maWx0ZXIoQm9vbGVhbikgfSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXRocy5wdXNoKHsgcGFyYW1zOiB7IGluZGV4OiBtZW51SXRlbS5zbHVnLnNwbGl0KFwiL1wiKS5maWx0ZXIoQm9vbGVhbikgfSB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGF0aHM7XHJcbiAgICB9KVxyXG4gICAgLmZsYXQoKTtcclxuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBcImJsb2NraW5nXCIgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcclxuICBjb25zdCBwYXRoU2VnbWVudHMgPSBwYXJhbXMuaW5kZXggfHwgW107XHJcbiAgY29uc3QgcGF0aCA9IGAvJHtwYXRoU2VnbWVudHMuam9pbihcIi9cIil9YDtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2FwaS9nZXRtZW51RGF0YWApO1xyXG4gIGNvbnN0IG1lbnVEYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmRvY3VtZW50c1swXS5jb250ZW50KTtcclxuXHJcbiAgbGV0IG1hdGNoZWRNZW51SXRlbSA9IG51bGw7XHJcbiAgZm9yIChjb25zdCBtZW51SXRlbSBvZiBtZW51RGF0YSkge1xyXG4gICAgaWYgKG1lbnVJdGVtLnNsdWcgPT09IHBhdGgpIHtcclxuICAgICAgbWF0Y2hlZE1lbnVJdGVtID0gbWVudUl0ZW07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lbnVJdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgIGZvciAoY29uc3QgY2hpbGRJdGVtIG9mIG1lbnVJdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkSXRlbS5zbHVnID09PSBwYXRoKSB7XHJcbiAgICAgICAgICBtYXRjaGVkTWVudUl0ZW0gPSBjaGlsZEl0ZW07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoaWxkSXRlbS5zdWJjaGlsZHJlbikge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBzdWJDaGlsZEl0ZW0gb2YgY2hpbGRJdGVtLnN1YmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJDaGlsZEl0ZW0uc2x1ZyA9PT0gcGF0aCkge1xyXG4gICAgICAgICAgICAgIG1hdGNoZWRNZW51SXRlbSA9IHN1YkNoaWxkSXRlbTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1hdGNoZWRNZW51SXRlbSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hdGNoZWRNZW51SXRlbSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHR5cGUsIG1lbnVJZCwgc2x1ZyB9ID0gbWF0Y2hlZE1lbnVJdGVtIHx8IHt9O1xyXG5cclxuICBpZiAoIW1hdGNoZWRNZW51SXRlbSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGUgPT09IFwiY3VzdG9tXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIHNsdWcsXHJcbiAgICAgICAgbWVudURhdGEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDYwLCAvLyBSZXZhbGlkYXRlIGV2ZXJ5IDI0IGhvdXJzXHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdGVtcFNsdWcgPSBwYXRoLnN1YnN0cmluZygxKTtcclxuICAgICAgY29uc3QgZmluYWxVcmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0vYXBpL3BhZ2VEYXRhP3NsdWc9JHt0ZW1wU2x1Z31gO1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoZmluYWxVcmwsIGhlYWRlcnMpO1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YT8uZG9jdW1lbnRzWzBdO1xyXG5cclxuICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgc2x1ZyxcclxuICAgICAgICAgIG1lbnVEYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogNjAsIC8vIFJldmFsaWRhdGUgZXZlcnkgMjQgaG91cnNcclxuICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogNjAsIC8vIFJldmFsaWRhdGUgZXZlcnkgMjQgaG91cnNcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0eXBlLCBkYXRhLCBzbHVnLCBtZW51RGF0YSB9KSB7XHJcbiAgY29uc29sZS5sb2cobWVudURhdGEsICdmZGZrbGRmaycpXHJcbiAgY29uc3QgW2lzU2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBpZiAoIWRhdGEgJiYgdHlwZSAhPT0gXCJjdXN0b21cIikge1xyXG4gICAgcmV0dXJuIDxDdXN0b200MDQgLz47XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZVNFT1xyXG4gICAgICAgIHRpdGxlPXtkYXRhPy5wYWdlVGl0bGV9XHJcbiAgICAgICAgY2Fub25pY2FsVGFnPXtcIlwifVxyXG4gICAgICAgIG1ldGF0aXRsZVRhZz17TWV0YURhdGFbMF0udGl0bGVUYWd9XHJcbiAgICAgICAgbWV0YURlcz17TWV0YURhdGFbMF0ubWV0YURlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPExheW91dCB7Li4ueyBpc1NpZGViYXJPcGVuIH19PlxyXG4gICAgICAgIDxTaWRlYmFyIGlzU2lkZWJhck9wZW49e2lzU2lkZWJhck9wZW59IHNldFNpZGViYXJPcGVuPXtzZXRTaWRlYmFyT3Blbn0gbWVudURhdGE9e21lbnVEYXRhfSAvPlxyXG4gICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwic3RpY2t5LWJhclwiIG1lbnVEYXRhPXttZW51RGF0YX0gc2V0U2lkZWJhck9wZW49e3NldFNpZGViYXJPcGVufSBpc1NpZGViYXJPcGVuPXtpc1NpZGViYXJPcGVufSAvPlxyXG4gICAgICAgIHtkYXRhID09PSBudWxsICYmIHR5cGUgPT09IFwicGFnZVwiID8gKFxyXG5cclxuICAgICAgICAgIDxMb2FkaW5nQW5pbWF0aW9uIC8+XHJcblxyXG5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgdHlwZSA9PT0gXCJwYWdlXCIgJiYgPFJlbmRlclNlY3Rpb25zIGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dHlwZSA9PT0gXCJwb3N0XCIgJiYgPFBvc3RDb21wb25lbnQgLz59XHJcbiAgICAgICAge3R5cGUgPT09IFwiZm9ybVwiICYmIChcclxuXHJcbiAgICAgICAgICA8aDI+PC9oMj5cclxuXHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dHlwZSA9PT0gXCJjdXN0b21cIiAmJiA8Q3VzdG9tUGFnZXMgdHlwZT17dHlwZX0gc2x1Zz17c2x1Z30gLz59XHJcbiAgICAgICAge2RhdGEgPT09IG51bGwgJiYgdHlwZSAhPT0gXCJjdXN0b21cIiAmJiA8Q3VzdG9tNDA0IC8+fVxyXG4gICAgICA8L0xheW91dD5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUGFnZVNFTyIsIk1ldGFEYXRhIiwiUmVuZGVyU2VjdGlvbnMiLCJMb2FkaW5nQW5pbWF0aW9uIiwiTGF5b3V0IiwiQ3VzdG9tNDA0IiwiQ3VzdG9tUGFnZXMiLCJTaWRlYmFyIiwiTmF2YmFyIiwiSG9tZSIsInR5cGUiLCJkYXRhIiwic2x1ZyIsIm1lbnVEYXRhIiwiY29uc29sZSIsImxvZyIsImlzU2lkZWJhck9wZW4iLCJzZXRTaWRlYmFyT3BlbiIsInRpdGxlIiwicGFnZVRpdGxlIiwiY2Fub25pY2FsVGFnIiwibWV0YXRpdGxlVGFnIiwidGl0bGVUYWciLCJtZXRhRGVzIiwibWV0YURlc2NyaXB0aW9uIiwiY2xhc3NOYW1lIiwiUG9zdENvbXBvbmVudCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[...index].js\n"));

/***/ })

});