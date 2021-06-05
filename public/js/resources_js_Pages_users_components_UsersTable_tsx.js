(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_components_UsersTable_tsx"],{

/***/ "./resources/js/Pages/users/components/UsersTable.tsx":
/*!************************************************************!*\
  !*** ./resources/js/Pages/users/components/UsersTable.tsx ***!
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

var Employee_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/users/employees/components/Employee'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function EmployeeTable(_a) {
  var users = _a.users,
      tableHeadComponent = _a.tableHeadComponent;
  return react_1["default"].createElement("table", {
    className: "table align-middle table-row-dashed fs-6 gy-5",
    id: "kt_customers_table"
  }, react_1["default"].createElement("thead", null, react_1["default"].createElement("tr", {
    className: "text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0"
  }, react_1["default"].createElement("th", {
    className: "w-10px pe-2"
  }, react_1["default"].createElement("div", {
    className: "form-check form-check-sm form-check-custom form-check-solid me-3"
  }, react_1["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    "data-kt-check": "true",
    "data-kt-check-target": "#kt_customers_table .form-check-input",
    value: "1"
  }))), tableHeadComponent)), react_1["default"].createElement("tbody", {
    className: "fw-bold text-gray-600"
  }, users.map(function (user) {
    return react_1["default"].createElement(Employee_1["default"], {
      employee: user,
      key: user.id
    });
  })));
}

exports.default = EmployeeTable;

/***/ })

}]);