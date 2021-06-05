(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_sections_information_Company_tsx"],{

/***/ "./resources/js/Pages/users/employees/sections/information/Company.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/users/employees/sections/information/Company.tsx ***!
  \*****************************************************************************/
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

var Section_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/users/employees/sections/information/Section'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

function PersonalInformationCompanySection(_a) {
  var _b, _c;

  var employee = _a.employee;
  return React.createElement("div", {
    className: "flex-grow-1"
  }, React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Companies"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, (_c = (_b = employee.account) === null || _b === void 0 ? void 0 : _b.companies) === null || _c === void 0 ? void 0 : _c.map(function (company) {
    return (company === null || company === void 0 ? void 0 : company.name) + ", ";
  }))));
}

exports.default = Section_1["default"]({
  title: 'Company Information',
  Content: PersonalInformationCompanySection,
  modalId: 'company-information-modal'
});

/***/ })

}]);