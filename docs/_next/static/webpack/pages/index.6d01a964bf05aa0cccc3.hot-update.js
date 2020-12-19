webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sections/header/header.js":
false,

/***/ "./components/sections/header/header.old.js":
/*!**************************************************!*\
  !*** ./components/sections/header/header.old.js ***!
  \**************************************************/
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
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\sections\\header\\header.old.js",
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
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    position: "fixed",
    className: classes.appBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.toolBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    className: classes.menuButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.titleDiv,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.myImage,
    src: "/photoPerso.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }), __jsx(_titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.headerTitle,
    titleName: labels.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  })))), __jsx(_pagesLinks_pagesLinks__WEBPACK_IMPORTED_MODULE_13__["default"], {
    pageLinkKeys: pageLinkKeys,
    mobileOpen: mobileOpen,
    handleDrawerToggle: handleDrawerToggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }));
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
/* harmony import */ var _components_sections_header_header_old__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/header/header.old */ "./components/sections/header/header.old.js");
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
  }, __jsx(_components_sections_header_header_old__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }), "  Permet d'ajouter un espace pour d\xE9scendre le text sous l'ent\xEAte - voir la prop css classes.content.marginTop", __jsx(_components_sections_presentation_presentation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["presentation_text"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9oZWFkZXIvaGVhZGVyLm9sZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJkaXNwbGF5IiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwiaGVpZ2h0IiwidG9vbEJhciIsImp1c3RpZnlDb250ZW50IiwiSGVhZGVyIiwicHJvcHMiLCJsYWJlbHMiLCJwYWdlTGlua0tleXMiLCJyZXN0IiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsImhhbmRsZURyYXdlclRvZ2dsZSIsImlkIiwic3R5bGVzIiwidGl0bGVEaXYiLCJteUltYWdlIiwiaGVhZGVyVGl0bGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJmbGV4R3JvdyIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJ0b29sYmFyIiwibWl4aW5zIiwiSG9tZSIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJrZXkiLCJ2YWx1ZSIsImFkZExpbmsiLCJ1bmRlZmluZWQiLCJtYXAiLCJsaW5rIiwiY29udGFpbmVyRmxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsY0FBVSxFQUFFO0FBQ1JDLGlCQUFXLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFEUCxPQUVMSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLEVBQWxC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O0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxhQUFTLEVBQUVFLE9BQU8sQ0FBQ1ksT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFWixPQUFPLENBQUNnQixPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosMEhBRUEsTUFBQyxzRkFBRDtBQUFjLFVBQU0sRUFBRW5CLDZEQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFHSSxNQUFDLDBFQUFEO0FBQVEsVUFBTSxFQUFFQSx1REFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUksTUFBQywwRUFBRDtBQUFRLFVBQU0sRUFBRUEseURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsZ0ZBQUQ7QUFBVyxVQUFNLEVBQUVBLDBEQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFPSTtBQUFLLE1BQUUsRUFBQyxZQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlFQUFEO0FBQVksYUFBUyxFQUFDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLEVBV0k7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5RUFBRDtBQUFZLGFBQVMsRUFBQyxpQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWEosQ0FISixDQURKLENBREo7QUF1Qkg7O0dBckN1QnFCLEk7VUFDSnRDLFM7OztLQURJc0MsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZDAxYTk2NGJmMDVhYTBjY2NjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBTZWN0aW9uRm9ybSBmcm9tICcuLi9zZWN0aW9uRm9ybS9zZWN0aW9uc0Zvcm0nO1xyXG5pbXBvcnQgVGl0bGVMYWJlbCBmcm9tICcuLi8uLi90aXRsZUxhYmVsL3RpdGxlTGFiZWwnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBQYWdlc0xpbmtzIGZyb20gJy4uLy4uL3BhZ2VzTGlua3MvcGFnZXNMaW5rcyc7XHJcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgbWVudUJ1dHRvbjoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYXBwQmFyOiB7XHJcbiAgICAgICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgIH0sXHJcbiAgICB0b29sQmFyOiB7XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgfVxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGxhYmVscywgcGFnZUxpbmtLZXlzLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e2xhYmVscy5pZH0gey4uLnJlc3R9PlxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sQmFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxIaWRkZW4geHNEb3duIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm15SW1hZ2V9IHNyYz0nL3Bob3RvUGVyc28ucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9IaWRkZW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVMYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUaXRsZX0gdGl0bGVOYW1lPXtsYWJlbHMudGl0bGV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJUaXRsZX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBsYWJlbHMudGl0bGUgfX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RpdGxlTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgPFBhZ2VzTGlua3MgcGFnZUxpbmtLZXlzPXtwYWdlTGlua0tleXN9IG1vYmlsZU9wZW49e21vYmlsZU9wZW59IGhhbmRsZURyYXdlclRvZ2dsZT17aGFuZGxlRHJhd2VyVG9nZ2xlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuXHJcblxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcHAubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFRpdGxlTGFiZWwgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZUxhYmVsL3RpdGxlTGFiZWwnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2hlYWRlci9oZWFkZXIub2xkJztcbmltcG9ydCBQcmVzZW50YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uJztcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9za2lsbHMvc2tpbGxzJztcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJyZXIvY2FyZWVyJztcbmltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9lZHVjYXRpb24vZWR1Y2F0aW9uJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0ICogYXMgbGFiZWxzIGZyb20gJy4uL2xhYmVscy9mcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgIG1hcmdpblRvcDogMTUwLFxuICAgIH0sXG4gICAgdG9vbGJhcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXG59KSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICBjb25zdCBwYWdlTGlua0tleXMgPSBPYmplY3QuZW50cmllcyhsYWJlbHMpXG4gICAgICAgIC5maWx0ZXIoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUuYWRkTGluayA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlLmFkZExpbmspXG4gICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogdmFsdWUuaWQsXG4gICAgICAgICAgICAgICAgbGluazogdmFsdWUubGluayxcbiAgICAgICAgICAgICAgICB0aXRsZTogdmFsdWUudGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lciBpZD0nQXBwJyBkaXNhYmxlR3V0dGVycz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyRmxleH0gPlxuXG4gICAgICAgICAgICAgICAgPEhlYWRlciBsYWJlbHM9e2xhYmVscy5oZWFkZXJfdGV4dH0gcGFnZUxpbmtLZXlzPXtwYWdlTGlua0tleXN9IC8+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPiAgUGVybWV0IGQnYWpvdXRlciB1biBlc3BhY2UgcG91ciBkw6lzY2VuZHJlIGxlIHRleHQgc291cyBsJ2VudMOqdGUgLSB2b2lyIGxhIHByb3AgY3NzIGNsYXNzZXMuY29udGVudC5tYXJnaW5Ub3BcbiAgICAgICAgICAgICAgICA8UHJlc2VudGF0aW9uIGxhYmVscz17bGFiZWxzLnByZXNlbnRhdGlvbl90ZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8U2tpbGxzIGxhYmVscz17bGFiZWxzLnNraWxsc190ZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyIGxhYmVscz17bGFiZWxzLnBhcmNvdXJzX3RleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxFZHVjYXRpb24gbGFiZWxzPXtsYWJlbHMuZWR1Y2F0aW9uX3RleHR9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nZm9ybWF0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVMYWJlbCB0aXRsZU5hbWU9J0Zvcm1hdGlvbnMnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3JlYWxpc2F0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVMYWJlbCB0aXRsZU5hbWU9J1LDqWFsaXNhdGlvbnMnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==