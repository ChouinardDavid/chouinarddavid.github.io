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
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.myImage,
    src: "/photoPerso.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx(_titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.headerTitle,
    titleName: labels.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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

/***/ }),

/***/ "./components/sections/header/header.old.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/app.module.scss */ "./styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/titleLabel/titleLabel */ "./components/titleLabel/titleLabel.js");
/* harmony import */ var _components_sections_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/header/header */ "./components/sections/header/header.js");
/* harmony import */ var _components_sections_presentation_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/presentation/presentation */ "./components/sections/presentation/presentation.js");
/* harmony import */ var _components_sections_skills_skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/skills/skills */ "./components/sections/skills/skills.js");
/* harmony import */ var _components_sections_carrer_career__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/carrer/career */ "./components/sections/carrer/career.js");
/* harmony import */ var _components_sections_education_education__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/education/education */ "./components/sections/education/education.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _labels_fr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../labels/fr */ "./labels/fr.js");


var _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: 150
    },
    toolbar: theme.mixins.toolbar
  };
});
function Home() {
  _s();

  var classes = useStyles();
  var pageLinkKeys = Object.entries(_labels_fr__WEBPACK_IMPORTED_MODULE_11__).filter(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return value.addLink === undefined || value.addLink;
  }).map(function (_ref3) {
    var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    return {
      id: value.id,
      link: value.link,
      title: value.title
    };
  });
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "App",
    disableGutters: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.containerFlex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_components_sections_header_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["header_text"],
    pageLinkKeys: pageLinkKeys,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("main", {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), " ", __jsx(_components_sections_presentation_presentation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["presentation_text"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx(_components_sections_skills_skills__WEBPACK_IMPORTED_MODULE_6__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["skills_text"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx(_components_sections_carrer_career__WEBPACK_IMPORTED_MODULE_7__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["parcours_text"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx(_components_sections_education_education__WEBPACK_IMPORTED_MODULE_8__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["education_text"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), __jsx("div", {
    id: "formations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx(_components_titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titleName: "Formations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  })), __jsx("div", {
    id: "realisations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(_components_titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titleName: "R\xE9alisations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  })))));
}

_s(Home, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsImRpc3BsYXkiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJoZWlnaHQiLCJ0b29sQmFyIiwianVzdGlmeUNvbnRlbnQiLCJIZWFkZXIiLCJwcm9wcyIsImxhYmVscyIsInBhZ2VMaW5rS2V5cyIsInJlc3QiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vYmlsZU9wZW4iLCJzZXRNb2JpbGVPcGVuIiwiaGFuZGxlRHJhd2VyVG9nZ2xlIiwiaWQiLCJzdHlsZXMiLCJ0aXRsZURpdiIsIm15SW1hZ2UiLCJoZWFkZXJUaXRsZSIsInRpdGxlIiwiY29udGVudCIsImZsZXhHcm93IiwicGFkZGluZyIsIm1hcmdpblRvcCIsInRvb2xiYXIiLCJtaXhpbnMiLCJIb21lIiwiT2JqZWN0IiwiZW50cmllcyIsImZpbHRlciIsImtleSIsInZhbHVlIiwiYWRkTGluayIsInVuZGVmaW5lZCIsIm1hcCIsImxpbmsiLCJjb250YWluZXJGbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxjQUFVLEVBQUU7QUFDUkMsaUJBQVcsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURQLE9BRUxILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIs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RDtBQUFZLGFBQVMsRUFBQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixFQVdJO0FBQUssTUFBRSxFQUFDLGNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUVBQUQ7QUFBWSxhQUFTLEVBQUMsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVhKLENBSEosQ0FESixDQURKO0FBdUJIOztHQXJDdUJxQixJO1VBQ0p0QyxTOzs7S0FESXNDLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTYzNTYwZjdhNjE2YTk5ZTUwNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgU2VjdGlvbkZvcm0gZnJvbSAnLi4vc2VjdGlvbkZvcm0vc2VjdGlvbnNGb3JtJztcclxuaW1wb3J0IFRpdGxlTGFiZWwgZnJvbSAnLi4vLi4vdGl0bGVMYWJlbC90aXRsZUxhYmVsJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgUGFnZXNMaW5rcyBmcm9tICcuLi8uLi9wYWdlc0xpbmtzL3BhZ2VzTGlua3MnO1xyXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFwcEJhcjoge1xyXG4gICAgICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICB9LFxyXG4gICAgdG9vbEJhcjoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcclxuICAgIH1cclxufSkpO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBsYWJlbHMsIHBhZ2VMaW5rS2V5cywgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtsYWJlbHMuaWR9IHsuLi5yZXN0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZURpdn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm15SW1hZ2V9IHNyYz0nL3Bob3RvUGVyc28ucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlTGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVGl0bGV9IHRpdGxlTmFtZT17bGFiZWxzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcblxyXG5cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwLm1vZHVsZS5zY3NzJztcbmltcG9ydCBUaXRsZUxhYmVsIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGVMYWJlbC90aXRsZUxhYmVsJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCBQcmVzZW50YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uJztcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9za2lsbHMvc2tpbGxzJztcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJyZXIvY2FyZWVyJztcbmltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9lZHVjYXRpb24vZWR1Y2F0aW9uJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0ICogYXMgbGFiZWxzIGZyb20gJy4uL2xhYmVscy9mcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgIG1hcmdpblRvcDogMTUwLFxuICAgIH0sXG4gICAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG59KSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICBjb25zdCBwYWdlTGlua0tleXMgPSBPYmplY3QuZW50cmllcyhsYWJlbHMpXG4gICAgICAgIC5maWx0ZXIoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUuYWRkTGluayA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlLmFkZExpbmspXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogdmFsdWUuaWQsXG4gICAgICAgICAgICAgICAgbGluazogdmFsdWUubGluayxcbiAgICAgICAgICAgICAgICB0aXRsZTogdmFsdWUudGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lciBpZD0nQXBwJyBkaXNhYmxlR3V0dGVycz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyRmxleH0gPlxuXG4gICAgICAgICAgICAgICAgPEhlYWRlciBsYWJlbHM9e2xhYmVscy5oZWFkZXJfdGV4dH0gcGFnZUxpbmtLZXlzPXtwYWdlTGlua0tleXN9IC8+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPiB7LyogUGVybWV0IGQnYWpvdXRlciB1biBlc3BhY2UgcG91ciBkw6lzY2VuZHJlIGxlIHRleHQgc291cyBsJ2VudMOqdGUgLSB2b2lyIGxhIHByb3AgY3NzIGNsYXNzZXMuY29udGVudC5tYXJnaW5Ub3AgKi99XG4gICAgICAgICAgICAgICAgICAgIDxQcmVzZW50YXRpb24gbGFiZWxzPXtsYWJlbHMucHJlc2VudGF0aW9uX3RleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbHMgbGFiZWxzPXtsYWJlbHMuc2tpbGxzX3RleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJlZXIgbGFiZWxzPXtsYWJlbHMucGFyY291cnNfdGV4dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEVkdWNhdGlvbiBsYWJlbHM9e2xhYmVscy5lZHVjYXRpb25fdGV4dH0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdmb3JtYXRpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZUxhYmVsIHRpdGxlTmFtZT0nRm9ybWF0aW9ucycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ncmVhbGlzYXRpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZUxhYmVsIHRpdGxlTmFtZT0nUsOpYWxpc2F0aW9ucycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9