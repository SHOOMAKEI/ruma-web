(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Error_tsx"],{

/***/ "./resources/js/Pages/Error.tsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Error.tsx ***!
  \**************************************/
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

exports.default = function () {
  var status = inertia_react_1.usePage().props.status;
  var title = {
    503: '503: Service Unavailable',
    500: '500: Server Error',
    404: '404: Page Not Found',
    403: '403: Forbidden'
  };
  var description = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.'
  };
  return react_1["default"].createElement("div", {
    className: "flex items-center justify-center min-h-screen p-5 text-indigo-100 bg-indigo-800"
  }, react_1["default"].createElement("div", {
    className: "w-full max-w-md"
  }, react_1["default"].createElement("h1", {
    className: "text-3xl"
  }, title[status]), react_1["default"].createElement("p", {
    className: "mt-3 text-lg leading-tight"
  }, description[status])));
};

/***/ })

}]);