(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_components_Employee_tsx"],{

/***/ "./resources/js/Pages/users/employees/components/Employee.tsx":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/users/employees/components/Employee.tsx ***!
  \********************************************************************/
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

var react_redux_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var employees_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@store/actions/employees'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var link_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/link'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var react_bootstrap_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var ui_utilities_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/ui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function EmployeeRow(_a) {
  var employee = _a.employee;
  var dispatch = react_redux_1.useDispatch();

  function _selectEmployee() {
    dispatch(employees_1.selectEmployee(employee));
  }

  return react_1["default"].createElement("tr", {
    key: employee.id
  }, react_1["default"].createElement("td", null, react_1["default"].createElement("div", {
    className: "form-check form-check-sm form-check-custom form-check-solid"
  }, react_1["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "1"
  }))), react_1["default"].createElement("td", null, employee.id_number), react_1["default"].createElement("td", null, employee.surname), react_1["default"].createElement("td", null, react_1["default"].createElement("a", {
    href: "#",
    className: "text-gray-600 text-hover-primary mb-1"
  }, employee.email)), react_1["default"].createElement("td", {
    "data-filter": "mastercard"
  }, employee.mobile_number), react_1["default"].createElement("td", {
    className: "text-end"
  }, react_1["default"].createElement(react_bootstrap_1.Dropdown, null, react_1["default"].createElement(react_bootstrap_1.Dropdown.Toggle, {
    cssClass: "btn btn-sm btn-light btn-active-light-primary",
    variant: "success",
    id: "dropdown-basic",
    as: ui_utilities_1.CustomButtonDropdownToggle
  }, "Actions", react_1["default"].createElement(svg_1.DropdownIcon, null)), react_1["default"].createElement(react_bootstrap_1.Dropdown.Menu, {
    className: "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px"
  }, react_1["default"].createElement(react_bootstrap_1.Dropdown.Item, {
    as: ui_utilities_1.CustomDropdownMenuItem
  }, react_1["default"].createElement(link_1["default"], {
    href: '/users/employees/profile'
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "menu-link px-3",
    onClick: _selectEmployee
  }, "View"))), react_1["default"].createElement(react_bootstrap_1.Dropdown.Item, {
    as: ui_utilities_1.CustomDropdownMenuItem
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "menu-link px-3",
    "data-kt-customer-table-filter": "delete_row"
  }, "Delete"))))));
}

exports.default = EmployeeRow;

/***/ })

}]);