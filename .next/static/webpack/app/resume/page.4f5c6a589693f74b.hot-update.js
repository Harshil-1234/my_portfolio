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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// pages/index.jsx\n\n\n// Experience data\nconst experiences = [\n    {\n        id: 1,\n        company: \"One97 Communications Ltd.\",\n        role: \"Backend Developer Intern\",\n        duration: \"July'23 - September'23\",\n        description: \"Lorem ipsum dolor sit, amet consectetur adipisicing elit...\",\n        img: \"https://hblapis.cmots.com/complogodata/IImagesNew/One97-Communications-Ltd_42949010_40147.png\"\n    },\n    {\n        id: 2,\n        company: \"Another Company Ltd.\",\n        role: \"Frontend Developer Intern\",\n        duration: \"May'23 - July'23\",\n        description: \"Lorem ipsum dolor sit, amet consectetur adipisicing elit...\",\n        img: \"\"\n    }\n];\nconst Timeline = (param)=>{\n    let { experiences } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-3 w-full my-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Circle, {}, void 0, false, {\n                fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            experiences.map((exp, key)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[1fr-auto-1fr] gap-x-2 items-center mx-auto\",\n                        children: exp.id % 2 === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Experience, {}, void 0, false, {\n                            fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 29\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, undefined)\n                }, key, false, {\n                    fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Circle, {}, void 0, false, {\n                fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Timeline;\nconst Circle = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-full w-4 h-4 bg-blue-500 mx-auto\"\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Circle;\nconst Pillar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto\"\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = Pillar;\nconst Experience = (param)=>{\n    let { company, description } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-2 border shadow-md rounded-xl p-4\",\n        children: experiences.map((experience)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-blue-800 font-bold text-lg border-b\",\n                        children: experience.company\n                    }, void 0, false, {\n                        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-gray-700\",\n                        children: experience.description\n                    }, void 0, false, {\n                        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = Experience;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Experience);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Timeline\");\n$RefreshReg$(_c1, \"Circle\");\n$RefreshReg$(_c2, \"Pillar\");\n$RefreshReg$(_c3, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVjaG5vMi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0Esa0JBQWtCO0FBQ2E7QUFDRTtBQUVqQyxrQkFBa0I7QUFDbEIsTUFBTUUsY0FBYztJQUNsQjtRQUNFQyxJQUFJO1FBQ0pDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsS0FBSTtJQUNOO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxhQUFhO1FBQ2JDLEtBQUk7SUFDTjtDQUVEO0FBRUQsTUFBTUMsV0FBVztRQUFDLEVBQUNQLFdBQVcsRUFBQztJQUMzQixxQkFDSSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzs7OztZQUVBVixZQUFZVyxHQUFHLENBQUMsQ0FBQ0MsS0FBSUM7OEJBQ2xCLDhEQUFDZCwyQ0FBUUE7OEJBQ0wsNEVBQUNTO3dCQUFJQyxXQUFVO2tDQUNWRyxJQUFJWCxFQUFFLEdBQUMsTUFBTSxrQkFDViw4REFBQ2E7Ozs7c0RBRUQsOERBQUNOOzs7Ozs7Ozs7O21CQUxFSzs7Ozs7WUFTbkI7MEJBRUEsOERBQUNIOzs7Ozs7Ozs7OztBQUdiO0tBcEJNSDtBQXFCTixNQUFNRyxTQUFTO0lBQ1gscUJBQ0ksOERBQUNGO1FBQUlDLFdBQVU7Ozs7OztBQUl2QjtNQU5NQztBQVFOLE1BQU1LLFNBQVM7SUFDWCxxQkFDSSw4REFBQ1A7UUFBSUMsV0FBVTs7Ozs7O0FBSXZCO01BTk1NO0FBUU4sTUFBTUQsYUFBYTtRQUFDLEVBQUNaLE9BQU8sRUFBQ0csV0FBVyxFQUFDO0lBQ3ZDLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNWVCxZQUFZVyxHQUFHLENBQUMsQ0FBQ0s7MEJBQ2Q7O2tDQUNJLDhEQUFDUjt3QkFBSUMsV0FBVTtrQ0FDVk8sV0FBV2QsT0FBTzs7Ozs7O2tDQUd2Qiw4REFBQ007d0JBQUlDLFdBQVU7a0NBQ1ZPLFdBQVdYLFdBQVc7Ozs7Ozs7O1FBR25DOzs7Ozs7QUFHUjtNQWhCTVM7QUFpQk4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWNobm8yLmpzeD80N2RiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuLy8gcGFnZXMvaW5kZXguanN4XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gRXhwZXJpZW5jZSBkYXRhXG5jb25zdCBleHBlcmllbmNlcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGNvbXBhbnk6IFwiT25lOTcgQ29tbXVuaWNhdGlvbnMgTHRkLlwiLFxuICAgIHJvbGU6IFwiQmFja2VuZCBEZXZlbG9wZXIgSW50ZXJuXCIsXG4gICAgZHVyYXRpb246IFwiSnVseScyMyAtIFNlcHRlbWJlcicyM1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0Li4uXCIsXG4gICAgaW1nOlwiaHR0cHM6Ly9oYmxhcGlzLmNtb3RzLmNvbS9jb21wbG9nb2RhdGEvSUltYWdlc05ldy9PbmU5Ny1Db21tdW5pY2F0aW9ucy1MdGRfNDI5NDkwMTBfNDAxNDcucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBjb21wYW55OiBcIkFub3RoZXIgQ29tcGFueSBMdGQuXCIsXG4gICAgcm9sZTogXCJGcm9udGVuZCBEZXZlbG9wZXIgSW50ZXJuXCIsXG4gICAgZHVyYXRpb246IFwiTWF5JzIzIC0gSnVseScyM1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0Li4uXCIsXG4gICAgaW1nOlwiXCIsXG4gIH0sXG4gIC8vIEFkZCBtb3JlIGV4cGVyaWVuY2VzIGhlcmVcbl07XG5cbmNvbnN0IFRpbWVsaW5lID0gKHtleHBlcmllbmNlc30pID0+e1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLXktMyB3LWZ1bGwgbXktNCc+XG4gICAgICAgICAgICA8Q2lyY2xlIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cCxrZXkpPT57XG4gICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLVsxZnItYXV0by0xZnJdIGdhcC14LTIgaXRlbXMtY2VudGVyIG14LWF1dG8nPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4cC5pZCUyID09PSAxID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBlcmllbmNlLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgPENpcmNsZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5jb25zdCBDaXJjbGUgPSAoKSA9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgdy00IGgtNCBiZy1ibHVlLTUwMCBteC1hdXRvJz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IFBpbGxhciA9ICgpID0+e1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kZWQtdC1mdWxsIHJvdW5kZWQtYi1mdWxsIHctMiBoLWZ1bGwgYmctYmx1ZS01MDAgbXgtYXV0byc+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBFeHBlcmllbmNlID0gKHtjb21wYW55LGRlc2NyaXB0aW9ufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC15LTIgYm9yZGVyIHNoYWRvdy1tZCByb3VuZGVkLXhsIHAtNCc+XG4gICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cGVyaWVuY2UpPT57XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtODAwIGZvbnQtYm9sZCB0ZXh0LWxnIGJvcmRlci1iJz5cbiAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UuY29tcGFueX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtZ3JheS03MDAnPlxuICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2VcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZyYWdtZW50IiwiZXhwZXJpZW5jZXMiLCJpZCIsImNvbXBhbnkiLCJyb2xlIiwiZHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsImltZyIsIlRpbWVsaW5lIiwiZGl2IiwiY2xhc3NOYW1lIiwiQ2lyY2xlIiwibWFwIiwiZXhwIiwia2V5IiwiRXhwZXJpZW5jZSIsIlBpbGxhciIsImV4cGVyaWVuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Techno2.jsx\n"));

/***/ })

});