(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_general_ui-utilities_tsx"],{

/***/ "./resources/js/Pages/shared/components/general/ui-utilities.tsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/shared/components/general/ui-utilities.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CustomButtonDropdownToggle = exports.CustomDropdownMenuItem = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.CustomDropdownMenuItem = react_1["default"].forwardRef(function (_a, ref) {
  var children = _a.children;
  return react_1["default"].createElement("div", {
    className: "menu-item px-5"
  }, children);
});
exports.CustomButtonDropdownToggle = react_1["default"].forwardRef(function (_a, ref) {
  var children = _a.children,
      _onClick = _a.onClick,
      cssClass = _a.cssClass;
  return (// @ts-ignore
    react_1["default"].createElement("button", {
      className: cssClass,
      ref: ref,
      onClick: function onClick(e) {
        e.preventDefault();

        _onClick(e);
      }
    }, children)
  );
});

/***/ })

}]);