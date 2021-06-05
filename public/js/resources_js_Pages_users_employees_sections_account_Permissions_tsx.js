(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_sections_account_Permissions_tsx"],{

/***/ "./resources/js/Pages/users/employees/sections/account/Permissions.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/users/employees/sections/account/Permissions.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

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

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var SearchBar_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/SearchBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var FILTERS = [{
  id: '1',
  name: 'Read'
}, {
  id: '2',
  name: 'Create'
}, {
  id: '3',
  name: 'Update'
}, {
  id: '4',
  name: 'Delete'
}];

function EmployeeAccountPermissions(_a) {
  var employee = _a.employee;

  var _b = Client_1.useApi({
    query: auth_1.QUERY_USER_PERMISSIONS
  }),
      queryUserPermissions = _b[0],
      permissionsResponse = _b[1];

  var _c = react_1.useState(),
      permissions = _c[0],
      setPermissions = _c[1];

  var _d = react_1.useState(),
      shownPermissions = _d[0],
      setShownPermissions = _d[1];

  var _e = react_1.useState(FILTERS[0]),
      activeFilter = _e[0],
      setActiveFilter = _e[1];

  react_1.useEffect(function () {
    queryUserPermissions({});
  }, []);
  react_1.useEffect(function () {
    if (permissionsResponse.data && permissionsResponse.data.permissions) {
      setPermissions(permissionsResponse.data.permissions.permissions);
      setShownPermissions(permissionsResponse.data.permissions.permissions);
    }
  }, [permissionsResponse.data]);

  function searchPermissions(text) {
    if (text.length === 0) {
      setShownPermissions(permissions);
      return;
    }

    setShownPermissions(permissions === null || permissions === void 0 ? void 0 : permissions.filter(function (permission) {
      var _a;

      if ((_a = permission.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
        return permission;
      }
    }));
  }

  return react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
    className: "row mb-5"
  }, react_1["default"].createElement("div", {
    className: "col"
  }, react_1["default"].createElement(SearchBar_1["default"], {
    onSearch: searchPermissions,
    placeHolder: "Search permissions"
  }))), react_1["default"].createElement("div", {
    className: "row mb-8"
  }, react_1["default"].createElement("div", {
    className: "col d-flex"
  }, FILTERS.map(function (filter) {
    return react_1["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return setActiveFilter(filter);
      },
      className: "btn btn-sm btn-flex " + (filter.id === activeFilter.id ? 'btn-primary' : 'btn-light-primary') + " me-3"
    }, filter.name);
  }))), react_1["default"].createElement("div", {
    className: "row"
  }, shownPermissions === null || shownPermissions === void 0 ? void 0 : shownPermissions.map(function (permission) {
    var _a, _b, _c;

    if ((_a = permission.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(activeFilter.name.toLocaleLowerCase())) {
      return react_1["default"].createElement("div", {
        className: "col-md-4",
        key: permission.id
      }, react_1["default"].createElement("label", {
        className: "form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack mb-5"
      }, react_1["default"].createElement("span", {
        className: "form-check-label ms-0 fs-6 text-gray-700"
      }, "can " + ((_b = permission.name) === null || _b === void 0 ? void 0 : _b.split('.')[1].replace('_', ' ')) + " " + ((_c = permission.name) === null || _c === void 0 ? void 0 : _c.split('.')[0].replace('_', ' '))), react_1["default"].createElement("input", {
        className: "form-check-input me-8",
        type: "checkbox",
        defaultChecked: false,
        value: ""
      })));
    }
  })));
}

exports.default = Section_1["default"]({
  title: 'Account Permissions',
  Content: EmployeeAccountPermissions,
  modalId: 'permissions-account-modal',
  showEditButton: false
});

/***/ })

}]);