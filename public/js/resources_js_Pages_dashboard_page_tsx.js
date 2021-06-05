(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_dashboard_page_tsx"],{

/***/ "./resources/js/Pages/Shared/containers/Framework.tsx":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Shared/containers/Framework.tsx ***!
  \************************************************************/
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

var SideNav_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/navbar/SideNav'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var TopNav_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/navbar/TopNav'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var Footer_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/Footer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var head_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/head'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var website_config_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../website.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var Toolbar_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/navbar/Toolbar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

function Framework(_a) {
  var children = _a.children,
      title = _a.title,
      toolBarLeftContent = _a.toolBarLeftContent;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(head_1["default"], null, react_1["default"].createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), react_1["default"].createElement("meta", {
    charSet: "utf-8"
  }), react_1["default"].createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), react_1["default"].createElement("meta", {
    name: "og:title",
    content: website_config_1.siteTitle
  }), react_1["default"].createElement("meta", {
    name: "description",
    content: website_config_1.siteDescription
  }), react_1["default"].createElement("meta", {
    name: "author",
    content: website_config_1.author
  }), react_1["default"].createElement("title", null, website_config_1.siteTitle)), react_1["default"].createElement("main", {
    className: "page d-flex flex-row flex-column-fluid"
  }, react_1["default"].createElement(SideNav_1["default"], null), react_1["default"].createElement("div", {
    className: "wrapper d-flex flex-column flex-row-fluid",
    id: "kt_wrapper"
  }, react_1["default"].createElement(TopNav_1["default"], null), react_1["default"].createElement("div", {
    className: "content d-flex flex-column flex-column-fluid",
    id: "kt_content"
  }, react_1["default"].createElement(Toolbar_1["default"], {
    title: title,
    leftContent: toolBarLeftContent
  }), react_1["default"].createElement("div", {
    className: "post d-flex flex-column-fluid",
    id: "kt_post"
  }, react_1["default"].createElement("div", {
    id: "kt_content_container",
    className: "container"
  }, children))), react_1["default"].createElement(Footer_1["default"], null))));
}

exports.default = Framework;

/***/ }),

/***/ "./resources/js/Pages/dashboard.page.tsx":
/*!***********************************************!*\
  !*** ./resources/js/Pages/dashboard.page.tsx ***!
  \***********************************************/
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

var Framework_1 = __importDefault(__webpack_require__(/*! @/Pages/Shared/containers/Framework */ "./resources/js/Pages/Shared/containers/Framework.tsx"));

function Dashboard() {
  return react_1["default"].createElement(Framework_1["default"], {
    title: 'Dashboard'
  }, react_1["default"].createElement("div", null, "hello"));
}

exports.default = Dashboard;

/***/ })

}]);