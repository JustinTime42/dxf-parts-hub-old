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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _utils_shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shapes */ \"(app-pages-browser)/./src/app/utils/shapes.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ShapeEditor = (param)=>{\n    let { params } = param;\n    _s();\n    const [shape, setShape] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_shapes__WEBPACK_IMPORTED_MODULE_2__.shapes.find((shape)=>shape.name === params.shape) || null);\n    const [dimensions, setDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [spacing, setSpacing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cols, setCols] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [svgFile, setSvgFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (params.shape) {\n            setShape(_utils_shapes__WEBPACK_IMPORTED_MODULE_2__.shapes.find((shape)=>shape.name === params.shape) || null);\n        }\n    }, [\n        params.shape\n    ]);\n    const handleSubmit = async (e)=>{\n        const numbers = {};\n        Object.keys(dimensions).forEach((key)=>{\n            numbers[key] = Number(dimensions[key]);\n        });\n        console.log({\n            ...numbers,\n            spacing,\n            rows,\n            cols,\n            fileName\n        });\n        try {\n            const file = await fetch(\"/api/generate_gasket\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    ...numbers,\n                    spacing,\n                    rows,\n                    cols,\n                    fileName\n                })\n            });\n            // save the returned file\n            const blob = await file.blob();\n            setSvgFile(URL.createObjectURL(blob));\n        // const url = URL.createObjectURL(blob);\n        // const a = document.createElement('a');\n        // a.href = url;\n        // a.download = `${fileName}.png`;\n        // a.click();\n        } catch (error) {\n            alert(\"Error generating gasket\");\n        }\n    };\n    if (!shape) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Shape not found\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            shape.dimensions && shape.dimensions.map((dimension, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    style: {\n                                        margin: \"1rem\"\n                                    },\n                                    label: dimension.label,\n                                    value: dimensions[dimension.name] || \"\",\n                                    onChange: (e)=>{\n                                        setDimensions({\n                                            ...dimensions,\n                                            [dimension.name]: e.target.value\n                                        });\n                                    }\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, undefined);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                style: {\n                                    margin: \"1rem\"\n                                },\n                                label: \"Spacing\",\n                                value: spacing || \"\",\n                                onChange: (e)=>setSpacing(Number(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                style: {\n                                    margin: \"1rem\"\n                                },\n                                label: \"Rows\",\n                                value: Number(rows),\n                                onChange: (e)=>setRows(Number(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                style: {\n                                    margin: \"1rem\"\n                                },\n                                label: \"Cols\",\n                                value: Number(cols),\n                                onChange: (e)=>setCols(Number(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                style: {\n                                    margin: \"1rem\"\n                                },\n                                label: \"File Name\",\n                                value: fileName,\n                                onChange: (e)=>setFileName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                style: {\n                                    margin: \"1rem\"\n                                },\n                                type: \"button\",\n                                variant: \"contained\",\n                                color: \"primary\",\n                                onClick: ()=>handleSubmit(false),\n                                children: \"Preview DXF\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                style: {\n                                    margin: \"1rem\"\n                                },\n                                type: \"button\",\n                                variant: \"contained\",\n                                color: \"primary\",\n                                onClick: ()=>handleSubmit(true),\n                                children: \"Generate DXF\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: svgFile,\n                    alt: \"gasket\",\n                    width: 250,\n                    height: 250\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShapeEditor, \"OT1L8uUORaUad5D2uTQg1q1OufU=\");\n_c = ShapeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShapeEditor);\nvar _c;\n$RefreshReg$(_c, \"ShapeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2hhcGUtZWRpdG9yL1tzaGFwZV0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNEO0FBQ1I7QUFDWDtBQVEvQixNQUFNTyxjQUEwQztRQUFDLEVBQUVDLE1BQU0sRUFBaUM7O0lBRXhGLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQ0csaURBQU1BLENBQUNNLElBQUksQ0FBQyxDQUFDRixRQUFVQSxNQUFNRyxJQUFJLEtBQUtKLE9BQU9DLEtBQUssS0FBSztJQUMxRixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQW1DLENBQUM7SUFDaEYsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDaUIsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDbUIsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDcUIsU0FBU0MsV0FBVyxHQUFHdEIsK0NBQVFBLENBQUM7SUFHdkNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sT0FBT0MsS0FBSyxFQUFFO1lBQ2hCQyxTQUFTTCxpREFBTUEsQ0FBQ00sSUFBSSxDQUFDLENBQUNGLFFBQVVBLE1BQU1HLElBQUksS0FBS0osT0FBT0MsS0FBSyxLQUFLO1FBQ2xFO0lBQ0YsR0FBRztRQUFDRCxPQUFPQyxLQUFLO0tBQUM7SUFFakIsTUFBTWdCLGVBQWUsT0FBT0M7UUFDMUIsTUFBTUMsVUFBcUMsQ0FBQztRQUM1Q0MsT0FBT0MsSUFBSSxDQUFDaEIsWUFBWWlCLE9BQU8sQ0FBQyxDQUFDQztZQUMvQkosT0FBTyxDQUFDSSxJQUFJLEdBQUdDLE9BQU9uQixVQUFVLENBQUNrQixJQUFJO1FBQ3ZDO1FBQ0FFLFFBQVFDLEdBQUcsQ0FBQztZQUFDLEdBQUdQLE9BQU87WUFBRVo7WUFBU0U7WUFBTUU7WUFBTUU7UUFBUTtRQUN0RCxJQUFJO1lBQ0YsTUFBTWMsT0FBTyxNQUFNQyxNQUFPLHdCQUF1QjtnQkFDL0NDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFDLEdBQUdkLE9BQU87b0JBQUVaO29CQUFTRTtvQkFBTUU7b0JBQU1FO2dCQUFRO1lBQ2pFO1lBQ0EseUJBQXlCO1lBQ3pCLE1BQU1xQixPQUFPLE1BQU1QLEtBQUtPLElBQUk7WUFDNUJsQixXQUFXbUIsSUFBSUMsZUFBZSxDQUFDRjtRQUMvQix5Q0FBeUM7UUFDekMseUNBQXlDO1FBQ3pDLGdCQUFnQjtRQUNoQixrQ0FBa0M7UUFDbEMsYUFBYTtRQUdmLEVBQUUsT0FBT0csT0FBTztZQUNkQyxNQUFNO1FBQ1I7SUFDRjtJQUVBLElBQUksQ0FBQ3JDLE9BQU87UUFDVixxQkFBTyw4REFBQ3NDO3NCQUFJOzs7Ozs7SUFDZDtJQUNBLHFCQUNFLDhEQUFDQTs7MEJBQ0MsOERBQUNDOztrQ0FDQyw4REFBQ0Q7OzRCQUVHdEMsTUFBTUksVUFBVSxJQUNoQkosTUFBTUksVUFBVSxDQUFDb0MsR0FBRyxDQUFDLENBQUNDLFdBQVdDO2dDQUMvQixxQkFDRSw4REFBQy9DLDRGQUFTQTtvQ0FDUmdELE9BQU87d0NBQUNDLFFBQVE7b0NBQU07b0NBRXRCQyxPQUFPSixVQUFVSSxLQUFLO29DQUN0QkMsT0FBTzFDLFVBQVUsQ0FBQ3FDLFVBQVV0QyxJQUFJLENBQUMsSUFBSTtvQ0FDckM0QyxVQUFVLENBQUM5Qjt3Q0FDUFosY0FBYzs0Q0FBQyxHQUFHRCxVQUFVOzRDQUFFLENBQUNxQyxVQUFVdEMsSUFBSSxDQUFDLEVBQUVjLEVBQUUrQixNQUFNLENBQUNGLEtBQUs7d0NBQUE7b0NBQ2xFO21DQUxLSjs7Ozs7NEJBU1g7MENBRUYsOERBQUMvQyw0RkFBU0E7Z0NBQ1JnRCxPQUFPO29DQUFDQyxRQUFRO2dDQUFNO2dDQUN0QkMsT0FBTTtnQ0FDTkMsT0FBT3hDLFdBQVc7Z0NBQ2xCeUMsVUFBVSxDQUFDOUIsSUFBTVYsV0FBV2dCLE9BQU9OLEVBQUUrQixNQUFNLENBQUNGLEtBQUs7Ozs7OzswQ0FFbkQsOERBQUNuRCw0RkFBU0E7Z0NBQ1JnRCxPQUFPO29DQUFDQyxRQUFRO2dDQUFNO2dDQUN0QkMsT0FBTTtnQ0FDTkMsT0FBT3ZCLE9BQU9mO2dDQUNkdUMsVUFBVSxDQUFDOUIsSUFBTVIsUUFBUWMsT0FBT04sRUFBRStCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzBDQUVoRCw4REFBQ25ELDRGQUFTQTtnQ0FDUmdELE9BQU87b0NBQUNDLFFBQVE7Z0NBQU07Z0NBQ3RCQyxPQUFNO2dDQUNOQyxPQUFPdkIsT0FBT2I7Z0NBQ2RxQyxVQUFVLENBQUM5QixJQUFNTixRQUFRWSxPQUFPTixFQUFFK0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7MENBRWhELDhEQUFDbkQsNEZBQVNBO2dDQUNSZ0QsT0FBTztvQ0FBQ0MsUUFBUTtnQ0FBTTtnQ0FDdEJDLE9BQU07Z0NBQ05DLE9BQU9sQztnQ0FDUG1DLFVBQVUsQ0FBQzlCLElBQU1KLFlBQVlJLEVBQUUrQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHL0MsOERBQUNSOzswQ0FDQyw4REFBQzVDLDRGQUFNQTtnQ0FDTGlELE9BQU87b0NBQUNDLFFBQVE7Z0NBQU07Z0NBQ3RCSyxNQUFLO2dDQUNMQyxTQUFRO2dDQUNSQyxPQUFNO2dDQUNOQyxTQUFTLElBQU1wQyxhQUFhOzBDQUM3Qjs7Ozs7OzBDQUdELDhEQUFDdEIsNEZBQU1BO2dDQUNMaUQsT0FBTztvQ0FBQ0MsUUFBUTtnQ0FBTTtnQ0FDdEJLLE1BQUs7Z0NBQ0xDLFNBQVE7Z0NBQ1JDLE9BQU07Z0NBQ05DLFNBQVMsSUFBTXBDLGFBQWE7MENBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUNzQjswQkFDQyw0RUFBQ3pDLGtEQUFLQTtvQkFDSndELEtBQUt2QztvQkFDTHdDLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBOUhNMUQ7S0FBQUE7QUFnSU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaGFwZS1lZGl0b3IvW3NoYXBlXS9wYWdlLnRzeD8zMzlhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHtzaGFwZXN9IGZyb20gJy4uLy4uL3V0aWxzL3NoYXBlcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbnR5cGUgU2hhcGVFZGl0b3JQcm9wcyA9IHtcclxuICBwYXJhbXM6IHtcclxuICAgIHNoYXBlOiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IFNoYXBlRWRpdG9yOiBSZWFjdC5GQzxTaGFwZUVkaXRvclByb3BzPiA9ICh7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBzaGFwZTogc3RyaW5nIH0gfSkgPT4ge1xyXG5cclxuICBjb25zdCBbc2hhcGUsIHNldFNoYXBlXSA9IHVzZVN0YXRlKHNoYXBlcy5maW5kKChzaGFwZSkgPT4gc2hhcGUubmFtZSA9PT0gcGFyYW1zLnNoYXBlKSB8fCBudWxsKTtcclxuICBjb25zdCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZTx7W2tleTogc3RyaW5nXTogbnVtYmVyIHwgc3RyaW5nfT4oe30pO1xyXG4gIGNvbnN0IFtzcGFjaW5nLCBzZXRTcGFjaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb2xzLCBzZXRDb2xzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdmdGaWxlLCBzZXRTdmdGaWxlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGFyYW1zLnNoYXBlKSB7XHJcbiAgICAgIHNldFNoYXBlKHNoYXBlcy5maW5kKChzaGFwZSkgPT4gc2hhcGUubmFtZSA9PT0gcGFyYW1zLnNoYXBlKSB8fCBudWxsKTtcclxuICAgIH1cclxuICB9LCBbcGFyYW1zLnNoYXBlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBib29sZWFuKSA9PiB7XHJcbiAgICBjb25zdCBudW1iZXJzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307IFxyXG4gICAgT2JqZWN0LmtleXMoZGltZW5zaW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIG51bWJlcnNba2V5XSA9IE51bWJlcihkaW1lbnNpb25zW2tleV0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh7Li4ubnVtYmVycywgc3BhY2luZywgcm93cywgY29scywgZmlsZU5hbWV9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBmZXRjaChgL2FwaS9nZW5lcmF0ZV9nYXNrZXRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsuLi5udW1iZXJzLCBzcGFjaW5nLCByb3dzLCBjb2xzLCBmaWxlTmFtZX0pLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gc2F2ZSB0aGUgcmV0dXJuZWQgZmlsZVxyXG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgZmlsZS5ibG9iKCk7XHJcbiAgICAgIHNldFN2Z0ZpbGUoVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XHJcbiAgICAgIC8vIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgIC8vIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIC8vIGEuaHJlZiA9IHVybDtcclxuICAgICAgLy8gYS5kb3dubG9hZCA9IGAke2ZpbGVOYW1lfS5wbmdgO1xyXG4gICAgICAvLyBhLmNsaWNrKCk7XHJcblxyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KCdFcnJvciBnZW5lcmF0aW5nIGdhc2tldCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmICghc2hhcGUpIHtcclxuICAgIHJldHVybiA8ZGl2PlNoYXBlIG5vdCBmb3VuZDwvZGl2PjtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+ICAgICAgXHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNoYXBlLmRpbWVuc2lvbnMgJiZcclxuICAgICAgICAgICAgc2hhcGUuZGltZW5zaW9ucy5tYXAoKGRpbWVuc2lvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogJzFyZW0nfX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2RpbWVuc2lvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RpbWVuc2lvbnNbZGltZW5zaW9uLm5hbWVdIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERpbWVuc2lvbnMoey4uLmRpbWVuc2lvbnMsIFtkaW1lbnNpb24ubmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAnMXJlbSd9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlNwYWNpbmdcIiAgICAgICAgICBcclxuICAgICAgICAgICAgdmFsdWU9e3NwYWNpbmcgfHwgJyd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3BhY2luZyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAnMXJlbSd9fVxyXG4gICAgICAgICAgICBsYWJlbD1cIlJvd3NcIlxyXG4gICAgICAgICAgICB2YWx1ZT17TnVtYmVyKHJvd3MpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvd3MoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpbjogJzFyZW0nfX1cclxuICAgICAgICAgICAgbGFiZWw9XCJDb2xzXCJcclxuICAgICAgICAgICAgdmFsdWU9e051bWJlcihjb2xzKX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2xzKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46ICcxcmVtJ319XHJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlsZSBOYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZpbGVOYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbGVOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPGRpdj4gXHJcbiAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpbjogJzFyZW0nfX0gXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoZmFsc2UpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQcmV2aWV3IERYRlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpbjogJzFyZW0nfX0gXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQodHJ1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdlbmVyYXRlIERYRlxyXG4gICAgICAgICAgPC9CdXR0b24+ICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgc3JjPXtzdmdGaWxlfSAgXHJcbiAgICAgICAgICBhbHQ9XCJnYXNrZXRcIiBcclxuICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezI1MH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFwZUVkaXRvcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsInNoYXBlcyIsIkltYWdlIiwiU2hhcGVFZGl0b3IiLCJwYXJhbXMiLCJzaGFwZSIsInNldFNoYXBlIiwiZmluZCIsIm5hbWUiLCJkaW1lbnNpb25zIiwic2V0RGltZW5zaW9ucyIsInNwYWNpbmciLCJzZXRTcGFjaW5nIiwicm93cyIsInNldFJvd3MiLCJjb2xzIiwic2V0Q29scyIsImZpbGVOYW1lIiwic2V0RmlsZU5hbWUiLCJzdmdGaWxlIiwic2V0U3ZnRmlsZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJudW1iZXJzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJmb3JtIiwibWFwIiwiZGltZW5zaW9uIiwiaW5kZXgiLCJzdHlsZSIsIm1hcmdpbiIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInR5cGUiLCJ2YXJpYW50IiwiY29sb3IiLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/shape-editor/[shape]/page.tsx\n"));

/***/ })

});