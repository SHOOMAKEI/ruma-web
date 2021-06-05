(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_sections_account_Roles_tsx"],{

/***/ "./resources/js/Pages/users/employees/sections/account/Roles.tsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/users/employees/sections/account/Roles.tsx ***!
  \***********************************************************************/
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

var Section_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/users/employees/sections/information/Section'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var Client_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@api/Client'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var auth_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@api/queries/auth'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var SearchBar_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/SearchBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

function EmployeeAccountRoles(_a) {
  var employee = _a.employee;

  var _b = Client_1.useApi({
    query: auth_1.QUERY_USER_ROLES
  }),
      queryUserRoles = _b[0],
      rolesResponse = _b[1];

  var _c = react_1.useState(),
      roles = _c[0],
      setRoles = _c[1];

  var _d = react_1.useState(),
      shownRoles = _d[0],
      setShownRoles = _d[1];

  react_1.useEffect(function () {
    queryUserRoles({});
  }, []);
  react_1.useEffect(function () {
    if (rolesResponse.data && rolesResponse.data.roles) {
      setRoles(rolesResponse.data.roles.roles);
      setShownRoles(rolesResponse.data.roles.roles);
    }
  }, [rolesResponse.data]);

  function searchRoles(text) {
    if (text.length === 0) {
      setShownRoles(roles);
      return;
    }

    setShownRoles(roles === null || roles === void 0 ? void 0 : roles.filter(function (role) {
      var _a;

      if ((_a = role.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
        return role;
      }
    }));
  }

  return React.createElement("div", null, React.createElement("div", {
    className: "row mb-10"
  }, React.createElement("div", {
    className: "col"
  }, React.createElement(SearchBar_1["default"], {
    onSearch: searchRoles,
    placeHolder: "Search roles"
  }))), React.createElement("div", {
    className: "row"
  }, shownRoles === null || shownRoles === void 0 ? void 0 : shownRoles.map(function (role) {
    var _a;

    return React.createElement("div", {
      className: "col-md-4",
      key: role.id
    }, React.createElement("label", {
      className: "form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack mb-5"
    }, React.createElement("span", {
      className: "form-check-label ms-0 fs-6 text-gray-700"
    }, (_a = role.name) === null || _a === void 0 ? void 0 : _a.replace('-', ' ')), React.createElement("input", {
      className: "form-check-input me-8",
      type: "checkbox",
      defaultChecked: false,
      value: ""
    })));
  })));
}

exports.default = Section_1["default"]({
  title: 'Account Roles',
  Content: EmployeeAccountRoles,
  modalId: 'roles-account-modal',
  showEditButton: false
});

/***/ })

}]);