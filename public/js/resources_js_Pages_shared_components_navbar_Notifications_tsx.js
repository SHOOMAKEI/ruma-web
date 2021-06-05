(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_navbar_Notifications_tsx"],{

/***/ "./resources/js/Pages/shared/components/navbar/Notifications.tsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/shared/components/navbar/Notifications.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var svg_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/icons/svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function Notifications() {
  return React.createElement("div", {
    className: "d-flex align-items-center ms-1 ms-lg-3"
  }, React.createElement("div", {
    className: "btn btn-icon btn-active-light-primary\r\n                   position-relative w-30px h-30px w-md-40px h-md-40px",
    id: "kt_drawer_chat_toggle"
  }, React.createElement(svg_1.NotificationsIcon, null), React.createElement("span", {
    className: "bullet bullet-dot bg-success h-6px w-6px\r\n                position-absolute translate-middle top-0 start-50 animation-blink"
  })));
}

exports.default = Notifications;

/***/ })

}]);