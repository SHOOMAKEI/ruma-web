(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_profile_page_tsx"],{

/***/ "./resources/js/Pages/users/employees/profile.page.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/users/employees/profile.page.tsx ***!
  \*************************************************************/
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

var Framework_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/containers/Framework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var react_redux_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-redux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var Client_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@api/Client'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var employees_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@api/queries/employees'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var employees_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@store/actions/employees'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Loader_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/Loader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var Navigator_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/tabs/Navigator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var Content_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/tabs/Content'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var Information_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/users/employees/Information'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var Account_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/users/employees/Account'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var ZonesAndShops_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/users/employees/ZonesAndShops'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var getEmployees = function getEmployees(state) {
  return state.employeeStore;
};

var tabs = [{
  id: 'kt_employee_information_tab',
  title: 'User Information',
  component: react_2["default"].createElement(Information_1["default"], null)
}, {
  id: 'kt_employee_account_tab',
  title: 'Account',
  component: react_2["default"].createElement(Account_1["default"], null)
}, {
  id: 'kt_employee_zones_tab',
  title: 'Zones & Shops',
  component: react_2["default"].createElement(ZonesAndShops_1["default"], null)
}];

function EmployeeProfile() {
  var _a = Client_1.useApi({
    query: employees_1.QUERY_EMPLOYEE
  }),
      queryEmployee = _a[0],
      _b = _a[1],
      data = _b.data,
      called = _b.called,
      loading = _b.loading;

  var selectedEmployee = react_redux_1.useSelector(getEmployees).selectedEmployee;
  var dispatch = react_redux_1.useDispatch();
  react_1.useEffect(function () {
    if (data && data.employee) {
      dispatch(employees_2.selectEmployee(data.employee.employee));
    }
  }, [data]);
  react_1.useEffect(function () {
    queryEmployee({
      variables: {
        id: parseInt(selectedEmployee.id || '')
      }
    });
  }, []);
  return react_2["default"].createElement(Framework_1["default"], {
    title: selectedEmployee.surname + "'s Profile"
  }, react_2["default"].createElement("div", {
    className: "d-flex flex-column flex-xl-row"
  }, loading ? react_2["default"].createElement(Loader_1["default"], null) : react_2["default"].createElement("div", {
    className: "flex-lg-row-fluid"
  }, react_2["default"].createElement("div", {
    className: "card"
  }, react_2["default"].createElement("div", {
    className: "card-body"
  }, react_2["default"].createElement(Navigator_1["default"], {
    tabs: tabs
  }), react_2["default"].createElement(Content_1["default"], {
    tabs: tabs
  }))))));
}

exports.default = EmployeeProfile;

/***/ })

}]);