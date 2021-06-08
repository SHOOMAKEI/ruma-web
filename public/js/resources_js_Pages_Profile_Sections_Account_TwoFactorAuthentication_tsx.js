(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Sections_Account_TwoFactorAuthentication_tsx"],{

/***/ "./resources/js/Pages/Profile/Sections/Account/TwoFactorAuthentication.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Sections/Account/TwoFactorAuthentication.tsx ***!
  \*********************************************************************************/
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

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var SettingsContexts_1 = __webpack_require__(/*! ../../../../Shared/Contexts/SettingsContexts */ "./resources/js/Shared/Contexts/SettingsContexts.tsx");

exports.default = function () {
  var _a, _b, _c; // const {profile, auth, settings, sessions} = usePage().props
  // @ts-ignore


  var _d = react_1.useContext(SettingsContexts_1.SettingsContext),
      settings = _d.settings,
      auth = _d.auth; // @ts-ignore


  var user = auth.user;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "col-12"
  }, react_1["default"].createElement("div", {
    className: "row col-lg-12"
  }, react_1["default"].createElement("div", {
    className: "col-lg-5"
  }, react_1["default"].createElement("h4", {
    className: "header-title"
  }, "Two Factor Authentication"), react_1["default"].createElement("small", {
    className: "text-muted font-14"
  }, "Additional security to your account using two factor authentication.")), react_1["default"].createElement("div", {
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
  }, "When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application."), ((_a = user.settings) === null || _a === void 0 ? void 0 : _a.has_enable_two_factory_auth) ? react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "mt-3"
  }, react_1["default"].createElement("small", {
    className: "font-14"
  }, "Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application.")), react_1["default"].createElement("div", {
    className: "mt-4",
    dangerouslySetInnerHTML: {
      __html: settings.qrcode_svg
    }
  }), react_1["default"].createElement("div", {
    className: "my-4"
  }, react_1["default"].createElement("small", {
    className: " font-14"
  }, "Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.")), react_1["default"].createElement("div", {
    className: "w-75 bg-light rounded p-3 mb-2"
  }, settings && ((_c = (_b = settings) === null || _b === void 0 ? void 0 : _b.two_factor_recovery_codes) === null || _c === void 0 ? void 0 : _c.map(function (code, index) {
    return react_1["default"].createElement("div", {
      key: index + 1,
      className: "py-1"
    }, code.code);
  }))), react_1["default"].createElement("div", {
    className: "form-group mt-3 text-left"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: ziggy_js_1["default"]('settings.recovery_code'),
    className: "btn btn-primary btn-md mx-3"
  }, "Generate Recovery Code"), react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: ziggy_js_1["default"]('settings.toggle2fa'),
    className: "btn btn-danger btn-md"
  }, "Disable"))) : react_1["default"].createElement("div", {
    className: "form-group mt-3 text-left"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: ziggy_js_1["default"]('settings.toggle2fa'),
    className: "btn btn-primary btn-md"
  }, "Enable"))))))))));
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

/***/ })

}]);