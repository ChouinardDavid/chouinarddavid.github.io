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


var _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
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

function MyApp(props) {
  _s();

  var Component = props.Component,
      pageProps = props.pageProps;
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
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "My Web Space"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "David Chouinard-Lavoie"), __jsx("meta", {
    name: "title",
    content: "David Chouinard-Lavoie",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Une description de mon site",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://chouinarddavid.github.io/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "David Chouinard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Consulter ma page web pour plus de d\xE9tails sur mon parcourt professionnel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/photoPerso.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: "https://chouinarddavid.github.io/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: "David Chouinard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: "Consulter ma page web pour plus de d\xE9tails sur mon parcourt professionnel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "twitter:image",
    content: "/photoPerso.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["MuiThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5Iiwib3ZlcnJpZGVzIiwiTXVpQnV0dG9uIiwiY29udGFpbmVkIiwiYmFja2dyb3VuZENvbG9yIiwiTXVpSWNvbkJ1dHRvbiIsInJvb3QiLCJjb2xvciIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJSZWFjdCIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDekJDLFNBQU8sRUFBRTtBQUNMO0FBQ0FDLFdBQU8sRUFBRTtBQUNMQyxVQUFJLEVBQUU7QUFERCxLQUZKO0FBS0xDLGFBQVMsRUFBRTtBQUNQRCxVQUFJLEVBQUU7QUFEQztBQUxOLEdBRGdCO0FBVXpCRSxXQUFTLEVBQUU7QUFDUEMsYUFBUyxFQUFFO0FBQ1BDLGVBQVMsRUFBRTtBQUNQQyx1QkFBZSxFQUFFO0FBRFY7QUFESixLQURKO0FBTVBDLGlCQUFhLEVBQUU7QUFDWEMsVUFBSSxFQUFFO0FBQ0ZDLGFBQUssRUFBRTtBQURMO0FBREs7QUFOUjtBQVZjLENBQUQsQ0FBNUI7O0FBMEJBLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLE1BQ1ZDLFNBRFUsR0FDZUQsS0FEZixDQUNWQyxTQURVO0FBQUEsTUFDQ0MsU0FERCxHQUNlRixLQURmLENBQ0NFLFNBREQ7QUFHbEJDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsUUFB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L3BhZ2VzL19hcHAuZGVkOWM4MmQxODk5ZDMxOTRhZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgTXVpVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQ29udGV4dFdyYXBwZXIgfSBmcm9tICcuL2NvbnRleHRXcmFwcGVyJztcblxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICAgIC8vIHR5cGU6IFwibGlnaHRcIixcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogXCIjMjM5OWU4XCJcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgICBtYWluOiBcIiNlODVkNWRcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgTXVpQnV0dG9uOiB7XG4gICAgICAgICAgICBjb250YWluZWQ6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgTXVpSWNvbkJ1dHRvbjoge1xuICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2UwMWYxZicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG5cbmZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICAgICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgICAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICAgICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NeSBXZWIgU3BhY2U8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cblxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIFByaW1hcnkgTWV0YSBUYWdzIC0tPiAqL31cbiAgICAgICAgICAgICAgICA8dGl0bGU+RGF2aWQgQ2hvdWluYXJkLUxhdm9pZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIkRhdmlkIENob3VpbmFyZC1MYXZvaWVcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJVbmUgZGVzY3JpcHRpb24gZGUgbW9uIHNpdGVcIiAvPlxuXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gT3BlbiBHcmFwaCAvIEZhY2Vib29rIC0tPiAqL31cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9jaG91aW5hcmRkYXZpZC5naXRodWIuaW8vXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkRhdmlkIENob3VpbmFyZFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb25zdWx0ZXIgbWEgcGFnZSB3ZWIgcG91ciBwbHVzIGRlIGTDqXRhaWxzIHN1ciBtb24gcGFyY291cnQgcHJvZmVzc2lvbm5lbFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9Jy9waG90b1BlcnNvLnBuZycgLz5cblxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIFR3aXR0ZXIgLS0+ICovfVxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9jaG91aW5hcmRkYXZpZC5naXRodWIuaW8vXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiRGF2aWQgQ2hvdWluYXJkXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29uc3VsdGVyIG1hIHBhZ2Ugd2ViIHBvdXIgcGx1cyBkZSBkw6l0YWlscyBzdXIgbW9uIHBhcmNvdXJ0IHByb2Zlc3Npb25uZWxcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9Jy9waG90b1BlcnNvLnBuZycgLz5cblxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgey8qIDxDb250ZXh0V3JhcHBlcj4gKi99XG4gICAgICAgICAgICB7LyogPFRoZW1lUHJvdmlkZXI+ICovfVxuXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG5cbiAgICAgICAgICAgIHsvKiA8L1RoZW1lUHJvdmlkZXI+ICovfVxuICAgICAgICAgICAgey8qIDwvQ29udGV4dFdyYXBwZXI+ICovfVxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==