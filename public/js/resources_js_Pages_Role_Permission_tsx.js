(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Role_Permission_tsx"],{

/***/ "./resources/js/Pages/Role/Permission.tsx":
/*!************************************************!*\
  !*** ./resources/js/Pages/Role/Permission.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

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

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var SearchBar_1 = __importDefault(__webpack_require__(/*! ../../Shared/SearchBar */ "./resources/js/Shared/SearchBar.tsx"));

var CheckBoxInput_1 = __importDefault(__webpack_require__(/*! ../../Shared/CheckBoxInput */ "./resources/js/Shared/CheckBoxInput.tsx"));

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

exports.default = function (_a) {
  var employee = _a.employee,
      permissions = _a.permissions,
      callback = _a.callback;

  var _b = react_1.useState(),
      selectedPermissions = _b[0],
      setSelectedPermissions = _b[1];

  var _c = react_1.useState(),
      shownPermissions = _c[0],
      setShownPermissions = _c[1];

  var _d = react_1.useState(FILTERS[0]),
      activeFilter = _d[0],
      setActiveFilter = _d[1];

  react_1.useEffect(function () {
    setShownPermissions(permissions);
  }, [permissions]);

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

  function handleChange(e, permission) {
    var key = e.target.id; // @ts-ignore

    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    var newObject = __assign(__assign({}, permission), {
      checked: value
    });

    console.log(newObject); // setSelectedPermissions(selectedPermissions => ([
    //     // @ts-ignore
    //     ...selectedPermissions,
    //     newObject
    //   ]))
    // callback(setSelectedPermissions)
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
      }, react_1["default"].createElement(CheckBoxInput_1["default"], {
        key: permission.id,
        label: "can " + ((_b = permission.name) === null || _b === void 0 ? void 0 : _b.split('.')[1].replace('_', ' ')) + " " + ((_c = permission.name) === null || _c === void 0 ? void 0 : _c.split('.')[0].replace('_', ' ')),
        type: "checkbox",
        name: "permission",
        checked: permission.checked,
        value: permission.checked,
        errors: '',
        onChange: function onChange(e, permission) {
          return handleChange(e, permission);
        }
      }));
    }
  })));
};

/***/ }),

/***/ "./resources/js/Shared/CheckBoxInput.tsx":
/*!***********************************************!*\
  !*** ./resources/js/Shared/CheckBoxInput.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.default = function (_a) {
  var label = _a.label,
      name = _a.name,
      className = _a.className,
      value = _a.value,
      errors = _a.errors,
      label_required = _a.label_required,
      props = __rest(_a, ["label", "name", "className", "value", "errors", "label_required"]);

  return react_1["default"].createElement("div", {
    className: "form-check form-switch form-check-custom form-check-solid px-5 pt-5 " + className
  }, react_1["default"].createElement("input", __assign({
    id: name,
    name: name
  }, props, {
    type: "checkbox",
    className: "form-check-input h-20px w-30px "
  })), label && react_1["default"].createElement("label", {
    className: "form-check-label " + (label_required ? 'required form-label' : ''),
    htmlFor: name
  }, label), react_1["default"].createElement("br", null), errors && react_1["default"].createElement("div", {
    className: "invalid-feedback ",
    style: {
      display: 'block'
    }
  }, errors));
};

/***/ }),

/***/ "./resources/js/Shared/Icons/svg.tsx":
/*!*******************************************!*\
  !*** ./resources/js/Shared/Icons/svg.tsx ***!
  \*******************************************/
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
exports.Message = exports.Password = exports.User = exports.Profile = exports.YoutubeIcon = exports.CloseIcon = exports.EditIcon = exports.DeleteIcon = exports.PlusIcon = exports.DropdownIcon = exports.BriefcaseIcon = exports.UsersIcon = exports.SideNavCollapse = exports.SideNavToggle = exports.SearchIcon = exports.NotificationsIcon = exports.DashboardIcon = exports.AccountsIcon = exports.ChatsIcon = exports.SalesIcon = exports.ProductsIcon = exports.ShopsIcon = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function ShopsIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }), react_1["default"].createElement("polygon", {
    fill: "#000000",
    opacity: "0.3",
    points: "6 3 18 3 20 6.5 4 6.5"
  }), react_1["default"].createElement("path", {
    d: "M6,5 L18,5 C19.1045695,5 20,5.8954305 20,7 L20,19 C20,20.1045695 19.1045695,21 18,21 L6,21 C4.8954305,21 4,20.1045695 4,19 L4,7 C4,5.8954305 4.8954305,5 6,5 Z M9,9 C8.44771525,9 8,9.44771525 8,10 C8,10.5522847 8.44771525,11 9,11 L15,11 C15.5522847,11 16,10.5522847 16,10 C16,9.44771525 15.5522847,9 15,9 L9,9 Z",
    fill: "#000000"
  }))));
}

exports.ShopsIcon = ShopsIcon;

function ProductsIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, react_1["default"].createElement("path", {
    opacity: "0.25",
    d: "M3.19406 11.1644C3.09247 10.5549 3.56251 10 4.18045 10H19.8195C20.4375 10 20.9075 10.5549 20.8059 11.1644L19.4178 19.4932C19.1767 20.9398 17.9251 22 16.4586 22H7.54138C6.07486 22 4.82329 20.9398 4.58219 19.4932L3.19406 11.1644Z",
    fill: "#7E8299"
  }), react_1["default"].createElement("path", {
    d: "M2 9.5C2 8.67157 2.67157 8 3.5 8H20.5C21.3284 8 22 8.67157 22 9.5C22 10.3284 21.3284 11 20.5 11H3.5C2.67157 11 2 10.3284 2 9.5Z",
    fill: "#7E8299"
  }), react_1["default"].createElement("path", {
    d: "M10 13C9.44772 13 9 13.4477 9 14V18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18V14C11 13.4477 10.5523 13 10 13Z",
    fill: "#7E8299"
  }), react_1["default"].createElement("path", {
    d: "M14 13C13.4477 13 13 13.4477 13 14V18C13 18.5523 13.4477 19 14 19C14.5523 19 15 18.5523 15 18V14C15 13.4477 14.5523 13 14 13Z",
    fill: "#7E8299"
  }), react_1["default"].createElement("g", {
    opacity: "0.25"
  }, react_1["default"].createElement("path", {
    d: "M10.7071 3.70711C11.0976 3.31658 11.0976 2.68342 10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711C4.68342 9.09763 5.31658 9.09763 5.70711 8.70711L10.7071 3.70711Z",
    fill: "#7E8299"
  }), react_1["default"].createElement("path", {
    d: "M13.2929 3.70711C12.9024 3.31658 12.9024 2.68342 13.2929 2.29289C13.6834 1.90237 14.3166 1.90237 14.7071 2.29289L19.7071 7.29289C20.0976 7.68342 20.0976 8.31658 19.7071 8.70711C19.3166 9.09763 18.6834 9.09763 18.2929 8.70711L13.2929 3.70711Z",
    fill: "#7E8299"
  }))));
}

exports.ProductsIcon = ProductsIcon;

function SalesIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, react_1["default"].createElement("path", {
    opacity: "0.25",
    d: "M1 5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5Z",
    fill: "#12131A"
  }), react_1["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.8682 6.49631C21.1422 6.01679 20.9756 5.40594 20.4961 5.13193C20.0166 4.85792 19.4058 5.02451 19.1317 5.50403L15.8834 11.1886C15.6612 11.5775 15.2073 11.7712 14.7727 11.6626L9.71238 10.3975C8.40847 10.0715 7.04688 10.6526 6.38005 11.8195L3.13174 17.504C2.85773 17.9835 3.02433 18.5944 3.50385 18.8684C3.98337 19.1424 4.59422 18.9758 4.86823 18.4963L8.11653 12.8118C8.33881 12.4228 8.79268 12.2291 9.22731 12.3378L14.2876 13.6028C15.5915 13.9288 16.9531 13.3478 17.6199 12.1808L20.8682 6.49631Z",
    fill: "#12131A"
  })));
}

exports.SalesIcon = SalesIcon;

function ChatsIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("path", {
    d: "M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z",
    fill: "#000000"
  }), react_1["default"].createElement("path", {
    d: "M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z",
    fill: "#000000",
    opacity: "0.3"
  })));
}

exports.ChatsIcon = ChatsIcon;

function AccountsIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, react_1["default"].createElement("path", {
    opacity: "0.25",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.11117 13.2288C3.27137 11.0124 5.01376 9.29156 7.2315 9.15059C8.55778 9.06629 10.1795 9 12 9C13.8205 9 15.4422 9.06629 16.7685 9.15059C18.9862 9.29156 20.7286 11.0124 20.8888 13.2288C20.9535 14.1234 21 15.085 21 16C21 16.915 20.9535 17.8766 20.8888 18.7712C20.7286 20.9876 18.9862 22.7084 16.7685 22.8494C15.4422 22.9337 13.8205 23 12 23C10.1795 23 8.55778 22.9337 7.23151 22.8494C5.01376 22.7084 3.27137 20.9876 3.11118 18.7712C3.04652 17.8766 3 16.915 3 16C3 15.085 3.04652 14.1234 3.11117 13.2288Z",
    fill: "#12131A"
  }), react_1["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 16.7324C13.5978 16.3866 14 15.7403 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 15.7403 10.4022 16.3866 11 16.7324V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V16.7324Z",
    fill: "#12131A"
  }), react_1["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10V6Z",
    fill: "#12131A"
  })));
}

exports.AccountsIcon = AccountsIcon;

function DashboardIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("path", {
    d: "M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z",
    fill: "#000000",
    opacity: "0.3"
  }), react_1["default"].createElement("path", {
    d: "M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z",
    fill: "#000000"
  })));
}

exports.DashboardIcon = DashboardIcon;

function NotificationsIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2x"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("path", {
    d: "M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z",
    fill: "#000000"
  }), react_1["default"].createElement("rect", {
    fill: "#000000",
    opacity: "0.3",
    x: "10",
    y: "16",
    width: "4",
    height: "4",
    rx: "2"
  }))));
}

exports.NotificationsIcon = NotificationsIcon;

function SearchIcon(_a) {
  var extraClasses = _a.extraClasses;
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2 " + extraClasses
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }), react_1["default"].createElement("path", {
    d: "M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z",
    fill: "#000000",
    fillRule: "nonzero",
    opacity: "0.3"
  }), react_1["default"].createElement("path", {
    d: "M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z",
    fill: "#000000",
    fillRule: "nonzero"
  }))));
}

exports.SearchIcon = SearchIcon;

function SideNavToggle() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2x mt-1"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }), react_1["default"].createElement("rect", {
    fill: "#000000",
    x: "4",
    y: "5",
    width: "16",
    height: "3",
    rx: "1.5"
  }), react_1["default"].createElement("path", {
    d: "M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z",
    fill: "#000000",
    opacity: "0.3"
  }))));
}

exports.SideNavToggle = SideNavToggle;

function SideNavCollapse() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-1 rotate-180"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("polygon", {
    points: "0 0 24 0 24 24 0 24"
  }), react_1["default"].createElement("path", {
    d: "M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z",
    fill: "#000000",
    fillRule: "nonzero",
    transform: "translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)"
  }), react_1["default"].createElement("path", {
    d: "M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z",
    fill: "#000000",
    fillRule: "nonzero",
    opacity: "0.5",
    transform: "translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)"
  }))));
}

exports.SideNavCollapse = SideNavCollapse;

function UsersIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("path", {
    d: "M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z",
    fill: "#000000",
    fillRule: "nonzero",
    opacity: "0.3"
  }), react_1["default"].createElement("path", {
    d: "M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z",
    fill: "#000000",
    fillRule: "nonzero"
  })));
}

exports.UsersIcon = UsersIcon;

function BriefcaseIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, react_1["default"].createElement("path", {
    opacity: "0.25",
    d: "M2 10C2 8.34315 3.34315 7 5 7H19C20.6569 7 22 8.34315 22 10V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V10Z",
    fill: "#12131A"
  }), react_1["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 4C8.44772 4 8 4.44772 8 5V8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8V5C6 3.34315 7.34315 2 9 2H15C16.6569 2 18 3.34315 18 5V8C18 8.55228 17.5523 9 17 9C16.4477 9 16 8.55228 16 8V5C16 4.44772 15.5523 4 15 4H9Z",
    fill: "#12131A"
  })));
}

exports.BriefcaseIcon = BriefcaseIcon;

function DropdownIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-5 m-0"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("polygon", {
    points: "0 0 24 0 24 24 0 24"
  }), react_1["default"].createElement("path", {
    d: "M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z",
    fill: "#000000",
    fillRule: "nonzero",
    transform: "translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"
  }))));
}

exports.DropdownIcon = DropdownIcon;

function PlusIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("circle", {
    fill: "#000000",
    opacity: "0.3",
    cx: "12",
    cy: "12",
    r: "10"
  }), react_1["default"].createElement("path", {
    d: "M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z",
    fill: "#000000"
  })));
}

exports.PlusIcon = PlusIcon;

function DeleteIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }), react_1["default"].createElement("path", {
    d: "M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z",
    fill: "#000000",
    fillRule: "nonzero"
  }), react_1["default"].createElement("path", {
    d: "M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z",
    fill: "#000000",
    opacity: "0.3"
  }))));
}

exports.DeleteIcon = DeleteIcon;

function EditIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("path", {
    d: "M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z",
    fill: "#000000",
    fillRule: "nonzero",
    transform: "translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
  }), react_1["default"].createElement("path", {
    d: "M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z",
    fill: "#000000",
    fillRule: "nonzero",
    opacity: "0.3"
  })));
}

exports.EditIcon = EditIcon;

function CloseIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    transform: "translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)",
    fill: "#000000"
  }, react_1["default"].createElement("rect", {
    fill: "#000000",
    x: "0",
    y: "7",
    width: "16",
    height: "2",
    rx: "1"
  }), react_1["default"].createElement("rect", {
    fill: "#000000",
    opacity: "0.5",
    transform: "translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)",
    x: "0",
    y: "7",
    width: "16",
    height: "2",
    rx: "1"
  }))));
}

exports.CloseIcon = CloseIcon;

function YoutubeIcon() {
  return react_1["default"].createElement("span", {
    className: "svg-icon svg-icon-2"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }), react_1["default"].createElement("path", {
    d: "M4.22266882,4 L19.8367728,4.00001353 C21.3873185,4.00001353 22.6823897,5.1816009 22.8241881,6.72564925 C22.9414021,8.00199653 23.0000091,9.40113909 23.0000091,10.9230769 C23.0000091,12.7049599 22.9196724,14.4870542 22.758999,16.26936 L22.7589943,16.2693595 C22.6196053,17.8155637 21.3235899,19 19.7711155,19 L4.22267091,19.0000022 C2.6743525,19.0000022 1.38037032,17.8217109 1.23577882,16.2801587 C1.07859294,14.6043323 1,13.0109461 1,11.5 C1,9.98905359 1.07859298,8.39566699 1.23577893,6.7198402 L1.23578022,6.71984032 C1.38037157,5.17828994 2.67435224,4 4.22266882,4 Z",
    fill: "#000000",
    opacity: "0.3"
  }), react_1["default"].createElement("path", {
    d: "M11.1821576,14.8052934 L15.5856084,11.7952868 C15.8135802,11.6394552 15.8720614,11.3283211 15.7162299,11.1003494 C15.6814583,11.0494808 15.6375838,11.0054775 15.5868174,10.970557 L11.1833666,7.94156929 C10.9558527,7.78507001 10.6445485,7.84263875 10.4880492,8.07015268 C10.4307018,8.15352258 10.3999996,8.25233045 10.3999996,8.35351969 L10.3999996,14.392514 C10.3999996,14.6686564 10.6238572,14.892514 10.8999996,14.892514 C11.000689,14.892514 11.0990326,14.8621141 11.1821576,14.8052934 Z",
    fill: "#000000"
  }))));
}

exports.YoutubeIcon = YoutubeIcon;

function Profile() {
  return react_1["default"].createElement("span", {
    className: "svg-icon"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("polygon", {
    points: "0 0 24 0 24 24 0 24"
  }), react_1["default"].createElement("path", {
    d: "M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z",
    fill: "#000000",
    fillRule: "nonzero"
  }), react_1["default"].createElement("path", {
    d: "M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z",
    fill: "#000000",
    opacity: "0.3"
  }))));
}

exports.Profile = Profile;

function User() {
  return react_1["default"].createElement("span", {
    className: "svg-icon"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("polygon", {
    points: "0 0 24 0 24 24 0 24"
  }), react_1["default"].createElement("path", {
    d: "M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z",
    fill: "#000000",
    fillRule: "nonzero",
    opacity: "0.3"
  }), react_1["default"].createElement("path", {
    d: "M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z",
    fill: "#000000",
    fillRule: "nonzero"
  }))));
}

exports.User = User;

function Password() {
  return react_1["default"].createElement("span", {
    className: "svg-icon"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }), react_1["default"].createElement("path", {
    d: "M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z",
    fill: "#000000",
    opacity: "0.3"
  }), react_1["default"].createElement("path", {
    d: "M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z",
    fill: "#000000",
    opacity: "0.3"
  }), react_1["default"].createElement("path", {
    d: "M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z",
    fill: "#000000",
    opacity: "0.3"
  }))));
}

exports.Password = Password;

function Message() {
  return react_1["default"].createElement("span", {
    className: "svg-icon"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1"
  }, react_1["default"].createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react_1["default"].createElement("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }), react_1["default"].createElement("path", {
    d: "M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z",
    fill: "#000000",
    opacity: "0.3"
  }), react_1["default"].createElement("path", {
    d: "M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z",
    fill: "#000000"
  }))));
}

exports.Message = Message;

/***/ }),

/***/ "./resources/js/Shared/SearchBar.tsx":
/*!*******************************************!*\
  !*** ./resources/js/Shared/SearchBar.tsx ***!
  \*******************************************/
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

var svg_1 = __webpack_require__(/*! ./Icons/svg */ "./resources/js/Shared/Icons/svg.tsx");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function SearchBar(_a) {
  var onSearch = _a.onSearch,
      placeHolder = _a.placeHolder;

  function _onSearch(event) {
    onSearch(event.target.value);
  }

  return react_1["default"].createElement("div", {
    className: "d-flex align-items-center position-relative my-1"
  }, react_1["default"].createElement(svg_1.SearchIcon, {
    extraClasses: 'position-absolute ms-3'
  }), react_1["default"].createElement("input", {
    type: "text",
    "data-kt-customer-table-filter": "search",
    className: "form-control form-control-sm form-control-solid w-250px ps-11",
    placeholder: placeHolder,
    onChange: _onSearch
  }));
}

exports.default = SearchBar;

/***/ })

}]);