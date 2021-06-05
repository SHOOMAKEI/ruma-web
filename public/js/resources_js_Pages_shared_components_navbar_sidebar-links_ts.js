(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_shared_components_navbar_sidebar-links_ts"],{

/***/ "./resources/js/Pages/shared/components/navbar/sidebar-links.ts":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/shared/components/navbar/sidebar-links.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dropdownMenus = exports.PRODUCTS = exports.USERS = exports.DASHBOARD = void 0;

var svg_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/icons/svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/**
 * Sidebar links urls are defined here, that's because we want to track
 * active link to determine which element to set active on the sidebar during
 * page navigation
 * */


exports.DASHBOARD = {
  parent: "/dashboard",
  submenus: {}
};
exports.USERS = {
  parent: "/users",
  submenus: {
    employees: "/employees",
    probation: '/probation'
  }
};
exports.PRODUCTS = {
  parent: "/products",
  submenus: {
    management: "/management"
  }
};
/**
 * If a section is a navigation link, it's id should start with a link-
 * if it is a separator, or heading it should start with a heading-
 *
 * Add pound(#) to any link attribute in case you want to add an item without
 * a link, eg adding a separator, this will help to avoid multiple active items
 * bug on the side navigation bar.
 * */

exports.dropdownMenus = [{
  id: "link-dashboard",
  name: "Dashboard",
  Icon: svg_1.DashboardIcon,
  type: "solo",
  subMenus: [],
  link: exports.DASHBOARD.parent
}, {
  id: "heading-apps",
  name: "Apps",
  Icon: svg_1.ShopsIcon,
  type: "separator",
  subMenus: [],
  link: "#"
}, {
  id: "link-users",
  name: "Users",
  Icon: svg_1.UsersIcon,
  type: "dropdown",
  subMenus: [{
    id: "1",
    name: "Users",
    link: "#"
  }, {
    id: "2",
    name: "Roles",
    link: "#"
  }, {
    id: "2",
    name: "Companies",
    link: "#"
  }],
  link: exports.USERS.parent
}, {
  id: "link-employees",
  name: "Employees",
  Icon: svg_1.BriefcaseIcon,
  type: "dropdown",
  subMenus: [{
    id: "1",
    name: "Employees",
    link: exports.USERS.parent + exports.USERS.submenus.employees
  }, {
    id: "2",
    name: "Attendance",
    link: "#"
  }, {
    id: "3",
    name: "Leave Management",
    link: "#"
  }, {
    id: "4",
    name: "Contracts",
    link: "#"
  }],
  link: exports.USERS.parent
}, {
  id: "link-sales",
  name: "Sales",
  Icon: svg_1.SalesIcon,
  type: "dropdown",
  subMenus: [{
    id: "2",
    name: "Reports",
    link: "#"
  }, {
    id: "3",
    name: "Incentives",
    link: "#"
  }, {
    id: "4",
    name: "Gift Items",
    link: "#"
  }],
  link: "#"
}, {
  id: "link-stores",
  name: "Stores",
  Icon: svg_1.ShopsIcon,
  type: "dropdown",
  subMenus: [{
    id: "2",
    name: "Shops",
    link: "#"
  }, {
    id: "3",
    name: "States",
    link: "#"
  }, {
    id: "4",
    name: "Regions",
    link: "#"
  }],
  link: "#"
}, {
  id: "link-products",
  name: "Inventory",
  Icon: svg_1.ProductsIcon,
  type: "dropdown",
  subMenus: [{
    id: "1",
    name: "products",
    link: exports.PRODUCTS.parent + exports.PRODUCTS.submenus.management
  }, {
    id: "2",
    name: "Catalogue",
    link: "#"
  }, {
    id: "3",
    name: "Vendors",
    link: "#"
  }, {
    id: "4",
    name: "Warehouses",
    link: "#"
  }],
  link: exports.PRODUCTS.parent
}, {
  id: "link-e-learning",
  name: "E-Learning",
  Icon: svg_1.YoutubeIcon,
  type: "dropdown",
  subMenus: [{
    id: "2",
    name: "Resources",
    link: "#"
  }, {
    id: "3",
    name: "Assessments",
    link: "#"
  }, {
    id: "4",
    name: "Reports",
    link: "#"
  }],
  link: "#"
}, {
  id: "link-account",
  name: "Account",
  Icon: svg_1.AccountsIcon,
  type: "dropdown",
  subMenus: [{
    id: "2",
    name: "Profile",
    link: "#"
  }, {
    id: "3",
    name: "Security",
    link: "#"
  }],
  link: "#"
}];

/***/ })

}]);