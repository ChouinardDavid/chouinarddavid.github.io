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










var useStyles = makeStyles(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.success.main
    }
  };
});

var CopyToClipboardIcon = function CopyToClipboardIcon(props) {
  _s();

  var textToCopy = props.textToCopy,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["textToCopy"]);

  var textinitial = "Copier l'adresse courriel";
  var textclick = "Adresse copiée";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(textinitial),
      toolTipsText = _useState[0],
      setToolTipsText = _useState[1];

  var removeMuiCssClass = Object(_hooks_useRemoveCssClass__WEBPACK_IMPORTED_MODULE_7__["default"])("MuiIconButton-root:hover");

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
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    onClick: onClick,
    size: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "fa-stack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCircle"],
    className: "fa-stack-2x",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCopy"],
    className: "fa-stack-1x",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }))));
};

_s(CopyToClipboardIcon, "oJLqNYjBStwPwFWsaqgd8LaOHFE=", false, function () {
  return [_hooks_useRemoveCssClass__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlscy9jb3B5VG9DbGlwYm9hcmRJY29uL2NvcHlUb0NsaXBib2FyZEljb24uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJzdWNjZXNzIiwibWFpbiIsIkNvcHlUb0NsaXBib2FyZEljb24iLCJwcm9wcyIsInRleHRUb0NvcHkiLCJyZXN0IiwidGV4dGluaXRpYWwiLCJ0ZXh0Y2xpY2siLCJ1c2VTdGF0ZSIsInRvb2xUaXBzVGV4dCIsInNldFRvb2xUaXBzVGV4dCIsInJlbW92ZU11aUNzc0NsYXNzIiwidXNlUmVtb3ZlQ3NzQ2xhc3MiLCJvbkNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwib25DbG9zZSIsImZhQ2lyY2xlIiwiZmFDb3B5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsVUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMscUJBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRHJDO0FBRCtCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVNBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDM0JDLFVBRDJCLEdBQ0hELEtBREcsQ0FDM0JDLFVBRDJCO0FBQUEsTUFDWkMsSUFEWSxzR0FDSEYsS0FERzs7QUFFbkMsTUFBTUcsV0FBVyxHQUFHLDJCQUFwQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxnQkFBbEI7O0FBSG1DLGtCQUlLQyxzREFBUSxDQUFDRixXQUFELENBSmI7QUFBQSxNQUk1QkcsWUFKNEI7QUFBQSxNQUlkQyxlQUpjOztBQU1uQyxNQUFNQyxpQkFBaUIsR0FBR0Msd0VBQWlCLENBQUMsMEJBQUQsQ0FBM0M7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkMsYUFBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4QlosVUFBOUI7QUFDQU0sbUJBQWUsQ0FBQ0gsU0FBRCxDQUFmO0FBQ0gsR0FIRDs7QUFLQSxNQUFNVSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUVQLG1CQUFlLENBQUNKLFdBQUQsQ0FBZjtBQUErQixHQUF2RDs7QUFFQSxTQUNJLE1BQUMsaUVBQUQ7QUFBUyxTQUFLLEVBQUVHLFlBQWhCO0FBQThCLFdBQU8sRUFBRVEsT0FBdkM7QUFBZ0QsYUFBUyxFQUFDLEtBQTFEO0FBQWdFLFNBQUssTUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUVKLE9BQXJCO0FBQThCLFFBQUksRUFBQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFSyw0RUFBdkI7QUFBaUMsYUFBUyxFQUFDLGFBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFQyx3RUFBdkI7QUFBK0IsYUFBUyxFQUFDLGFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQUZKLENBREosQ0FESjtBQVdILENBMUJEOztHQUFNakIsbUI7VUFNd0JVLGdFOzs7S0FOeEJWLG1CO0FBNEJTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45OTYxNmZlZTFlY2RkNTA0YzU0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29weVRvQ2xpcGJvYXJkSWNvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IGZhQ29weSwgZmFTdGFjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFTcXVhcmUsIGZhQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVzZVJlbW92ZUNzc0NsYXNzIGZyb20gJy4uL2hvb2tzL3VzZVJlbW92ZUNzc0NsYXNzJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XHJcbmltcG9ydCBGaWxlQ29weUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZpbGVDb3B5JztcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpblxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQ29weVRvQ2xpcGJvYXJkSWNvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyB0ZXh0VG9Db3B5LCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHRleHRpbml0aWFsID0gXCJDb3BpZXIgbCdhZHJlc3NlIGNvdXJyaWVsXCI7XHJcbiAgICBjb25zdCB0ZXh0Y2xpY2sgPSBcIkFkcmVzc2UgY29wacOpZVwiO1xyXG4gICAgY29uc3QgW3Rvb2xUaXBzVGV4dCwgc2V0VG9vbFRpcHNUZXh0XSA9IHVzZVN0YXRlKHRleHRpbml0aWFsKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVNdWlDc3NDbGFzcyA9IHVzZVJlbW92ZUNzc0NsYXNzKFwiTXVpSWNvbkJ1dHRvbi1yb290OmhvdmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dFRvQ29weSk7XHJcbiAgICAgICAgc2V0VG9vbFRpcHNUZXh0KHRleHRjbGljayk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7IHNldFRvb2xUaXBzVGV4dCh0ZXh0aW5pdGlhbCk7IH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPXt0b29sVGlwc1RleHR9IG9uQ2xvc2U9e29uQ2xvc2V9IHBsYWNlbWVudD1cInRvcFwiIGFycm93PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pY29uQ29udGVudH0gZmEtc3RhY2tgfT4gKi99XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaXJjbGV9IGNsYXNzTmFtZT1cImZhLXN0YWNrLTJ4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ29weX0gY2xhc3NOYW1lPVwiZmEtc3RhY2stMXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcHlUb0NsaXBib2FyZEljb247Il0sInNvdXJjZVJvb3QiOiIifQ==