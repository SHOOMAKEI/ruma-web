(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_general_tabs_Content_tsx"],{

/***/ "./resources/js/Pages/shared/components/general/tabs/Content.tsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/shared/components/general/tabs/Content.tsx ***!
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function TabsContent(_a) {
  var tabs = _a.tabs;

  function checkActiveTab(tab) {
    if (tabs.indexOf(tab) === 0) return 'active show';
    return '';
  }

  return react_1["default"].createElement("div", {
    className: "tab-content",
    id: "myTabContent"
  }, tabs.map(function (tabItem) {
    return react_1["default"].createElement("div", {
      className: "tab-pane fade " + checkActiveTab(tabItem),
      id: tabItem.id,
      role: "tabpanel"
    }, tabItem.component);
  }));
}

exports.default = TabsContent;

/***/ })

}]);