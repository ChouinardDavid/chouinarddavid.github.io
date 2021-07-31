webpackHotUpdate_N_E("pages/index",{

/***/ "./components/utils/copyToClipboardIcon/copyToClipboardIcon.js":
/*!*********************************************************************!*\
  !*** ./components/utils/copyToClipboardIcon/copyToClipboardIcon.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _copyToClipboardIcon_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copyToClipboardIcon.module.scss */ "./components/utils/copyToClipboardIcon/copyToClipboardIcon.module.scss");
/* harmony import */ var _copyToClipboardIcon_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_copyToClipboardIcon_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _hooks_useRemoveCssClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useRemoveCssClass */ "./components/utils/hooks/useRemoveCssClass.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/FileCopy */ "./node_modules/@material-ui/icons/FileCopy.js");
/* harmony import */ var _material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FileCopy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");


var _this = undefined,
    _jsxFileName = "F:\\DevProjects\\Repos\\chouinarddavid.github.io\\components\\utils\\copyToClipboardIcon\\copyToClipboardIcon.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









 // import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: theme.palette.success.main
//     },
// }));

var CopyToClipboardIcon = function CopyToClipboardIcon(props) {
  _s();

  var textToCopy = props.textToCopy,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["textToCopy"]);

  var textinitial = "Copier l'adresse courriel";
  var textclick = "Adresse copiée";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(textinitial),
      toolTipsText = _useState[0],
      setToolTipsText = _useState[1]; // const classes = useStyles();
  // const removeMuiCssClass = useRemoveCssClass("MuiIconButton-root:hover");


  var onClick = function onClick() {
    navigator.clipboard.writeText(textToCopy);
    setToolTipsText(textclick);
  };

  var onClose = function onClose() {
    setToolTipsText(textinitial);
  };

  return __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: toolTipsText,
    onClose: onClose,
    placement: "top",
    arrow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    onClick: onClick,
    size: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "fa-stack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCircle"],
    className: "fa-stack-2x",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCopy"],
    className: "fa-stack-1x",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }))));
};

_s(CopyToClipboardIcon, "JntNkXsiIuzN2N4VZ1/HHQy/axc=");

_c = CopyToClipboardIcon;
/* harmony default export */ __webpack_exports__["default"] = (CopyToClipboardIcon);

var _c;

$RefreshReg$(_c, "CopyToClipboardIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlscy9jb3B5VG9DbGlwYm9hcmRJY29uL2NvcHlUb0NsaXBib2FyZEljb24uanMiXSwibmFtZXMiOlsiQ29weVRvQ2xpcGJvYXJkSWNvbiIsInByb3BzIiwidGV4dFRvQ29weSIsInJlc3QiLCJ0ZXh0aW5pdGlhbCIsInRleHRjbGljayIsInVzZVN0YXRlIiwidG9vbFRpcHNUZXh0Iiwic2V0VG9vbFRpcHNUZXh0Iiwib25DbGljayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIm9uQ2xvc2UiLCJmYUNpcmNsZSIsImZhQ29weSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDM0JDLFVBRDJCLEdBQ0hELEtBREcsQ0FDM0JDLFVBRDJCO0FBQUEsTUFDWkMsSUFEWSxzR0FDSEYsS0FERzs7QUFFbkMsTUFBTUcsV0FBVyxHQUFHLDJCQUFwQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxnQkFBbEI7O0FBSG1DLGtCQUlLQyxzREFBUSxDQUFDRixXQUFELENBSmI7QUFBQSxNQUk1QkcsWUFKNEI7QUFBQSxNQUlkQyxlQUpjLGlCQUtuQztBQUVBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCQyxhQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCVixVQUE5QjtBQUNBTSxtQkFBZSxDQUFDSCxTQUFELENBQWY7QUFDSCxHQUhEOztBQUtBLE1BQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBRUwsbUJBQWUsQ0FBQ0osV0FBRCxDQUFmO0FBQStCLEdBQXZEOztBQUVBLFNBQ0ksTUFBQyxpRUFBRDtBQUFTLFNBQUssRUFBRUcsWUFBaEI7QUFBOEIsV0FBTyxFQUFFTSxPQUF2QztBQUFnRCxhQUFTLEVBQUMsS0FBMUQ7QUFBZ0UsU0FBSyxNQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBRUosT0FBckI7QUFBOEIsUUFBSSxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVLLDRFQUF2QjtBQUFpQyxhQUFTLEVBQUMsYUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVDLHdFQUF2QjtBQUErQixhQUFTLEVBQUMsYUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBRkosQ0FESixDQURKO0FBV0gsQ0EzQkQ7O0dBQU1mLG1COztLQUFBQSxtQjtBQTZCU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzJjOTI0YjlmNzU4NTU4M2M4NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvcHlUb0NsaXBib2FyZEljb24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBmYUNvcHksIGZhU3RhY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhU3F1YXJlLCBmYUNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB1c2VSZW1vdmVDc3NDbGFzcyBmcm9tICcuLi9ob29rcy91c2VSZW1vdmVDc3NDbGFzcyc7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xyXG5pbXBvcnQgRmlsZUNvcHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GaWxlQ29weSc7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xyXG4vLyBpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG4vLyBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuLy8gICAgIHJvb3Q6IHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluXHJcbi8vICAgICB9LFxyXG4vLyB9KSk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBDb3B5VG9DbGlwYm9hcmRJY29uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHRleHRUb0NvcHksIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgdGV4dGluaXRpYWwgPSBcIkNvcGllciBsJ2FkcmVzc2UgY291cnJpZWxcIjtcclxuICAgIGNvbnN0IHRleHRjbGljayA9IFwiQWRyZXNzZSBjb3Bpw6llXCI7XHJcbiAgICBjb25zdCBbdG9vbFRpcHNUZXh0LCBzZXRUb29sVGlwc1RleHRdID0gdXNlU3RhdGUodGV4dGluaXRpYWwpO1xyXG4gICAgLy8gY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIC8vIGNvbnN0IHJlbW92ZU11aUNzc0NsYXNzID0gdXNlUmVtb3ZlQ3NzQ2xhc3MoXCJNdWlJY29uQnV0dG9uLXJvb3Q6aG92ZXJcIik7XHJcblxyXG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0VG9Db3B5KTtcclxuICAgICAgICBzZXRUb29sVGlwc1RleHQodGV4dGNsaWNrKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHsgc2V0VG9vbFRpcHNUZXh0KHRleHRpbml0aWFsKTsgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3Rvb2xUaXBzVGV4dH0gb25DbG9zZT17b25DbG9zZX0gcGxhY2VtZW50PVwidG9wXCIgYXJyb3c+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT17YCR7c3R5bGVzLmljb25Db250ZW50fSBmYS1zdGFja2B9PiAqL31cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNpcmNsZX0gY2xhc3NOYW1lPVwiZmEtc3RhY2stMnhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDb3B5fSBjbGFzc05hbWU9XCJmYS1zdGFjay0xeFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29weVRvQ2xpcGJvYXJkSWNvbjsiXSwic291cmNlUm9vdCI6IiJ9