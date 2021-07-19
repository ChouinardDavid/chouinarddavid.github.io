webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _contextWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contextWrapper */ "./pages/contextWrapper.js");
/* harmony import */ var _styles_createMyMuiTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/createMyMuiTheme */ "./styles/createMyMuiTheme.js");


var _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function MyApp(props) {
  _s();

  var Component = props.Component,
      pageProps = props.pageProps;
  var myMuiTheme = Object(_styles_createMyMuiTheme__WEBPACK_IMPORTED_MODULE_7__["default"])();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "My Web Space"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "David Chouinard-Lavoie"), __jsx("meta", {
    name: "title",
    content: "David Chouinard-Lavoie",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Une description de mon site",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://chouinarddavid.github.io/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "David Chouinard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Consulter ma page web pour plus de d\xE9tails sur mon parcourt professionnel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/photoPerso.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: "https://chouinarddavid.github.io/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: "David Chouinard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: "Consulter ma page web pour plus de d\xE9tails sur mon parcourt professionnel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:image",
    content: "/photoPerso.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["MuiThemeProvider"], {
    theme: myMuiTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }))));
}

_s(MyApp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/***/ }),

/***/ "./styles/createMyMuiTheme.js":
/*!************************************!*\
  !*** ./styles/createMyMuiTheme.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var createMyMuiTheme = function createMyMuiTheme() {
  return createMuiTheme({
    palette: {
      // type: "light",
      primary: {
        main: "#2399e8"
      },
      secondary: {
        main: "#e85d5d"
      }
    },
    overrides: {
      MuiButton: {
        contained: {
          backgroundColor: 'blue'
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

/***/ }),

/***/ "./styles/myMuiTheme.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NyZWF0ZU15TXVpVGhlbWUuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm15TXVpVGhlbWUiLCJjcmVhdGVNeU11aVRoZW1lIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsIm92ZXJyaWRlcyIsIk11aUJ1dHRvbiIsImNvbnRhaW5lZCIsImJhY2tncm91bmRDb2xvciIsIk11aUljb25CdXR0b24iLCJyb290IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLE1BQ1ZDLFNBRFUsR0FDZUQsS0FEZixDQUNWQyxTQURVO0FBQUEsTUFDQ0MsU0FERCxHQUNlRixLQURmLENBQ0NFLFNBREQ7QUFHbEIsTUFBTUMsVUFBVSxHQUFHQyx3RUFBZ0IsRUFBbkM7QUFFQUMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ2xCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNYQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNIO0FBQ0osR0FORCxFQU1HLEVBTkg7QUFRQSxTQUNJLG1FQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FB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RCxZQUFJLEVBQUU7QUFEQztBQUxOLEtBRGlDO0FBVTFDRSxhQUFTLEVBQUU7QUFDUEMsZUFBUyxFQUFFO0FBQ1BDLGlCQUFTLEVBQUU7QUFDUEMseUJBQWUsRUFBRTtBQURWO0FBREosT0FESjtBQU1QQyxtQkFBYSxFQUFFO0FBQ1hDLFlBQUksRUFBRTtBQUNGQyxlQUFLLEVBQUU7QUFETDtBQURLO0FBTlI7QUFWK0IsR0FBRCxDQUFwQjtBQUFBLENBQXpCOztBQXlCZW5CLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmJiOTc3YWZiZTcxMDU4MGJhZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgTXVpVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQ29udGV4dFdyYXBwZXIgfSBmcm9tICcuL2NvbnRleHRXcmFwcGVyJztcbmltcG9ydCBjcmVhdGVNeU11aVRoZW1lIGZyb20gJy4uL3N0eWxlcy9jcmVhdGVNeU11aVRoZW1lJztcblxuXG5cbmZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBteU11aVRoZW1lID0gY3JlYXRlTXlNdWlUaGVtZSgpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcbiAgICAgICAgaWYgKGpzc1N0eWxlcykge1xuICAgICAgICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TXkgV2ViIFNwYWNlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogPCEtLSBQcmltYXJ5IE1ldGEgVGFncyAtLT4gKi99XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRhdmlkIENob3VpbmFyZC1MYXZvaWU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9XCJEYXZpZCBDaG91aW5hcmQtTGF2b2llXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVW5lIGRlc2NyaXB0aW9uIGRlIG1vbiBzaXRlXCIgLz5cblxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIE9wZW4gR3JhcGggLyBGYWNlYm9vayAtLT4gKi99XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vY2hvdWluYXJkZGF2aWQuZ2l0aHViLmlvL1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJEYXZpZCBDaG91aW5hcmRcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29uc3VsdGVyIG1hIHBhZ2Ugd2ViIHBvdXIgcGx1cyBkZSBkw6l0YWlscyBzdXIgbW9uIHBhcmNvdXJ0IHByb2Zlc3Npb25uZWxcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PScvcGhvdG9QZXJzby5wbmcnIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogPCEtLSBUd2l0dGVyIC0tPiAqL31cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD1cImh0dHBzOi8vY2hvdWluYXJkZGF2aWQuZ2l0aHViLmlvL1wiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkRhdmlkIENob3VpbmFyZFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnN1bHRlciBtYSBwYWdlIHdlYiBwb3VyIHBsdXMgZGUgZMOpdGFpbHMgc3VyIG1vbiBwYXJjb3VydCBwcm9mZXNzaW9ubmVsXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PScvcGhvdG9QZXJzby5wbmcnIC8+XG5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIHsvKiA8Q29udGV4dFdyYXBwZXI+ICovfVxuICAgICAgICAgICAgey8qIDxUaGVtZVByb3ZpZGVyPiAqL31cblxuICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e215TXVpVGhlbWV9PlxuICAgICAgICAgICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG5cbiAgICAgICAgICAgIHsvKiA8L1RoZW1lUHJvdmlkZXI+ICovfVxuICAgICAgICAgICAgey8qIDwvQ29udGV4dFdyYXBwZXI+ICovfVxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgY3JlYXRlTXlNdWlUaGVtZSA9ICgpID0+IGNyZWF0ZU11aVRoZW1lKHtcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgICAvLyB0eXBlOiBcImxpZ2h0XCIsXHJcbiAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgICBtYWluOiBcIiMyMzk5ZThcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgICAgIG1haW46IFwiI2U4NWQ1ZFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG92ZXJyaWRlczoge1xyXG4gICAgICAgIE11aUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBjb250YWluZWQ6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBNdWlJY29uQnV0dG9uOiB7XHJcbiAgICAgICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2UwMWYxZicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU15TXVpVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9