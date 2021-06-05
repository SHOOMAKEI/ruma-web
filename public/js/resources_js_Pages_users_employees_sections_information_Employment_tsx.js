(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_sections_information_Employment_tsx"],{

/***/ "./resources/js/Pages/users/employees/sections/information/Employment.tsx":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/users/employees/sections/information/Employment.tsx ***!
  \********************************************************************************/
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

function PersonalInformationEmploymentSection(_a) {
  var employee = _a.employee;
  return React.createElement("div", {
    className: "flex-grow-1"
  }, React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Employment Status"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.employment_status)), React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Job Status"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.job_status)));
}

exports.default = Section_1["default"]({
  title: 'Employment',
  Content: PersonalInformationEmploymentSection,
  modalId: 'employment-information-modal'
});

/***/ })

}]);