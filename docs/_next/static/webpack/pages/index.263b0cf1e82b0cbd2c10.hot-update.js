webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sections/header/header.js":
/*!**********************************************!*\
  !*** ./components/sections/header/header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.module.scss */ "./components/sections/header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sectionForm_sectionsForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sectionForm/sectionsForm */ "./components/sections/sectionForm/sectionsForm.js");
/* harmony import */ var _titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../titleLabel/titleLabel */ "./components/titleLabel/titleLabel.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _pagesLinks_pagesLinks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pagesLinks/pagesLinks */ "./components/pagesLinks/pagesLinks.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");





var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\sections\\header\\header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
  return {
    menuButton: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      marginRight: theme.spacing(2)
    }, theme.breakpoints.up('lg'), {
      display: 'none'
    }),
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      height: 200
    },
    toolBar: {
      justifyContent: 'space-evenly'
    }
  };
});

var Header = function Header(props) {
  _s();

  var labels = props.labels,
      pageLinkKeys = props.pageLinkKeys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["labels", "pageLinkKeys"]);

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: labels.id
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.titleDiv,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.myImage,
    src: "/photoPerso.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx(_titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.headerTitle,
    titleName: labels.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })));
};

_s(Header, "48TC3+mmaEPk/IiQGHICtJ6AJfw=", false, function () {
  return [useStyles];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9oZWFkZXIvaGVhZGVyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiZGlzcGxheSIsImFwcEJhciIsInpJbmRleCIsImRyYXdlciIsImhlaWdodCIsInRvb2xCYXIiLCJqdXN0aWZ5Q29udGVudCIsIkhlYWRlciIsInByb3BzIiwibGFiZWxzIiwicGFnZUxpbmtLZXlzIiwicmVzdCIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwibW9iaWxlT3BlbiIsInNldE1vYmlsZU9wZW4iLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJpZCIsInN0eWxlcyIsInRpdGxlRGl2IiwibXlJbWFnZSIsImhlYWRlclRpdGxlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLGNBQVUsRUFBRTtBQUNSQyxpQkFBVyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBRFAsT0FFTEgsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZLLEVBRXdCO0FBQzFCQyxhQUFPLEVBQUU7QUFEaUIsS0FGeEIsQ0FEMkI7QUFPckNDLFVBQU0sRUFBRTtBQUNKQyxZQUFNLEVBQUVSLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxNQUFiLEdBQXNCLENBRDFCO0FBRUpDLFlBQU0sRUFBRTtBQUZKLEtBUDZCO0FBV3JDQyxXQUFPLEVBQUU7QUFDTEMsb0JBQWMsRUFBRTtBQURYO0FBWDRCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWlCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNkQyxNQURjLEdBQ29CRCxLQURwQixDQUNkQyxNQURjO0FBQUEsTUFDTkMsWUFETSxHQUNvQkYsS0FEcEIsQ0FDTkUsWUFETTtBQUFBLE1BQ1dDLElBRFgsc0dBQ29CSCxLQURwQjs7QUFFdEIsTUFBTUksT0FBTyxHQUFHcEIsU0FBUyxFQUF6Qjs7QUFGc0Isd0JBSWNxQiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUpkO0FBQUE7QUFBQSxNQUlmQyxVQUplO0FBQUEsTUFJSEMsYUFKRzs7QUFNdEIsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCRCxpQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNILEdBRkQ7O0FBSUEsU0FDSTtBQUFLLE1BQUUsRUFBRU4sTUFBTSxDQUFDUztBQUFoQixLQUF3QlAsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVJO0FBQUssYUFBUyxFQUFFUSwwREFBTSxDQUFDQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUVELDBEQUFNLENBQUNFLE9BQXZCO0FBQWdDLE9BQUcsRUFBQyxpQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBSUksTUFBQyw4REFBRDtBQUFZLGFBQVMsRUFBRUYsMERBQU0sQ0FBQ0csV0FBOUI7QUFBMkMsYUFBUyxFQUFFYixNQUFNLENBQUNjLEtBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQUZKLENBREo7QUFjSCxDQXhCRDs7R0FBTWhCLE07VUFFY2YsUzs7O0tBRmRlLE07QUEwQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI2M2IwY2YxZTgyYjBjYmQyYzEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFNlY3Rpb25Gb3JtIGZyb20gJy4uL3NlY3Rpb25Gb3JtL3NlY3Rpb25zRm9ybSc7XHJcbmltcG9ydCBUaXRsZUxhYmVsIGZyb20gJy4uLy4uL3RpdGxlTGFiZWwvdGl0bGVMYWJlbCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFBhZ2VzTGlua3MgZnJvbSAnLi4vLi4vcGFnZXNMaW5rcy9wYWdlc0xpbmtzJztcclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhcHBCYXI6IHtcclxuICAgICAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgfSxcclxuICAgIHRvb2xCYXI6IHtcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgbGFiZWxzLCBwYWdlTGlua0tleXMsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFttb2JpbGVPcGVuLCBzZXRNb2JpbGVPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9iaWxlT3BlbighbW9iaWxlT3Blbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17bGFiZWxzLmlkfSB7Li4ucmVzdH0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlRGl2fT5cclxuICAgICAgICAgICAgICAgIHsvKiA8SGlkZGVuIHhzRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPiAqL31cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubXlJbWFnZX0gc3JjPScvcGhvdG9QZXJzby5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPC9IaWRkZW4+ICovfVxyXG4gICAgICAgICAgICAgICAgPFRpdGxlTGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGl0bGV9IHRpdGxlTmFtZT17bGFiZWxzLnRpdGxlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclRpdGxlfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGxhYmVscy50aXRsZSB9fT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlTGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==