webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sections/career/content/job.js":
/*!***************************************************!*\
  !*** ./components/sections/career/content/job.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _career_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../career.module.scss */ "./components/sections/career/career.module.scss");
/* harmony import */ var _career_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_career_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\sections\\career\\content\\job.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // const useStyles = makeStyles((theme) => ({
//     date: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         [theme.breakpoints.down(600)]: {
//             flexDirection: 'column',
//         },
//     },
// }));

var Job = function Job(props) {
  var content = props.content; // const classes = useStyles();

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    elevation: 3,
    className: _career_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.job,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: _career_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.poste,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, content.poste), __jsx("h3", {
    className: _career_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.dates,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, content.dateDebut, content.dateFin && ' - ' + content.dateFin)), __jsx("h4", {
    className: _career_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.employeur,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, content.employeur), __jsx("div", {
    className: _career_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description,
    dangerouslySetInnerHTML: {
      __html: content.description
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, content.chips && content.chips.map(function (chip) {
    return __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: chip,
      label: chip,
      className: _career_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.chip,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    });
  })));
};

_c = Job;
/* harmony default export */ __webpack_exports__["default"] = (Job);

var _c;

$RefreshReg$(_c, "Job");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9jYXJlZXIvY29udGVudC9qb2IuanMiXSwibmFtZXMiOlsiSm9iIiwicHJvcHMiLCJjb250ZW50Iiwic3R5bGVzIiwiam9iIiwiY2xhc3NlcyIsImRhdGUiLCJwb3N0ZSIsImRhdGVzIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImVtcGxveWV1ciIsImRlc2NyaXB0aW9uIiwiX19odG1sIiwiY2hpcHMiLCJtYXAiLCJjaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNYQyxPQURXLEdBQ0NELEtBREQsQ0FDWEMsT0FEVyxFQUVuQjs7QUFFQSxTQUNJLE1BQUMsK0RBQUQ7QUFBTyxhQUFTLEVBQUUsQ0FBbEI7QUFBcUIsYUFBUyxFQUFFQywwREFBTSxDQUFDQyxHQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFFSCwwREFBTSxDQUFDSSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCTCxPQUFPLENBQUNLLEtBQXRDLENBREosRUFFSTtBQUFJLGFBQVMsRUFBRUosMERBQU0sQ0FBQ0ssS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTixPQUFPLENBQUNPLFNBRGIsRUFFS1AsT0FBTyxDQUFDUSxPQUFSLElBQW1CLFFBQVFSLE9BQU8sQ0FBQ1EsT0FGeEMsQ0FGSixDQURKLEVBUUk7QUFBSSxhQUFTLEVBQUVQLDBEQUFNLENBQUNRLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NULE9BQU8sQ0FBQ1MsU0FBMUMsQ0FSSixFQVVJO0FBQ0ksYUFBUyxFQUFFUiwwREFBTSxDQUFDUyxXQUR0QjtBQUVJLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRVgsT0FBTyxDQUFDVTtBQUFsQixLQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tWLE9BQU8sQ0FBQ1ksS0FBUixJQUNHWixPQUFPLENBQUNZLEtBQVIsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDeEIsV0FDSSxNQUFDLDhEQUFEO0FBQ0ksU0FBRyxFQUFFQSxJQURUO0FBRUksV0FBSyxFQUFFQSxJQUZYO0FBR0ksZUFBUyxFQUFFYiwwREFBTSxDQUFDYSxJQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREo7QUFNSCxHQVBELENBRlIsQ0FkSixDQURKO0FBNEJILENBaENEOztLQUFNaEIsRztBQWtDU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2YwOGQwOTI2N2IwOTk3YWU2ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL2NhcmVlci5tb2R1bGUuc2Nzcyc7XHJcblxyXG4vLyBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuLy8gICAgIGRhdGU6IHtcclxuLy8gICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbi8vICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuLy8gICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93big2MDApXToge1xyXG4vLyAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgfSxcclxuLy8gfSkpO1xyXG5cclxuY29uc3QgSm9iID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHByb3BzO1xyXG4gICAgLy8gY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtzdHlsZXMuam9ifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucG9zdGV9Pntjb250ZW50LnBvc3RlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50LmRhdGVEZWJ1dH1cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5kYXRlRmluICYmICcgLSAnICsgY29udGVudC5kYXRlRmlufVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5lbXBsb3lldXJ9Pntjb250ZW50LmVtcGxveWV1cn08L2g0PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQuZGVzY3JpcHRpb24gfX0+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnQuY2hpcHMgJiZcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmNoaXBzLm1hcCgoY2hpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NoaXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NoaXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hpcH0+PC9DaGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvYjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==