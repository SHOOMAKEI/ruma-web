(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Sections_Account_AccountInformation_tsx"],{

/***/ "./resources/js/Pages/Profile/Sections/Account/AccountInformation.tsx":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Sections/Account/AccountInformation.tsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var TextInput_1 = __importDefault(__webpack_require__(/*! ../../../../Shared/TextInput */ "./resources/js/Shared/TextInput.tsx"));

var LoadingButton_1 = __importDefault(__webpack_require__(/*! ../../../../Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.tsx"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var SettingsContexts_1 = __webpack_require__(/*! ../../../../Shared/Contexts/SettingsContexts */ "./resources/js/Shared/Contexts/SettingsContexts.tsx");

var FileInput =
/** @class */
function (_super) {
  __extends(FileInput, _super);

  function FileInput() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FileInput.prototype.render = function () {
    return null;
  };

  return FileInput;
}(react_1["default"].Component);

exports.default = function () {
  // @ts-ignore
  var _a = react_1.useContext(SettingsContexts_1.SettingsContext),
      auth = _a.auth,
      errors = _a.errors;

  var _b = inertia_react_1.useForm({
    username: auth.user.username,
    email: auth.user.email
  }),
      data = _b.data,
      setData = _b.setData,
      post = _b.post,
      processing = _b.processing;

  function handleSubmit(e) {
    e.preventDefault();
    post(ziggy_js_1["default"]('settings.updateAccountInfo'));
  }

  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "col-12"
  }, react_1["default"].createElement("div", {
    className: "row col-lg-12"
  }, react_1["default"].createElement("div", {
    className: "col-lg-5"
  }, react_1["default"].createElement("h4", {
    className: "header-title"
  }, "Account Information"), react_1["default"].createElement("small", {
    className: "text-muted font-14"
  }, "Update your account's information, email address and mobile number. make sure your provider valid information because we will use them to send security code and other notification.")), react_1["default"].createElement("div", {
    className: "card col-lg-7"
  }, react_1["default"].createElement("div", {
    className: "card-body"
  }, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-lg-12"
  }, react_1["default"].createElement("div", {
    className: "text-left"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit
  }, react_1["default"].createElement(TextInput_1["default"], {
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "Username",
    errors: errors.username,
    value: data.username,
    onChange: function onChange(e) {
      return setData('username', e.target.value);
    }
  }), react_1["default"].createElement(TextInput_1["default"], {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Email",
    errors: errors.email,
    value: data.email,
    onChange: function onChange(e) {
      return setData('email', e.target.value);
    }
  }), react_1["default"].createElement("div", {
    className: "form-group mb-0 text-right"
  }, react_1["default"].createElement(LoadingButton_1["default"], {
    type: "submit",
    className: "btn btn-primary btn-md",
    loading: processing
  }, "Save Changes")))))))))));
};

/***/ }),

/***/ "./resources/js/Shared/Contexts/SettingsContexts.tsx":
/*!***********************************************************!*\
  !*** ./resources/js/Shared/Contexts/SettingsContexts.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SettingsContext = void 0;

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

exports.SettingsContext = react_1.createContext({});

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
      label_required = _a.label_required,
      props = __rest(_a, ["label", "name", "className", "errors", "label_required"]);

  return react_1["default"].createElement("div", {
    className: "form-group " + className
  }, label && react_1["default"].createElement("label", {
    className: "h4 mb-3 fw-light " + (label_required ? 'required form-label' : ''),
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