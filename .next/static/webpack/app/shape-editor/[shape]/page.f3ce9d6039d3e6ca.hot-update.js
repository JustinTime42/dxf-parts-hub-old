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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _utils_shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shapes */ \"(app-pages-browser)/./src/app/utils/shapes.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ShapeEditor = (param)=>{\n    let { params } = param;\n    _s();\n    const [shape, setShape] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_shapes__WEBPACK_IMPORTED_MODULE_2__.shapes.find((shape)=>shape.name === params.shape) || null);\n    const [dimensions, setDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [spacing, setSpacing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cols, setCols] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [svgFile, setSvgFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (params.shape) {\n            setShape(_utils_shapes__WEBPACK_IMPORTED_MODULE_2__.shapes.find((shape)=>shape.name === params.shape) || null);\n        }\n    }, [\n        params.shape\n    ]);\n    const handleSubmit = async (e)=>{\n        const numbers = {};\n        Object.keys(dimensions).forEach((key)=>{\n            numbers[key] = Number(dimensions[key]);\n        });\n        console.log({\n            ...numbers,\n            spacing,\n            rows,\n            cols,\n            fileName\n        });\n        e.preventDefault();\n        try {\n            const file = await fetch(\"/api/generate_gasket\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    ...numbers,\n                    spacing,\n                    rows,\n                    cols,\n                    fileName\n                })\n            });\n            // save the returned file\n            const blob = await file.blob();\n            setSvgFile(URL.createObjectURL(blob));\n        // const url = URL.createObjectURL(blob);\n        // const a = document.createElement('a');\n        // a.href = url;\n        // a.download = `${fileName}.png`;\n        // a.click();\n        } catch (error) {\n            alert(\"Error generating gasket\");\n        }\n    };\n    if (!shape) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Shape not found\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    maxWidth: \"760\"\n                },\n                children: [\n                    shape.dimensions && shape.dimensions.map((dimension, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            style: {\n                                margin: \"1rem\"\n                            },\n                            label: dimension.label,\n                            value: dimensions[dimension.name] || \"\",\n                            onChange: (e)=>{\n                                setDimensions({\n                                    ...dimensions,\n                                    [dimension.name]: e.target.value\n                                });\n                            }\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 15\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: {\n                            margin: \"1rem\"\n                        },\n                        label: \"Spacing\",\n                        value: spacing || \"\",\n                        onChange: (e)=>setSpacing(Number(e.target.value))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: {\n                            margin: \"1rem\"\n                        },\n                        label: \"Rows\",\n                        value: Number(rows),\n                        onChange: (e)=>setRows(Number(e.target.value))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: {\n                            margin: \"1rem\"\n                        },\n                        label: \"Cols\",\n                        value: Number(cols),\n                        onChange: (e)=>setCols(Number(e.target.value))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: {\n                            margin: \"1rem\"\n                        },\n                        label: \"File Name\",\n                        value: fileName,\n                        onChange: (e)=>setFileName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    type: \"submit\",\n                    variant: \"contained\",\n                    color: \"primary\",\n                    children: \"Preview DXF\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: svgFile,\n                    alt: \"gasket\",\n                    width: 250,\n                    height: 250\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justi\\\\Code\\\\dxf-parts-hub\\\\src\\\\app\\\\shape-editor\\\\[shape]\\\\page.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShapeEditor, \"OT1L8uUORaUad5D2uTQg1q1OufU=\");\n_c = ShapeEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShapeEditor);\nvar _c;\n$RefreshReg$(_c, \"ShapeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2hhcGUtZWRpdG9yL1tzaGFwZV0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNEO0FBQ1I7QUFDWDtBQVEvQixNQUFNTyxjQUEwQztRQUFDLEVBQUVDLE1BQU0sRUFBaUM7O0lBRXhGLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQ0csaURBQU1BLENBQUNNLElBQUksQ0FBQyxDQUFDRixRQUFVQSxNQUFNRyxJQUFJLEtBQUtKLE9BQU9DLEtBQUssS0FBSztJQUMxRixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQW1DLENBQUM7SUFDaEYsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDaUIsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDbUIsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDcUIsU0FBU0MsV0FBVyxHQUFHdEIsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sT0FBT0MsS0FBSyxFQUFFO1lBQ2hCQyxTQUFTTCxpREFBTUEsQ0FBQ00sSUFBSSxDQUFDLENBQUNGLFFBQVVBLE1BQU1HLElBQUksS0FBS0osT0FBT0MsS0FBSyxLQUFLO1FBQ2xFO0lBQ0YsR0FBRztRQUFDRCxPQUFPQyxLQUFLO0tBQUM7SUFFakIsTUFBTWdCLGVBQWUsT0FBT0M7UUFDMUIsTUFBTUMsVUFBcUMsQ0FBQztRQUM1Q0MsT0FBT0MsSUFBSSxDQUFDaEIsWUFBWWlCLE9BQU8sQ0FBQyxDQUFDQztZQUMvQkosT0FBTyxDQUFDSSxJQUFJLEdBQUdDLE9BQU9uQixVQUFVLENBQUNrQixJQUFJO1FBQ3ZDO1FBQ0FFLFFBQVFD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ZV0vcGFnZS50c3g/MzM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7c2hhcGVzfSBmcm9tICcuLi8uLi91dGlscy9zaGFwZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG50eXBlIFNoYXBlRWRpdG9yUHJvcHMgPSB7XHJcbiAgcGFyYW1zOiB7XHJcbiAgICBzaGFwZTogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBTaGFwZUVkaXRvcjogUmVhY3QuRkM8U2hhcGVFZGl0b3JQcm9wcz4gPSAoeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgc2hhcGU6IHN0cmluZyB9IH0pID0+IHtcclxuXHJcbiAgY29uc3QgW3NoYXBlLCBzZXRTaGFwZV0gPSB1c2VTdGF0ZShzaGFwZXMuZmluZCgoc2hhcGUpID0+IHNoYXBlLm5hbWUgPT09IHBhcmFtcy5zaGFwZSkgfHwgbnVsbCk7XHJcbiAgY29uc3QgW2RpbWVuc2lvbnMsIHNldERpbWVuc2lvbnNdID0gdXNlU3RhdGU8e1trZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZ30+KHt9KTtcclxuICBjb25zdCBbc3BhY2luZywgc2V0U3BhY2luZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY29scywgc2V0Q29sc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3ZnRmlsZSwgc2V0U3ZnRmlsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGFyYW1zLnNoYXBlKSB7XHJcbiAgICAgIHNldFNoYXBlKHNoYXBlcy5maW5kKChzaGFwZSkgPT4gc2hhcGUubmFtZSA9PT0gcGFyYW1zLnNoYXBlKSB8fCBudWxsKTtcclxuICAgIH1cclxuICB9LCBbcGFyYW1zLnNoYXBlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG51bWJlcnM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTsgXHJcbiAgICBPYmplY3Qua2V5cyhkaW1lbnNpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgbnVtYmVyc1trZXldID0gTnVtYmVyKGRpbWVuc2lvbnNba2V5XSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHsuLi5udW1iZXJzLCBzcGFjaW5nLCByb3dzLCBjb2xzLCBmaWxlTmFtZX0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IGZldGNoKGAvYXBpL2dlbmVyYXRlX2dhc2tldGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoey4uLm51bWJlcnMsIHNwYWNpbmcsIHJvd3MsIGNvbHMsIGZpbGVOYW1lfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBzYXZlIHRoZSByZXR1cm5lZCBmaWxlXHJcbiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBmaWxlLmJsb2IoKTtcclxuICAgICAgc2V0U3ZnRmlsZShVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcclxuICAgICAgLy8gY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgLy8gY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgLy8gYS5ocmVmID0gdXJsO1xyXG4gICAgICAvLyBhLmRvd25sb2FkID0gYCR7ZmlsZU5hbWV9LnBuZ2A7XHJcbiAgICAgIC8vIGEuY2xpY2soKTtcclxuXHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yIGdlbmVyYXRpbmcgZ2Fza2V0Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFzaGFwZSkge1xyXG4gICAgcmV0dXJuIDxkaXY+U2hhcGUgbm90IGZvdW5kPC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBzdHlsZT17e21heFdpZHRoOlwiNzYwXCJ9fT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBzaGFwZS5kaW1lbnNpb25zICYmXHJcbiAgICAgICAgICBzaGFwZS5kaW1lbnNpb25zLm1hcCgoZGltZW5zaW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAnMXJlbSd9fVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtkaW1lbnNpb24ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGltZW5zaW9uc1tkaW1lbnNpb24ubmFtZV0gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREaW1lbnNpb25zKHsuLi5kaW1lbnNpb25zLCBbZGltZW5zaW9uLm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAnMXJlbSd9fVxyXG4gICAgICAgICAgbGFiZWw9XCJTcGFjaW5nXCIgICAgICAgICAgXHJcbiAgICAgICAgICB2YWx1ZT17c3BhY2luZyB8fCAnJ31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3BhY2luZyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAnMXJlbSd9fVxyXG4gICAgICAgICAgbGFiZWw9XCJSb3dzXCJcclxuICAgICAgICAgIHZhbHVlPXtOdW1iZXIocm93cyl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvd3MoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBzdHlsZT17e21hcmdpbjogJzFyZW0nfX1cclxuICAgICAgICAgIGxhYmVsPVwiQ29sc1wiXHJcbiAgICAgICAgICB2YWx1ZT17TnVtYmVyKGNvbHMpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2xzKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgc3R5bGU9e3ttYXJnaW46ICcxcmVtJ319XHJcbiAgICAgICAgICBsYWJlbD1cIkZpbGUgTmFtZVwiXHJcbiAgICAgICAgICB2YWx1ZT17ZmlsZU5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbGVOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgUHJldmlldyBEWEZcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgIHNyYz17c3ZnRmlsZX0gIFxyXG4gICAgICAgICAgYWx0PVwiZ2Fza2V0XCIgXHJcbiAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcGVFZGl0b3I7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJzaGFwZXMiLCJJbWFnZSIsIlNoYXBlRWRpdG9yIiwicGFyYW1zIiwic2hhcGUiLCJzZXRTaGFwZSIsImZpbmQiLCJuYW1lIiwiZGltZW5zaW9ucyIsInNldERpbWVuc2lvbnMiLCJzcGFjaW5nIiwic2V0U3BhY2luZyIsInJvd3MiLCJzZXRSb3dzIiwiY29scyIsInNldENvbHMiLCJmaWxlTmFtZSIsInNldEZpbGVOYW1lIiwic3ZnRmlsZSIsInNldFN2Z0ZpbGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwibnVtYmVycyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiTnVtYmVyIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJzdHlsZSIsIm1heFdpZHRoIiwibWFwIiwiZGltZW5zaW9uIiwiaW5kZXgiLCJtYXJnaW4iLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwidmFyaWFudCIsImNvbG9yIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/shape-editor/[shape]/page.tsx\n"));

/***/ })

});