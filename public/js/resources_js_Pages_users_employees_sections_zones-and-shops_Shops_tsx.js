(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_sections_zones-and-shops_Shops_tsx"],{

/***/ "./resources/js/Pages/users/employees/sections/zones-and-shops/Shops.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/users/employees/sections/zones-and-shops/Shops.tsx ***!
  \*******************************************************************************/
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

var SearchBar_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/components/general/SearchBar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AVAILABLE_SHOPS = [{
  id: '1',
  name: 'Xiaomi shop'
}, {
  id: '2',
  name: 'Readme shop'
}, {
  id: '3',
  name: 'Dummy shop'
}, {
  id: '4',
  name: 'Zed-net shop'
}, {
  id: '5',
  name: 'Whoeing shop'
}, {
  id: '6',
  name: 'Shengzang shop'
}, {
  id: '7',
  name: 'Just dummy data shop'
}];

function ShopsSection(_a) {
  var employee = _a.employee;

  var _b = react_1.useState(AVAILABLE_SHOPS),
      shownAvailableShops = _b[0],
      setShownAvailableShops = _b[1];

  var _c = react_1.useState([]),
      assignedShops = _c[0],
      setAssignedShops = _c[1];

  var _d = react_1.useState([]),
      shownAssignedShops = _d[0],
      setShownAssignedShops = _d[1];

  react_1.useEffect(function () {
    var newAssignedShops = [];
    newAssignedShops.push(AVAILABLE_SHOPS[5]);
    newAssignedShops.push(AVAILABLE_SHOPS[6]);
    setAssignedShops(newAssignedShops);
    setShownAssignedShops(newAssignedShops);
  }, []);

  function searchAvailableShops(text) {
    if (text.length === 0) {
      setShownAvailableShops(AVAILABLE_SHOPS);
      return;
    }

    setShownAvailableShops(AVAILABLE_SHOPS.filter(function (shop) {
      var _a;

      if ((_a = shop.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
        return shop;
      }
    }));
  }

  function searchShownAssignedShops(text) {
    if (text.length === 0) {
      setShownAssignedShops(assignedShops);
      return;
    }

    setShownAssignedShops(assignedShops.filter(function (shop) {
      var _a;

      if ((_a = shop.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
        return shop;
      }
    }));
  }

  function assignShop(shop) {
    var newAssignedShops = assignedShops.filter(function (_shop) {
      if (_shop.id !== shop.id) {
        return _shop;
      }
    });
    newAssignedShops.push(shop);
    setAssignedShops(newAssignedShops);
    setShownAssignedShops(newAssignedShops);
  }

  function removeShop(shop) {
    var newAssignedShops = assignedShops.filter(function (_shop) {
      if (_shop.id !== shop.id) {
        return _shop;
      }
    });
    setAssignedShops(newAssignedShops);
    setShownAssignedShops(newAssignedShops);
  }

  return react_1["default"].createElement("div", {
    className: "flex-grow-1"
  }, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-md-6"
  }, react_1["default"].createElement("h5", {
    className: "mb-5"
  }, "Available shops"), react_1["default"].createElement(SearchBar_1["default"], {
    onSearch: searchAvailableShops,
    placeHolder: 'Search available shops'
  }), react_1["default"].createElement("div", {
    className: "mt-7"
  }, shownAvailableShops.map(function (shop) {
    return react_1["default"].createElement("div", {
      className: "d-flex align-items-center justify-content-between mb-5",
      key: shop.id
    }, react_1["default"].createElement("div", {
      className: "text-gray-400"
    }, shop.name), react_1["default"].createElement("div", {
      className: "text-gray-800"
    }, react_1["default"].createElement("button", {
      className: "btn btn-sm btn-light-primary ms-5",
      onClick: function onClick() {
        return assignShop(shop);
      }
    }, "Assign")));
  }))), react_1["default"].createElement("div", {
    className: "col-md-1"
  }), react_1["default"].createElement("div", {
    className: "col-md-5"
  }, react_1["default"].createElement("h5", {
    className: "mb-5"
  }, "Assigned shops"), react_1["default"].createElement(SearchBar_1["default"], {
    onSearch: searchShownAssignedShops,
    placeHolder: 'Search assigned shops'
  }), react_1["default"].createElement("div", {
    className: "mt-7"
  }, shownAssignedShops.map(function (shop) {
    return react_1["default"].createElement("div", {
      className: "d-flex align-items-center justify-content-between mb-5",
      key: shop.id
    }, react_1["default"].createElement("div", {
      className: "text-gray-400"
    }, shop.name), react_1["default"].createElement("div", {
      className: "text-gray-800"
    }, react_1["default"].createElement("button", {
      className: "btn btn-sm btn-light-danger ms-5",
      onClick: function onClick() {
        return removeShop(shop);
      }
    }, "Remove")));
  })))));
}

exports.default = Section_1["default"]({
  title: 'Shops',
  Content: ShopsSection,
  modalId: 'zones-information-modal',
  showEditButton: false
});

/***/ })

}]);