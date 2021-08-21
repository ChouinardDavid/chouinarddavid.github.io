webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sections/footer/footer.js":
/*!**********************************************!*\
  !*** ./components/sections/footer/footer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-social-icons */ "./node_modules/react-social-icons/dist/react-social-icons.js");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_copyToClipboardIcon_copyToClipboardIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/copyToClipboardIcon/copyToClipboardIcon */ "./components/utils/copyToClipboardIcon/copyToClipboardIcon.js");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.module.scss */ "./components/sections/footer/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\sections\\footer\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Footer = function Footer(props) {
  var labels = props.labels;
  return __jsx("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    id: labels.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,
    src: "/photoPerso3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contact,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, labels.socialLinks.map(function (link) {
    return __jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_1__["SocialIcon"], {
      key: link,
      className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
      url: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    });
  }), __jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_1__["SocialIcon"], {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
    url: "https://www.linkedin.com/in/david-chouinard/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, labels.email), __jsx(_utils_copyToClipboardIcon_copyToClipboardIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    textToCopy: labels.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.linksContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, Object.keys(labels.sections).map(function (key) {
    return __jsx("a", {
      key: key,
      href: '#' + labels.sections[key].id,
      className: "".concat(_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link, " specialLinkEffect"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }
    }, labels.sections[key].name);
  })));
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mb290ZXIvZm9vdGVyLmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwibGFiZWxzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaWQiLCJpbWFnZSIsImNvbnRhY3QiLCJzb2NpYWxMaW5rcyIsIm1hcCIsImxpbmsiLCJpY29uIiwiZW1haWwiLCJsaW5rc0NvbnRlbnQiLCJPYmplY3QiLCJrZXlzIiwic2VjdGlvbnMiLCJrZXkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNkQyxNQURjLEdBQ0hELEtBREcsQ0FDZEMsTUFEYztBQUd0QixTQUNJO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQyxTQUF2QjtBQUFrQyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0csRUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRiwwREFBTSxDQUFDRyxLQUF2QjtBQUE4QixPQUFHLEVBQUMsa0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFSCwwREFBTSxDQUFDSSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tMLE1BQU0sQ0FBQ00sV0FBUCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFdBQ0ksTUFBQyw2REFBRDtBQUNJLFNBQUcsRUFBRUEsSUFEVDtBQUVJLGVBQVMsRUFBRVAsMERBQU0sQ0FBQ1EsSUFGdEI7QUFHSSxTQUFHLEVBQUVELElBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKO0FBT0gsR0FSQSxDQURMLEVBV0ksTUFBQyw2REFBRDtBQUNJLGFBQVMsRUFBRVAsMERBQU0sQ0FBQ1EsSUFEdEI7QUFFSSxPQUFHLEVBQUMsOENBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLEVBZ0JJO0FBQU0sYUFBUyxFQUFFUiwwREFBTSxDQUFDUyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDVixNQUFNLENBQUNVLEtBQXZDLENBaEJKLEVBaUJJLE1BQUMsc0ZBQUQ7QUFDSSxjQUFVLEVBQUVWLE1BQU0sQ0FBQ1UsS0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCSixDQUZKLEVBc0JJO0FBQUssYUFBUyxFQUFFVCwwREFBTSxDQUFDVSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZYixNQUFNLENBQUNjLFFBQW5CLEVBQTZCUCxHQUE3QixDQUFpQyxVQUFDUSxHQUFELEVBQVM7QUFDdkMsV0FDSTtBQUNJLFNBQUcsRUFBRUEsR0FEVDtBQUVJLFVBQUksRUFBRSxNQUFNZixNQUFNLENBQUNjLFFBQVAsQ0FBZ0JDLEdBQWhCLEVBQXFCWixFQUZyQztBQUdJLGVBQVMsWUFBS0YsMERBQU0sQ0FBQ08sSUFBWix1QkFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUtSLE1BQU0sQ0FBQ2MsUUFBUCxDQUFnQkMsR0FBaEIsRUFBcUJDLElBSjFCLENBREo7QUFRSCxHQVRBLENBREwsQ0F0QkosQ0FESjtBQXFDSCxDQXhDRDs7S0FBTWxCLE07QUEwQ1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMyNDhlNjVhZjIzYTNlNGFiMTgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb2NpYWxJY29uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWljb25zJztcclxuaW1wb3J0IENvcHlUb0NsaXBib2FyZEljb24gZnJvbSAnLi4vLi4vdXRpbHMvY29weVRvQ2xpcGJvYXJkSWNvbi9jb3B5VG9DbGlwYm9hcmRJY29uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgbGFiZWxzIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBpZD17bGFiZWxzLmlkfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPScvcGhvdG9QZXJzbzMuanBnJyAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3R9PlxyXG4gICAgICAgICAgICAgICAge2xhYmVscy5zb2NpYWxMaW5rcy5tYXAoKGxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17bGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPFNvY2lhbEljb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIHVybD0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhdmlkLWNob3VpbmFyZC8nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsfT57bGFiZWxzLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFRvQ29weT17bGFiZWxzLmVtYWlsfT48L0NvcHlUb0NsaXBib2FyZEljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMobGFiZWxzLnNlY3Rpb25zKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eycjJyArIGxhYmVscy5zZWN0aW9uc1trZXldLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gc3BlY2lhbExpbmtFZmZlY3RgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbHMuc2VjdGlvbnNba2V5XS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=