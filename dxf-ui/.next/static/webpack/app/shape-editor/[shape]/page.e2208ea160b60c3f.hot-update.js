"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/shape-editor/[shape]/page",{

/***/ "(app-pages-browser)/./src/app/shape-editor/[shape]/page.tsx":
/*!***********************************************!*\
  !*** ./src/app/shape-editor/[shape]/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _utils_shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shapes */ \"(app-pages-browser)/./src/app/utils/shapes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ShapeEditor = (param)=>{\n    let { params } = param;\n    _s();\n    const [shape, setShape] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_shapes__WEBPACK_IMPORTED_MODULE_2__.shapes.find((shape)=>shape.name === params.shape) || null);\n    const [dimensions, setDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {}\n    ]);\n    const [spacing, setSpacing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cols, setCols] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (params.shape) {\n            setShape(_utils_shapes__WEBPACK_IMPORTED_MODULE_2__.shapes.find((shape)=>shape.name === params.shape) || null);\n        }\n    }, [\n        params.shape\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            await fetch(\"http://127.0.0.1:5000/api/generate_gasket\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    ...dimensions,\n                    spacing,\n                    rows,\n                    cols,\n                    fileName\n                })\n            });\n        // Handle success\n        } catch (error) {\n        // Handle error\n        }\n    };\n    if (!shape) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Shape not found\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"space-y-4\",\n            children: [\n                shape.dimensions && shape.dimensions.map((dimension, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"m4\",\n                        label: dimension.label,\n                        value: Number(dimensions[dimension.name]) || 0,\n                        onChange: (e)=>setDimensions({\n                                ...dimensions,\n                                [dimension.name]: Number(e.target.value)\n                            }),\n                        fullWidth: true\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 15\n                    }, undefined);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    label: \"Spacing\",\n                    value: Number(spacing),\n                    onChange: (e)=>setSpacing(Number(e.target.value)),\n                    fullWidth: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: \"mt-4\",\n                    label: \"Rows\",\n                    value: Number(rows),\n                    onChange: (e)=>setRows(Number(e.target.value)),\n                    fullWidth: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    label: \"Cols\",\n                    value: Number(cols),\n                    onChange: (e)=>setCols(Number(e.target.value)),\n                    fullWidth: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    label: \"File Name\",\n                    value: fileName,\n                    onChange: (e)=>setFileName(e.target.value),\n                    fullWidth: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"submit\",\n                    variant: \"contained\",\n                    color: \"primary\",\n                    children: \"Generate Gasket\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShapeEditor, \"fTw6qLNkuarZZOZzPsfCk3EhkJA=\");\n_c = ShapeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShapeEditor);\nvar _c;\n$RefreshReg$(_c, \"ShapeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2hhcGUtZWRpdG9yL1tzaGFwZV0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBQ0Q7QUFDUjtBQVExQyxNQUFNTSxjQUEwQztRQUFDLEVBQUVDLE1BQU0sRUFBaUM7O0lBRXhGLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQ0csaURBQU1BLENBQUNLLElBQUksQ0FBQyxDQUFDRixRQUFVQSxNQUFNRyxJQUFJLEtBQUtKLE9BQU9DLEtBQUssS0FBSztJQUMxRixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7UUFBQyxDQUFDO0tBQUU7SUFDakQsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNrQixVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJTSxPQUFPQyxLQUFLLEVBQUU7WUFDaEJDLFNBQVNKLGlEQUFNQSxDQUFDSyxJQUFJLENBQUMsQ0FBQ0YsUUFBVUEsTUFBTUcsSUFBSSxLQUFLSixPQUFPQyxLQUFLLEtBQUs7UUFDbEU7SUFDRixHQUFHO1FBQUNELE9BQU9DLEtBQUs7S0FBQztJQUVqQixNQUFNYyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxNQUFPLDZDQUE0QztnQkFDdkRDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFDLEdBQUdsQixVQUFVO29CQUFFRTtvQkFBU0U7b0JBQU1FO29CQUFNRTtnQkFBUTtZQUNwRTtRQUNBLGlCQUFpQjtRQUNuQixFQUFFLE9BQU9XLE9BQU87UUFDZCxlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxJQUFJLENBQUN2QixPQUFPO1FBQ1YscUJBQU8sOERBQUN3QjtzQkFBSTs7Ozs7O0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0MsVUFBVWI7WUFBY1csV0FBVTs7Z0JBRXBDekIsTUFBTUksVUFBVSxJQUNoQkosTUFBTUksVUFBVSxDQUFDd0IsR0FBRyxDQUFDLENBQUNDLFdBQVdDO29CQUMvQixxQkFDRSw4REFBQ2xDLDRGQUFTQTt3QkFDUjZCLFdBQVU7d0JBRVZNLE9BQU9GLFVBQVVFLEtBQUs7d0JBQ3RCQyxPQUFPQyxPQUFPN0IsVUFBVSxDQUFDeUIsVUFBVTFCLElBQUksQ0FBQyxLQUFLO3dCQUM3QytCLFVBQVUsQ0FBQ25CLElBQU1WLGNBQWM7Z0NBQUMsR0FBR0QsVUFBVTtnQ0FBRSxDQUFDeUIsVUFBVTFCLElBQUksQ0FBQyxFQUFFOEIsT0FBT2xCLEVBQUVvQixNQUFNLENBQUNILEtBQUs7NEJBQUM7d0JBQ3ZGSSxTQUFTO3VCQUpKTjs7Ozs7Z0JBUVg7OEJBRUYsOERBQUNsQyw0RkFBU0E7b0JBQ1JtQyxPQUFNO29CQUNOQyxPQUFPQyxPQUFPM0I7b0JBQ2Q0QixVQUFVLENBQUNuQixJQUFNUixXQUFXMEIsT0FBT2xCLEVBQUVvQixNQUFNLENBQUNILEtBQUs7b0JBQ2pESSxTQUFTOzs7Ozs7OEJBRVgsOERBQUN4Qyw0RkFBU0E7b0JBQ1I2QixXQUFVO29CQUNWTSxPQUFNO29CQUNOQyxPQUFPQyxPQUFPekI7b0JBQ2QwQixVQUFVLENBQUNuQixJQUFNTixRQUFRd0IsT0FBT2xCLEVBQUVvQixNQUFNLENBQUNILEtBQUs7b0JBQzlDSSxTQUFTOzs7Ozs7OEJBRVgsOERBQUN4Qyw0RkFBU0E7b0JBQ1JtQyxPQUFNO29CQUNOQyxPQUFPQyxPQUFPdkI7b0JBQ2R3QixVQUFVLENBQUNuQixJQUFNSixRQUFRc0IsT0FBT2xCLEVBQUVvQixNQUFNLENBQUNILEtBQUs7b0JBQzlDSSxTQUFTOzs7Ozs7OEJBRVgsOERBQUN4Qyw0RkFBU0E7b0JBQ1JtQyxPQUFNO29CQUNOQyxPQUFPcEI7b0JBQ1BzQixVQUFVLENBQUNuQixJQUFNRixZQUFZRSxFQUFFb0IsTUFBTSxDQUFDSCxLQUFLO29CQUMzQ0ksU0FBUzs7Ozs7OzhCQUVYLDhEQUFDekMsNEZBQU1BO29CQUFDMEMsTUFBSztvQkFBU0MsU0FBUTtvQkFBWUMsT0FBTTs4QkFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEU7R0FwRk16QztLQUFBQTtBQXNGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NoYXBlLWVkaXRvci9bc2hhcGVdL3BhZ2UudHN4PzMzOWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge3NoYXBlc30gZnJvbSAnLi4vLi4vdXRpbHMvc2hhcGVzJztcclxuXHJcbnR5cGUgU2hhcGVFZGl0b3JQcm9wcyA9IHtcclxuICBwYXJhbXM6IHtcclxuICAgIHNoYXBlOiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IFNoYXBlRWRpdG9yOiBSZWFjdC5GQzxTaGFwZUVkaXRvclByb3BzPiA9ICh7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBzaGFwZTogc3RyaW5nIH0gfSkgPT4ge1xyXG5cclxuICBjb25zdCBbc2hhcGUsIHNldFNoYXBlXSA9IHVzZVN0YXRlKHNoYXBlcy5maW5kKChzaGFwZSkgPT4gc2hhcGUubmFtZSA9PT0gcGFyYW1zLnNoYXBlKSB8fCBudWxsKTtcclxuICBjb25zdCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZShbe31dKTtcclxuICBjb25zdCBbc3BhY2luZywgc2V0U3BhY2luZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29scywgc2V0Q29sc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwYXJhbXMuc2hhcGUpIHtcclxuICAgICAgc2V0U2hhcGUoc2hhcGVzLmZpbmQoKHNoYXBlKSA9PiBzaGFwZS5uYW1lID09PSBwYXJhbXMuc2hhcGUpIHx8IG51bGwpO1xyXG4gICAgfVxyXG4gIH0sIFtwYXJhbXMuc2hhcGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9hcGkvZ2VuZXJhdGVfZ2Fza2V0YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7Li4uZGltZW5zaW9ucywgc3BhY2luZywgcm93cywgY29scywgZmlsZU5hbWV9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIXNoYXBlKSB7XHJcbiAgICByZXR1cm4gPGRpdj5TaGFwZSBub3QgZm91bmQ8L2Rpdj47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNoYXBlLmRpbWVuc2lvbnMgJiZcclxuICAgICAgICAgIHNoYXBlLmRpbWVuc2lvbnMubWFwKChkaW1lbnNpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibTRcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtkaW1lbnNpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17TnVtYmVyKGRpbWVuc2lvbnNbZGltZW5zaW9uLm5hbWVdKSB8fCAwfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREaW1lbnNpb25zKHsuLi5kaW1lbnNpb25zLCBbZGltZW5zaW9uLm5hbWVdOiBOdW1iZXIoZS50YXJnZXQudmFsdWUpfSl9XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBsYWJlbD1cIlNwYWNpbmdcIlxyXG4gICAgICAgICAgdmFsdWU9e051bWJlcihzcGFjaW5nKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3BhY2luZyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdtdC00J1xyXG4gICAgICAgICAgbGFiZWw9XCJSb3dzXCJcclxuICAgICAgICAgIHZhbHVlPXtOdW1iZXIocm93cyl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvd3MoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiQ29sc1wiXHJcbiAgICAgICAgICB2YWx1ZT17TnVtYmVyKGNvbHMpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2xzKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBsYWJlbD1cIkZpbGUgTmFtZVwiXHJcbiAgICAgICAgICB2YWx1ZT17ZmlsZU5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbGVOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgR2VuZXJhdGUgR2Fza2V0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFwZUVkaXRvcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsInNoYXBlcyIsIlNoYXBlRWRpdG9yIiwicGFyYW1zIiwic2hhcGUiLCJzZXRTaGFwZSIsImZpbmQiLCJuYW1lIiwiZGltZW5zaW9ucyIsInNldERpbWVuc2lvbnMiLCJzcGFjaW5nIiwic2V0U3BhY2luZyIsInJvd3MiLCJzZXRSb3dzIiwiY29scyIsInNldENvbHMiLCJmaWxlTmFtZSIsInNldEZpbGVOYW1lIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsIm1hcCIsImRpbWVuc2lvbiIsImluZGV4IiwibGFiZWwiLCJ2YWx1ZSIsIk51bWJlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiZnVsbFdpZHRoIiwidHlwZSIsInZhcmlhbnQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/shape-editor/[shape]/page.tsx\n"));

/***/ })

});