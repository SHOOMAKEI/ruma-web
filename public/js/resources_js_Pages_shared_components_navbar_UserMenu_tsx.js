(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_navbar_UserMenu_tsx"],{

/***/ "./resources/js/Pages/shared/components/navbar/UserMenu.tsx":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/shared/components/navbar/UserMenu.tsx ***!
  \******************************************************************/
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

var withAuth_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/auth/withAuth'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var react_bootstrap_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ui_utilities_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/ui-utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var react_cookie_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-cookie'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var router_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var CustomToggle = react_1["default"].forwardRef(function (_a, ref) {
  var children = _a.children,
      _onClick = _a.onClick;
  return (// @ts-ignore
    react_1["default"].createElement("div", {
      ref: ref,
      onClick: function onClick(e) {
        e.preventDefault();

        _onClick(e);
      }
    }, children)
  );
});

function UserMenu(_a) {
  var user = _a.user;

  var _b = react_cookie_1.useCookies(['token', 'token_type', 'expires_in']),
      cookies = _b[0],
      setCookie = _b[1],
      removeCookies = _b[2];

  var router = router_1.useRouter();

  function logout() {
    removeCookies('token', {
      path: '/'
    });
    removeCookies('token_type', {
      path: '/'
    });
    removeCookies('expires_in', {
      path: '/'
    });
    router.push('/auth/login');
  }

  return react_1["default"].createElement("div", {
    className: "d-flex align-items-center ms-1 ms-lg-3",
    id: "kt_header_user_menu_toggle"
  }, react_1["default"].createElement("div", {
    className: ""
  }, react_1["default"].createElement(react_bootstrap_1.Dropdown, null, react_1["default"].createElement(react_bootstrap_1.Dropdown.Toggle, {
    variant: "success",
    id: "dropdown-basic",
    as: CustomToggle
  }, react_1["default"].createElement("div", {
    className: "cursor-pointer symbol symbol-30px symbol-md-40px"
  }, react_1["default"].createElement("img", {
    src: '/images/models/avatar.jpg',
    alt: "metronic"
  }))), react_1["default"].createElement(react_bootstrap_1.Dropdown.Menu, {
    className: "menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px"
  }, react_1["default"].createElement(react_bootstrap_1.Dropdown.Header, {
    className: "menu-item px-3 mb-3"
  }, react_1["default"].createElement("div", {
    className: "menu-content d-flex align-items-center px-3"
  }, react_1["default"].createElement("div", {
    className: "symbol symbol-50px me-5"
  }, react_1["default"].createElement("img", {
    alt: "Logo",
    src: '/images/models/avatar.jpg'
  })), react_1["default"].createElement("div", {
    className: "d-flex flex-column"
  }, react_1["default"].createElement("div", {
    className: "fw-bolder d-flex align-items-center fs-5"
  }, user === null || user === void 0 ? void 0 : user.username), react_1["default"].createElement("a", {
    href: "#",
    className: "fw-bold text-muted text-hover-primary fs-7"
  }, "max@kt.com")))), react_1["default"].createElement(react_bootstrap_1.Dropdown.Item, {
    as: ui_utilities_1.CustomDropdownMenuItem
  }, react_1["default"].createElement("a", {
    href: "",
    className: "menu-link px-5"
  }, "My Profile")), react_1["default"].createElement(react_bootstrap_1.Dropdown.Item, {
    as: ui_utilities_1.CustomDropdownMenuItem
  }, react_1["default"].createElement("a", {
    href: "",
    className: "menu-link px-5"
  }, "Account Settings")), react_1["default"].createElement(react_bootstrap_1.Dropdown.Item, {
    as: ui_utilities_1.CustomDropdownMenuItem
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "menu-link px-5",
    onClick: logout
  }, "Sign Out"))))));
}

exports.default = withAuth_1.componentWithAuth(UserMenu);

/***/ })

}]);