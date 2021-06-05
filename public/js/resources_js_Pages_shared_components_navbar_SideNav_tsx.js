(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_navbar_SideNav_tsx"],{

/***/ "./resources/js/Pages/shared/components/navbar/SideNav.tsx":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/shared/components/navbar/SideNav.tsx ***!
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

var Menu_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/navbar/Menu'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var sidebar_links_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/navbar/sidebar-links'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var svg_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/icons/svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function SideNav() {
  return React.createElement("div", {
    id: "kt_aside",
    className: "aside aside-dark aside-hoverable",
    "data-kt-drawer": "true",
    "data-kt-drawer-name": "aside",
    "data-kt-drawer-activate": "{default: true, lg: false}",
    "data-kt-drawer-overlay": "true",
    "data-kt-drawer-width": "{default:'200px', '300px': '250px'}",
    "data-kt-drawer-direction": "start",
    "data-kt-drawer-toggle": "#kt_aside_mobile_toggle"
  }, React.createElement("div", {
    className: "aside-logo flex-column-auto",
    id: "kt_aside_logo"
  }, React.createElement("a", {
    href: ""
  }, React.createElement("span", {
    className: "text-white h1"
  }, "RUMA")), React.createElement("div", {
    id: "kt_aside_toggle",
    className: "btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle",
    "data-kt-toggle": "true",
    "data-kt-toggle-state": "active",
    "data-kt-toggle-target": "body",
    "data-kt-toggle-name": "aside-minimize"
  }, React.createElement(svg_1.SideNavCollapse, null))), React.createElement("div", {
    className: "aside-menu flex-column-fluid"
  }, React.createElement("div", {
    className: "hover-scroll-overlay-y my-5 my-lg-5",
    id: "kt_aside_menu_wrapper",
    "data-kt-scroll": "true",
    "data-kt-scroll-activate": "{default: false, lg: true}",
    "data-kt-scroll-height": "auto",
    "data-kt-scroll-dependencies": "#kt_aside_logo, #kt_aside_footer",
    "data-kt-scroll-wrappers": "#kt_aside_menu",
    "data-kt-scroll-offset": "0"
  }, React.createElement("div", {
    className: "menu menu-column menu-title-gray-800 menu-state-title-primary\r\n                    menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500",
    id: "#kt_aside_menu",
    "data-kt-menu": "true"
  }, sidebar_links_1.dropdownMenus.map(function (menu) {
    return React.createElement(Menu_1["default"], {
      menu: menu
    });
  })))), React.createElement("div", {
    className: "aside-footer flex-column-auto",
    id: "kt_aside_footer"
  }));
}

exports.default = SideNav;

/***/ })

}]);