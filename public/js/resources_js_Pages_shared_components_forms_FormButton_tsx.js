(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_forms_FormButton_tsx"],{

/***/ "./resources/js/Pages/shared/components/forms/FormButton.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/shared/components/forms/FormButton.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function FormButton(_a) {
  var label = _a.label,
      loading = _a.loading,
      _b = _a.type,
      type = _b === void 0 ? 'primary' : _b;
  return React.createElement("button", {
    type: "submit",
    className: "btn btn-" + type,
    "data-kt-indicator": loading ? 'on' : 'off'
  }, React.createElement("span", {
    className: "indicator-label h4"
  }, label), React.createElement("span", {
    className: "indicator-progress h4 mb-0"
  }, "Please wait... ", React.createElement("span", {
    className: "spinner-border spinner-border-sm align-middle ms-2"
  })));
}

exports.default = FormButton;

/***/ })

}]);