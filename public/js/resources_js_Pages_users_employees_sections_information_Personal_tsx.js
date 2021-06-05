(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_sections_information_Personal_tsx"],{

/***/ "./resources/js/Pages/users/employees/sections/information/Personal.tsx":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/users/employees/sections/information/Personal.tsx ***!
  \******************************************************************************/
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

function PersonalInformationSection(_a) {
  var _b, _c;

  var employee = _a.employee;
  return React.createElement("div", {
    className: "d-flex flex-wrap flex-sm-nowrap mb-3"
  }, React.createElement("div", {
    className: "me-7 mb-4"
  }, React.createElement("div", {
    className: "col-lg-8"
  }, React.createElement("div", {
    className: "image-input image-input-outline",
    "data-kt-image-input": "true",
    style: {
      backgroundImage: "url('/images/utils/blank.png')"
    }
  }, React.createElement("div", {
    className: "image-input-wrapper w-125px h-125px",
    style: {
      backgroundImage: "url('/images/models/avatar.jpg')"
    }
  }), React.createElement("label", {
    className: "btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow",
    "data-kt-image-input-action": "change",
    "data-bs-toggle": "tooltip",
    title: "",
    "data-bs-original-title": "Change avatar"
  }, React.createElement("i", {
    className: "bi bi-pencil-fill fs-7"
  }), React.createElement("input", {
    type: "file",
    name: "avatar",
    accept: ".png, .jpg, .jpeg"
  }), React.createElement("input", {
    type: "hidden",
    name: "avatar_remove"
  })), React.createElement("span", {
    className: "btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow",
    "data-kt-image-input-action": "cancel",
    "data-bs-toggle": "tooltip",
    title: "",
    "data-bs-original-title": "Cancel avatar"
  }, React.createElement("i", {
    className: "bi bi-x fs-2"
  })), React.createElement("span", {
    className: "btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow",
    "data-kt-image-input-action": "remove",
    "data-bs-toggle": "tooltip",
    title: "",
    "data-bs-original-title": "Remove avatar"
  }, React.createElement("i", {
    className: "bi bi-x fs-2"
  }))), React.createElement("div", {
    className: "form-text"
  }, "Allowed file types: png, jpg, jpeg."))), React.createElement("div", {
    className: "flex-grow-1"
  }, React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "ID Number"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.id_number)), React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Username"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, (_b = employee.account) === null || _b === void 0 ? void 0 : _b.username)), React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Surname"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.surname)), React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Other Name"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.other_name)), React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Gender"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.gender)), React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Date of birth"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.date_of_birth)), React.createElement("div", {
    className: "d-flex mb-3"
  }, React.createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Account status"), React.createElement("div", {
    className: "text-gray-800 fw-bold"
  }, (_c = employee.account) === null || _c === void 0 ? void 0 : _c.is_active))));
}

exports.default = Section_1["default"]({
  title: 'Personal Information',
  Content: PersonalInformationSection,
  modalId: 'personal-information-modal'
});

/***/ })

}]);