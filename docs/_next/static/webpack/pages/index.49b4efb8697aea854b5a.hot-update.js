webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sections/certifications/certification.js":
/*!*************************************************************!*\
  !*** ./components/sections/certifications/certification.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _utils_sectionForm_sectionsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/sectionForm/sectionsForm */ "./components/utils/sectionForm/sectionsForm.js");
/* harmony import */ var _certification_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certification.module.scss */ "./components/sections/certifications/certification.module.scss");
/* harmony import */ var _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_certification_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\sections\\certifications\\certification.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Certification = function Certification(props) {
  var labels = props.labels;
  return __jsx(_utils_sectionForm_sectionsForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: labels.id,
    title: labels.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, labels.certifications.map(function (certification) {
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: certification,
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.certificationPaper,
      elevation: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("img", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,
      src: certification.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "".concat(_certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link, " specialLinkEffect2"),
      href: certification.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 29
      }
    }, __jsx("h2", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 33
      }
    }, certification.title))), __jsx("h2", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.certificationYear,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hyphen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }, "\xA0", '–', "\xA0"), __jsx("span", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.year,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, certification.year)));
  }));
};

_c = Certification;
/* harmony default export */ __webpack_exports__["default"] = (Certification);

var _c;

$RefreshReg$(_c, "Certification");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9jZXJ0aWZpY2F0aW9ucy9jZXJ0aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkNlcnRpZmljYXRpb24iLCJwcm9wcyIsImxhYmVscyIsImlkIiwidGl0bGUiLCJjZXJ0aWZpY2F0aW9ucyIsIm1hcCIsImNlcnRpZmljYXRpb24iLCJzdHlsZXMiLCJjZXJ0aWZpY2F0aW9uUGFwZXIiLCJpbWFnZSIsImxpbmsiLCJjZXJ0aWZpY2F0aW9uWWVhciIsImh5cGhlbiIsInllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNyQkMsTUFEcUIsR0FDVkQsS0FEVSxDQUNyQkMsTUFEcUI7QUFHN0IsU0FDSSxNQUFDLHVFQUFEO0FBQWEsTUFBRSxFQUFFQSxNQUFNLENBQUNDLEVBQXhCO0FBQTRCLFNBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tGLE1BQU0sQ0FBQ0csY0FBUCxDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQ0MsYUFBRCxFQUFtQjtBQUMxQyxXQUNJLE1BQUMsK0RBQUQ7QUFDSSxTQUFHLEVBQUVBLGFBRFQ7QUFFSSxlQUFTLEVBQUVDLGlFQUFNLENBQUNDLGtCQUZ0QjtBQUdJLGVBQVMsRUFBRSxDQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJSTtBQUNJLGVBQVMsRUFBRUQsaUVBQU0sQ0FBQ0UsS0FEdEI7QUFFSSxTQUFHLEVBQUVILGFBQWEsQ0FBQ0csS0FGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLEVBUUk7QUFBSyxlQUFTLEVBQUVGLGlFQUFNLENBQUNHLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUNJLGVBQVMsWUFBS0gsaUVBQU0sQ0FBQ0csSUFBWix3QkFEYjtBQUVJLFVBQUksRUFBRUosYUFBYSxDQUFDSSxJQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0k7QUFBSSxlQUFTLEVBQUVILGlFQUFNLENBQUNKLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0csYUFBYSxDQUFDSCxLQURuQixDQUhKLENBREosQ0FSSixFQWlCSTtBQUFJLGVBQVMsRUFBRUksaUVBQU0sQ0FBQ0ksaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFNLGVBQVMsRUFBRUosaUVBQU0sQ0FBQ0ssTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNXLEdBRFgsU0FESixFQUlJO0FBQU0sZUFBUyxFQUFFTCxpRUFBTSxDQUFDTSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tQLGFBQWEsQ0FBQ08sSUFEbkIsQ0FKSixDQWpCSixDQURKO0FBNEJILEdBN0JBLENBREwsQ0FESjtBQWtDSCxDQXJDRDs7S0FBTWQsYTtBQXVDU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDliNGVmYjg2OTdhZWE4NTRiNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBTZWN0aW9uRm9ybSBmcm9tICcuLi8uLi91dGlscy9zZWN0aW9uRm9ybS9zZWN0aW9uc0Zvcm0nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2VydGlmaWNhdGlvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBDZXJ0aWZpY2F0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGxhYmVscyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VjdGlvbkZvcm0gaWQ9e2xhYmVscy5pZH0gdGl0bGU9e2xhYmVscy50aXRsZX0+XHJcbiAgICAgICAgICAgIHtsYWJlbHMuY2VydGlmaWNhdGlvbnMubWFwKChjZXJ0aWZpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NlcnRpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlcnRpZmljYXRpb25QYXBlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NlcnRpZmljYXRpb24uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpbmt9IHNwZWNpYWxMaW5rRWZmZWN0MmB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Y2VydGlmaWNhdGlvbi5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNlcnRpZmljYXRpb25ZZWFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmh5cGhlbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7eyfigJMnfSZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMueWVhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRpb24ueWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TZWN0aW9uRm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9