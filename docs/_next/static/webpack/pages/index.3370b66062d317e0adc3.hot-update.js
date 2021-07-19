webpackHotUpdate_N_E("pages/index",{

/***/ "./components/utils/timeLine/TimeLineUnit.js":
/*!***************************************************!*\
  !*** ./components/utils/timeLine/TimeLineUnit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timelineUnit.module.scss */ "./components/utils/timeLine/timelineUnit.module.scss");
/* harmony import */ var _timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/TimelineItem */ "./node_modules/@material-ui/lab/esm/TimelineItem/index.js");
/* harmony import */ var _material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/TimelineSeparator */ "./node_modules/@material-ui/lab/esm/TimelineSeparator/index.js");
/* harmony import */ var _material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/TimelineConnector */ "./node_modules/@material-ui/lab/esm/TimelineConnector/index.js");
/* harmony import */ var _material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/TimelineContent */ "./node_modules/@material-ui/lab/esm/TimelineContent/index.js");
/* harmony import */ var _material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/TimelineDot */ "./node_modules/@material-ui/lab/esm/TimelineDot/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Zoom */ "./node_modules/@material-ui/core/esm/Zoom/index.js");
/* harmony import */ var _hooks_useRemoveCssClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useRemoveCssClass */ "./components/utils/hooks/useRemoveCssClass.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\utils\\timeLine\\TimeLineUnit.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var TimeLineUnit = function TimeLineUnit(props) {
  _s();

  var render = props.render,
      icon = props.icon,
      color = props.color,
      content = props.content;
  var removeMuiCssClass = Object(_hooks_useRemoveCssClass__WEBPACK_IMPORTED_MODULE_9__["default"])("MuiTimelineItem-missingOppositeContent");
  return __jsx(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: removeMuiCssClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: color,
    className: _timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.timelineDot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: icon,
    size: "2x",
    color: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  })), __jsx(_material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.customBlackLine,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })), __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__["InView"], {
    threshold: 0.75,
    triggerOnce: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, content && function (_ref) {
    var inView = _ref.inView,
        ref = _ref.ref,
        entry = _ref.entry;
    return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "in": inView,
      timeout: 900,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }, __jsx(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ref: ref,
      className: _timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, render(content)));
  }));
};

_s(TimeLineUnit, "KU0T3VrJBFoUje/o/WoBdSJi3p8=", false, function () {
  return [_hooks_useRemoveCssClass__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c = TimeLineUnit;
/* harmony default export */ __webpack_exports__["default"] = (TimeLineUnit);

var _c;

$RefreshReg$(_c, "TimeLineUnit");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlscy90aW1lTGluZS9UaW1lTGluZVVuaXQuanMiXSwibmFtZXMiOlsiVGltZUxpbmVVbml0IiwicHJvcHMiLCJyZW5kZXIiLCJpY29uIiwiY29sb3IiLCJjb250ZW50IiwicmVtb3ZlTXVpQ3NzQ2xhc3MiLCJ1c2VSZW1vdmVDc3NDbGFzcyIsInN0eWxlcyIsInRpbWVsaW5lRG90IiwiY3VzdG9tQmxhY2tMaW5lIiwiaW5WaWV3IiwicmVmIiwiZW50cnkiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNwQkMsTUFEb0IsR0FDYUQsS0FEYixDQUNwQkMsTUFEb0I7QUFBQSxNQUNaQyxJQURZLEdBQ2FGLEtBRGIsQ0FDWkUsSUFEWTtBQUFBLE1BQ05DLEtBRE0sR0FDYUgsS0FEYixDQUNORyxLQURNO0FBQUEsTUFDQ0MsT0FERCxHQUNhSixLQURiLENBQ0NJLE9BREQ7QUFFNUIsTUFBTUMsaUJBQWlCLEdBQUdDLHdFQUFpQixDQUFDLHdDQUFELENBQTNDO0FBRUEsU0FDSSxNQUFDLHFFQUFEO0FBQWMsT0FBRyxFQUFFRCxpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0VBQUQ7QUFBYSxTQUFLLEVBQUVGLEtBQXBCO0FBQTJCLGFBQVMsRUFBRUksZ0VBQU0sQ0FBQ0MsV0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0VBQUQ7QUFBaUIsUUFBSSxFQUFFTixJQUF2QjtBQUE2QixRQUFJLEVBQUMsSUFBbEM7QUFBdUMsU0FBSyxFQUFDLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQywwRUFBRDtBQUFtQixhQUFTLEVBQUVLLGdFQUFNLENBQUNFLGVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLEVBT0ksTUFBQyxrRUFBRDtBQUFRLGFBQVMsRUFBRSxJQUFuQjtBQUF5QixlQUFXLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0wsT0FBTyxJQUNIO0FBQUEsUUFBR00sTUFBSCxRQUFHQSxNQUFIO0FBQUEsUUFBV0MsR0FBWCxRQUFXQSxHQUFYO0FBQUEsUUFBZ0JDLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLFdBQ0csTUFBQyw4REFBRDtBQUFNLFlBQUlGLE1BQVY7QUFBa0IsYUFBTyxFQUFFLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdFQUFEO0FBQWlCLFNBQUcsRUFBRUMsR0FBdEI7QUFBMkIsZUFBUyxFQUFFSixnRUFBTSxDQUFDTSxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0taLE1BQU0sQ0FBQ0csT0FBRCxDQURYLENBREosQ0FESDtBQUFBLEdBRlQsQ0FQSixDQURKO0FBb0JILENBeEJEOztHQUFNTCxZO1VBRXdCTyxnRTs7O0tBRnhCUCxZO0FBMEJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMzcwYjY2MDYyZDMxN2UwYWRjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RpbWVsaW5lVW5pdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBUaW1lbGluZUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUl0ZW0nO1xyXG5pbXBvcnQgVGltZWxpbmVTZXBhcmF0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZVNlcGFyYXRvcic7XHJcbmltcG9ydCBUaW1lbGluZUNvbm5lY3RvciBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lQ29ubmVjdG9yJztcclxuaW1wb3J0IFRpbWVsaW5lQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lQ29udGVudCc7XHJcbmltcG9ydCBUaW1lbGluZURvdCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lRG90JztcclxuaW1wb3J0IHsgSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XHJcbmltcG9ydCB1c2VSZW1vdmVDc3NDbGFzcyBmcm9tICcuLi9ob29rcy91c2VSZW1vdmVDc3NDbGFzcyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBUaW1lTGluZVVuaXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgcmVuZGVyLCBpY29uLCBjb2xvciwgY29udGVudCB9ID0gcHJvcHNcclxuICAgIGNvbnN0IHJlbW92ZU11aUNzc0NsYXNzID0gdXNlUmVtb3ZlQ3NzQ2xhc3MoXCJNdWlUaW1lbGluZUl0ZW0tbWlzc2luZ09wcG9zaXRlQ29udGVudFwiKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaW1lbGluZUl0ZW0gcmVmPXtyZW1vdmVNdWlDc3NDbGFzc30+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgICAgIDxUaW1lbGluZURvdCBjb2xvcj17Y29sb3J9IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lRG90fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IHNpemU9XCIyeFwiIGNvbG9yPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaW1lbGluZURvdD5cclxuICAgICAgICAgICAgICAgIDxUaW1lbGluZUNvbm5lY3RvciBjbGFzc05hbWU9e3N0eWxlcy5jdXN0b21CbGFja0xpbmV9IC8+XHJcbiAgICAgICAgICAgIDwvVGltZWxpbmVTZXBhcmF0b3I+XHJcbiAgICAgICAgICAgIDxJblZpZXcgdGhyZXNob2xkPXswLjc1fSB0cmlnZ2VyT25jZT5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKCh7IGluVmlldywgcmVmLCBlbnRyeSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxab29tIGluPXtpblZpZXd9IHRpbWVvdXQ9ezkwMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZWxpbmVDb250ZW50IHJlZj17cmVmfSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyKGNvbnRlbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaW1lbGluZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvWm9vbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9JblZpZXc+XHJcbiAgICAgICAgPC9UaW1lbGluZUl0ZW0+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lTGluZVVuaXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=