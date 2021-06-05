(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_navbar_Toolbar_tsx"],{

/***/ "./resources/js/Pages/shared/components/navbar/Toolbar.tsx":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/shared/components/navbar/Toolbar.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function ToolBar(_a) {
  var title = _a.title,
      leftContent = _a.leftContent;
  return React.createElement("div", {
    className: "toolbar",
    id: "kt_toolbar"
  }, React.createElement("div", {
    id: "kt_toolbar_container",
    className: "container-fluid d-flex flex-stack"
  }, React.createElement("div", {
    "data-kt-place": "true",
    "data-kt-place-mode": "prepend",
    "data-kt-place-parent": "{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}",
    className: "page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1"
  }, React.createElement("h1", {
    className: "d-flex align-items-center text-dark fw-bolder my-1 fs-3"
  }, title), React.createElement("span", {
    className: "h-20px border-gray-200 border-start mx-4"
  })), React.createElement("div", {
    className: "d-flex align-items-center py-1"
  }, leftContent)));
}

exports.default = ToolBar;

/***/ })

}]);