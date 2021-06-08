(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Sections_Account_BrowserSessions_tsx"],{

/***/ "./resources/js/Pages/Profile/Sections/Account/BrowserSessions.tsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Sections/Account/BrowserSessions.tsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


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

var LoadingButton_1 = __importDefault(__webpack_require__(/*! ../../../../Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.tsx"));

var TextInput_1 = __importDefault(__webpack_require__(/*! ../../../../Shared/TextInput */ "./resources/js/Shared/TextInput.tsx"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var SettingsContexts_1 = __webpack_require__(/*! ../../../../Shared/Contexts/SettingsContexts */ "./resources/js/Shared/Contexts/SettingsContexts.tsx");

exports.default = function () {
  // @ts-ignore
  var _a = react_1.useContext(SettingsContexts_1.SettingsContext),
      sessions = _a.sessions,
      errors = _a.errors;

  var _b = inertia_react_1.useForm({
    confirm_password: ''
  }),
      data = _b.data,
      setData = _b.setData,
      post = _b.post,
      processing = _b.processing;

  function handleSubmit(e) {
    e.preventDefault();
    post(ziggy_js_1["default"]('settings.sessions_browser'));
  } // @ts-ignore


  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "col-12"
  }, react_1["default"].createElement("div", {
    className: "row col-lg-12"
  }, react_1["default"].createElement("div", {
    className: "col-lg-5"
  }, react_1["default"].createElement("h4", {
    className: "header-title"
  }, "Browser Sessions"), react_1["default"].createElement("small", {
    className: "text-muted font-14"
  }, "Manage and logout your active sessions on other browsers and devices.")), react_1["default"].createElement("div", {
    className: "card col-lg-7"
  }, react_1["default"].createElement("div", {
    className: "card-body"
  }, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-lg-12"
  }, react_1["default"].createElement("div", {
    className: "text-left"
  }, react_1["default"].createElement("small", {
    className: " font-14"
  }, "If necessary, you may logout of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password."), react_1["default"].createElement("div", {
    className: "mt-3"
  }, sessions && sessions.length > 0 && sessions.map(function (session, index) {
    return react_1["default"].createElement("div", {
      className: "d-flex mb-3",
      key: index + 1
    }, react_1["default"].createElement("div", null, session.agent.is_desktop && react_1["default"].createElement("svg", {
      fill: "none",
      width: "32",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      className: "text-muted"
    }, react_1["default"].createElement("path", {
      d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    })), !session.agent.is_desktop && react_1["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "text-muted"
    }, react_1["default"].createElement("path", {
      d: "M0 0h24v24H0z",
      stroke: "none"
    }), react_1["default"].createElement("rect", {
      x: "7",
      y: "4",
      width: "10",
      height: "16",
      rx: "1"
    }), react_1["default"].createElement("path", {
      d: "M11 5h2M12 17v.01"
    }))), react_1["default"].createElement("div", {
      className: "px-2"
    }, react_1["default"].createElement("div", null, session.agent.platform, " - ", session.agent.browser), react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
      className: "font-14 font-weight-lighter text-muted"
    }, session.ip_address, session.is_current_device && react_1["default"].createElement("span", {
      className: "text-primary font-weight-bold ml-1 px-3"
    }, "This device"), !session.is_current_device && react_1["default"].createElement("span", {
      className: "text-secondary ml-1 font-14 px-3"
    }, "Last active  ", session.last_active)))));
  }), react_1["default"].createElement("div", {
    className: "d-flex mt-3"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit
  }, react_1["default"].createElement(TextInput_1["default"], {
    name: "confirm_password",
    type: "password",
    label: "Enter Current Password To Logout Other Browser Sessions",
    errors: errors.confirm_password,
    value: data.confirm_password,
    onChange: function onChange(e) {
      return setData('confirm_password', e.target.value);
    }
  }), react_1["default"].createElement("div", {
    className: "form-group mb-0 text-left"
  }, react_1["default"].createElement(LoadingButton_1["default"], {
    type: "submit",
    className: "btn btn-primary btn-md",
    loading: processing
  }, "Logout Other Browser Sessions")))))))))))));
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