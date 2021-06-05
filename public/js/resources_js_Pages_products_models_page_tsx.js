(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_products_models_page_tsx"],{

/***/ "./resources/js/Pages/products/models.page.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/products/models.page.tsx ***!
  \*****************************************************/
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

var SearchBar_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/SearchBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var svg_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/icons/svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var EditDeviceModal_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/products/components/EditDeviceModal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var Framework_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/containers/Framework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_bootstrap_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var ui_utilities_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/ui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function ModelsPage() {
  function searchProducts(text) {}

  return react_1["default"].createElement(Framework_1["default"], {
    title: 'Products'
  }, react_1["default"].createElement("div", {
    className: "card"
  }, react_1["default"].createElement("div", {
    className: "card-header border-0 pt-5"
  }, react_1["default"].createElement("h3", {
    className: "card-title align-items-start flex-column"
  }, react_1["default"].createElement("span", {
    className: "card-label fw-bolder fs-3 mb-1"
  }, "Models"), react_1["default"].createElement("span", {
    className: "text-muted mt-1 fw-bold fs-7"
  }, "Over 13900 models")), react_1["default"].createElement("div", {
    className: "card-toolbar align-items-center"
  }, react_1["default"].createElement(SearchBar_1["default"], {
    onSearch: searchProducts,
    placeHolder: "Search Products"
  }))), react_1["default"].createElement("div", {
    className: "card-body pt-0"
  }, react_1["default"].createElement("table", {
    id: "kt_datatable_example_1",
    className: "table align-middle table-row-dashed gy-5"
  }, react_1["default"].createElement("thead", null, react_1["default"].createElement("tr", {
    className: "fw-bolder text-muted"
  }, react_1["default"].createElement("th", {
    className: "w-25px"
  }, react_1["default"].createElement("div", {
    className: "form-check form-check-sm form-check-custom form-check-solid"
  }, react_1["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "1",
    "data-kt-check": "true",
    "data-kt-check-target": ".widget-9-check"
  }))), react_1["default"].createElement("th", {
    className: "min-w-120px"
  }, "ID"), react_1["default"].createElement("th", {
    className: "min-w-150px"
  }, "Name"), react_1["default"].createElement("th", {
    className: "min-w-120px"
  }, "Color"), react_1["default"].createElement("th", {
    className: "min-w-120px"
  }, "RAM"), react_1["default"].createElement("th", {
    className: "min-w-120px"
  }, "ROM"), react_1["default"].createElement("th", {
    className: "min-w-120px"
  }, "CIF Lagos Price"), react_1["default"].createElement("th", {
    className: "min-w-120px"
  }, "RDP Price"), react_1["default"].createElement("th", {
    className: "min-w-120px"
  }, "RRP Price"), react_1["default"].createElement("th", {
    className: "min-w-100px"
  }, "Actions"))), react_1["default"].createElement("tbody", null, react_1["default"].createElement("tr", null, react_1["default"].createElement("td", null, react_1["default"].createElement("div", {
    className: "form-check form-check-sm form-check-custom form-check-solid"
  }, react_1["default"].createElement("input", {
    className: "form-check-input widget-9-check",
    type: "checkbox",
    value: "1"
  }))), react_1["default"].createElement("td", null, "23434443"), react_1["default"].createElement("td", null, "Redmi Note 9"), react_1["default"].createElement("td", null, "Space Grey"), react_1["default"].createElement("td", null, "3GB"), react_1["default"].createElement("td", null, "4GB"), react_1["default"].createElement("td", null, "\u20A662,524.00"), react_1["default"].createElement("td", null, "\u20A666,000.00"), react_1["default"].createElement("td", null, "\u20A669,000.00"), react_1["default"].createElement("td", null, react_1["default"].createElement(react_bootstrap_1.Dropdown, null, react_1["default"].createElement(react_bootstrap_1.Dropdown.Toggle, {
    cssClass: "btn btn-sm btn-light btn-active-light-primary",
    variant: "success",
    id: "dropdown-basic",
    as: ui_utilities_1.CustomButtonDropdownToggle
  }, "Actions", react_1["default"].createElement(svg_1.DropdownIcon, null)), react_1["default"].createElement(react_bootstrap_1.Dropdown.Menu, {
    className: "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px"
  }, react_1["default"].createElement(react_bootstrap_1.Dropdown.Item, {
    as: ui_utilities_1.CustomDropdownMenuItem
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "menu-link px-3"
  }, "View")), react_1["default"].createElement(react_bootstrap_1.Dropdown.Item, {
    as: ui_utilities_1.CustomDropdownMenuItem
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "menu-link px-3",
    "data-kt-customer-table-filter": "delete_row"
  }, "Delete")))))))), react_1["default"].createElement(EditDeviceModal_1["default"], null))));
}

exports.default = ModelsPage;

/***/ })

}]);