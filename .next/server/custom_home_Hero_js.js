"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "custom_home_Hero_js";
exports.ids = ["custom_home_Hero_js"];
exports.modules = {

/***/ "./custom/home/Hero.js":
/*!*****************************!*\
  !*** ./custom/home/Hero.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n//Code Without Animation\n// import React, { useState } from \"react\";\n// import Router from 'next/router';\n// const Hero = () => {\n//     const [email, setEmail] = useState(null)\n//     const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n//     const getStarted = (ev) => {\n//         ev.preventDefault();\n//         //  if (email !== null && emailPattern.test(email)) {\n//         //   Router.push({\n//         //     pathname: '/pricing',\n//         //     query: { email: encodeURIComponent(email) }\n//         //   })\n//         // }\n//         Router.push(\"/resources/contact\")\n//     };\n//     return (\n//         <>\n//             <div className=\"hero-image-home bg-cover h-[570px] sm:h-[750px] py-8 sm:py-16 flex flex-col\">\n//                 <div className=\"container mx-auto px-3 flex-grow flex items-center justify-center\">\n//                     <div className=\"w-full max-w-[1200px] mx-auto text-center\">\n//                         <h1 className=\"text-[34px] sm:text-[48px] text-white leading-[45px] sm:leading-normal font-bold sm:-mt-20\">\n//                             Transforming Retail Transactions into Experiences\n//                         </h1>\n//                         <p className=\"text-base sm:text-lg text-white my-5\" style={{ fontWeight: '600', marginLeft: '10%', marginRight: '10%' }}>\n//                             From advanced POS systems to dynamic supply chain management, discover tailored solutions that drive success in the modern retail landscape\n//                         </p>\n//                         <form className=\"flex items-center w-full max-w-[600px] mx-auto h-[55px] sm:h-[60px]\">\n//                             <input\n//                                 onChange={(e) => {\n//                                     setEmail(e.target.value);\n//                                     if (emailPattern.test(e.target.value)) {\n//                                     } else {\n//                                     }\n//                                 }}\n//                                 required\n//                                 placeholder=\"Enter email\"\n//                                 type=\"email\"\n//                                 style={{ borderRadius: '4px' }}\n//                                 className=\"bg-white h-full w-full px-5 py-2 outline-none text-xs sm:text-sm mr-2 placeholder-gray-800\"\n//                             />\n//                             <button style={{ borderRadius: '4px' }} onClick={getStarted} className=\"bg-green whitespace-nowrap px-5 sm:px-10 h-full py-4 text-white text-xs sm:text-sm flex items-center free-trial-btn-hover  transition-all duration-200 ease-in hover:shadow-lg\">\n//                                 {/* Get Started */}\n//                                 Contact Sales\n//                             </button>\n//                         </form>\n//                     </div>\n//                 </div>\n//             </div>\n//         </>\n//     );\n// };\n// export default Hero;\n//Code With Animation\n\n\n\n\nconst Hero = ()=>{\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    const getStarted = (ev)=>{\n        ev.preventDefault();\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/resources/contact\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            initial: {\n                opacity: 0,\n                y: 50\n            },\n            animate: {\n                opacity: 1,\n                y: 0\n            },\n            transition: {\n                duration: 0.8,\n                ease: \"easeOut\"\n            },\n            className: \"hero-image-home bg-cover h-[570px] sm:h-[750px] py-8 sm:py-16 flex flex-col\",\n            style: {\n                zIndex: 1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-3 flex-grow flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-[1200px] mx-auto text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {\n                            initial: {\n                                opacity: 0,\n                                y: -50\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            transition: {\n                                duration: 1,\n                                ease: \"easeIn\"\n                            },\n                            className: \"text-[34px] sm:text-[48px] text-white leading-[45px] sm:leading-normal font-bold sm:-mt-20\",\n                            children: \"Transforming Retail Transactions into Experiences\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\custom\\\\home\\\\Hero.js\",\n                            lineNumber: 95,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {\n                            initial: {\n                                opacity: 0,\n                                y: -50\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            transition: {\n                                duration: 1,\n                                ease: \"easeOut\",\n                                delay: 0.2\n                            },\n                            className: \"text-base sm:text-lg text-white my-5\",\n                            style: {\n                                fontWeight: \"600\",\n                                marginLeft: \"10%\",\n                                marginRight: \"10%\"\n                            },\n                            children: \"From advanced POS systems to dynamic supply chain management, discover tailored solutions that drive success in the modern retail landscape\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\custom\\\\home\\\\Hero.js\",\n                            lineNumber: 103,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.form, {\n                            initial: {\n                                opacity: 0,\n                                y: 50\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            transition: {\n                                duration: 1,\n                                ease: \"easeOut\",\n                                delay: 0.4\n                            },\n                            className: \"flex items-center w-full max-w-[600px] mx-auto h-[55px] sm:h-[60px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true,\n                                    placeholder: \"Enter email\",\n                                    type: \"email\",\n                                    style: {\n                                        borderRadius: \"4px\"\n                                    },\n                                    className: \"bg-white h-full w-full px-5 py-2 outline-none text-xs sm:text-sm mr-2 placeholder-gray-800\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\custom\\\\home\\\\Hero.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        borderRadius: \"4px\"\n                                    },\n                                    onClick: getStarted,\n                                    className: \"bg-green whitespace-nowrap px-5 sm:px-10 h-full py-4 text-white text-xs sm:text-sm flex items-center free-trial-btn-hover transition-all duration-200 ease-in hover:shadow-lg\",\n                                    children: \"Contact Sales\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\custom\\\\home\\\\Hero.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\custom\\\\home\\\\Hero.js\",\n                            lineNumber: 112,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\custom\\\\home\\\\Hero.js\",\n                    lineNumber: 94,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\custom\\\\home\\\\Hero.js\",\n                lineNumber: 93,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\25-7-24 new version\\\\CW-suite-new-version\\\\CW-suite-new-version\\\\custom\\\\home\\\\Hero.js\",\n            lineNumber: 86,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs4Q0FFViw4REFBQ1U7b0NBQ0dDLFVBQVUsQ0FBQ0MsSUFBTTFCLFNBQVMwQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7b0NBQ3hDQyxRQUFRO29DQUNSQyxhQUFZO29DQUNaQyxNQUFLO29DQUNMaEIsT0FBTzt3Q0FBRWlCLGNBQWM7b0NBQU07b0NBQzdCbEIsV0FBVTs7Ozs7OzhDQUVkLDhEQUFDbUI7b0NBQ0dsQixPQUFPO3dDQUFFaUIsY0FBYztvQ0FBTTtvQ0FDN0JFLFNBQVNoQztvQ0FDVFksV0FBVTs4Q0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXN0I7QUFFQSxpRUFBZWhCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdy1zdWl0ZS8uL2N1c3RvbS9ob21lL0hlcm8uanM/MTE0MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvZGUgV2l0aG91dCBBbmltYXRpb25cclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG4vLyBjb25zdCBIZXJvID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShudWxsKVxyXG4vLyAgICAgY29uc3QgZW1haWxQYXR0ZXJuID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XHJcblxyXG4vLyAgICAgY29uc3QgZ2V0U3RhcnRlZCA9IChldikgPT4ge1xyXG4vLyAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgLy8gIGlmIChlbWFpbCAhPT0gbnVsbCAmJiBlbWFpbFBhdHRlcm4udGVzdChlbWFpbCkpIHtcclxuLy8gICAgICAgICAvLyAgIFJvdXRlci5wdXNoKHtcclxuLy8gICAgICAgICAvLyAgICAgcGF0aG5hbWU6ICcvcHJpY2luZycsXHJcbi8vICAgICAgICAgLy8gICAgIHF1ZXJ5OiB7IGVtYWlsOiBlbmNvZGVVUklDb21wb25lbnQoZW1haWwpIH1cclxuLy8gICAgICAgICAvLyAgIH0pXHJcbi8vICAgICAgICAgLy8gfVxyXG4vLyAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Jlc291cmNlcy9jb250YWN0XCIpXHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlLWhvbWUgYmctY292ZXIgaC1bNTcwcHhdIHNtOmgtWzc1MHB4XSBweS04IHNtOnB5LTE2IGZsZXggZmxleC1jb2xcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtMyBmbGV4LWdyb3cgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1bMTIwMHB4XSBteC1hdXRvIHRleHQtY2VudGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVszNHB4XSBzbTp0ZXh0LVs0OHB4XSB0ZXh0LXdoaXRlIGxlYWRpbmctWzQ1cHhdIHNtOmxlYWRpbmctbm9ybWFsIGZvbnQtYm9sZCBzbTotbXQtMjBcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybWluZyBSZXRhaWwgVHJhbnNhY3Rpb25zIGludG8gRXhwZXJpZW5jZXNcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGcgdGV4dC13aGl0ZSBteS01XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIG1hcmdpbkxlZnQ6ICcxMCUnLCBtYXJnaW5SaWdodDogJzEwJScgfX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tIGFkdmFuY2VkIFBPUyBzeXN0ZW1zIHRvIGR5bmFtaWMgc3VwcGx5IGNoYWluIG1hbmFnZW1lbnQsIGRpc2NvdmVyIHRhaWxvcmVkIHNvbHV0aW9ucyB0aGF0IGRyaXZlIHN1Y2Nlc3MgaW4gdGhlIG1vZGVybiByZXRhaWwgbGFuZHNjYXBlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBtYXgtdy1bNjAwcHhdIG14LWF1dG8gaC1bNTVweF0gc206aC1bNjBweF1cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbWFpbFBhdHRlcm4udGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzRweCcgfX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLWZ1bGwgdy1mdWxsIHB4LTUgcHktMiBvdXRsaW5lLW5vbmUgdGV4dC14cyBzbTp0ZXh0LXNtIG1yLTIgcGxhY2Vob2xkZXItZ3JheS04MDBcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fSBvbkNsaWNrPXtnZXRTdGFydGVkfSBjbGFzc05hbWU9XCJiZy1ncmVlbiB3aGl0ZXNwYWNlLW5vd3JhcCBweC01IHNtOnB4LTEwIGgtZnVsbCBweS00IHRleHQtd2hpdGUgdGV4dC14cyBzbTp0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGZyZWUtdHJpYWwtYnRuLWhvdmVyICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1pbiBob3ZlcjpzaGFkb3ctbGdcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogR2V0IFN0YXJ0ZWQgKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBTYWxlc1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEhlcm87XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL0NvZGUgV2l0aCBBbmltYXRpb25cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmNvbnN0IEhlcm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgZW1haWxQYXR0ZXJuID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XHJcblxyXG4gICAgY29uc3QgZ2V0U3RhcnRlZCA9IChldikgPT4ge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvcmVzb3VyY2VzL2NvbnRhY3RcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNTAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VPdXRcIiB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1pbWFnZS1ob21lIGJnLWNvdmVyIGgtWzU3MHB4XSBzbTpoLVs3NTBweF0gcHktOCBzbTpweS0xNiBmbGV4IGZsZXgtY29sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTMgZmxleC1ncm93IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctWzEyMDBweF0gbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmgxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC01MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBlYXNlOiBcImVhc2VJblwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVszNHB4XSBzbTp0ZXh0LVs0OHB4XSB0ZXh0LXdoaXRlIGxlYWRpbmctWzQ1cHhdIHNtOmxlYWRpbmctbm9ybWFsIGZvbnQtYm9sZCBzbTotbXQtMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2Zvcm1pbmcgUmV0YWlsIFRyYW5zYWN0aW9ucyBpbnRvIEV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEsIGVhc2U6IFwiZWFzZU91dFwiLCBkZWxheTogMC4yIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyB0ZXh0LXdoaXRlIG15LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIG1hcmdpbkxlZnQ6ICcxMCUnLCBtYXJnaW5SaWdodDogJzEwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRnJvbSBhZHZhbmNlZCBQT1Mgc3lzdGVtcyB0byBkeW5hbWljIHN1cHBseSBjaGFpbiBtYW5hZ2VtZW50LCBkaXNjb3ZlciB0YWlsb3JlZCBzb2x1dGlvbnMgdGhhdCBkcml2ZSBzdWNjZXNzIGluIHRoZSBtb2Rlcm4gcmV0YWlsIGxhbmRzY2FwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSwgZWFzZTogXCJlYXNlT3V0XCIsIGRlbGF5OiAwLjQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBtYXgtdy1bNjAwcHhdIG14LWF1dG8gaC1bNTVweF0gc206aC1bNjBweF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGgtZnVsbCB3LWZ1bGwgcHgtNSBweS0yIG91dGxpbmUtbm9uZSB0ZXh0LXhzIHNtOnRleHQtc20gbXItMiBwbGFjZWhvbGRlci1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzRweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXRTdGFydGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuIHdoaXRlc3BhY2Utbm93cmFwIHB4LTUgc206cHgtMTAgaC1mdWxsIHB5LTQgdGV4dC13aGl0ZSB0ZXh0LXhzIHNtOnRleHQtc20gZmxleCBpdGVtcy1jZW50ZXIgZnJlZS10cmlhbC1idG4taG92ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2UtaW4gaG92ZXI6c2hhZG93LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFNhbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsIm1vdGlvbiIsIkhlcm8iLCJlbWFpbCIsInNldEVtYWlsIiwiZW1haWxQYXR0ZXJuIiwiZ2V0U3RhcnRlZCIsImV2IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJjbGFzc05hbWUiLCJzdHlsZSIsInpJbmRleCIsImgxIiwicCIsImRlbGF5IiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImZvcm0iLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./custom/home/Hero.js\n");

/***/ })

};
;