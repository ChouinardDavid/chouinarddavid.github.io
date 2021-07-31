webpackHotUpdate_N_E("pages/_app",{

/***/ "./styles/createMyMuiTheme.js":
/*!************************************!*\
  !*** ./styles/createMyMuiTheme.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var createMyMuiTheme = function createMyMuiTheme() {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
    palette: {// type: "light",
      // primary: {
      // },
      // secondary: {
      // }
    },
    overrides: {
      MuiButton: {
        contained: {
          backgroundColor: '#4caf50'
        }
      },
      MuiIconButton: {
        root: {
          color: '#e01f1f'
        }
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createMyMuiTheme);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NyZWF0ZU15TXVpVGhlbWUuanMiXSwibmFtZXMiOlsiY3JlYXRlTXlNdWlUaGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsIm92ZXJyaWRlcyIsIk11aUJ1dHRvbiIsImNvbnRhaW5lZCIsImJhY2tncm91bmRDb2xvciIsIk11aUljb25CdXR0b24iLCJyb290IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBSUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFNBQU1DLCtFQUFjLENBQUM7QUFDMUNDLFdBQU8sRUFBRSxDQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMSyxLQURpQztBQVExQ0MsYUFBUyxFQUFFO0FBQ1BDLGVBQVMsRUFBRTtBQUNQQyxpQkFBUyxFQUFFO0FBQ1BDLHlCQUFlLEVBQUU7QUFEVjtBQURKLE9BREo7QUFNUEMsbUJBQWEsRUFBRTtBQUNYQyxZQUFJLEVBQUU7QUFDRkMsZUFBSyxFQUFFO0FBREw7QUFESztBQU5SO0FBUitCLEdBQUQsQ0FBcEI7QUFBQSxDQUF6Qjs7QUF1QmVULCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGU0MjNkNGM0MDMwMjdjMWNhMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG5cclxuY29uc3QgY3JlYXRlTXlNdWlUaGVtZSA9ICgpID0+IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICAvLyB0eXBlOiBcImxpZ2h0XCIsXHJcbiAgICAgICAgLy8gcHJpbWFyeToge1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxcclxuICAgIG92ZXJyaWRlczoge1xyXG4gICAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBjb250YWluZWQ6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0Y2FmNTAnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBNdWlJY29uQnV0dG9uOiB7XHJcbiAgICAgICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2UwMWYxZicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU15TXVpVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9