"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/resume/page",{

/***/ "(app-pages-browser)/./components/Techno2.jsx":
/*!********************************!*\
  !*** ./components/Techno2.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// pages/index.jsx\n\n\n// Experience data\nconst Timeline = (param)=>{\n    let { experiences } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-3 w-full my-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Circle, {}, void 0, false, {\n                fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined),\n            experiences.map((exp, key)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto\",\n                            children: [\n                                exp.id % 2 === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Experience, {\n                                    company: exp.company,\n                                    description: exp.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Pillar, {}, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, undefined),\n                                exp.id % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Experience, {\n                                    company: exp.company,\n                                    description: exp.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, undefined),\n                        key < experiences.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Circle, {}, void 0, false, {\n                            fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 54\n                        }, undefined)\n                    ]\n                }, key, true, {\n                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 24\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Circle, {}, void 0, false, {\n                fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Timeline;\nconst Circle = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-full w-4 h-4 bg-blue-500 mx-auto\"\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Circle;\nconst Pillar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-b from-blue-500 to-fuchsia-500 rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto\"\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Pillar;\nconst Experience = (param)=>{\n    let { company, description } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"transition duration-300 ease-in-out flex flex-col gap-y-2 border shadow-md rounded-xl p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-blue-800 font-bold text-lg border-b\",\n                children: company\n            }, void 0, false, {\n                fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm text-gray-700\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = Experience;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Timeline\");\n$RefreshReg$(_c1, \"Circle\");\n$RefreshReg$(_c2, \"Pillar\");\n$RefreshReg$(_c3, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVjaG5vMi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0Esa0JBQWtCO0FBQ2E7QUFDRTtBQUVqQyxrQkFBa0I7QUFFbEIsTUFBTUUsV0FBVztRQUFDLEVBQUNDLFdBQVcsRUFBQztJQUMzQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzs7OztZQUVBSCxZQUFZSSxHQUFHLENBQUMsQ0FBQ0MsS0FBSUM7Z0JBQ2xCLHFCQUFPLDhEQUFDUiwyQ0FBUUE7O3NDQUNaLDhEQUFDRzs0QkFBSUMsV0FBVTs7Z0NBQ1ZHLElBQUlFLEVBQUUsR0FBQyxNQUFNLGtCQUNWLDhEQUFDQztvQ0FBV0MsU0FBU0osSUFBSUksT0FBTztvQ0FBRUMsYUFBYUwsSUFBSUssV0FBVzs7Ozs7OERBRTlELDhEQUFDVDs7Ozs7OENBR0wsOERBQUNVOzs7OztnQ0FFQU4sSUFBSUUsRUFBRSxHQUFDLE1BQU0sa0JBQ1YsOERBQUNDO29DQUFXQyxTQUFTSixJQUFJSSxPQUFPO29DQUFFQyxhQUFhTCxJQUFJSyxXQUFXOzs7Ozs4REFFOUQsOERBQUNUOzs7Ozs7Ozs7Ozt3QkFLUkssTUFBT04sWUFBWVksTUFBTSxHQUFDLG1CQUFNLDhEQUFDVDs7Ozs7O21CQWxCaEJHOzs7OztZQW9CMUI7MEJBRUEsOERBQUNIOzs7Ozs7Ozs7OztBQUdiO0tBL0JNSjtBQWdDTixNQUFNSSxTQUFTO0lBQ1gscUJBQ0ksOERBQUNGO1FBQUlDLFdBQVU7Ozs7OztBQUl2QjtNQU5NQztBQVFOLE1BQU1RLFNBQVM7SUFDWCxxQkFDSSw4REFBQ1Y7UUFBSUMsV0FBVTs7Ozs7O0FBSXZCO01BTk1TO0FBUU4sTUFBTUgsYUFBYTtRQUFDLEVBQUNDLE9BQU8sRUFBQ0MsV0FBVyxFQUFDO0lBQ3ZDLHFCQUNFLDhEQUFDVDtRQUFJQyxXQUFVOzswQkFDUCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZPOzs7Ozs7MEJBR0wsOERBQUNSO2dCQUFJQyxXQUFVOzBCQUNWUTs7Ozs7Ozs7Ozs7O0FBSWpCO01BWk1GO0FBYU4sK0RBQWVULFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWNobm8yLmpzeD80N2RiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuLy8gcGFnZXMvaW5kZXguanN4XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gRXhwZXJpZW5jZSBkYXRhXG5cbmNvbnN0IFRpbWVsaW5lID0gKHtleHBlcmllbmNlc30pID0+e1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLXktMyB3LWZ1bGwgbXktNCc+XG4gICAgICAgICAgICA8Q2lyY2xlIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cCxrZXkpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGcmFnbWVudCBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy1bMWZyX2F1dG9fMWZyXSBnYXAteC0yIGl0ZW1zLWNlbnRlciBteC1hdXRvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleHAuaWQlMiA9PT0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhwZXJpZW5jZSBjb21wYW55PXtleHAuY29tcGFueX0gZGVzY3JpcHRpb249e2V4cC5kZXNjcmlwdGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGxhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhwLmlkJTIgPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGVyaWVuY2UgY29tcGFueT17ZXhwLmNvbXBhbnl9IGRlc2NyaXB0aW9uPXtleHAuZGVzY3JpcHRpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge2tleSA8IChleHBlcmllbmNlcy5sZW5ndGgtMSkgJiYgPENpcmNsZSAvPn1cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIDxDaXJjbGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuY29uc3QgQ2lyY2xlID0gKCkgPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLWZ1Y2hzaWEtNTAwIHJvdW5kZWQtZnVsbCB3LTQgaC00IGJnLWJsdWUtNTAwIG14LWF1dG8nPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgUGlsbGFyID0gKCkgPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJsdWUtNTAwIHRvLWZ1Y2hzaWEtNTAwIHJvdW5kZWQtdC1mdWxsIHJvdW5kZWQtYi1mdWxsIHctMiBoLWZ1bGwgYmctYmx1ZS01MDAgbXgtYXV0byc+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBFeHBlcmllbmNlID0gKHtjb21wYW55LGRlc2NyaXB0aW9ufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBmbGV4IGZsZXgtY29sIGdhcC15LTIgYm9yZGVyIHNoYWRvdy1tZCByb3VuZGVkLXhsIHAtNCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTgwMCBmb250LWJvbGQgdGV4dC1sZyBib3JkZXItYic+XG4gICAgICAgICAgICAgICAge2NvbXBhbnl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1ncmF5LTcwMCc+XG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRnJhZ21lbnQiLCJUaW1lbGluZSIsImV4cGVyaWVuY2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiQ2lyY2xlIiwibWFwIiwiZXhwIiwia2V5IiwiaWQiLCJFeHBlcmllbmNlIiwiY29tcGFueSIsImRlc2NyaXB0aW9uIiwiUGlsbGFyIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Techno2.jsx\n"));

/***/ })

});