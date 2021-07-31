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
    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSquare"],
    color: "black",
    className: "fa-stack-2x",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCopy"],
    color: "black",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlscy9jb3B5VG9DbGlwYm9hcmRJY29uL2NvcHlUb0NsaXBib2FyZEljb24uanMiXSwibmFtZXMiOlsiQ29weVRvQ2xpcGJvYXJkSWNvbiIsInByb3BzIiwidGV4dFRvQ29weSIsInJlc3QiLCJ0ZXh0aW5pdGlhbCIsInRleHRjbGljayIsInVzZVN0YXRlIiwidG9vbFRpcHNUZXh0Iiwic2V0VG9vbFRpcHNUZXh0Iiwib25DbGljayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIm9uQ2xvc2UiLCJmYVNxdWFyZSIsImZhQ29weSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDM0JDLFVBRDJCLEdBQ0hELEtBREcsQ0FDM0JDLFVBRDJCO0FBQUEsTUFDWkMsSUFEWSxzR0FDSEYsS0FERzs7QUFFbkMsTUFBTUcsV0FBVyxHQUFHLDJCQUFwQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxnQkFBbEI7O0FBSG1DLGtCQUlLQyxzREFBUSxDQUFDRixXQUFELENBSmI7QUFBQSxNQUk1QkcsWUFKNEI7QUFBQSxNQUlkQyxlQUpjLGlCQUtuQztBQUVBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCQyxhQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCVixVQUE5QjtBQUNBTSxtQkFBZSxDQUFDSCxTQUFELENBQWY7QUFDSCxHQUhEOztBQUtBLE1BQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBRUwsbUJBQWUsQ0FBQ0osV0FBRCxDQUFmO0FBQStCLEdBQXZEOztBQUVBLFNBQ0ksTUFBQyxpRUFBRDtBQUFTLFNBQUssRUFBRUcsWUFBaEI7QUFBOEIsV0FBTyxFQUFFTSxPQUF2QztBQUFnRCxhQUFTLEVBQUMsS0FBMUQ7QUFBZ0UsU0FBSyxNQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBRUosT0FBckI7QUFBOEIsUUFBSSxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4RUFBRDtBQUFpQixRQUFJLEVBQUVLLDRFQUF2QjtBQUFpQyxTQUFLLEVBQUMsT0FBdkM7QUFBK0MsYUFBUyxFQUFDLGFBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFQyx3RUFBdkI7QUFBK0IsU0FBSyxFQUFDLE9BQXJDO0FBQTZDLGFBQVMsRUFBQyxhQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FGSixDQURKLENBREo7QUFXSCxDQTNCRDs7R0FBTWYsbUI7O0tBQUFBLG1CO0FBNkJTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZDRmNjM0NDdjOGI2ODU2YjU3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29weVRvQ2xpcGJvYXJkSWNvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IGZhQ29weSwgZmFTdGFjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFTcXVhcmUsIGZhQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVzZVJlbW92ZUNzc0NsYXNzIGZyb20gJy4uL2hvb2tzL3VzZVJlbW92ZUNzc0NsYXNzJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XHJcbmltcG9ydCBGaWxlQ29weUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZpbGVDb3B5JztcclxuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XHJcbi8vIGltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuXHJcbi8vIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4vLyAgICAgcm9vdDoge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW5cclxuLy8gICAgIH0sXHJcbi8vIH0pKTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IENvcHlUb0NsaXBib2FyZEljb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgdGV4dFRvQ29weSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB0ZXh0aW5pdGlhbCA9IFwiQ29waWVyIGwnYWRyZXNzZSBjb3VycmllbFwiO1xyXG4gICAgY29uc3QgdGV4dGNsaWNrID0gXCJBZHJlc3NlIGNvcGnDqWVcIjtcclxuICAgIGNvbnN0IFt0b29sVGlwc1RleHQsIHNldFRvb2xUaXBzVGV4dF0gPSB1c2VTdGF0ZSh0ZXh0aW5pdGlhbCk7XHJcbiAgICAvLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgLy8gY29uc3QgcmVtb3ZlTXVpQ3NzQ2xhc3MgPSB1c2VSZW1vdmVDc3NDbGFzcyhcIk11aUljb25CdXR0b24tcm9vdDpob3ZlclwiKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHRUb0NvcHkpO1xyXG4gICAgICAgIHNldFRvb2xUaXBzVGV4dCh0ZXh0Y2xpY2spO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNsb3NlID0gKCkgPT4geyBzZXRUb29sVGlwc1RleHQodGV4dGluaXRpYWwpOyB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17dG9vbFRpcHNUZXh0fSBvbkNsb3NlPXtvbkNsb3NlfSBwbGFjZW1lbnQ9XCJ0b3BcIiBhcnJvdz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17b25DbGlja30gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuaWNvbkNvbnRlbnR9IGZhLXN0YWNrYH0+ICovfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjb2xvcj1cImJsYWNrXCIgY2xhc3NOYW1lPVwiZmEtc3RhY2stMnhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDb3B5fSBjb2xvcj1cImJsYWNrXCIgY2xhc3NOYW1lPVwiZmEtc3RhY2stMXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcHlUb0NsaXBib2FyZEljb247Il0sInNvdXJjZVJvb3QiOiIifQ==