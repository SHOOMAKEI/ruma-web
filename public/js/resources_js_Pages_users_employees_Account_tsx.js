(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_Account_tsx"],{

/***/ "./resources/js/Pages/users/employees/Account.tsx":
/*!********************************************************!*\
  !*** ./resources/js/Pages/users/employees/Account.tsx ***!
  \********************************************************/
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

var Roles_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/users/employees/sections/account/Roles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var Permissions_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/users/employees/sections/account/Permissions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

function EmployeeAccountTab() {
  return React.createElement("div", null, React.createElement(Roles_1["default"], null), React.createElement(Permissions_1["default"], null));
}

exports.default = EmployeeAccountTab;

/***/ })

}]);