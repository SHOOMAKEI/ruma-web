(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Sections_Account_OneTimePassword_tsx"],{

/***/ "./resources/js/Pages/Profile/Sections/Account/OneTimePassword.tsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Sections/Account/OneTimePassword.tsx ***!
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

exports.default = function () {
  var _a, _b;

  var user = inertia_react_1.usePage().props.user;

  var _c = inertia_react_1.useForm({
    username: '',
    email: ''
  }),
      data = _c.data,
      setData = _c.setData,
      errors = _c.errors,
      post = _c.post,
      processing = _c.processing;

  function handleSubmit(e) {
    e.preventDefault();
    post(ziggy_js_1["default"]('login'));
  }

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

/***/ })

}]);