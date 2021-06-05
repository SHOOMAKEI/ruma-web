(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_AuthFramework_tsx"],{

/***/ "./resources/js/Pages/Auth/AuthFramework.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Auth/AuthFramework.tsx ***!
  \***************************************************/
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

function AuthFramework(_a) {
  var children = _a.children,
      illustrationUrl = _a.illustrationUrl,
      title = _a.title,
      subtitle = _a.subtitle;
  return react_1["default"].createElement("div", {
    className: "d-flex flex-column flex-root"
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-column flex-lg-row flex-column-fluid"
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-column flex-lg-row-auto w-xl-600px position-xl-relative",
    style: {
      backgroundColor: '#F7FAF7'
    }
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px"
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-row-fluid flex-column text-center p-6 pt-lg-20"
  }, react_1["default"].createElement("a", {
    href: "",
    className: "py-9"
  }, react_1["default"].createElement("img", {
    alt: "Logo",
    src: "/assets/images/brand/logo.svg",
    style: {
      width: '230px',
      height: '230px'
    }
  }))), react_1["default"].createElement("img", {
    src: illustrationUrl,
    className: "d-none d-lg-block",
    alt: 'illustration'
  }))), react_1["default"].createElement("div", {
    className: "d-flex flex-column flex-lg-row-fluid py-10"
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-center flex-column flex-column-fluid"
  }, react_1["default"].createElement("div", {
    className: "w-100 w-md-50 w-lg-500px p-10 p-lg-15 mx-auto"
  }, react_1["default"].createElement("div", {
    className: "mb-6"
  }, react_1["default"].createElement("h1", {
    className: "text-dark mb-3 auth-heading"
  }, title), react_1["default"].createElement("p", {
    className: "h4 mb-3 fw-light"
  }, subtitle)), children)))));
}

exports.default = AuthFramework;

/***/ })

}]);