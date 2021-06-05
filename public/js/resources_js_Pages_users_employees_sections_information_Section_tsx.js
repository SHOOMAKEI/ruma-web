(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_sections_information_Section_tsx"],{

/***/ "./resources/js/Pages/users/employees/sections/information/Section.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/users/employees/sections/information/Section.tsx ***!
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

var react_redux_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var getEmployees = function getEmployees(state) {
  return state.employeeStore;
};

function InformationSectionTemplate(_a) {
  var title = _a.title,
      modalId = _a.modalId,
      Content = _a.Content,
      _b = _a.showEditButton,
      showEditButton = _b === void 0 ? true : _b;
  return function () {
    var selectedEmployee = react_redux_1.useSelector(getEmployees).selectedEmployee;
    return react_1["default"].createElement("section", null, react_1["default"].createElement("div", {
      className: "d-flex justify-content-between mb-5"
    }, react_1["default"].createElement("div", {
      className: "card-title mb-0"
    }, react_1["default"].createElement("h3", null, title)), react_1["default"].createElement("div", {
      className: "card-toolbar"
    }, showEditButton ? react_1["default"].createElement("button", {
      type: "button",
      className: "btn btn-sm btn-flex btn-light-primary"
    }, "Edit") : null)), react_1["default"].createElement(Content, {
      employee: selectedEmployee
    }), react_1["default"].createElement("div", {
      className: "separator separator-dashed my-5"
    }));
  };
}

exports.default = InformationSectionTemplate;

/***/ })

}]);