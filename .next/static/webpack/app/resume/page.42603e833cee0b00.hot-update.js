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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// pages/index.jsx\n\n// Experience data\nconst experiences = [\n    {\n        id: 1,\n        company: \"One97 Communications Ltd.\",\n        role: \"Backend Developer Intern\",\n        duration: \"July'23 - September'23\",\n        description: \"Lorem ipsum dolor sit, amet consectetur adipisicing elit...\",\n        img: \"https://hblapis.cmots.com/complogodata/IImagesNew/One97-Communications-Ltd_42949010_40147.png\"\n    },\n    {\n        id: 2,\n        company: \"Another Company Ltd.\",\n        role: \"Frontend Developer Intern\",\n        duration: \"May'23 - July'23\",\n        description: \"Lorem ipsum dolor sit, amet consectetur adipisicing elit...\",\n        img: \"\"\n    }\n];\nconst Circle = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-full w-4 h-4 bg-blue-500 mx-auto\"\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Circle;\nconst Pillar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto\"\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Pillar;\nconst Experience = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-y-2 border shadow-md rounded-xl p-4\",\n        children: experiences.map(exp)\n    }, void 0, false, {\n        fileName: \"/Users/harshilbansal/Desktop/Portfolio/components/Techno2.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Experience;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Experience);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Circle\");\n$RefreshReg$(_c1, \"Pillar\");\n$RefreshReg$(_c2, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGVjaG5vMi5qc3giLCJtYXBwaW5ncyI6Ijs7OztBQUNBLGtCQUFrQjtBQUNhO0FBRS9CLGtCQUFrQjtBQUNsQixNQUFNQyxjQUFjO0lBQ2xCO1FBQ0VDLElBQUk7UUFDSkMsU0FBUztRQUNUQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxLQUFJO0lBQ047SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsS0FBSTtJQUNOO0NBRUQ7QUFFRCxNQUFNQyxTQUFTO0lBQ1gscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7Ozs7OztBQUl2QjtLQU5NRjtBQVFOLE1BQU1HLFNBQVM7SUFDWCxxQkFDSSw4REFBQ0Y7UUFBSUMsV0FBVTs7Ozs7O0FBSXZCO01BTk1DO0FBUU4sTUFBTUMsYUFBYTtJQUNqQixxQkFDRSw4REFBQ0g7UUFBSUMsV0FBVTtrQkFDVlQsWUFBWVksR0FBRyxDQUFFQzs7Ozs7O0FBSzFCO01BUk1GO0FBU04sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWNobm8yLmpzeD80N2RiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuLy8gcGFnZXMvaW5kZXguanN4XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbi8vIEV4cGVyaWVuY2UgZGF0YVxuY29uc3QgZXhwZXJpZW5jZXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBjb21wYW55OiBcIk9uZTk3IENvbW11bmljYXRpb25zIEx0ZC5cIixcbiAgICByb2xlOiBcIkJhY2tlbmQgRGV2ZWxvcGVyIEludGVyblwiLFxuICAgIGR1cmF0aW9uOiBcIkp1bHknMjMgLSBTZXB0ZW1iZXInMjNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4uLlwiLFxuICAgIGltZzpcImh0dHBzOi8vaGJsYXBpcy5jbW90cy5jb20vY29tcGxvZ29kYXRhL0lJbWFnZXNOZXcvT25lOTctQ29tbXVuaWNhdGlvbnMtTHRkXzQyOTQ5MDEwXzQwMTQ3LnBuZ1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgY29tcGFueTogXCJBbm90aGVyIENvbXBhbnkgTHRkLlwiLFxuICAgIHJvbGU6IFwiRnJvbnRlbmQgRGV2ZWxvcGVyIEludGVyblwiLFxuICAgIGR1cmF0aW9uOiBcIk1heScyMyAtIEp1bHknMjNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4uLlwiLFxuICAgIGltZzpcIlwiLFxuICB9LFxuICAvLyBBZGQgbW9yZSBleHBlcmllbmNlcyBoZXJlXG5dO1xuXG5jb25zdCBDaXJjbGUgPSAoKSA9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgdy00IGgtNCBiZy1ibHVlLTUwMCBteC1hdXRvJz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IFBpbGxhciA9ICgpID0+e1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kZWQtdC1mdWxsIHJvdW5kZWQtYi1mdWxsIHctMiBoLWZ1bGwgYmctYmx1ZS01MDAgbXgtYXV0byc+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBFeHBlcmllbmNlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC15LTIgYm9yZGVyIHNoYWRvdy1tZCByb3VuZGVkLXhsIHAtNCc+XG4gICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGV4cCkpfVxuXG4gICAgPC9kaXY+XG4gICAgXG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJleHBlcmllbmNlcyIsImlkIiwiY29tcGFueSIsInJvbGUiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwiaW1nIiwiQ2lyY2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiUGlsbGFyIiwiRXhwZXJpZW5jZSIsIm1hcCIsImV4cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Techno2.jsx\n"));

/***/ })

});