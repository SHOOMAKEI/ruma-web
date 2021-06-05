(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_products_components_Device_tsx"],{

/***/ "./resources/js/Pages/products/components/Device.tsx":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/products/components/Device.tsx ***!
  \***********************************************************/
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

var svg_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/icons/svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var link_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/link'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

function Device() {
  return React.createElement("tr", null, React.createElement("td", null, React.createElement("div", {
    className: "form-check form-check-sm form-check-custom form-check-solid"
  }, React.createElement("input", {
    className: "form-check-input widget-9-check",
    type: "checkbox",
    value: "1"
  }))), React.createElement("td", null, React.createElement("div", {
    className: "d-flex align-items-center"
  }, React.createElement("div", {
    className: "d-flex justify-content-start flex-column"
  }, React.createElement(link_1["default"], {
    href: '/products/models'
  }, React.createElement("a", {
    href: "#",
    className: "text-dark fw-bolder text-hover-primary fs-6"
  }, "Redmi Note 9")), React.createElement("span", {
    className: "text-muted fw-bold text-muted d-block fs-7"
  }, "10 models")))), React.createElement("td", null, React.createElement("a", {
    href: "#",
    className: "text-dark fw-bolder text-hover-primary d-block fs-6"
  }, "Dummy Company"), React.createElement("span", {
    className: "text-muted fw-bold text-muted d-block fs-7"
  }, "ID: 434234DFD")), React.createElement("td", {
    className: "text-end"
  }, React.createElement("div", {
    className: "d-flex flex-column w-100 me-2"
  }, React.createElement("div", {
    className: "d-flex flex-stack mb-2"
  }, React.createElement("span", {
    className: "text-muted me-2 fs-7 fw-bold"
  }, "50%")), React.createElement("div", {
    className: "progress h-6px w-100"
  }, React.createElement("div", {
    className: "progress-bar bg-primary",
    role: "progressbar",
    style: {
      width: 50 + '%'
    },
    "aria-valuenow": 50,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  })))), React.createElement("td", {
    className: "text-end"
  }, React.createElement("button", {
    "data-bs-toggle": "modal",
    "data-bs-target": "#kt_modal_edit_payment",
    className: "btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
  }, React.createElement(svg_1.EditIcon, null)), React.createElement("a", {
    href: "#",
    className: "btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
  }, React.createElement(svg_1.DeleteIcon, null))));
}

exports.default = Device;

/***/ })

}]);