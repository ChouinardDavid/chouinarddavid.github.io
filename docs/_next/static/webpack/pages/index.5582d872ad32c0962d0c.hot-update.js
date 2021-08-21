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
    src: labels.image,
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
  }), __jsx("span", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, labels.email), __jsx(_utils_copyToClipboardIcon_copyToClipboardIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    textToCopy: labels.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.linksContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
        lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mb290ZXIvZm9vdGVyLmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwibGFiZWxzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaWQiLCJpbWFnZSIsImNvbnRhY3QiLCJzb2NpYWxMaW5rcyIsIm1hcCIsImxpbmsiLCJpY29uIiwiZW1haWwiLCJsaW5rc0NvbnRlbnQiLCJPYmplY3QiLCJrZXlzIiwic2VjdGlvbnMiLCJrZXkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNkQyxNQURjLEdBQ0hELEtBREcsQ0FDZEMsTUFEYztBQUd0QixTQUNJO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQyxTQUF2QjtBQUFrQyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0csRUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRiwwREFBTSxDQUFDRyxLQUF2QjtBQUE4QixPQUFHLEVBQUVKLE1BQU0sQ0FBQ0ksS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVILDBEQUFNLENBQUNJLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0wsTUFBTSxDQUFDTSxXQUFQLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDOUIsV0FDSSxNQUFDLDZEQUFEO0FBQ0ksU0FBRyxFQUFFQSxJQURUO0FBRUksZUFBUyxFQUFFUCwwREFBTSxDQUFDUSxJQUZ0QjtBQUdJLFNBQUcsRUFBRUQsSUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREo7QUFPSCxHQVJBLENBREwsRUFXSTtBQUFNLGFBQVMsRUFBRVAsMERBQU0sQ0FBQ1MsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ1YsTUFBTSxDQUFDVSxLQUF2QyxDQVhKLEVBWUksTUFBQyxzRkFBRDtBQUNJLGNBQVUsRUFBRVYsTUFBTSxDQUFDVSxLQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkosQ0FGSixFQWlCSTtBQUFLLGFBQVMsRUFBRVQsMERBQU0sQ0FBQ1UsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxNQUFNLENBQUNDLElBQVAsQ0FBWWIsTUFBTSxDQUFDYyxRQUFuQixFQUE2QlAsR0FBN0IsQ0FBaUMsVUFBQ1EsR0FBRCxFQUFTO0FBQ3ZDLFdBQ0k7QUFDSSxTQUFHLEVBQUVBLEdBRFQ7QUFFSSxVQUFJLEVBQUUsTUFBTWYsTUFBTSxDQUFDYyxRQUFQLENBQWdCQyxHQUFoQixFQUFxQlosRUFGckM7QUFHSSxlQUFTLFlBQUtGLDBEQUFNLENBQUNPLElBQVosdUJBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlLUixNQUFNLENBQUNjLFFBQVAsQ0FBZ0JDLEdBQWhCLEVBQXFCQyxJQUoxQixDQURKO0FBUUgsR0FUQSxDQURMLENBakJKLENBREo7QUFnQ0gsQ0FuQ0Q7O0tBQU1sQixNO0FBcUNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NTgyZDg3MmFkMzJjMDk2MmQwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29jaWFsSWNvbiB9IGZyb20gJ3JlYWN0LXNvY2lhbC1pY29ucyc7XHJcbmltcG9ydCBDb3B5VG9DbGlwYm9hcmRJY29uIGZyb20gJy4uLy4uL3V0aWxzL2NvcHlUb0NsaXBib2FyZEljb24vY29weVRvQ2xpcGJvYXJkSWNvbic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGxhYmVscyB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaWQ9e2xhYmVscy5pZH0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHNyYz17bGFiZWxzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3R9PlxyXG4gICAgICAgICAgICAgICAge2xhYmVscy5zb2NpYWxMaW5rcy5tYXAoKGxpbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17bGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZW1haWx9PntsYWJlbHMuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZEljb25cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VG9Db3B5PXtsYWJlbHMuZW1haWx9PjwvQ29weVRvQ2xpcGJvYXJkSWNvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3NDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhsYWJlbHMuc2VjdGlvbnMpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17JyMnICsgbGFiZWxzLnNlY3Rpb25zW2tleV0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rfSBzcGVjaWFsTGlua0VmZmVjdGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVscy5zZWN0aW9uc1trZXldLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==