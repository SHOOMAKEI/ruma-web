(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_navbar_Menu_tsx"],{

/***/ "./resources/js/Pages/shared/components/navbar/Menu.tsx":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/shared/components/navbar/Menu.tsx ***!
  \**************************************************************/
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

var router_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var link_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/link'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

function Menu(_a) {
  var menu = _a.menu;
  var Icon = menu.Icon;
  var router = router_1.useRouter();

  function checkActiveLink(link) {
    if (router.pathname.includes(link)) return 'active';
    return '';
  }

  function checkActiveMenuParent(link) {
    /**
     * This is for sidebar dropdown menus, it determines which
     * sidebar dropdown menu is active
     * */
    if (router.pathname.includes(link)) return 'here show';
    return '';
  }

  if (menu.type === 'solo') {
    return React.createElement("div", {
      className: "menu-item",
      key: menu.id
    }, React.createElement(link_1["default"], {
      href: menu.link
    }, React.createElement("a", {
      className: "menu-link " + checkActiveLink(menu.link),
      href: ""
    }, React.createElement("span", {
      className: "menu-icon"
    }, React.createElement(Icon, null)), React.createElement("span", {
      className: "menu-title"
    }, menu.name))));
  }

  if (menu.type === 'separator') {
    return React.createElement("div", {
      className: "menu-item",
      key: menu.id
    }, React.createElement("div", {
      className: "menu-content pt-8 pb-2"
    }, React.createElement("span", {
      className: "menu-section text-muted text-uppercase fs-8 ls-1"
    }, menu.name)));
  }

  return React.createElement("div", {
    "data-kt-menu-trigger": "click",
    className: "menu-item menu-accordion " + checkActiveMenuParent(menu.link),
    key: menu.id
  }, React.createElement("span", {
    className: "menu-link"
  }, React.createElement("span", {
    className: "menu-icon"
  }, React.createElement(Icon, null)), React.createElement("span", {
    className: "menu-title"
  }, menu.name), React.createElement("span", {
    className: "menu-arrow"
  })), React.createElement("div", {
    className: "menu-sub menu-sub-accordion"
  }, menu.subMenus.map(function (submenu) {
    return React.createElement("div", {
      className: "menu-item",
      key: submenu.id
    }, React.createElement(link_1["default"], {
      href: submenu.link
    }, React.createElement("a", {
      className: "menu-link " + checkActiveLink(submenu.link),
      href: ""
    }, React.createElement("span", {
      className: "menu-bullet"
    }, React.createElement("span", {
      className: "bullet bullet-dot"
    })), React.createElement("span", {
      className: "menu-title"
    }, submenu.name))));
  })));
}

exports.default = Menu;

/***/ })

}]);