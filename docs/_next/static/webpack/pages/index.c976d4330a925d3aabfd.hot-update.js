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

  var removeMuiCssClass = function removeMuiCssClass() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlscy90aW1lTGluZS9UaW1lTGluZVVuaXQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImRvdENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJlbXBsb2kiLCJkb21haW5lIiwiY29sb3IiLCJUaW1lTGluZVVuaXQiLCJyZW5kZXIiLCJjb250ZW50IiwiY2xhc3NlcyIsInJlbW92ZU11aUNzc0NsYXNzIiwiaW5wdXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZXMiLCJ0aW1lbGluZURvdCIsImljb24iLCJjdXN0b21CbGFja0xpbmUiLCJpblZpZXciLCJyZWYiLCJlbnRyeSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxVQUFRLEVBQUU7QUFDTkMsbUJBQWUsRUFBRSx5QkFBQ0MsS0FBRDtBQUFBOztBQUFBLGFBQVcsa0JBQUFBLEtBQUssQ0FBQ0MsTUFBTixnRUFBY0MsT0FBZCxDQUFzQkMsS0FBdEIsS0FBK0JILEtBQUssQ0FBQ0csS0FBaEQ7QUFBQTtBQURYO0FBRGUsQ0FBRCxDQUE1Qjs7QUFNQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixLQUFELEVBQVc7QUFBQTs7QUFBQSx1QkFDMEJBLEtBRDFCLENBQ3BCQyxNQURvQjtBQUFBLCtDQUNtQixFQURuQjtBQUFBLE1BQ1ZJLE1BRFUsa0JBQ1ZBLE1BRFU7QUFBQSxNQUNGSCxPQURFLGtCQUNGQSxPQURFO0FBQUEsTUFDT0ksT0FEUCxrQkFDT0EsT0FEUDtBQUU1QixNQUFNQyxPQUFPLEdBQUdYLFNBQVMsQ0FBQ0ksS0FBRCxDQUF6Qjs7QUFFQSxNQUFNUSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUIsUUFBSUMsS0FBSixFQUNJQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCLHdDQUF2QjtBQUNQLEdBSEQ7O0FBS0EsU0FDSSxNQUFDLHFFQUFEO0FBQWMsT0FBRyxFQUFFSCxpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0VBQUQ7QUFDSSxhQUFTLFlBQUtJLGlFQUFNLENBQUNDLFdBQVosY0FBMkJOLE9BQU8sQ0FBQ1QsUUFBbkMsQ0FEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyw4RUFBRDtBQUNJLFFBQUksRUFBRSxDQUFBSSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRVksSUFBVCxLQUFpQmQsS0FBSyxDQUFDYyxJQURqQztBQUVJLFFBQUksRUFBQyxJQUZUO0FBR0ksU0FBSyxFQUFDLE9BSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFTSSxNQUFDLDBFQUFEO0FBQW1CLGFBQVMsRUFBRUYsaUVBQU0sQ0FBQ0csZUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBREosRUFZSSxNQUFDLGtFQUFEO0FBQVEsYUFBUyxFQUFFLElBQW5CO0FBQXlCLGVBQVcsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLVCxPQUFPLElBQ0o7QUFDQztBQUFBLFFBQUdVLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFFBQVdDLEdBQVgsUUFBV0EsR0FBWDtBQUFBLFFBQWdCQyxLQUFoQixRQUFnQkEsS0FBaEI7QUFBQSxXQUNHLE1BQUMsOERBQUQ7QUFBTSxZQUFJRixNQUFWO0FBQWtCLGFBQU8sRUFBRSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx3RUFBRDtBQUFpQixTQUFHLEVBQUVDLEdBQXRCO0FBQTJCLGVBQVMsRUFBRUwsaUVBQU0sQ0FBQ08sSUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLZCxNQUFNLENBQUNDLE9BQUQsQ0FEWCxDQURKLENBREg7QUFBQSxHQUhULENBWkosQ0FESjtBQTBCSCxDQW5DRDs7R0FBTUYsWTtVQUVjUixTOzs7S0FGZFEsWTtBQXFDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzk3NmQ0MzMwYTkyNWQzYWFiZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IEluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCBab29tIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1pvb20nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRpbWVsaW5lQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVDb25uZWN0b3InO1xyXG5pbXBvcnQgVGltZWxpbmVDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVDb250ZW50JztcclxuaW1wb3J0IFRpbWVsaW5lRG90IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVEb3QnO1xyXG5pbXBvcnQgVGltZWxpbmVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVJdGVtJztcclxuaW1wb3J0IFRpbWVsaW5lU2VwYXJhdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVTZXBhcmF0b3InO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGltZWxpbmVVbml0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgZG90Q29sb3I6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuZW1wbG9pPy5kb21haW5lLmNvbG9yIHx8IHByb3BzLmNvbG9yLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBUaW1lTGluZVVuaXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgZW1wbG9pOiB7IHJlbmRlciwgZG9tYWluZSwgY29udGVudCB9ID0ge30gfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlTXVpQ3NzQ2xhc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlucHV0KVxyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdNdWlUaW1lbGluZUl0ZW0tbWlzc2luZ09wcG9zaXRlQ29udGVudCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaW1lbGluZUl0ZW0gcmVmPXtyZW1vdmVNdWlDc3NDbGFzc30+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgICAgIDxUaW1lbGluZURvdFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRpbWVsaW5lRG90fSAke2NsYXNzZXMuZG90Q29sb3J9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtkb21haW5lPy5pY29uIHx8IHByb3BzLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9JzJ4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvVGltZWxpbmVEb3Q+XHJcbiAgICAgICAgICAgICAgICA8VGltZWxpbmVDb25uZWN0b3IgY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9tQmxhY2tMaW5lfSAvPlxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lU2VwYXJhdG9yPlxyXG4gICAgICAgICAgICA8SW5WaWV3IHRocmVzaG9sZD17MC43NX0gdHJpZ2dlck9uY2U+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgICAgICAgICAgICAgICAgICgoeyBpblZpZXcsIHJlZiwgZW50cnkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Wm9vbSBpbj17aW5WaWV3fSB0aW1lb3V0PXs5MDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVsaW5lQ29udGVudCByZWY9e3JlZn0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlcihjb250ZW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGltZWxpbmVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1pvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvSW5WaWV3PlxyXG4gICAgICAgIDwvVGltZWxpbmVJdGVtPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVMaW5lVW5pdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==