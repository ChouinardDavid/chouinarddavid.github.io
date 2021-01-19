webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sections/skills/displaySkills.js":
/*!*****************************************************!*\
  !*** ./components/sections/skills/displaySkills.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skills_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.module.scss */ "./components/sections/skills/skills.module.scss");
/* harmony import */ var _skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skills_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");


var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\sections\\skills\\displaySkills.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var DisplaySkill = function DisplaySkill(props) {
  var title = props.title,
      skills = props.skills,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["title", "skills"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, skills.map(function (skill, index) {
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
      elevation: 3,
      className: _skills_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.skillCard,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }, skill);
  }));
};

_c = DisplaySkill;
/* harmony default export */ __webpack_exports__["default"] = (DisplaySkill);

var _c;

$RefreshReg$(_c, "DisplaySkill");

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

/***/ "./components/sections/skills/displaySkills/displaySkills.js":
false,

/***/ "./components/sections/skills/skills.js":
/*!**********************************************!*\
  !*** ./components/sections/skills/skills.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../titleLabel/titleLabel */ "./components/titleLabel/titleLabel.js");
/* harmony import */ var _sectionForm_sectionsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sectionForm/sectionsForm */ "./components/sections/sectionForm/sectionsForm.js");
/* harmony import */ var _skills_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills.module.scss */ "./components/sections/skills/skills.module.scss");
/* harmony import */ var _skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _displaySkills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displaySkills */ "./components/sections/skills/displaySkills.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");


var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\sections\\skills\\skills.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Skills = function Skills(props) {
  var labels = props.labels,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["labels"]);

  return __jsx(_sectionForm_sectionsForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: labels.id,
    className: _skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.skillsSection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_titleLabel_titleLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    titleName: labels.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.skillsCards,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, labels.sections.map(function (section) {
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: section.id,
      elevation: 3,
      className: _skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.card,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }, __jsx("h2", {
      className: _skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 29
      }
    }, section.title), __jsx(_displaySkills__WEBPACK_IMPORTED_MODULE_5__["default"], {
      skills: section.children,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 29
      }
    }));
  })));
};

_c = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c;

$RefreshReg$(_c, "Skills");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9za2lsbHMvZGlzcGxheVNraWxscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9za2lsbHMvc2tpbGxzLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXlTa2lsbCIsInByb3BzIiwidGl0bGUiLCJza2lsbHMiLCJyZXN0IiwibWFwIiwic2tpbGwiLCJpbmRleCIsInN0eWxlcyIsInNraWxsQ2FyZCIsIlNraWxscyIsImxhYmVscyIsImlkIiwic2tpbGxzU2VjdGlvbiIsInNraWxsc0NhcmRzIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwiY2FyZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNwQkMsS0FEb0IsR0FDT0QsS0FEUCxDQUNwQkMsS0FEb0I7QUFBQSxNQUNiQyxNQURhLEdBQ09GLEtBRFAsQ0FDYkUsTUFEYTtBQUFBLE1BQ0ZDLElBREUsc0dBQ09ILEtBRFA7O0FBRzVCLFNBQ0ksbUVBQ0tFLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMxQixXQUNJLE1BQUMsK0RBQUQ7QUFBTyxlQUFTLEVBQUUsQ0FBbEI7QUFBcUIsZUFBUyxFQUFFQywwREFBTSxDQUFDQyxTQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tILEtBREwsQ0FESjtBQUtILEdBTkEsQ0FETCxDQURKO0FBWUgsQ0FmRDs7S0FBTU4sWTtBQWlCU0EsMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNVSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDVCxLQUFELEVBQVc7QUFBQSxNQUNkVSxNQURjLEdBQ01WLEtBRE4sQ0FDZFUsTUFEYztBQUFBLE1BQ0hQLElBREcsc0dBQ01ILEtBRE47O0FBR3RCLFNBQ0ksTUFBQyxpRUFBRDtBQUFhLE1BQUUsRUFBRVUsTUFBTSxDQUFDQyxFQUF4QjtBQUE0QixhQUFTLEVBQUVKLDBEQUFNLENBQUNLLGFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQVksYUFBUyxFQUFFRixNQUFNLENBQUNULEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFTSwwREFBTSxDQUFDTSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQlYsR0FBaEIsQ0FBb0IsVUFBQ1csT0FBRCxFQUFhO0FBQzlCLFdBQ0ksTUFBQywrREFBRDtBQUFPLFNBQUcsRUFBRUEsT0FBTyxDQUFDSixFQUFwQjtBQUF3QixlQUFTLEVBQUUsQ0FBbkM7QUFBc0MsZUFBUyxFQUFFSiwwREFBTSxDQUFDUyxJQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxlQUFTLEVBQUVULDBEQUFNLENBQUNOLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBOEJjLE9BQU8sQ0FBQ2QsS0FBdEMsQ0FESixFQUVJLE1BQUMsc0RBQUQ7QUFBYyxZQUFNLEVBQUVjLE9BQU8sQ0FBQ0UsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREo7QUFNSCxHQVBBLENBREwsQ0FGSixDQURKO0FBZUgsQ0FsQkQ7O0tBQU1SLE07QUFvQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjZmNjZmYyNDMxNDAyMzU4NGY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2tpbGxzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcblxyXG5jb25zdCBEaXNwbGF5U2tpbGwgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIHNraWxscywgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtza2lsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheVNraWxsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGl0bGVMYWJlbCBmcm9tICcuLi8uLi90aXRsZUxhYmVsL3RpdGxlTGFiZWwnO1xyXG5pbXBvcnQgU2VjdGlvbkZvcm0gZnJvbSAnLi4vc2VjdGlvbkZvcm0vc2VjdGlvbnNGb3JtJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NraWxscy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBEaXNwbGF5U2tpbGwgZnJvbSAnLi9kaXNwbGF5U2tpbGxzJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcbmNvbnN0IFNraWxscyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBsYWJlbHMsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlY3Rpb25Gb3JtIGlkPXtsYWJlbHMuaWR9IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc1NlY3Rpb259PlxyXG4gICAgICAgICAgICA8VGl0bGVMYWJlbCB0aXRsZU5hbWU9e2xhYmVscy50aXRsZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2lsbHNDYXJkc30+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWxzLnNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBrZXk9e3NlY3Rpb24uaWR9IGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntzZWN0aW9uLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVNraWxsIHNraWxscz17c2VjdGlvbi5jaGlsZHJlbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VjdGlvbkZvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9