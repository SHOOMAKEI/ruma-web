(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages__document_page_tsx"],{

/***/ "./resources/js/Pages/_document.page.tsx":
/*!***********************************************!*\
  !*** ./resources/js/Pages/_document.page.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

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

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var document_1 = __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/document'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

var CustomDocument =
/** @class */
function (_super) {
  __extends(CustomDocument, _super);

  function CustomDocument() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  CustomDocument.prototype.render = function () {
    return React.createElement(document_1.Html, null, React.createElement(document_1.Head, null, React.createElement("link", {
      rel: "preload",
      href: "/fonts/EuclidCircularB-Regular.ttf",
      as: "font",
      crossOrigin: ""
    }), React.createElement("link", {
      rel: "preload",
      href: "/fonts/EuclidCircularB-SemiBold.ttf",
      as: "font",
      crossOrigin: ""
    }), React.createElement("link", {
      rel: "preload",
      href: "/fonts/EuclidCircularB-Bold.ttf",
      as: "font",
      crossOrigin: ""
    })), React.createElement("body", {
      id: "kt_body",
      className: "\r\n                        header-fixed\r\n                        header-tablet-and-mobile-fixed\r\n                        toolbar-enabled toolbar-fixed\r\n                        toolbar-tablet-and-mobile-fixed\r\n                        aside-enabled aside-fixed"
    }, React.createElement(document_1.Main, null), React.createElement("script", {
      src: "/js/plugins.bundle.js"
    }), React.createElement("script", {
      src: "/js/scripts.bundle.js"
    }), React.createElement("script", {
      src: "/js/custom/chat/chat.js"
    }), React.createElement("script", {
      src: "/js/custom/api-keys/api-keys.js"
    }), React.createElement("script", {
      src: "/plugins/datatables/datatables.bundle.js"
    }), React.createElement("script", {
      src: "/plugins/fslightbox/fslightbox.bundle.js"
    }), React.createElement("script", {
      src: "/js/serverside.js"
    }), React.createElement("script", {
      src: "/js/base.js"
    })), React.createElement(document_1.NextScript, null));
  };

  return CustomDocument;
}(document_1["default"]);

exports.default = CustomDocument;

/***/ })

}]);