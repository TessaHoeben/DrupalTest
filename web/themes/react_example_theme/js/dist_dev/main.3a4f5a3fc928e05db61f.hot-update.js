"use strict";
self["webpackHotUpdatereact_example_theme"]("main",{

/***/ "./js/src/components/DrupalProjectStats.jsx":
/*!**************************************************!*\
  !*** ./js/src/components/DrupalProjectStats.jsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var DrupalProjectStats = function DrupalProjectStats(_ref) {
  var projectName = _ref.projectName;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(projectName),
      _useState2 = _slicedToArray(_useState, 2),
      project = _useState2[0],
      setProject = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      usage = _useState4[0],
      setUsage = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setUsage(false);
    var data = fetch("https://www.drupal.org/api-d7/node.json?field_project_machine_name=".concat(project)).then(function (response) {
      return response.json();
    }).then(function (result) {
      if (result.list[0].project_usage) {
        setUsage(result.list[0].project_usage);
      }
    })["catch"](function (error) {
      return console.log("error", error);
    });
  }, [project]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Choose a project:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return setProject('drupal');
    }
  }, "Drupal core"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return setProject('marquee');
    }
  }, "Marquee")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project--name"
  }, "Usage stats for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, project), " by version:", usage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, Object.keys(usage).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatsItem, {
      count: usage[key],
      version: key,
      key: key
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "fetching data ...")));
}; // Provide type checking for props. Think of this as documentation for what
// props a component accepts.
// https://reactjs.org/docs/typechecking-with-proptypes.html


__signature__(DrupalProjectStats, "useState{[project, setProject](projectName)}\nuseState{[usage, setUsage](null)}\nuseEffect{}");

DrupalProjectStats.propTypes = {
  projectName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.required)
}; // Set a default value for any required props.

DrupalProjectStats.defaultProps = {
  projectName: 'drupal'
};
/**
 * Another component: this one displays usage statistics for a specific version
 * of Drupal. It's not exported, so it can only be used in this file's scope.
 * Breaking things up like this can help make your code easier to maintain.
 */

var StatsItem = function StatsItem(_ref2) {
  var count = _ref2.count,
      version = _ref2.version;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, version), ": ", count);
};

StatsItem.propTypes = {
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  version: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
var _default = DrupalProjectStats;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DrupalProjectStats, "DrupalProjectStats", "C:\\xampp\\htdocs\\test-project\\web\\themes\\react_example_theme\\js\\src\\components\\DrupalProjectStats.jsx");
  reactHotLoader.register(StatsItem, "StatsItem", "C:\\xampp\\htdocs\\test-project\\web\\themes\\react_example_theme\\js\\src\\components\\DrupalProjectStats.jsx");
  reactHotLoader.register(_default, "default", "C:\\xampp\\htdocs\\test-project\\web\\themes\\react_example_theme\\js\\src\\components\\DrupalProjectStats.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./js/src/index.jsx":
/*!**************************!*\
  !*** ./js/src/index.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var _components_DrupalProjectStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DrupalProjectStats */ "./js/src/components/DrupalProjectStats.jsx");
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/* Import Components */


react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "hdhejhdhdhhdhdhd"), document.getElementById('react-app'), console.log("werkt"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("475631f00b9486200816")
/******/ })();
/******/ 
/******/ /* webpack/runtime/harmony module decorator */
/******/ (() => {
/******/ 	__webpack_require__.hmd = (module) => {
/******/ 		module = Object.create(module);
/******/ 		if (!module.children) module.children = [];
/******/ 		Object.defineProperty(module, 'exports', {
/******/ 			enumerable: true,
/******/ 			set: () => {
/******/ 				throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 			}
/******/ 		});
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3a4f5a3fc928e05db61f.hot-update.js.map