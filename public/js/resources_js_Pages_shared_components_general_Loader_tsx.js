(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_general_Loader_tsx"],{

/***/ "./resources/js/Pages/shared/components/general/Loader.tsx":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/shared/components/general/Loader.tsx ***!
  \*****************************************************************/
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

var Loading_json_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@assets/json/Loading.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var react_lottie_player_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-lottie-player'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loaderStyle = {
  position: 'fixed',
  width: 180,
  height: 180,
  top: 50 + '%',
  left: 50 + '%'
};

function Loader() {
  return react_1["default"].createElement(react_lottie_player_1["default"], {
    loop: true,
    animationData: Loading_json_1["default"],
    play: true,
    speed: 2,
    style: loaderStyle
  });
}

exports.default = Loader;

/***/ })

}]);