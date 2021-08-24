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
    }), __jsx("span", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.certificationYear,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hyphen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 29
      }
    }, "\xA0", '–', "\xA0"), __jsx("span", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.year,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, certification.year)), __jsx("div", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.linkContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "".concat(_certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link, " specialLinkEffect2"),
      href: certification.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: _certification_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 33
      }
    }, certification.title))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9jZXJ0aWZpY2F0aW9ucy9jZXJ0aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkNlcnRpZmljYXRpb24iLCJwcm9wcyIsImxhYmVscyIsImlkIiwidGl0bGUiLCJjZXJ0aWZpY2F0aW9ucyIsIm1hcCIsImNlcnRpZmljYXRpb24iLCJzdHlsZXMiLCJjZXJ0aWZpY2F0aW9uUGFwZXIiLCJpbWFnZSIsImNlcnRpZmljYXRpb25ZZWFyIiwiaHlwaGVuIiwieWVhciIsImxpbmtDb250ZW50IiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3JCQyxNQURxQixHQUNWRCxLQURVLENBQ3JCQyxNQURxQjtBQUc3QixTQUNJLE1BQUMsdUVBQUQ7QUFBYSxNQUFFLEVBQUVBLE1BQU0sQ0FBQ0MsRUFBeEI7QUFBNEIsU0FBSyxFQUFFRCxNQUFNLENBQUNFLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0YsTUFBTSxDQUFDRyxjQUFQLENBQXNCQyxHQUF0QixDQUEwQixVQUFDQyxhQUFELEVBQW1CO0FBQzFDLFdBQ0ksTUFBQywrREFBRDtBQUNJLFNBQUcsRUFBRUEsYUFEVDtBQUVJLGVBQVMsRUFBRUMsaUVBQU0sQ0FBQ0Msa0JBRnRCO0FBR0ksZUFBUyxFQUFFLENBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlJO0FBQ0ksZUFBUyxFQUFFRCxpRUFBTSxDQUFDRSxLQUR0QjtBQUVJLFNBQUcsRUFBRUgsYUFBYSxDQUFDRyxLQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkosRUFTSTtBQUFNLGVBQVMsRUFBRUYsaUVBQU0sQ0FBQ0csaUJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFNLGVBQVMsRUFBRUgsaUVBQU0sQ0FBQ0ksTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNXLEdBRFgsU0FESixFQUlJO0FBQU0sZUFBUyxFQUFFSixpRUFBTSxDQUFDSyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tOLGFBQWEsQ0FBQ00sSUFEbkIsQ0FKSixDQVRKLEVBaUJJO0FBQUssZUFBUyxFQUFFTCxpRUFBTSxDQUFDTSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFDSSxlQUFTLFlBQUtOLGlFQUFNLENBQUNPLElBQVosd0JBRGI7QUFFSSxVQUFJLEVBQUVSLGFBQWEsQ0FBQ1EsSUFGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdJO0FBQU0sZUFBUyxFQUFFUCxpRUFBTSxDQUFDSixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tHLGFBQWEsQ0FBQ0gsS0FEbkIsQ0FISixDQURKLENBakJKLENBREo7QUE2QkgsR0E5QkEsQ0FETCxDQURKO0FBbUNILENBdENEOztLQUFNSixhO0FBd0NTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOTFhOGYxOWE2NTkwNDI1YWNlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFNlY3Rpb25Gb3JtIGZyb20gJy4uLy4uL3V0aWxzL3NlY3Rpb25Gb3JtL3NlY3Rpb25zRm9ybSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jZXJ0aWZpY2F0aW9uLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IENlcnRpZmljYXRpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgbGFiZWxzIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWN0aW9uRm9ybSBpZD17bGFiZWxzLmlkfSB0aXRsZT17bGFiZWxzLnRpdGxlfT5cclxuICAgICAgICAgICAge2xhYmVscy5jZXJ0aWZpY2F0aW9ucy5tYXAoKGNlcnRpZmljYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2VydGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VydGlmaWNhdGlvblBhcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2VydGlmaWNhdGlvbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNlcnRpZmljYXRpb25ZZWFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmh5cGhlbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7eyfigJMnfSZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMueWVhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRpb24ueWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtDb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gc3BlY2lhbExpbmtFZmZlY3QyYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtjZXJ0aWZpY2F0aW9uLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlcnRpZmljYXRpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TZWN0aW9uRm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9