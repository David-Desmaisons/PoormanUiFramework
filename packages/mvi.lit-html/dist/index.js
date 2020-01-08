!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lit-html")):"function"==typeof define&&define.amd?define(["lit-html"],t):"object"==typeof exports?exports["mvi.lit-html"]=t(require("lit-html")):e["mvi.lit-html"]=t(e["lit-html"])}(window,(function(__WEBPACK_EXTERNAL_MODULE__0__){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE__0__;\n\n//# sourceURL=webpack://mvi.lit-html/external_%22lit-html%22?")},function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(2);\n\n\n//# sourceURL=webpack://mvi.lit-html/multi_./src/index.js?")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewCreatorFactory", function() { return viewCreatorFactory; });\n/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lit_html__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nfunction viewCreatorFactory(element, template) {\n  return function (_ref) {\n    var state = _ref.state,\n        commands = _ref.commands;\n    return new View({\n      state: state,\n      commands: commands\n    }, element, template);\n  };\n}\n\n;\n\nvar View =\n/*#__PURE__*/\nfunction () {\n  function View(_ref2, element, template) {\n    var state = _ref2.state,\n        commands = _ref2.commands;\n\n    _classCallCheck(this, View);\n\n    this._element = element;\n    this._template = template;\n    this._commands = commands;\n    this.fullUpdate(_objectSpread({}, state));\n  }\n\n  _createClass(View, [{\n    key: "update",\n    value: function update(updater) {\n      var newState = _objectSpread({}, this._state);\n\n      updater(newState);\n      this.fullUpdate(newState);\n    }\n  }, {\n    key: "fullUpdate",\n    value: function fullUpdate(newState) {\n      this._state = Object.freeze(newState);\n      Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["render"])(this._template({\n        state: this._state,\n        commands: this._commands\n      }), this._element);\n    }\n  }, {\n    key: "state",\n    get: function get() {\n      return this._state;\n    }\n  }]);\n\n  return View;\n}();\n\n\n\n//# sourceURL=webpack://mvi.lit-html/./src/index.js?')}])}));