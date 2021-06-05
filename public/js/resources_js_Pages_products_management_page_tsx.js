(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_products_management_page_tsx"],{

/***/ "./resources/js/Pages/products/management.page.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/products/management.page.tsx ***!
  \*********************************************************/
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

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var svg_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/shared/icons/svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var Device_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/products/components/Device'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var AddDeviceModal_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/products/components/AddDeviceModal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var EditDeviceModal_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@pages/products/components/EditDeviceModal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

function ProductsPage() {
  function searchProducts(text) {}

  react_1.useEffect(function () {// const timer = setTimeout(() => {
    //     initializeDataTable();
    //     clearTimeout(timer);
    // }, 100);
  }, []);
  return react_1["default"].createElement(Framework_1["default"], {
    title: 'Products'
  }, react_1["default"].createElement("div", {
    className: "card"
  }, react_1["default"].createElement("div", {
    className: "card-header border-0 pt-5"
  }, react_1["default"].createElement("h3", {
    className: "card-title align-items-start flex-column"
  }, react_1["default"].createElement("span", {
    className: "card-label fw-bolder fs-3 mb-1"
  }, "Devices"), react_1["default"].createElement("span", {
    className: "text-muted mt-1 fw-bold fs-7"
  }, "Over 500 devices")), react_1["default"].createElement("div", {
    className: "card-toolbar align-items-center"
  }, react_1["default"].createElement(SearchBar_1["default"], {
    onSearch: searchProducts,
    placeHolder: "Search Products"
  }), react_1["default"].createElement("button", {
    className: "btn btn-sm btn-light-primary ms-4",
    "data-bs-toggle": "modal",
    "data-bs-target": "#kt_modal_add_payment"
  }, react_1["default"].createElement(svg_1.PlusIcon, null), "Add Device"), react_1["default"].createElement(AddDeviceModal_1["default"], null))), react_1["default"].createElement("div", {
    className: "card-body pt-0"
  }, react_1["default"].createElement("table", {
    id: "kt_datatable_example_1",
    className: "table align-middle table-row-dashed gy-5"
  }, react_1["default"].createElement("thead", null, react_1["default"].createElement("tr", {
    className: "fw-bolder text-muted"
  }, react_1["default"].createElement("th", {
    className: "w-25px"
  }, react_1["default"].createElement("div", {
    className: "form-check form-check-sm form-check-custom form-check-solid"
  }, react_1["default"].createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "1",
    "data-kt-check": "true",
    "data-kt-check-target": ".widget-9-check"
  }))), react_1["default"].createElement("th", {
    className: "min-w-150px"
  }, "Devices"), react_1["default"].createElement("th", {
    className: "min-w-140px"
  }, "Company"), react_1["default"].createElement("th", {
    className: "min-w-120px"
  }, "Progress"), react_1["default"].createElement("th", {
    className: "min-w-100px text-end"
  }, "Actions"))), react_1["default"].createElement("tbody", null, [1, 2, 3, 4, 5, 6].map(function (item) {
    return react_1["default"].createElement(Device_1["default"], {
      key: item
    });
  }))), react_1["default"].createElement(EditDeviceModal_1["default"], null))));
}

exports.default = ProductsPage;

/***/ })

}]);