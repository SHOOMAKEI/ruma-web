(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Sections_Account_OneTimePassword_tsx"],{

/***/ "./resources/js/Pages/Profile/Sections/Account/OneTimePassword.tsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Sections/Account/OneTimePassword.tsx ***!
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

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var SettingsContexts_1 = __webpack_require__(/*! ../../../../Shared/Contexts/SettingsContexts */ "./resources/js/Shared/Contexts/SettingsContexts.tsx");

exports.default = function () {
  var _a, _b; // @ts-ignore


  var auth = react_1.useContext(SettingsContexts_1.SettingsContext).auth; // @ts-ignore

  var user = auth.user;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "col-12"
  }, react_1["default"].createElement("div", {
    className: "row col-lg-12"
  }, react_1["default"].createElement("div", {
    className: "col-lg-5"
  }, react_1["default"].createElement("h4", {
    className: "header-title"
  }, "One Time Password Authentication"), react_1["default"].createElement("small", {
    className: "text-muted font-14"
  }, "Add additional security to your account using OTP (One Time Password Authentication).")), react_1["default"].createElement("div", {
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
  }, "When OTP (One Time Password Authentication) is enabled, you will be prompted for a secure, random code that's sent to your mobile number during authentication. You may retrieve this code from sms that we sent to you."), ((_a = user.settings) === null || _a === void 0 ? void 0 : _a.has_enable_otp) ? react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("br", null), react_1["default"].createElement("br", null), react_1["default"].createElement("small", {
    className: " font-14"
  }, "The OTP (One Time Password Authentication) code will be sent to this number ", react_1["default"].createElement("strong", null, user.email), " .")) : '', ((_b = user.settings) === null || _b === void 0 ? void 0 : _b.has_enable_otp) ? react_1["default"].createElement("div", {
    className: "form-group mt-3 text-left"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: ziggy_js_1["default"]('settings.toggleOTP'),
    className: "btn btn-danger btn-md"
  }, "Disable")) : react_1["default"].createElement("div", {
    className: "form-group mt-3 text-left"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: ziggy_js_1["default"]('settings.toggleOTP'),
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