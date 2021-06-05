(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_products_components_AddDeviceModal_tsx"],{

/***/ "./resources/js/Pages/products/components/AddDeviceModal.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/products/components/AddDeviceModal.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var svg_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/icons/svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function AddDeviceModal() {
  return React.createElement("div", {
    className: "modal fade",
    id: "kt_modal_add_payment",
    tabIndex: -1,
    style: {
      display: 'none',
      paddingRight: 4 + 'px'
    },
    "aria-modal": "true",
    role: "dialog"
  }, React.createElement("div", {
    className: "modal-dialog mw-650px"
  }, React.createElement("div", {
    className: "modal-content"
  }, React.createElement("div", {
    className: "modal-header"
  }, React.createElement("h2", {
    className: "fw-bolder"
  }, "Add a new Device"), React.createElement("div", {
    "data-bs-dismiss": "modal",
    "aria-label": "Close",
    className: "btn btn-icon btn-sm btn-active-icon-primary"
  }, React.createElement(svg_1.CloseIcon, null))), React.createElement("div", {
    className: "modal-body scroll-y mx-5 mx-xl-15 my-7"
  }, React.createElement("form", {
    className: "form fv-plugins-bootstrap5 fv-plugins-framework"
  }, React.createElement("div", {
    className: "fv-row mb-7 fv-plugins-icon-container"
  }, React.createElement("label", {
    className: "fs-6 fw-bold form-label mb-2"
  }, React.createElement("span", {
    className: "required"
  }, "Device Name")), React.createElement("input", {
    type: "text",
    className: "form-control form-control-solid",
    name: "invoice",
    value: ""
  }), React.createElement("div", {
    className: "fv-plugins-message-container"
  })), React.createElement("div", {
    className: "fv-row mb-7 fv-plugins-icon-container"
  }, React.createElement("label", {
    className: "required fs-6 fw-bold form-label mb-2"
  }, "Company"), React.createElement("select", {
    className: "form-select form-select-solid",
    "aria-label": "Select example"
  }, React.createElement("option", null, "Open to select company"), React.createElement("option", {
    value: "1"
  }, "Company One"), React.createElement("option", {
    value: "2"
  }, "Company Two"), React.createElement("option", {
    value: "3"
  }, "Company Three"))), React.createElement("div", {
    className: "text-center"
  }, React.createElement("button", {
    type: "reset",
    "data-bs-dismiss": "modal",
    "aria-label": "Close",
    className: "btn btn-white me-3"
  }, "Discard"), React.createElement("button", {
    id: "kt_modal_add_payment_submit",
    className: "btn btn-primary"
  }, React.createElement("span", {
    className: "indicator-label"
  }, "Add"), React.createElement("span", {
    className: "indicator-progress"
  }, "Please wait...", React.createElement("span", {
    className: "spinner-border spinner-border-sm align-middle ms-2"
  })))))))));
}

exports.default = AddDeviceModal;

/***/ })

}]);