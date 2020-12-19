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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGVudCIsImZsZXhHcm93IiwicGFkZGluZyIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJ0b29sYmFyIiwibWl4aW5zIiwiSG9tZSIsImNsYXNzZXMiLCJwYWdlTGlua0tleXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibGFiZWxzIiwiZmlsdGVyIiwia2V5IiwidmFsdWUiLCJhZGRMaW5rIiwidW5kZWZpbmVkIiwibWFwIiwiaWQiLCJsaW5rIiwidGl0bGUiLCJzdHlsZXMiLCJjb250YWluZXJGbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsV0FBTyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxDQURMO0FBRUxDLGFBQU8sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQUZKO0FBR0xDLGVBQVMsRUFBRTtBQUhOLEtBRDRCO0FBTXJDQyxXQUFPLEVBQUVOLEtBQUssQ0FBQ08sTUFBTixDQUFhRDtBQU5lLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBVWUsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUMzQixNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFFQSxNQUFNWSxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyx3Q0FBZixFQUNoQkMsTUFEZ0IsQ0FDVDtBQUFBO0FBQUEsUUFBRUMsR0FBRjtBQUFBLFFBQU9DLEtBQVA7O0FBQUEsV0FBa0JBLEtBQUssQ0FBQ0MsT0FBTixLQUFrQkMsU0FBbEIsSUFBK0JGLEtBQUssQ0FBQ0MsT0FBdkQ7QUFBQSxHQURTLEVBRWhCRSxHQUZnQixDQUVaLGlCQUFrQjtBQUFBO0FBQUEsUUFBaEJKLEdBQWdCO0FBQUEsUUFBWEMsS0FBVzs7QUFDbkIsV0FBTztBQUNISSxRQUFFLEVBQUVKLEtBQUssQ0FBQ0ksRUFEUDtBQUVIQyxVQUFJLEVBQUVMLEtBQUssQ0FBQ0ssSUFGVDtBQUdIQyxXQUFLLEVBQUVOLEtBQUssQ0FBQ007QUFIVixLQUFQO0FBS0gsR0FSZ0IsQ0FBckI7QUFXQSxTQUNJLE1BQUMsbUVBQUQ7QUFBVyxNQUFFLEVBQUMsS0FBZDtBQUFvQixrQkFBYyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDhFQUFEO0FBQVEsVUFBTSxFQUFFWCx1REFBaEI7QUFBb0MsZ0JBQVksRUFBRUgsWUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxhQUFTLEVBQUVELE9BQU8sQ0FBQ1IsT0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFUSxPQUFPLENBQUNILE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixPQUVJLE1BQUMsc0ZBQUQ7QUFBYyxVQUFNLEVBQUVPLDZEQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLDBFQUFEO0FBQVEsVUFBTSxFQUFFQSx1REFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUksTUFBQywwRUFBRDtBQUFRLFVBQU0sRUFBRUEseURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsZ0ZBQUQ7QUFBVyxVQUFNLEVBQUVBLDBEQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFPSTtBQUFLLE1BQUUsRUFBQyxZQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlFQUFEO0FBQVksYUFBUyxFQUFDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLEVBV0k7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5RUFBRDtBQUFZLGFBQVMsRUFBQyxpQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBWEosQ0FISixDQURKLENBREo7QUF1Qkg7O0dBckN1QkwsSTtVQUNKVixTOzs7S0FESVUsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42OGViOWU1Y2YwMTVkMWNmNDgwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYXBwLm1vZHVsZS5zY3NzJztcbmltcG9ydCBUaXRsZUxhYmVsIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGVMYWJlbC90aXRsZUxhYmVsJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9oZWFkZXIvaGVhZGVyLm9sZCc7XG5pbXBvcnQgUHJlc2VudGF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbic7XG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzL3NraWxscyc7XG5pbXBvcnQgQ2FyZWVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2FycmVyL2NhcmVlcic7XG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvZWR1Y2F0aW9uL2VkdWNhdGlvbic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCAqIGFzIGxhYmVscyBmcm9tICcuLi9sYWJlbHMvZnInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgICBtYXJnaW5Ub3A6IDE1MCxcbiAgICB9LFxuICAgIHRvb2xiYXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxufSkpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgY29uc3QgcGFnZUxpbmtLZXlzID0gT2JqZWN0LmVudHJpZXMobGFiZWxzKVxuICAgICAgICAuZmlsdGVyKChba2V5LCB2YWx1ZV0pID0+IHZhbHVlLmFkZExpbmsgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5hZGRMaW5rKVxuICAgICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IHZhbHVlLmlkLFxuICAgICAgICAgICAgICAgIGxpbms6IHZhbHVlLmxpbmssXG4gICAgICAgICAgICAgICAgdGl0bGU6IHZhbHVlLnRpdGxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXIgaWQ9J0FwcCcgZGlzYWJsZUd1dHRlcnM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckZsZXh9ID5cblxuICAgICAgICAgICAgICAgIDxIZWFkZXIgbGFiZWxzPXtsYWJlbHMuaGVhZGVyX3RleHR9IHBhZ2VMaW5rS2V5cz17cGFnZUxpbmtLZXlzfSAvPlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0gLz4gey8qIFBlcm1ldCBkJ2Fqb3V0ZXIgdW4gZXNwYWNlIHBvdXIgZMOpc2NlbmRyZSBsZSB0ZXh0IHNvdXMgbCdlbnTDqnRlIC0gdm9pciBsYSBwcm9wIGNzcyBjbGFzc2VzLmNvbnRlbnQubWFyZ2luVG9wICovfVxuICAgICAgICAgICAgICAgICAgICA8UHJlc2VudGF0aW9uIGxhYmVscz17bGFiZWxzLnByZXNlbnRhdGlvbl90ZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8U2tpbGxzIGxhYmVscz17bGFiZWxzLnNraWxsc190ZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyIGxhYmVscz17bGFiZWxzLnBhcmNvdXJzX3RleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxFZHVjYXRpb24gbGFiZWxzPXtsYWJlbHMuZWR1Y2F0aW9uX3RleHR9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nZm9ybWF0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVMYWJlbCB0aXRsZU5hbWU9J0Zvcm1hdGlvbnMnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3JlYWxpc2F0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVMYWJlbCB0aXRsZU5hbWU9J1LDqWFsaXNhdGlvbnMnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==