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
  }, __jsx("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socialIcons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, labels.socialLinks.map(function (link) {
    return __jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_1__["SocialIcon"], {
      key: link,
      className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
      url: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 29
      }
    });
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, labels.email), __jsx(_utils_copyToClipboardIcon_copyToClipboardIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    textToCopy: labels.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.linksContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
        lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mb290ZXIvZm9vdGVyLmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsInByb3BzIiwibGFiZWxzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaWQiLCJpbWFnZSIsImNvbnRhY3QiLCJzb2NpYWxJY29ucyIsInNvY2lhbExpbmtzIiwibWFwIiwibGluayIsImljb24iLCJlbWFpbCIsImxpbmtzQ29udGVudCIsIk9iamVjdCIsImtleXMiLCJzZWN0aW9ucyIsImtleSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2RDLE1BRGMsR0FDSEQsS0FERyxDQUNkQyxNQURjO0FBR3RCLFNBQ0k7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLFNBQXZCO0FBQWtDLE1BQUUsRUFBRUYsTUFBTSxDQUFDRyxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVGLDBEQUFNLENBQUNHLEtBQXZCO0FBQThCLE9BQUcsRUFBRUosTUFBTSxDQUFDSSxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRUgsMERBQU0sQ0FBQ0ksT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFSiwwREFBTSxDQUFDSyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tOLE1BQU0sQ0FBQ08sV0FBUCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFdBQ0ksTUFBQyw2REFBRDtBQUNJLFNBQUcsRUFBRUEsSUFEVDtBQUVJLGVBQVMsRUFBRVIsMERBQU0sQ0FBQ1MsSUFGdEI7QUFHSSxTQUFHLEVBQUVELElBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKO0FBT0gsR0FSQSxDQURMLENBREosRUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUVSLDBEQUFNLENBQUNVLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0NYLE1BQU0sQ0FBQ1csS0FBdkMsQ0FESixFQUVJLE1BQUMsc0ZBQUQ7QUFDSSxjQUFVLEVBQUVYLE1BQU0sQ0FBQ1csS0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBWkosQ0FGSixFQW9CSTtBQUFLLGFBQVMsRUFBRVYsMERBQU0sQ0FBQ1csWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxNQUFNLENBQUNDLElBQVAsQ0FBWWQsTUFBTSxDQUFDZSxRQUFuQixFQUE2QlAsR0FBN0IsQ0FBaUMsVUFBQ1EsR0FBRCxFQUFTO0FBQ3ZDLFdBQ0k7QUFDSSxTQUFHLEVBQUVBLEdBRFQ7QUFFSSxVQUFJLEVBQUUsTUFBTWhCLE1BQU0sQ0FBQ2UsUUFBUCxDQUFnQkMsR0FBaEIsRUFBcUJiLEVBRnJDO0FBR0ksZUFBUyxZQUFLRiwwREFBTSxDQUFDUSxJQUFaLHVCQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJS1QsTUFBTSxDQUFDZSxRQUFQLENBQWdCQyxHQUFoQixFQUFxQkMsSUFKMUIsQ0FESjtBQVFILEdBVEEsQ0FETCxDQXBCSixDQURKO0FBbUNILENBdENEOztLQUFNbkIsTTtBQXdDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmNjNzdjMWE0MGMxMThlMjM1YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvY2lhbEljb24gfSBmcm9tICdyZWFjdC1zb2NpYWwtaWNvbnMnO1xyXG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkSWNvbiBmcm9tICcuLi8uLi91dGlscy9jb3B5VG9DbGlwYm9hcmRJY29uL2NvcHlUb0NsaXBib2FyZEljb24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBsYWJlbHMgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGlkPXtsYWJlbHMuaWR9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9e2xhYmVscy5pbWFnZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsSWNvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbHMuc29jaWFsTGlua3MubWFwKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17bGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZW1haWx9PntsYWJlbHMuZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUb0NvcHk9e2xhYmVscy5lbWFpbH0+PC9Db3B5VG9DbGlwYm9hcmRJY29uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMobGFiZWxzLnNlY3Rpb25zKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eycjJyArIGxhYmVscy5zZWN0aW9uc1trZXldLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlua30gc3BlY2lhbExpbmtFZmZlY3RgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbHMuc2VjdGlvbnNba2V5XS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=