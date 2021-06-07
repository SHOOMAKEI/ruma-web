(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Sections_Account_Permissions_tsx"],{

/***/ "./resources/js/Pages/Profile/Sections/Account/Permissions.tsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Profile/Sections/Account/Permissions.tsx ***!
  \*********************************************************************/
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

var Section_1 = __importDefault(__webpack_require__(/*! ../Information/Section */ "./resources/js/Pages/Profile/Sections/Information/Section.tsx"));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var FILTERS = [{
  id: '1',
  name: 'Read'
}, {
  id: '2',
  name: 'Create'
}, {
  id: '3',
  name: 'Update'
}, {
  id: '4',
  name: 'Delete'
}];

function EmployeeAccountPermissions(_a) {
  var employee = _a.employee;
  return react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
    className: "row mb-5"
  }, react_1["default"].createElement("div", {
    className: "col"
  })), react_1["default"].createElement("div", {
    className: "row mb-8"
  }, react_1["default"].createElement("div", {
    className: "col d-flex"
  }, FILTERS.map(function (filter) {
    return react_1["default"].createElement("button", {
      type: "button",
      className: "btn btn-sm btn-flex " + 'btn-primary' + " me-3"
    }, filter.name);
  }))), react_1["default"].createElement("div", {
    className: "row"
  }));
}

exports.default = Section_1["default"]({
  title: 'Account Permissions',
  Content: EmployeeAccountPermissions,
  modalId: 'permissions-account-modal',
  showEditButton: false
});

/***/ }),

/***/ "./resources/js/Pages/Profile/Sections/Information/Section.tsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Profile/Sections/Information/Section.tsx ***!
  \*********************************************************************/
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function InformationSectionTemplate(_a) {
  var title = _a.title,
      modalId = _a.modalId,
      Content = _a.Content,
      _b = _a.showEditButton,
      showEditButton = _b === void 0 ? true : _b;
  return function () {
    return react_1["default"].createElement("section", null, react_1["default"].createElement("div", {
      className: "d-flex justify-content-between mb-5"
    }, react_1["default"].createElement("div", {
      className: "card-title mb-0"
    }, react_1["default"].createElement("h3", null, title)), react_1["default"].createElement("div", {
      className: "card-toolbar"
    }, showEditButton ? react_1["default"].createElement("button", {
      type: "button",
      className: "btn btn-sm btn-flex btn-light-primary"
    }, "Edit") : null)), react_1["default"].createElement("div", {
      className: "separator separator-dashed my-5"
    }));
  };
}

exports.default = InformationSectionTemplate;

/***/ })

}]);