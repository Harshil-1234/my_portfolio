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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// pages/index.jsx\n\n\n// Experience data\nconst experiences = [\n    {\n        id: 1,\n        company: \"One97 Communications Ltd.\",\n        role: \"Backend Developer Intern\",\n        duration: \"July'23 - September'23\",\n        description: \"Lorem ipsum dolor sit, amet consectetur adipisicing elit...\",\n        img: \"https://hblapis.cmots.com/complogodata/IImagesNew/One97-Communications-Ltd_42949010_40147.png\"\n    },\n    {\n        id: 2,\n        company: \"Another Company Ltd.\",\n        role: \"Frontend Developer Intern\",\n        duration: \"May'23 - July'23\",\n        description: \"Lorem ipsum dolor sit, amet consectetur adipisicing elit...\",\n        img: \"\"\n    }\n];\nconst Timeline = (param)=>{\n    let { experiences } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-3 w-full my-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Circle, {}, void 0, false, {\n                fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            experiences.map((exp, key)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-[1fr_auto-1fr] gap-x-2 items-center mx-auto\",\n                            children: [\n                                exp.id % 2 === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Experience, {\n                                    company: exp.company,\n                                    description: exp.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Pillar, {}, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, undefined),\n                                exp.id % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Experience, {\n                                    company: exp.company,\n                                    description: exp.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, undefined),\n                        key < exp.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Circle, {}, void 0, false, {\n                            fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 46\n                        }, undefined)\n                    ]\n                }, key, true, {\n                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 24\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Circle, {}, void 0, false, {\n                fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Timeline;\nconst Circle = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-full w-4 h-4 bg-blue-500 mx-auto\"\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Circle;\nconst Pillar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto\"\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Pillar;\nconst Experience = (param)=>{\n    let { company, description } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-2 border shadow-md rounded-xl p-4\",\n        children: experiences.map((experience)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-blue-800 font-bold text-lg border-b\",\n                        children: experience.company\n                    }, void 0, false, {\n                        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-gray-700\",\n                        children: experience.description\n                    }, void 0, false, {\n                        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = Experience;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Experience);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Timeline\");\n$RefreshReg$(_c1, \"Circle\");\n$RefreshReg$(_c2, \"Pillar\");\n$RefreshReg$(_c3, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVjaG5vMi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0Esa0JBQWtCO0FBQ2E7QUFDRTtBQUVqQyxrQkFBa0I7QUFDbEIsTUFBTUUsY0FBYztJQUNsQjtRQUNFQyxJQUFJO1FBQ0pDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsS0FBSTtJQUNOO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxhQUFhO1FBQ2JDLEtBQUk7SUFDTjtDQUVEO0FBRUQsTUFBTUMsV0FBVztRQUFDLEVBQUNQLFdBQVcsRUFBQztJQUMzQixxQkFDSSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzs7OztZQUVBVixZQUFZVyxHQUFHLENBQUMsQ0FBQ0MsS0FBSUM7Z0JBQ2xCLHFCQUFPLDhEQUFDZCwyQ0FBUUE7O3NDQUNaLDhEQUFDUzs0QkFBSUMsV0FBVTs7Z0NBQ1ZHLElBQUlYLEVBQUUsR0FBQyxNQUFNLGtCQUNWLDhEQUFDYTtvQ0FBV1osU0FBU1UsSUFBSVYsT0FBTztvQ0FBRUcsYUFBYU8sSUFBSVAsV0FBVzs7Ozs7OERBRTlELDhEQUFDRzs7Ozs7OENBR0wsOERBQUNPOzs7OztnQ0FFQUgsSUFBSVgsRUFBRSxHQUFDLE1BQU0sa0JBQ1YsOERBQUNhO29DQUFXWixTQUFTVSxJQUFJVixPQUFPO29DQUFFRyxhQUFhTyxJQUFJUCxXQUFXOzs7Ozs4REFFOUQsOERBQUNHOzs7Ozs7Ozs7Ozt3QkFLUkssTUFBT0QsSUFBSUksTUFBTSxHQUFDLG1CQUFNLDhEQUFDTjs7Ozs7O21CQWxCUkc7Ozs7O1lBb0IxQjswQkFFQSw4REFBQ0g7Ozs7Ozs7Ozs7O0FBR2I7S0EvQk1IO0FBZ0NOLE1BQU1HLFNBQVM7SUFDWCxxQkFDSSw4REFBQ0Y7UUFBSUMsV0FBVTs7Ozs7O0FBSXZCO01BTk1DO0FBUU4sTUFBTUssU0FBUztJQUNYLHFCQUNJLDhEQUFDUDtRQUFJQyxXQUFVOzs7Ozs7QUFJdkI7TUFOTU07QUFRTixNQUFNRCxhQUFhO1FBQUMsRUFBQ1osT0FBTyxFQUFDRyxXQUFXLEVBQUM7SUFDdkMscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7a0JBQ1ZULFlBQVlXLEdBQUcsQ0FBQyxDQUFDTTswQkFDZDs7a0NBQ0ksOERBQUNUO3dCQUFJQyxXQUFVO2tDQUNWUSxXQUFXZixPQUFPOzs7Ozs7a0NBR3ZCLDhEQUFDTTt3QkFBSUMsV0FBVTtrQ0FDVlEsV0FBV1osV0FBVzs7Ozs7Ozs7UUFHbkM7Ozs7OztBQUdSO01BaEJNUztBQWlCTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RlY2hubzIuanN4PzQ3ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG4vLyBwYWdlcy9pbmRleC5qc3hcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBFeHBlcmllbmNlIGRhdGFcbmNvbnN0IGV4cGVyaWVuY2VzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgY29tcGFueTogXCJPbmU5NyBDb21tdW5pY2F0aW9ucyBMdGQuXCIsXG4gICAgcm9sZTogXCJCYWNrZW5kIERldmVsb3BlciBJbnRlcm5cIixcbiAgICBkdXJhdGlvbjogXCJKdWx5JzIzIC0gU2VwdGVtYmVyJzIzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuLi5cIixcbiAgICBpbWc6XCJodHRwczovL2hibGFwaXMuY21vdHMuY29tL2NvbXBsb2dvZGF0YS9JSW1hZ2VzTmV3L09uZTk3LUNvbW11bmljYXRpb25zLUx0ZF80Mjk0OTAxMF80MDE0Ny5wbmdcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGNvbXBhbnk6IFwiQW5vdGhlciBDb21wYW55IEx0ZC5cIixcbiAgICByb2xlOiBcIkZyb250ZW5kIERldmVsb3BlciBJbnRlcm5cIixcbiAgICBkdXJhdGlvbjogXCJNYXknMjMgLSBKdWx5JzIzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuLi5cIixcbiAgICBpbWc6XCJcIixcbiAgfSxcbiAgLy8gQWRkIG1vcmUgZXhwZXJpZW5jZXMgaGVyZVxuXTtcblxuY29uc3QgVGltZWxpbmUgPSAoe2V4cGVyaWVuY2VzfSkgPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAteS0zIHctZnVsbCBteS00Jz5cbiAgICAgICAgICAgIDxDaXJjbGUgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2V4cGVyaWVuY2VzLm1hcCgoZXhwLGtleSk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gPEZyYWdtZW50IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLVsxZnJfYXV0by0xZnJdIGdhcC14LTIgaXRlbXMtY2VudGVyIG14LWF1dG8nPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4cC5pZCUyID09PSAxID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBlcmllbmNlIGNvbXBhbnk9e2V4cC5jb21wYW55fSBkZXNjcmlwdGlvbj17ZXhwLmRlc2NyaXB0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGlsbGFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleHAuaWQlMiA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhwZXJpZW5jZSBjb21wYW55PXtleHAuY29tcGFueX0gZGVzY3JpcHRpb249e2V4cC5kZXNjcmlwdGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7a2V5IDwgKGV4cC5sZW5ndGgtMSkgJiYgPENpcmNsZSAvPn1cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIDxDaXJjbGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuY29uc3QgQ2lyY2xlID0gKCkgPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIHctNCBoLTQgYmctYmx1ZS01MDAgbXgtYXV0byc+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBQaWxsYXIgPSAoKSA9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLXQtZnVsbCByb3VuZGVkLWItZnVsbCB3LTIgaC1mdWxsIGJnLWJsdWUtNTAwIG14LWF1dG8nPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgRXhwZXJpZW5jZSA9ICh7Y29tcGFueSxkZXNjcmlwdGlvbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAteS0yIGJvcmRlciBzaGFkb3ctbWQgcm91bmRlZC14bCBwLTQnPlxuICAgICAgICB7ZXhwZXJpZW5jZXMubWFwKChleHBlcmllbmNlKT0+e1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibHVlLTgwMCBmb250LWJvbGQgdGV4dC1sZyBib3JkZXItYic+XG4gICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWdyYXktNzAwJz5cbiAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGcmFnbWVudCIsImV4cGVyaWVuY2VzIiwiaWQiLCJjb21wYW55Iiwicm9sZSIsImR1cmF0aW9uIiwiZGVzY3JpcHRpb24iLCJpbWciLCJUaW1lbGluZSIsImRpdiIsImNsYXNzTmFtZSIsIkNpcmNsZSIsIm1hcCIsImV4cCIsImtleSIsIkV4cGVyaWVuY2UiLCJQaWxsYXIiLCJsZW5ndGgiLCJleHBlcmllbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Techno2.jsx\n"));

/***/ })

});