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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _utils_shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shapes */ \"(app-pages-browser)/./src/app/utils/shapes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ShapeEditor = (param)=>{\n    let { params } = param;\n    _s();\n    const [shape, setShape] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_shapes__WEBPACK_IMPORTED_MODULE_2__.shapes.find((shape)=>shape.name === params.shape) || null);\n    const [dimensions, setDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {}\n    ]);\n    const [spacing, setSpacing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cols, setCols] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (params.shape) {\n            setShape(_utils_shapes__WEBPACK_IMPORTED_MODULE_2__.shapes.find((shape)=>shape.name === params.shape) || null);\n        }\n    }, [\n        params.shape\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(dimensions);\n    }, [\n        dimensions\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            await fetch(\"http://127.0.0.1:5000/api/generate_gasket\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    ...dimensions,\n                    spacing,\n                    rows,\n                    cols,\n                    fileName\n                })\n            });\n        // Handle success\n        } catch (error) {\n        // Handle error\n        }\n    };\n    if (!shape) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Shape not found\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                shape.dimensions && shape.dimensions.map((dimension, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        label: dimension.label,\n                        value: dimensions[dimension.name],\n                        onChange: (e)=>{\n                            setDimensions({\n                                ...dimensions,\n                                [dimension.name]: Number(e.target.value)\n                            });\n                        },\n                        fullWidth: true\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 15\n                    }, undefined);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    label: \"Spacing\",\n                    value: Number(spacing),\n                    onChange: (e)=>setSpacing(Number(e.target.value)),\n                    fullWidth: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    label: \"Rows\",\n                    value: Number(rows),\n                    onChange: (e)=>setRows(Number(e.target.value)),\n                    fullWidth: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    label: \"Cols\",\n                    value: Number(cols),\n                    onChange: (e)=>setCols(Number(e.target.value)),\n                    fullWidth: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    label: \"File Name\",\n                    value: fileName,\n                    onChange: (e)=>setFileName(e.target.value),\n                    fullWidth: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"submit\",\n                    variant: \"contained\",\n                    color: \"primary\",\n                    children: \"Generate Gasket\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\dxf-ui\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShapeEditor, \"llztAKoiRbjX8YtnZOTVkNewmYE=\");\n_c = ShapeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShapeEditor);\nvar _c;\n$RefreshReg$(_c, \"ShapeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2hhcGUtZWRpdG9yL1tzaGFwZV0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dEO0FBQ047QUFDUjtBQVExQyxNQUFNTSxjQUEwQztRQUFDLEVBQUVDLE1BQU0sRUFBaUM7O0lBRXhGLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQ0csaURBQU1BLENBQUNLLElBQUksQ0FBQyxDQUFDRixRQUFVQSxNQUFNRyxJQUFJLEtBQUtKLE9BQU9DLEtBQUssS0FBSztJQUMxRixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7UUFBQyxDQUFDO0tBQUU7SUFDakQsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNrQixVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJTSxPQUFPQyxLQUFLLEVBQUU7WUFDaEJDLFNBQVNKLGlEQUFNQSxDQUFDSyxJQUFJLENBQUMsQ0FBQ0YsUUFBVUEsTUFBTUcsSUFBSSxLQUFLSixPQUFPQyxLQUFLLEtBQUs7UUFDbEU7SUFDRixHQUFHO1FBQUNELE9BQU9DLEtBQUs7S0FBQztJQUVqQlAsZ0RBQVNBLENBQUM7UUFDUnFCLFFBQVFDLEdBQUcsQ0FBQ1g7SUFDZCxHQUFHO1FBQUNBO0tBQVc7SUFDZixNQUFNWSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxNQUFPLDZDQUE0QztnQkFDdkRDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFDLEdBQUdwQixVQUFVO29CQUFFRTtvQkFBU0U7b0JBQU1FO29CQUFNRTtnQkFBUTtZQUNwRTtRQUNBLGlCQUFpQjtRQUNuQixFQUFFLE9BQU9hLE9BQU87UUFDZCxlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxJQUFJLENBQUN6QixPQUFPO1FBQ1YscUJBQU8sOERBQUMwQjtzQkFBSTs7Ozs7O0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ0E7a0JBQ0MsNEVBQUNDO1lBQUtDLFVBQVVaOztnQkFFWmhCLE1BQU1JLFVBQVUsSUFDaEJKLE1BQU1JLFVBQVUsQ0FBQ3lCLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQztvQkFDL0IscUJBQ0UsOERBQUNuQyw0RkFBU0E7d0JBRVJvQyxPQUFPRixVQUFVRSxLQUFLO3dCQUN0QkMsT0FBTzdCLFVBQVUsQ0FBQzBCLFVBQVUzQixJQUFJLENBQUM7d0JBQ2pDK0IsVUFBVSxDQUFDakI7NEJBQ1BaLGNBQWM7Z0NBQUMsR0FBR0QsVUFBVTtnQ0FBRSxDQUFDMEIsVUFBVTNCLElBQUksQ0FBQyxFQUFFZ0MsT0FBT2xCLEVBQUVtQixNQUFNLENBQUNILEtBQUs7NEJBQUM7d0JBQzFFO3dCQUNBSSxTQUFTO3VCQU5KTjs7Ozs7Z0JBVVg7OEJBRUYsOERBQUNuQyw0RkFBU0E7b0JBQ1JvQyxPQUFNO29CQUNOQyxPQUFPRSxPQUFPN0I7b0JBQ2Q0QixVQUFVLENBQUNqQixJQUFNVixXQUFXNEIsT0FBT2xCLEVBQUVtQixNQUFNLENBQUNILEtBQUs7b0JBQ2pESSxTQUFTOzs7Ozs7OEJBRVgsOERBQUN6Qyw0RkFBU0E7b0JBQ1JvQyxPQUFNO29CQUNOQyxPQUFPRSxPQUFPM0I7b0JBQ2QwQixVQUFVLENBQUNqQixJQUFNUixRQUFRMEIsT0FBT2xCLEVBQUVtQixNQUFNLENBQUNILEtBQUs7b0JBQzlDSSxTQUFTOzs7Ozs7OEJBRVgsOERBQUN6Qyw0RkFBU0E7b0JBQ1JvQyxPQUFNO29CQUNOQyxPQUFPRSxPQUFPekI7b0JBQ2R3QixVQUFVLENBQUNqQixJQUFNTixRQUFRd0IsT0FBT2xCLEVBQUVtQixNQUFNLENBQUNILEtBQUs7b0JBQzlDSSxTQUFTOzs7Ozs7OEJBRVgsOERBQUN6Qyw0RkFBU0E7b0JBQ1JvQyxPQUFNO29CQUNOQyxPQUFPckI7b0JBQ1BzQixVQUFVLENBQUNqQixJQUFNSixZQUFZSSxFQUFFbUIsTUFBTSxDQUFDSCxLQUFLO29CQUMzQ0ksU0FBUzs7Ozs7OzhCQUVYLDhEQUFDMUMsNEZBQU1BO29CQUFDMkMsTUFBSztvQkFBU0MsU0FBUTtvQkFBWUMsT0FBTTs4QkFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEU7R0F2Rk0xQztLQUFBQTtBQXlGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NoYXBlLWVkaXRvci9bc2hhcGVdL3BhZ2UudHN4PzMzOWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7c2hhcGVzfSBmcm9tICcuLi8uLi91dGlscy9zaGFwZXMnO1xyXG5cclxudHlwZSBTaGFwZUVkaXRvclByb3BzID0ge1xyXG4gIHBhcmFtczoge1xyXG4gICAgc2hhcGU6IHN0cmluZztcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgU2hhcGVFZGl0b3I6IFJlYWN0LkZDPFNoYXBlRWRpdG9yUHJvcHM+ID0gKHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IHNoYXBlOiBzdHJpbmcgfSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtzaGFwZSwgc2V0U2hhcGVdID0gdXNlU3RhdGUoc2hhcGVzLmZpbmQoKHNoYXBlKSA9PiBzaGFwZS5uYW1lID09PSBwYXJhbXMuc2hhcGUpIHx8IG51bGwpO1xyXG4gIGNvbnN0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKFt7fV0pO1xyXG4gIGNvbnN0IFtzcGFjaW5nLCBzZXRTcGFjaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb2xzLCBzZXRDb2xzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBhcmFtcy5zaGFwZSkge1xyXG4gICAgICBzZXRTaGFwZShzaGFwZXMuZmluZCgoc2hhcGUpID0+IHNoYXBlLm5hbWUgPT09IHBhcmFtcy5zaGFwZSkgfHwgbnVsbCk7XHJcbiAgICB9XHJcbiAgfSwgW3BhcmFtcy5zaGFwZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGltZW5zaW9ucylcclxuICB9LCBbZGltZW5zaW9uc10pO1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXBpL2dlbmVyYXRlX2dhc2tldGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoey4uLmRpbWVuc2lvbnMsIHNwYWNpbmcsIHJvd3MsIGNvbHMsIGZpbGVOYW1lfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBIYW5kbGUgc3VjY2Vzc1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFzaGFwZSkge1xyXG4gICAgcmV0dXJuIDxkaXY+U2hhcGUgbm90IGZvdW5kPC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2hhcGUuZGltZW5zaW9ucyAmJlxyXG4gICAgICAgICAgc2hhcGUuZGltZW5zaW9ucy5tYXAoKGRpbWVuc2lvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2RpbWVuc2lvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkaW1lbnNpb25zW2RpbWVuc2lvbi5uYW1lXX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERpbWVuc2lvbnMoey4uLmRpbWVuc2lvbnMsIFtkaW1lbnNpb24ubmFtZV06IE51bWJlcihlLnRhcmdldC52YWx1ZSl9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiU3BhY2luZ1wiXHJcbiAgICAgICAgICB2YWx1ZT17TnVtYmVyKHNwYWNpbmcpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTcGFjaW5nKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBsYWJlbD1cIlJvd3NcIlxyXG4gICAgICAgICAgdmFsdWU9e051bWJlcihyb3dzKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Um93cyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgbGFiZWw9XCJDb2xzXCJcclxuICAgICAgICAgIHZhbHVlPXtOdW1iZXIoY29scyl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbHMoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPVwiRmlsZSBOYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtmaWxlTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmlsZU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICBHZW5lcmF0ZSBHYXNrZXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXBlRWRpdG9yOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwic2hhcGVzIiwiU2hhcGVFZGl0b3IiLCJwYXJhbXMiLCJzaGFwZSIsInNldFNoYXBlIiwiZmluZCIsIm5hbWUiLCJkaW1lbnNpb25zIiwic2V0RGltZW5zaW9ucyIsInNwYWNpbmciLCJzZXRTcGFjaW5nIiwicm93cyIsInNldFJvd3MiLCJjb2xzIiwic2V0Q29scyIsImZpbGVOYW1lIiwic2V0RmlsZU5hbWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsIm1hcCIsImRpbWVuc2lvbiIsImluZGV4IiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiTnVtYmVyIiwidGFyZ2V0IiwiZnVsbFdpZHRoIiwidHlwZSIsInZhcmlhbnQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/shape-editor/[shape]/page.tsx\n"));

/***/ })

});