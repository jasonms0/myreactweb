webpackHotUpdate("static\\development\\pages\\routedetail.js",{

/***/ "./pages/routedetail.js":
/*!******************************!*\
  !*** ./pages/routedetail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/carousel/style/css */ "./node_modules/antd/lib/carousel/style/css.js");
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/carousel */ "./node_modules/antd/lib/carousel/index.js");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_css_detail_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/css/detail.css */ "./static/css/detail.css");
/* harmony import */ var _static_css_detail_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_css_detail_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Interest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Interest */ "./components/Interest.js");









var _jsxFileName = "E:\\myreactweb\\pages\\routedetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





var routeid;

var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(About, _React$Component);

  function About(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, About);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(About).call(this, props));
    _this.state = {
      msg: [],
      msg1: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // routeid=this.props.router.id
      var message1 = this.props.data1.message;
      var message = this.props.data.message;
      console.log(message1);
      this.setState(function () {
        return {
          msg: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(message),
          msg1: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(message1)
        };
      }, function () {
        _this2.setState({
          url1: _this2.state.msg[0].lunbo1,
          url2: _this2.state.msg[1].lunbo1,
          url3: _this2.state.msg[2].lunbo1,
          url4: _this2.state.msg[3].lunbo1,
          url5: _this2.state.msg[0].rname,
          url6: _this2.state.msg[1].rname,
          url7: _this2.state.msg[2].rname,
          url8: _this2.state.msg[3].rname,
          url9: _this2.state.msg[0].gonum,
          url10: _this2.state.msg[1].gonum,
          url11: _this2.state.msg[2].gonum,
          url12: _this2.state.msg[3].gonum,
          lunbo1: _this2.state.msg1[0].lunbo1,
          lunbo2: _this2.state.msg1[0].lunbo2,
          lunbo3: _this2.state.msg1[0].lunbo3,
          rname: _this2.state.msg1[0].rname,
          content: _this2.state.msg1[0].content,
          days: _this2.state.msg1[0].days,
          destination: _this2.state.msg1[0].destination,
          id: _this2.state.msg1[0].id,
          special: _this2.state.msg1[0].special
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "about-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("div", {
        className: "overall",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        className: "jinxuan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("img", {
        src: "../static/images/jinxuan.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "\u7CBE\u9009\u8DEF\u7EBF>\u884C\u7A0B\u5B89\u6392")), __jsx("div", {
        className: "first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("div", {
        className: "lunbo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
        autoplay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("img", {
        src: this.state.lunbo1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("img", {
        src: this.state.lunbo2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("img", {
        src: this.state.lunbo3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })))), __jsx("div", {
        className: "outline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "\u666F\u70B9\u4ECB\u7ECD"), __jsx("p", {
        className: "outline-first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\u53A6\u95E8\u5E02\u535A\u7269\u9986\u662F\u6211\u56FD\u4E1C\u5357\u5730\u533A\u7684\u4E00\u5EA7\u91CD\u8981\u7684\u5730\u65B9\u7EFC\u5408\u6027\u535A\u7269\u9986\uFF0C\u81F4\u529B\u4E8E\u6211\u56FD\u4E1C\u5357\u5730\u533A\u7279\u522B\u662F\u95FD\u53F0\u4E24\u5CB8\u73CD\u8D35\u6587\u5316\u9057\u4EA7\u7684\u6536\u85CF\u3001\u4FDD\u62A4\u3001 \u7814\u7A76\u4E0E\u5C55\u793A\uFF0C\u5229\u7528\u535A\u7269\u9986\u76F4\u89C2\u7684\u5C55\u54C1\u548C\u5404\u79CD\u5C55\u793A\u624B\u6BB5\uFF0C\u5BA3\u4F20\u56FD\u5BB6\u6587\u7269\u653F\u7B56\uFF0C\u666E\u53CA\u6587\u7269\u8003\u53E4\u548C\u5386\u53F2\u77E5\u8BC6\uFF0C\u5F18\u626C\u548C\u4FDD\u62A4\u4E2D\u534E\u6C11\u65CF\u4F18\u79C0\u7684\u6587\u5316\u9057\u4EA7\uFF0C \u4FDD\u5B58\u5386\u53F2\u8BB0\u5FC6\uFF0C\u6FC0\u52B1\u4EBA\u4EEC\u6811\u7ACB\u6C11\u65CF\u81EA\u4FE1\u5FC3\u548C\u7231\u56FD\u7684\u9AD8\u5C1A\u60C5\u64CD\u3002"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "\u884C\u7A0B\u5929\u6570: ", this.state.days, "\u65E5\u6E38"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "\u76EE\u7684\u5730: ", this.state.destination), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u7EBF\u8DEF\u7C7B\u578B: \u91D1\u7816\u96C5\u6E38"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "\u884C\u7A0B\u7279\u8272: ", this.state.special))), __jsx("div", {
        className: "second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "\u884C\u7A0B\u4ECB\u7ECD"), __jsx("div", {
        className: "second-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("div", {
        className: "second-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "\u7B2C\u4E00\u5929")), __jsx("div", {
        className: "second-right",
        dangerouslySetInnerHTML: {
          __html: this.state.content
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), __jsx("p", {
        className: "second-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "\u4EE5\u4E0A\u884C\u7A0B\u65F6\u95F4\u5B89\u6392\u53EF\u80FD\u4F1A\u56E0\u5929\u6C14\uFF0C\u8DEF\u51B5\u7B49\u539F\u56E0\u505A\u76F8\u5E94\u8C03\u6574\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002")), __jsx(_components_Interest__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

About.getInitialProps = function _callee() {
  var res1, res, data1, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("http://formywei.club:9191/api/getroutedetail/".concat(2)));

        case 2:
          res1 = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://formywei.club:9191/api/getinterest'));

        case 5:
          res = _context.sent;
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res1.json());

        case 8:
          data1 = _context.sent;
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 11:
          data = _context.sent;
          return _context.abrupt("return", {
            data1: data1,
            data: data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=routedetail.js.e5efb41fd4a30f7e3fc3.hot-update.js.map