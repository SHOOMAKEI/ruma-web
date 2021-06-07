(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Sections_Information_Personal_tsx"],{

/***/ "./resources/js/Pages/Profile/Sections/Information/Personal.tsx":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Profile/Sections/Information/Personal.tsx ***!
  \**********************************************************************/
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

function PersonalInformationSection(_a) {
  var _b, _c;

  var employee = _a.employee;
  return react_1["default"].createElement("div", {
    className: "d-flex flex-wrap flex-sm-nowrap mb-3"
  }, react_1["default"].createElement("div", {
    className: "me-7 mb-4"
  }, react_1["default"].createElement("div", {
    className: "col-lg-8"
  }, react_1["default"].createElement("div", {
    className: "image-input image-input-outline",
    "data-kt-image-input": "true",
    style: {
      backgroundImage: "url('/images/utils/blank.png')"
    }
  }, react_1["default"].createElement("div", {
    className: "image-input-wrapper w-125px h-125px",
    style: {
      backgroundImage: "url('/images/models/avatar.jpg')"
    }
  }), react_1["default"].createElement("label", {
    className: "btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow",
    "data-kt-image-input-action": "change",
    "data-bs-toggle": "tooltip",
    title: "",
    "data-bs-original-title": "Change avatar"
  }, react_1["default"].createElement("i", {
    className: "bi bi-pencil-fill fs-7"
  }), react_1["default"].createElement("input", {
    type: "file",
    name: "avatar",
    accept: ".png, .jpg, .jpeg"
  }), react_1["default"].createElement("input", {
    type: "hidden",
    name: "avatar_remove"
  })), react_1["default"].createElement("span", {
    className: "btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow",
    "data-kt-image-input-action": "cancel",
    "data-bs-toggle": "tooltip",
    title: "",
    "data-bs-original-title": "Cancel avatar"
  }, react_1["default"].createElement("i", {
    className: "bi bi-x fs-2"
  })), react_1["default"].createElement("span", {
    className: "btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow",
    "data-kt-image-input-action": "remove",
    "data-bs-toggle": "tooltip",
    title: "",
    "data-bs-original-title": "Remove avatar"
  }, react_1["default"].createElement("i", {
    className: "bi bi-x fs-2"
  }))), react_1["default"].createElement("div", {
    className: "form-text"
  }, "Allowed file types: png, jpg, jpeg."))), react_1["default"].createElement("div", {
    className: "flex-grow-1"
  }, react_1["default"].createElement("div", {
    className: "d-flex mb-3"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "ID Number"), react_1["default"].createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.id_number)), react_1["default"].createElement("div", {
    className: "d-flex mb-3"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Username"), react_1["default"].createElement("div", {
    className: "text-gray-800 fw-bold"
  }, (_b = employee.account) === null || _b === void 0 ? void 0 : _b.username)), react_1["default"].createElement("div", {
    className: "d-flex mb-3"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Surname"), react_1["default"].createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.surname)), react_1["default"].createElement("div", {
    className: "d-flex mb-3"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Other Name"), react_1["default"].createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.other_name)), react_1["default"].createElement("div", {
    className: "d-flex mb-3"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Gender"), react_1["default"].createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.gender)), react_1["default"].createElement("div", {
    className: "d-flex mb-3"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Date of birth"), react_1["default"].createElement("div", {
    className: "text-gray-800 fw-bold"
  }, employee.date_of_birth)), react_1["default"].createElement("div", {
    className: "d-flex mb-3"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 fw-bold w-125px"
  }, "Account status"), react_1["default"].createElement("div", {
    className: "text-gray-800 fw-bold"
  }, (_c = employee.account) === null || _c === void 0 ? void 0 : _c.is_active))));
}

exports.default = Section_1["default"]({
  title: 'Personal Information',
  Content: PersonalInformationSection,
  modalId: 'personal-information-modal'
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