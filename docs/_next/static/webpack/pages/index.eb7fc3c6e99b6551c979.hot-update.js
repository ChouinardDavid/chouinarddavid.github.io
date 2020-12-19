webpackHotUpdate_N_E("pages/index",{

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
  }, __jsx("main", {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_components_sections_presentation_presentation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["presentation_text"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), __jsx(_components_sections_skills_skills__WEBPACK_IMPORTED_MODULE_6__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["skills_text"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx(_components_sections_carrer_career__WEBPACK_IMPORTED_MODULE_7__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["parcours_text"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), __jsx(_components_sections_education_education__WEBPACK_IMPORTED_MODULE_8__["default"], {
    labels: _labels_fr__WEBPACK_IMPORTED_MODULE_11__["education_text"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("div", {
    id: "formations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(_components_titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titleName: "Formations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  })), __jsx("div", {
    id: "realisations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(_components_titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titleName: "R\xE9alisations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGVudCIsImZsZXhHcm93IiwicGFkZGluZyIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJ0b29sYmFyIiwibWl4aW5zIiwiSG9tZSIsImNsYXNzZXMiLCJwYWdlTGlua0tleXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibGFiZWxzIiwiZmlsdGVyIiwia2V5IiwidmFsdWUiLCJhZGRMaW5rIiwidW5kZWZpbmVkIiwibWFwIiwiaWQiLCJsaW5rIiwidGl0bGUiLCJzdHlsZXMiLCJjb250YWluZXJGbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsV0FBTyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxDQURMO0FBRUxDLGFBQU8sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQUZKO0FBR0xDLGVBQVMsRUFBRTtBQUhOLEtBRDRCO0FBTXJDQyxXQUFPLEVBQUVOLEtBQUssQ0FBQ08sTUFBTixDQUFhRDtBQU5lLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBVWUsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUMzQixNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFFQSxNQUFNWSxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyx3Q0FBZixFQUNoQkMsTUFEZ0IsQ0FDVDtBQUFBO0FBQUEsUUFBRUMsR0FBRjtBQUFBLFFBQU9DLEtBQVA7O0FBQUEsV0FBa0JBLEtBQUssQ0FBQ0MsT0FBTixLQUFrQkMsU0FBbEIsSUFBK0JGLEtBQUssQ0FBQ0MsT0FBdkQ7QUFBQSxHQURTLEVBRWhCRSxHQUZnQixDQUVaLGlCQUFrQjtBQUFBO0FBQUEsUUFBaEJKLEdBQWdCO0FBQUEsUUFBWEMsS0FBVzs7QUFDbkIsV0FBTztBQUNISSxRQUFFLEVBQUVKLEtBQUssQ0FBQ0ksRUFEUDtBQUVIQyxVQUFJLEVBQUVMLEtBQUssQ0FBQ0ssSUFGVDtBQUdIQyxXQUFLLEVBQUVOLEtBQUssQ0FBQ007QUFIVixLQUFQO0FBS0gsR0FSZ0IsQ0FBckI7QUFXQSxTQUNJLE1BQUMsbUVBQUQ7QUFBVyxNQUFFLEVBQUMsS0FBZDtBQUFvQixrQkFBYyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSTtBQUFNLGFBQVMsRUFBRWYsT0FBTyxDQUFDUixPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxzRkFBRDtBQUFjLFVBQU0sRUFBRVksNkRBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsMEVBQUQ7QUFBUSxVQUFNLEVBQUVBLHVEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSSxNQUFDLDBFQUFEO0FBQVEsVUFBTSxFQUFFQSx5REFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0ksTUFBQyxnRkFBRDtBQUFXLFVBQU0sRUFBRUEsMERBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU9JO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUVBQUQ7QUFBWSxhQUFTLEVBQUMsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosRUFXSTtBQUFLLE1BQUUsRUFBQyxjQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlFQUFEO0FBQVksYUFBUyxFQUFDLGlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FYSixDQUpKLENBREosQ0FESjtBQXdCSDs7R0F0Q3VCTCxJO1VBQ0pWLFM7OztLQURJVSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmViN2ZjM2M2ZTk5YjY1NTFjOTc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcHAubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFRpdGxlTGFiZWwgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZUxhYmVsL3RpdGxlTGFiZWwnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IFByZXNlbnRhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24nO1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL3NraWxscy9za2lsbHMnO1xuaW1wb3J0IENhcmVlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2NhcnJlci9jYXJlZXInO1xuaW1wb3J0IEVkdWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL2VkdWNhdGlvbi9lZHVjYXRpb24nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgKiBhcyBsYWJlbHMgZnJvbSAnLi4vbGFiZWxzL2ZyJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgY29udGVudDoge1xuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgICAgbWFyZ2luVG9wOiAxNTAsXG4gICAgfSxcbiAgICB0b29sYmFyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbn0pKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIGNvbnN0IHBhZ2VMaW5rS2V5cyA9IE9iamVjdC5lbnRyaWVzKGxhYmVscylcbiAgICAgICAgLmZpbHRlcigoW2tleSwgdmFsdWVdKSA9PiB2YWx1ZS5hZGRMaW5rID09PSB1bmRlZmluZWQgfHwgdmFsdWUuYWRkTGluaylcbiAgICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiB2YWx1ZS5pZCxcbiAgICAgICAgICAgICAgICBsaW5rOiB2YWx1ZS5saW5rLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB2YWx1ZS50aXRsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGlkPSdBcHAnIGRpc2FibGVHdXR0ZXJzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJGbGV4fSA+XG5cbiAgICAgICAgICAgICAgICB7LyogPEhlYWRlciBsYWJlbHM9e2xhYmVscy5oZWFkZXJfdGV4dH0gcGFnZUxpbmtLZXlzPXtwYWdlTGlua0tleXN9IC8+ICovfVxuXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0gLz4gIFBlcm1ldCBkJ2Fqb3V0ZXIgdW4gZXNwYWNlIHBvdXIgZMOpc2NlbmRyZSBsZSB0ZXh0IHNvdXMgbCdlbnTDqnRlIC0gdm9pciBsYSBwcm9wIGNzcyBjbGFzc2VzLmNvbnRlbnQubWFyZ2luVG9wKi99XG4gICAgICAgICAgICAgICAgICAgIDxQcmVzZW50YXRpb24gbGFiZWxzPXtsYWJlbHMucHJlc2VudGF0aW9uX3RleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbHMgbGFiZWxzPXtsYWJlbHMuc2tpbGxzX3RleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJlZXIgbGFiZWxzPXtsYWJlbHMucGFyY291cnNfdGV4dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEVkdWNhdGlvbiBsYWJlbHM9e2xhYmVscy5lZHVjYXRpb25fdGV4dH0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdmb3JtYXRpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZUxhYmVsIHRpdGxlTmFtZT0nRm9ybWF0aW9ucycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ncmVhbGlzYXRpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZUxhYmVsIHRpdGxlTmFtZT0nUsOpYWxpc2F0aW9ucycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9