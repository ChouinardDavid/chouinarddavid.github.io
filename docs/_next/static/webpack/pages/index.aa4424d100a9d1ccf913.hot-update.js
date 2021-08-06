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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Zoom */ "./node_modules/@material-ui/core/esm/Zoom/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/TimelineConnector */ "./node_modules/@material-ui/lab/esm/TimelineConnector/index.js");
/* harmony import */ var _material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/TimelineContent */ "./node_modules/@material-ui/lab/esm/TimelineContent/index.js");
/* harmony import */ var _material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/TimelineDot */ "./node_modules/@material-ui/lab/esm/TimelineDot/index.js");
/* harmony import */ var _material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/TimelineItem */ "./node_modules/@material-ui/lab/esm/TimelineItem/index.js");
/* harmony import */ var _material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/TimelineSeparator */ "./node_modules/@material-ui/lab/esm/TimelineSeparator/index.js");
/* harmony import */ var _timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timelineUnit.module.scss */ "./components/utils/timeLine/timelineUnit.module.scss");
/* harmony import */ var _timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\utils\\timeLine\\TimeLineUnit.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  dotColor: {
    backgroundColor: function backgroundColor(props) {
      var _props$emploi;

      return ((_props$emploi = props.emploi) === null || _props$emploi === void 0 ? void 0 : _props$emploi.domaine.color) || props.color;
    }
  }
});

var TimeLineUnit = function TimeLineUnit(props) {
  _s();

  var _props$emploi2 = props.emploi;
  _props$emploi2 = _props$emploi2 === void 0 ? {} : _props$emploi2;
  var render = _props$emploi2.render,
      domaine = _props$emploi2.domaine,
      content = _props$emploi2.content;
  var classes = useStyles(props);

  var removeMuiCssClass = function removeMuiCssClass(input) {
    if (input) input.classList.remove('MuiTimelineItem-missingOppositeContent');
  };

  return __jsx(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: removeMuiCssClass,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(_material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "".concat(_timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.timelineDot, " ").concat(classes.dotColor),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: (domaine === null || domaine === void 0 ? void 0 : domaine.icon) || props.icon,
    size: "2x",
    color: "black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })), __jsx(_material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.customBlackLine,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["InView"], {
    threshold: 0.75,
    triggerOnce: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, content && // eslint-disable-next-line no-unused-vars
  function (_ref) {
    var inView = _ref.inView,
        ref = _ref.ref,
        entry = _ref.entry;
    return __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "in": inView,
      timeout: 900,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, __jsx(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ref: ref,
      className: _timelineUnit_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 29
      }
    }, render(content)));
  }));
};

_s(TimeLineUnit, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlscy90aW1lTGluZS9UaW1lTGluZVVuaXQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImRvdENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJlbXBsb2kiLCJkb21haW5lIiwiY29sb3IiLCJUaW1lTGluZVVuaXQiLCJyZW5kZXIiLCJjb250ZW50IiwiY2xhc3NlcyIsInJlbW92ZU11aUNzc0NsYXNzIiwiaW5wdXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZXMiLCJ0aW1lbGluZURvdCIsImljb24iLCJjdXN0b21CbGFja0xpbmUiLCJpblZpZXciLCJyZWYiLCJlbnRyeSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxVQUFRLEVBQUU7QUFDTkMsbUJBQWUsRUFBRSx5QkFBQ0MsS0FBRDtBQUFBOztBQUFBLGFBQVcsa0JBQUFBLEtBQUssQ0FBQ0MsTUFBTixnRUFBY0MsT0FBZCxDQUFzQkMsS0FBdEIsS0FBK0JILEtBQUssQ0FBQ0csS0FBaEQ7QUFBQTtBQURYO0FBRGUsQ0FBRCxDQUE1Qjs7QUFNQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixLQUFELEVBQVc7QUFBQTs7QUFBQSx1QkFDMEJBLEtBRDFCLENBQ3BCQyxNQURvQjtBQUFBLCtDQUNtQixFQURuQjtBQUFBLE1BQ1ZJLE1BRFUsa0JBQ1ZBLE1BRFU7QUFBQSxNQUNGSCxPQURFLGtCQUNGQSxPQURFO0FBQUEsTUFDT0ksT0FEUCxrQkFDT0EsT0FEUDtBQUU1QixNQUFNQyxPQUFPLEdBQUdYLFNBQVMsQ0FBQ0ksS0FBRCxDQUF6Qjs7QUFFQSxNQUFNUSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBVztBQUNqQyxRQUFJQSxLQUFKLEVBQ0lBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUIsd0NBQXZCO0FBQ1AsR0FIRDs7QUFLQSxTQUNJLE1BQUMscUVBQUQ7QUFBYyxPQUFHLEVBQUVILGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvRUFBRDtBQUNJLGFBQVMsWUFBS0ksaUVBQU0sQ0FBQ0MsV0FBWixjQUEyQk4sT0FBTyxDQUFDVCxRQUFuQyxDQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDhFQUFEO0FBQ0ksUUFBSSxFQUFFLENBQUFJLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFWSxJQUFULEtBQWlCZCxLQUFLLENBQUNjLElBRGpDO0FBRUksUUFBSSxFQUFDLElBRlQ7QUFHSSxTQUFLLEVBQUMsT0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQVNJLE1BQUMsMEVBQUQ7QUFBbUIsYUFBUyxFQUFFRixpRUFBTSxDQUFDRyxlQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FESixFQVlJLE1BQUMsa0VBQUQ7QUFBUSxhQUFTLEVBQUUsSUFBbkI7QUFBeUIsZUFBVyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tULE9BQU8sSUFDSjtBQUNDO0FBQUEsUUFBR1UsTUFBSCxRQUFHQSxNQUFIO0FBQUEsUUFBV0MsR0FBWCxRQUFXQSxHQUFYO0FBQUEsUUFBZ0JDLEtBQWhCLFFBQWdCQSxLQUFoQjtBQUFBLFdBQ0csTUFBQyw4REFBRDtBQUFNLFlBQUlGLE1BQVY7QUFBa0IsYUFBTyxFQUFFLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdFQUFEO0FBQWlCLFNBQUcsRUFBRUMsR0FBdEI7QUFBMkIsZUFBUyxFQUFFTCxpRUFBTSxDQUFDTyxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tkLE1BQU0sQ0FBQ0MsT0FBRCxDQURYLENBREosQ0FESDtBQUFBLEdBSFQsQ0FaSixDQURKO0FBMEJILENBbkNEOztHQUFNRixZO1VBRWNSLFM7OztLQUZkUSxZO0FBcUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYTQ0MjRkMTAwYTlkMWNjZjkxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGltZWxpbmVDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUNvbm5lY3Rvcic7XHJcbmltcG9ydCBUaW1lbGluZUNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUNvbnRlbnQnO1xyXG5pbXBvcnQgVGltZWxpbmVEb3QgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZURvdCc7XHJcbmltcG9ydCBUaW1lbGluZUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUl0ZW0nO1xyXG5pbXBvcnQgVGltZWxpbmVTZXBhcmF0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZVNlcGFyYXRvcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90aW1lbGluZVVuaXQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBkb3RDb2xvcjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5lbXBsb2k/LmRvbWFpbmUuY29sb3IgfHwgcHJvcHMuY29sb3IsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFRpbWVMaW5lVW5pdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBlbXBsb2k6IHsgcmVuZGVyLCBkb21haW5lLCBjb250ZW50IH0gPSB7fSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHByb3BzKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVNdWlDc3NDbGFzcyA9IChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dClcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnTXVpVGltZWxpbmVJdGVtLW1pc3NpbmdPcHBvc2l0ZUNvbnRlbnQnKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGltZWxpbmVJdGVtIHJlZj17cmVtb3ZlTXVpQ3NzQ2xhc3N9PlxyXG4gICAgICAgICAgICA8VGltZWxpbmVTZXBhcmF0b3I+XHJcbiAgICAgICAgICAgICAgICA8VGltZWxpbmVEb3RcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50aW1lbGluZURvdH0gJHtjbGFzc2VzLmRvdENvbG9yfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZG9tYWluZT8uaWNvbiB8fCBwcm9wcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPScyeCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RpbWVsaW5lRG90PlxyXG4gICAgICAgICAgICAgICAgPFRpbWVsaW5lQ29ubmVjdG9yIGNsYXNzTmFtZT17c3R5bGVzLmN1c3RvbUJsYWNrTGluZX0gLz5cclxuICAgICAgICAgICAgPC9UaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgPEluVmlldyB0aHJlc2hvbGQ9ezAuNzV9IHRyaWdnZXJPbmNlPlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgICAgICAgICAgICAgICAgICAoKHsgaW5WaWV3LCByZWYsIGVudHJ5IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFpvb20gaW49e2luVmlld30gdGltZW91dD17OTAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lbGluZUNvbnRlbnQgcmVmPXtyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXIoY29udGVudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RpbWVsaW5lQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ab29tPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0luVmlldz5cclxuICAgICAgICA8L1RpbWVsaW5lSXRlbT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lTGluZVVuaXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=