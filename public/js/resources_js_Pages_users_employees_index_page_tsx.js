(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_index_page_tsx"],{

/***/ "./resources/js/Pages/users/employees/index.page.tsx":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/users/employees/index.page.tsx ***!
  \***********************************************************/
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

var Framework_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/containers/Framework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var SearchBar_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/SearchBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var UsersTable_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/users/components/UsersTable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var react_redux_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var employees_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@store/actions/employees'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var Client_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@api/Client'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var employees_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@api/queries/employees'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var Loader_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/Loader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var getEmployees = function getEmployees(state) {
  return state.employeeStore;
};

var loaderStyle = {
  position: 'fixed',
  width: 180,
  height: 180,
  top: 50 + '%',
  left: 50 + '%'
};

function Employees() {
  var _a = Client_1.useApi({
    query: employees_2.QUERY_EMPLOYEES
  }),
      queryEmployees = _a[0],
      _b = _a[1],
      data = _b.data,
      called = _b.called,
      loading = _b.loading;

  var _c = react_1.useState([]),
      shownEmployees = _c[0],
      setShownEmployees = _c[1];

  var employees = react_redux_1.useSelector(getEmployees).employees;
  var dispatch = react_redux_1.useDispatch();

  function searchEmployees(text) {
    if (text.length === 0) {
      setShownEmployees(employees);
    } else {
      setShownEmployees(employees.filter(function (_emp) {
        var _a;

        if ((_a = _emp.other_name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(text.toLowerCase())) {
          return _emp;
        }
      }));
    }
  }

  react_1.useEffect(function () {
    if (data && data.employees) {
      setShownEmployees(data.employees.employees);
      dispatch(employees_1.storeEmployees(data.employees.employees));
    }
  }, [data]);
  react_1.useEffect(function () {
    queryEmployees({});
  }, []);

  function employeesTableHead() {
    return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("th", {
      className: "min-w-125px"
    }, "ID Number"), react_1["default"].createElement("th", {
      className: "min-w-125px"
    }, "Surname"), react_1["default"].createElement("th", {
      className: "min-w-125px"
    }, "Email"), react_1["default"].createElement("th", {
      className: "min-w-125px"
    }, "Phone Number"), react_1["default"].createElement("th", {
      className: "text-end min-w-70px"
    }, "Actions"));
  }

  return react_1["default"].createElement(Framework_1["default"], {
    title: 'Employees'
  }, react_1["default"].createElement("div", {
    className: "card"
  }, react_1["default"].createElement("div", {
    className: "card-header border-0 pt-6"
  }, react_1["default"].createElement("div", {
    className: "card-title"
  }, react_1["default"].createElement(SearchBar_1["default"], {
    onSearch: searchEmployees,
    placeHolder: "Search Employees"
  }))), react_1["default"].createElement("div", {
    className: "card-body pt-0"
  }, loading ? react_1["default"].createElement(Loader_1["default"], null) : react_1["default"].createElement(UsersTable_1["default"], {
    users: employees,
    tableHeadComponent: employeesTableHead()
  }))));
}

exports.default = Employees;

/***/ })

}]);