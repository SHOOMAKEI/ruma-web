(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_general_tabs_Navigator_tsx"],{

/***/ "./resources/js/Pages/shared/components/general/tabs/Navigator.tsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/shared/components/general/tabs/Navigator.tsx ***!
  \*************************************************************************/
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

function TabsNavigator(_a) {
  var tabs = _a.tabs,
      navigatorActions = _a.navigatorActions;

  function checkActiveTab(tab) {
    if (tabs.indexOf(tab) === 0) return 'active show';
    return '';
  }

  return react_1["default"].createElement("ul", {
    className: "nav nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8"
  }, tabs.map(function (tabItem) {
    return react_1["default"].createElement("li", {
      className: "nav-item"
    }, react_1["default"].createElement("a", {
      className: "nav-link text-active-primary pb-4 " + checkActiveTab(tabItem),
      "data-bs-toggle": "tab",
      href: "#" + tabItem.id
    }, tabItem.title));
  }), react_1["default"].createElement("li", {
    className: "nav-item ms-auto"
  }, navigatorActions));
}

exports.default = TabsNavigator;

/***/ })

}]);