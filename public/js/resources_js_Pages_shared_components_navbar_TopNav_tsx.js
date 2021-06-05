(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_navbar_TopNav_tsx"],{

/***/ "./resources/js/Pages/shared/components/navbar/TopNav.tsx":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/shared/components/navbar/TopNav.tsx ***!
  \****************************************************************/
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

var UserMenu_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/navbar/UserMenu'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var svg_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/icons/svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function TopNav() {
  return React.createElement("div", {
    id: "kt_header",
    className: "header align-items-stretch"
  }, React.createElement("div", {
    className: "container-fluid d-flex align-items-stretch justify-content-between"
  }, React.createElement("div", {
    className: "d-flex align-items-center d-lg-none ms-n3 me-1",
    title: "Show aside menu"
  }, React.createElement("div", {
    className: "btn btn-icon btn-active-light-primary",
    id: "kt_aside_mobile_toggle"
  }, React.createElement(svg_1.SideNavToggle, null))), React.createElement("div", {
    className: "d-flex align-items-center flex-grow-1 flex-lg-grow-0"
  }, React.createElement("a", {
    href: "",
    className: "d-lg-none"
  }, React.createElement("span", {
    className: "text-primary h1"
  }, "RUMA"))), React.createElement("div", {
    className: "d-flex align-items-stretch justify-content-between flex-lg-grow-1"
  }, React.createElement("div", {
    className: "d-flex align-items-stretch",
    id: "kt_header_nav"
  }), React.createElement("div", {
    className: "d-flex align-items-stretch flex-shrink-0"
  }, React.createElement("div", {
    className: "d-flex align-items-stretch flex-shrink-0"
  }, React.createElement(UserMenu_1["default"], null))))));
}

exports.default = TopNav;

/***/ })

}]);