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
    }, certification.title)), __jsx("span", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.certificationYear,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hyphen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 33
      }
    }, "\xA0", '–', "\xA0"), __jsx("span", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.year,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 33
      }
    }, certification.year))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9jZXJ0aWZpY2F0aW9ucy9jZXJ0aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkNlcnRpZmljYXRpb24iLCJwcm9wcyIsImxhYmVscyIsImlkIiwidGl0bGUiLCJjZXJ0aWZpY2F0aW9ucyIsIm1hcCIsImNlcnRpZmljYXRpb24iLCJzdHlsZXMiLCJjZXJ0aWZpY2F0aW9uUGFwZXIiLCJpbWFnZSIsImxpbmsiLCJjZXJ0aWZpY2F0aW9uWWVhciIsImh5cGhlbiIsInllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNyQkMsTUFEcUIsR0FDVkQsS0FEVSxDQUNyQkMsTUFEcUI7QUFHN0IsU0FDSSxNQUFDLHVFQUFEO0FBQWEsTUFBRSxFQUFFQSxNQUFNLENBQUNDLEVBQXhCO0FBQTRCLFNBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tGLE1BQU0sQ0FBQ0csY0FBUCxDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQ0MsYUFBRCxFQUFtQjtBQUMxQyxXQUNJLE1BQUMsK0RBQUQ7QUFDSSxTQUFHLEVBQUVBLGFBRFQ7QUFFSSxlQUFTLEVBQUVDLGlFQUFNLENBQUNDLGtCQUZ0QjtBQUdJLGVBQVMsRUFBRSxDQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJSTtBQUNJLGVBQVMsRUFBRUQsaUVBQU0sQ0FBQ0UsS0FEdEI7QUFFSSxTQUFHLEVBQUVILGFBQWEsQ0FBQ0csS0FGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLEVBUUk7QUFBSyxlQUFTLEVBQUVGLGlFQUFNLENBQUNHLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUNJLGVBQVMsWUFBS0gsaUVBQU0sQ0FBQ0csSUFBWix3QkFEYjtBQUVJLFVBQUksRUFBRUosYUFBYSxDQUFDSSxJQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0k7QUFBSSxlQUFTLEVBQUVILGlFQUFNLENBQUNKLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0csYUFBYSxDQUFDSCxLQURuQixDQUhKLENBREosRUFRSTtBQUFNLGVBQVMsRUFBRUksaUVBQU0sQ0FBQ0ksaUJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFNLGVBQVMsRUFBRUosaUVBQU0sQ0FBQ0ssTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNXLEdBRFgsU0FESixFQUlJO0FBQU0sZUFBUyxFQUFFTCxpRUFBTSxDQUFDTSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tQLGFBQWEsQ0FBQ08sSUFEbkIsQ0FKSixDQVJKLENBUkosQ0FESjtBQTRCSCxHQTdCQSxDQURMLENBREo7QUFrQ0gsQ0FyQ0Q7O0tBQU1kLGE7QUF1Q1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmMzNjOGM4MzQ3ODk4MTZiMWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgU2VjdGlvbkZvcm0gZnJvbSAnLi4vLi4vdXRpbHMvc2VjdGlvbkZvcm0vc2VjdGlvbnNGb3JtJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NlcnRpZmljYXRpb24ubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQ2VydGlmaWNhdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBsYWJlbHMgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlY3Rpb25Gb3JtIGlkPXtsYWJlbHMuaWR9IHRpdGxlPXtsYWJlbHMudGl0bGV9PlxyXG4gICAgICAgICAgICB7bGFiZWxzLmNlcnRpZmljYXRpb25zLm1hcCgoY2VydGlmaWNhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjZXJ0aWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jZXJ0aWZpY2F0aW9uUGFwZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjZXJ0aWZpY2F0aW9uLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rfSBzcGVjaWFsTGlua0VmZmVjdDJgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2NlcnRpZmljYXRpb24ubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNlcnRpZmljYXRpb25ZZWFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5oeXBoZW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDt7J+KAkyd9Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnllYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VydGlmaWNhdGlvbi55ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU2VjdGlvbkZvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2VydGlmaWNhdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==