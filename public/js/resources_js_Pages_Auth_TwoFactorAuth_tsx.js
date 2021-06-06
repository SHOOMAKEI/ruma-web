(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_TwoFactorAuth_tsx"],{

/***/ "./resources/js/Pages/Auth/AuthFramework.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Auth/AuthFramework.tsx ***!
  \***************************************************/
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

function AuthFramework(_a) {
  var children = _a.children,
      illustrationUrl = _a.illustrationUrl,
      title = _a.title,
      subtitle = _a.subtitle;
  return react_1["default"].createElement("div", {
    className: "d-flex flex-column flex-root"
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-column flex-lg-row flex-column-fluid"
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-column flex-lg-row-auto w-xl-600px position-xl-relative",
    style: {
      backgroundColor: '#F7FAF7'
    }
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px"
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-row-fluid flex-column text-center p-6 pt-lg-20"
  }, react_1["default"].createElement("a", {
    href: "",
    className: "py-9"
  }, react_1["default"].createElement("img", {
    alt: "Logo",
    src: "/assets/images/brand/logo.svg",
    style: {
      width: '230px',
      height: '230px'
    }
  }))), react_1["default"].createElement("img", {
    src: illustrationUrl,
    className: "d-none d-lg-block",
    alt: 'illustration'
  }))), react_1["default"].createElement("div", {
    className: "d-flex flex-column flex-lg-row-fluid py-10"
  }, react_1["default"].createElement("div", {
    className: "d-flex flex-center flex-column flex-column-fluid"
  }, react_1["default"].createElement("div", {
    className: "w-100 w-md-50 w-lg-500px p-10 p-lg-15 mx-auto"
  }, react_1["default"].createElement("div", {
    className: "mb-6"
  }, react_1["default"].createElement("h1", {
    className: "text-dark mb-3 auth-heading"
  }, title), react_1["default"].createElement("p", {
    className: "h4 mb-3 fw-light"
  }, subtitle)), children)))));
}

exports.default = AuthFramework;

/***/ }),

/***/ "./resources/js/Pages/Auth/TwoFactorAuth.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Auth/TwoFactorAuth.tsx ***!
  \***************************************************/
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

var TextInput_1 = __importDefault(__webpack_require__(/*! ../../Shared/TextInput */ "./resources/js/Shared/TextInput.tsx"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var LoadingButton_1 = __importDefault(__webpack_require__(/*! ../../Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.tsx"));

var AuthFramework_1 = __importDefault(__webpack_require__(/*! ./AuthFramework */ "./resources/js/Pages/Auth/AuthFramework.tsx"));

var ILLUSTRATION_URL = '/assets/images/illustrations/login.svg';
var TITLE = 'Two Factor Verification';
var SUBTITLE = 'Please provide verification code sent to your email or verification code from your authenticator app';

exports.default = function () {
  var status = inertia_react_1.usePage().props.status;

  var _a = inertia_react_1.useForm({
    username: '',
    two_factory_code: '',
    recovery_code: ''
  }),
      data = _a.data,
      setData = _a.setData,
      errors = _a.errors,
      post = _a.post,
      processing = _a.processing;

  function handleSubmit(e) {
    e.preventDefault();
    inertia_1.Inertia.post(ziggy_js_1["default"]('two-factor.login'));
  }

  return react_1["default"].createElement(AuthFramework_1["default"], {
    illustrationUrl: ILLUSTRATION_URL,
    title: TITLE,
    subtitle: SUBTITLE
  }, react_1["default"].createElement("ul", {
    className: "nav nav-tabs nav-line-tabs mb-15 fs-6"
  }, react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement("a", {
    className: "nav-link active",
    "data-bs-toggle": "tab",
    href: "#kt_tab_pane_1"
  }, "Two Factor")), react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement("a", {
    className: "nav-link",
    "data-bs-toggle": "tab",
    href: "#kt_tab_pane_2"
  }, "Verification Code"))), react_1["default"].createElement("div", {
    className: "tab-content",
    id: "myTabContent"
  }, react_1["default"].createElement("div", {
    className: "tab-pane fade show active",
    id: "kt_tab_pane_1",
    role: "tabpanel"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "form w-100"
  }, react_1["default"].createElement("div", {
    className: "fv-row mb-5"
  }, react_1["default"].createElement(TextInput_1["default"], {
    className: "mt-10",
    label: "Two Factor Code",
    name: "two_factory_code",
    type: "text",
    errors: errors.two_factory_code,
    value: data.two_factory_code,
    onChange: function onChange(e) {
      return setData('two_factory_code', e.target.value);
    }
  })), react_1["default"].createElement("div", {
    className: "fv-row "
  }, react_1["default"].createElement(LoadingButton_1["default"], {
    type: "submit",
    loading: processing
  }, "Verify"), react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: ziggy_js_1["default"]('login'),
    className: "btn btn-light-primary",
    style: {
      marginLeft: '1rem'
    }
  }, react_1["default"].createElement("span", {
    className: "indicator-label h4"
  }, "Cancel"))))), react_1["default"].createElement("div", {
    className: "tab-pane fade",
    id: "kt_tab_pane_2",
    role: "tabpanel"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "form w-100"
  }, react_1["default"].createElement("div", {
    className: "fv-row mb-5"
  }, react_1["default"].createElement(TextInput_1["default"], {
    className: "mt-10",
    label: "Recovery Code",
    name: "recovery_code",
    type: "text",
    errors: errors.recovery_code,
    value: data.recovery_code,
    onChange: function onChange(e) {
      return setData('recovery_code', e.target.value);
    }
  })), react_1["default"].createElement("div", {
    className: "fv-row "
  }, react_1["default"].createElement(LoadingButton_1["default"], {
    type: "submit",
    loading: processing
  }, "Verify"), react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: ziggy_js_1["default"]('login'),
    className: "btn btn-light-primary",
    style: {
      marginLeft: '1rem'
    }
  }, react_1["default"].createElement("span", {
    className: "indicator-label h4"
  }, "Cancel")))))));
};

/***/ }),

/***/ "./resources/js/Shared/LoadingButton.tsx":
/*!***********************************************!*\
  !*** ./resources/js/Shared/LoadingButton.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.default = function (_a) {
  var loading = _a.loading,
      className = _a.className,
      type = _a.type,
      _b = _a.color,
      color = _b === void 0 ? 'primary' : _b,
      children = _a.children,
      props = __rest(_a, ["loading", "className", "type", "color", "children"]);

  return react_1["default"].createElement("button", __assign({
    disabled: loading,
    className: "btn btn-" + color + " " + className
  }, props, {
    "data-kt-indicator": loading ? 'on' : 'off'
  }), loading && react_1["default"].createElement("span", {
    className: "indicator-progress h4 mb-0"
  }, "Please wait... ", react_1["default"].createElement("span", {
    className: "spinner-border spinner-border-sm align-middle ms-2"
  })), react_1["default"].createElement("span", {
    className: "indicator-label h4"
  }, children));
};

/***/ }),

/***/ "./resources/js/Shared/TextInput.tsx":
/*!*******************************************!*\
  !*** ./resources/js/Shared/TextInput.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.default = function (_a) {
  var label = _a.label,
      name = _a.name,
      className = _a.className,
      errors = _a.errors,
      props = __rest(_a, ["label", "name", "className", "errors"]);

  return react_1["default"].createElement("div", {
    className: "form-group " + className
  }, label && react_1["default"].createElement("label", {
    className: "h4 mb-3 fw-light",
    htmlFor: name
  }, label), react_1["default"].createElement("input", __assign({
    id: name,
    name: name
  }, props, {
    className: "form-control form-control-solid mb-2"
  })), errors && react_1["default"].createElement("div", {
    className: "invalid-feedback text-danger mt-2",
    style: {
      display: 'block'
    }
  }, errors));
};

/***/ })

}]);