(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Sections_Information_ContactInfo_tsx"],{

/***/ "./resources/js/Pages/Profile/Sections/Information/ContactInfo.tsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Sections/Information/ContactInfo.tsx ***!
  \*************************************************************************/
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

var Section_1 = __importDefault(__webpack_require__(/*! ./Section */ "./resources/js/Pages/Profile/Sections/Information/Section.tsx"));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function PersonalInformationContactSection(_a) {
  var employee = _a.employee;
  return react_1["default"].createElement("div", {
    className: "flex-grow-1"
  }, react_1["default"].createElement("div", {
    className: "d-flex mb-3"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Phone Number"), react_1["default"].createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.mobile_number)), react_1["default"].createElement("div", {
    className: "d-flex mb-3"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Email"), react_1["default"].createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.email)));
}

exports.default = Section_1["default"]({
  title: 'Contact Information',
  Content: PersonalInformationContactSection,
  modalId: 'contact-information-modal'
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