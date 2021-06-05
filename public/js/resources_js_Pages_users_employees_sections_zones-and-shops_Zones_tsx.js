(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_users_employees_sections_zones-and-shops_Zones_tsx"],{

/***/ "./resources/js/Pages/users/employees/sections/zones-and-shops/Zones.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/users/employees/sections/zones-and-shops/Zones.tsx ***!
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

var zones = [{
  id: '1',
  name: 'North zone',
  code_name: 'NZ'
}, {
  id: '2',
  name: 'East zone',
  code_name: 'EZ'
}, {
  id: '3',
  name: 'South zone',
  code_name: 'SZ'
}, {
  id: '4',
  name: 'West zone',
  code_name: 'WZ'
}, {
  id: '5',
  name: 'Lagos',
  code_name: 'LG'
}];

function ZonesSection(_a) {
  var employee = _a.employee;

  var _b = react_1.useState(zones),
      shownZones = _b[0],
      setShownZones = _b[1];

  var _c = react_1.useState(zones[0]),
      selectedZone = _c[0],
      setSelectedZone = _c[1]; // this is here to mimic the process of assigning zones to sales managers
  // it will be removed once we connect with api
  // TODO: REMOVE THIS AFTER CONNECTION WITH THE API


  var _d = react_1.useState(zones[0]),
      assignedZone = _d[0],
      setAssignedZone = _d[1];

  function searchZones(text) {
    if (text.length === 0) {
      setShownZones(zones);
      return;
    }

    setShownZones(zones.filter(function (zone) {
      var _a;

      if ((_a = zone.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
        return zone;
      }
    }));
  }

  function assignZone() {
    if (shownZones.length > 1) {
      setAssignedZone(selectedZone);
    } else {
      setAssignedZone(shownZones[0]);
    }
  }

  function selectZone(event) {
    zones.map(function (zone) {
      if (zone.id === event.target.value) {
        setSelectedZone(zone);
      }
    });
  }

  return react_1["default"].createElement("div", {
    className: "flex-grow-1"
  }, react_1["default"].createElement("div", {
    className: "d-flex mb-5"
  }, react_1["default"].createElement("div", {
    className: "text-gray-400 w-125px"
  }, "Assigned Zone"), react_1["default"].createElement("div", {
    className: "text-gray-800"
  }, assignedZone.name)), react_1["default"].createElement("h5", {
    className: "mb-5"
  }, "Assign new zone"), react_1["default"].createElement(SearchBar_1["default"], {
    onSearch: searchZones,
    placeHolder: 'Search zones'
  }), react_1["default"].createElement("div", {
    className: "d-flex my-5"
  }, react_1["default"].createElement("select", {
    className: "form-select",
    "aria-label": "Select example",
    onChange: selectZone
  }, shownZones.map(function (zone) {
    return react_1["default"].createElement("option", {
      value: zone.id,
      key: zone.code_name
    }, zone.name);
  })), shownZones.length > 0 && react_1["default"].createElement("button", {
    className: "btn btn-light-primary ms-5",
    onClick: assignZone
  }, "Assign")));
}

exports.default = Section_1["default"]({
  title: 'Zones',
  Content: ZonesSection,
  modalId: 'zones-information-modal',
  showEditButton: false
});

/***/ })

}]);