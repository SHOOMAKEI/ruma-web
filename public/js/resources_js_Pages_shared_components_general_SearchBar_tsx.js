(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_general_SearchBar_tsx"],{

/***/ "./resources/js/Pages/shared/components/general/SearchBar.tsx":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/shared/components/general/SearchBar.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var svg_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/icons/svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function SearchBar(_a) {
  var onSearch = _a.onSearch,
      placeHolder = _a.placeHolder;

  function _onSearch(event) {
    onSearch(event.target.value);
  }

  return React.createElement("div", {
    className: "d-flex align-items-center position-relative my-1"
  }, React.createElement(svg_1.SearchIcon, {
    extraClasses: 'position-absolute ms-3'
  }), React.createElement("input", {
    type: "text",
    "data-kt-customer-table-filter": "search",
    className: "form-control form-control-sm form-control-solid w-250px ps-11",
    placeholder: placeHolder,
    onChange: _onSearch
  }));
}

exports.default = SearchBar;

/***/ })

}]);