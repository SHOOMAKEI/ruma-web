(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_forms_FormResponseAlert_tsx"],{

/***/ "./resources/js/Pages/shared/components/forms/FormResponseAlert.tsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/shared/components/forms/FormResponseAlert.tsx ***!
  \**************************************************************************/
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function FormResponseAlert(_a) {
  var type = _a.type,
      message = _a.message,
      link = _a.link,
      linkMessage = _a.linkMessage;
  return react_1["default"].createElement("div", {
    className: "alert alert-" + type + " bg-" + type + " text-white border-0 mb-10 show mb-4",
    role: "alert"
  }, react_1["default"].createElement("strong", null, type === 'danger' ? 'Error' : 'Info', ":- "), " ", message, link && (link === null || link === void 0 ? void 0 : link.length) > 0 ? react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("hr", null), react_1["default"].createElement("div", null, react_1["default"].createElement("button", {
    className: "text-white fw-light btn btn-link p-0"
  }, linkMessage + " " + link))) : null);
}

exports.default = FormResponseAlert;

/***/ })

}]);