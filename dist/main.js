/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webapps/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./webapps/css/common.css":
/*!********************************!*\
  !*** ./webapps/css/common.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./webapps/css/common.css?");

/***/ }),

/***/ "./webapps/css/style.css":
/*!*******************************!*\
  !*** ./webapps/css/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./webapps/css/style.css?");

/***/ }),

/***/ "./webapps/js/action.js":
/*!******************************!*\
  !*** ./webapps/js/action.js ***!
  \******************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Action\", function() { return Action; });\nlet Action = (function() {\n    \n})()\n\n\n\n//# sourceURL=webpack:///./webapps/js/action.js?");

/***/ }),

/***/ "./webapps/js/events.js":
/*!******************************!*\
  !*** ./webapps/js/events.js ***!
  \******************************/
/*! exports provided: EventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventHandler\", function() { return EventHandler; });\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ \"./webapps/js/login.js\");\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.js */ \"./webapps/js/register.js\");\n\n\n__webpack_require__(/*! ./gator.js */ \"./webapps/js/gator.js\")\n\nlet EventHandler = (function () {\n    Gator(document).on(\"click\", \"[documentclick]\", function (e) {\n        dispatchEvent(\"documentclick\", this, e)\n    })\n    function dispatchEvent(type, curr, event) {\n        let handler = $(curr).attr(type)\n        eventHandler[type][handler](curr, event)\n    }\n\n    let eventHandler = {\n        documentclick: {\n            login: _login_js__WEBPACK_IMPORTED_MODULE_0__[\"Login\"],\n            loadsignup : _register_js__WEBPACK_IMPORTED_MODULE_1__[\"Register\"].loadSignup,\n            signup: _register_js__WEBPACK_IMPORTED_MODULE_1__[\"Register\"].register,\n        }\n    }\n})()\n\n//# sourceURL=webpack:///./webapps/js/events.js?");

/***/ }),

/***/ "./webapps/js/gator.js":
/*!*****************************!*\
  !*** ./webapps/js/gator.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* gator v1.2.4 craig.is/riding/gators */\n(function () {\n    function t(a) {\n        return k ? k : a.matches ? k = a.matches : a.webkitMatchesSelector ? k = a.webkitMatchesSelector : a.mozMatchesSelector ? k = a.mozMatchesSelector : a.msMatchesSelector ? k = a.msMatchesSelector : a.oMatchesSelector ? k = a.oMatchesSelector : k = e.matchesSelector\n    }\n\n    function q(a, b, c) {\n        if (\"_root\" == b) return c;\n        if (a !== c) {\n            if (t(a).call(a, b)) return a;\n            if (a.parentNode) return m++, q(a.parentNode, b, c)\n        }\n    }\n\n    function u(a, b, c, e) {\n        d[a.id] || (d[a.id] = {});\n        d[a.id][b] || (d[a.id][b] = {});\n        d[a.id][b][c] || (d[a.id][b][c] = []);\n        d[a.id][b][c].push(e)\n    }\n\n    function v(a, b, c, e) {\n        if (d[a.id])\n            if (!b)\n                for (var f in d[a.id]) d[a.id].hasOwnProperty(f) && (d[a.id][f] = {});\n            else if (!e && !c) d[a.id][b] = {};\n        else if (!e) delete d[a.id][b][c];\n        else if (d[a.id][b][c])\n            for (f = 0; f < d[a.id][b][c].length; f++)\n                if (d[a.id][b][c][f] === e) {\n                    d[a.id][b][c].splice(f, 1);\n                    break\n                }\n    }\n\n    function w(a, b, c) {\n        if (d[a][c]) {\n            var k = b.target || b.srcElement,\n                f, g, h = {},\n                n = g = 0;\n            m = 0;\n            for (f in d[a][c]) d[a][c].hasOwnProperty(f) && (g = q(k, f, l[a].element)) && e.matchesEvent(c, l[a].element, g, \"_root\" == f, b) && (m++, d[a][c][f].match = g, h[m] = d[a][c][f]);\n            b.stopPropagation = function () {\n                b.cancelBubble = !0\n            };\n            for (g = 0; g <= m; g++)\n                if (h[g])\n                    for (n = 0; n < h[g].length; n++) {\n                        if (!1 === h[g][n].call(h[g].match, b)) {\n                            e.cancel(b);\n                            return\n                        }\n                        if (b.cancelBubble) return\n                    }\n        }\n    }\n\n    function r(a, b, c, k) {\n        function f(a) {\n            return function (b) {\n                w(g, b, a)\n            }\n        }\n        if (this.element) {\n            a instanceof Array || (a = [a]);\n            c || \"function\" != typeof b || (c = b, b = \"_root\");\n            var g = this.id,\n                h;\n            for (h = 0; h < a.length; h++) k ? v(this, a[h], b, c) : (d[g] && d[g][a[h]] || e.addEvent(this, a[h], f(a[h])), u(this, a[h], b, c));\n            return this\n        }\n    }\n\n    function e(a, b) {\n        if (!(this instanceof e)) {\n            for (var c in l)\n                if (l[c].element === a) return l[c];\n            p++;\n            l[p] = new e(a, p);\n            return l[p]\n        }\n        this.element = a;\n        this.id = b\n    }\n    var k, m = 0,\n        p = 0,\n        d = {},\n        l = {};\n    e.prototype.on = function (a, b, c) {\n        return r.call(this, a, b, c)\n    };\n    e.prototype.off = function (a, b, c) {\n        return r.call(this, a, b, c, !0)\n    };\n    e.matchesSelector = function () {};\n    e.cancel = function (a) {\n        a.preventDefault();\n        a.stopPropagation()\n    };\n    e.addEvent = function (a, b, c) {\n        a.element.addEventListener(b, c, \"blur\" == b || \"focus\" == b)\n    };\n    e.matchesEvent = function () {\n        return !0\n    };\n     true && module.exports &&\n        (module.exports = e);\n    window.Gator = e\n})();\n\n//# sourceURL=webpack:///./webapps/js/gator.js?");

/***/ }),

/***/ "./webapps/js/html.js":
/*!****************************!*\
  !*** ./webapps/js/html.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let appHTML = {\n    getBody : () => {\n        return `<div class=\"login-body\">\n                </div>`\n    },\n    getInputHtml : (config = {}) => {\n        return `<div class=\"input-wrap ${config.icon_class || ''}\">\n                    <input type=\"${config.type || \"text\"}\" class=\"naren-input\" id='${config.id || ''}' placeholder=\"${config.placeholder || ''}\"\n                    ${config.tooltip ? `tooltip=\"${config.placeholder}\"` : ''}>\n                </div>`\n    },\n    getButtonHtml : (config = {}) => {\n        return `<div class=\"naren-btn\" ${config.onclick ? `documentclick=\"${config.onclick}\"` : ''}>\n                   <span class=\"btn-text\">${config.text || \"Button\"}</span>\n                </div>`\n    },\n    getLoginContainer : () => {\n        let username_input = appHTML.getInputHtml({id : \"login_name\", placeholder: \"Username/Email\", tooltip:true})\n        let password_input = appHTML.getInputHtml({id : \"login_pass\", placeholder : \"Password\", type: \"password\", tooltip:true})\n        let login_btn = appHTML.getButtonHtml({onclick : \"login\", text: \"Login\"})\n        let signup_btn = appHTML.getButtonHtml({onclick : \"loadsignup\", text: \"signup\"})\n        return `<div class=\"login-header\">\n                        <p class=\"header-text\">Login</p>\n                    </div>\n                <div class=\"login-container\">\n                    <div class=\"name-input-wrap\">\n                        ${username_input}\n                    </div>\n                    <div class=\"pass-input-wrap\">\n                        ${password_input}\n                    </div>\n                    <div class=\"login-btn\">\n                    ${login_btn}\n                    </div>\n                    <div class=\"signup-btn\">\n                    <span> Don't have an account ?</span>\n                    ${signup_btn}\n                    </div>\n                </div>`\n    },\n    getSignupContainer : () => {\n        let username_input = appHTML.getInputHtml({id : \"signup_name\", placeholder: \"Username/Email\",tooltip:true})\n        let password_input = appHTML.getInputHtml({id : \"signup_pass1\", placeholder : \"Password\", type: \"password\",tooltip:true})\n        let retypepass_input = appHTML.getInputHtml({id : \"signup_pass2\", placeholder : \"Reenter-Password\", type: \"password\",tooltip:true})\n        let signup_btn = appHTML.getButtonHtml({onclick : \"loadsignup\", text: \"signup\"})\n        return `<div class=\"login-header\">\n                        <p class=\"header-text\">REGISTER</p>\n                    </div>\n                    <div class=\"signup-container\">\n                    <div class=\"name-input-wrap\">\n                        ${username_input}\n                    </div>\n                    <div class=\"pass-input-wrap\">\n                        ${password_input}\n                    </div>\n                    <div class=\"repass-input-wrap\">\n                        ${retypepass_input}\n                    </div>\n                    <div class=\"signup-btn\">\n                    ${signup_btn}\n                    </div>\n                </div>`\n    }\n}\n\nmodule.exports = {\n    appHTML\n}\n\n//# sourceURL=webpack:///./webapps/js/html.js?");

/***/ }),

/***/ "./webapps/js/index.js":
/*!*****************************!*\
  !*** ./webapps/js/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ \"./webapps/js/html.js\");\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./webapps/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/common.css */ \"./webapps/css/common.css\");\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n__webpack_require__(/*! ./events */ \"./webapps/js/events.js\")\n__webpack_require__(/*! ./inputHandler */ \"./webapps/js/inputHandler.js\")\n\nfunction init() {\n    constructLogin()\n    bindEventListeners()\n}\n\nfunction constructLogin() {\n    let bodyHtml = _html_js__WEBPACK_IMPORTED_MODULE_0__[\"appHTML\"].getBody()\n    $(document.body).append(bodyHtml)\n    let login_container_html = _html_js__WEBPACK_IMPORTED_MODULE_0__[\"appHTML\"].getLoginContainer()\n    $(\".login-body\").append(login_container_html)\n    $(\"#login_name\").focus()\n}\n\nfunction bindEventListeners() {\n   \n}\n\ninit()\n\n\n\n//# sourceURL=webpack:///./webapps/js/index.js?");

/***/ }),

/***/ "./webapps/js/inputHandler.js":
/*!************************************!*\
  !*** ./webapps/js/inputHandler.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\n    let setPlaceHolder = (e, elem) => {\n        elem = $(elem)\n        let tooltip = elem.attr(\"tooltip\")\n        if (!tooltip) {\n            return;\n        }\n        elem.before(`<span class=\".clrR\">${tooltip}</span>`)\n    }\n\n    let removePlaceHolder = (e, elem) => {\n        elem = $(elem)\n        let tooltip = elem.attr(\"tooltip\")\n        if(!tooltip){\n            return;\n        }\n        elem.prev().prop(\"tagName\") === \"SPAN\" && elem.prev().remove()\n    }\n    Gator(document).on(\"focus\", \"input[type='password']\", function (e) {\n        setPlaceHolder(e, this)\n    })\n    Gator(document).on(\"focus\", \"input[type='text']\", function (e) {\n        setPlaceHolder(e, this)\n    })\n\n    Gator(document).on(\"blur\", \"input[type='password']\", function (e) {\n        removePlaceHolder(e, this)\n    })\n    Gator(document).on(\"blur\", \"input[type='text']\", function (e) {\n        removePlaceHolder(e, this)\n    })\n})()\n\n//# sourceURL=webpack:///./webapps/js/inputHandler.js?");

/***/ }),

/***/ "./webapps/js/login.js":
/*!*****************************!*\
  !*** ./webapps/js/login.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./webapps/js/login.js?");

/***/ }),

/***/ "./webapps/js/register.js":
/*!********************************!*\
  !*** ./webapps/js/register.js ***!
  \********************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Register\", function() { return Register; });\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ \"./webapps/js/html.js\");\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action.js */ \"./webapps/js/action.js\");\n\n\n\n\nlet Register = (function () {\n\n    let username;\n    let pass1;\n    let pass2;\n\n\n    let loadSignup = () => {\n        let signup_html = _html_js__WEBPACK_IMPORTED_MODULE_0__[\"appHTML\"].getSignupContainer();\n        $(\".login-body\").html(signup_html);\n        $(\"#signup_name\").focus()\n        bindSignupEvents()\n    }\n\n    let bindSignupEvents = () => {\n        let dispatchInputEvents = {\n            signup_name : handleUsernameInput,\n            signup_pass1 : handlePasswordInput,\n            signup_pass2 : handleReEnterPassword\n        }\n        Gator(document).on(\"keyup\", \"input\", function(e) {\n            let id = this.id;\n            dispatchInputEvents[id](this.value)\n        })\n    }\n\n    let handleUsernameInput = (value) => {\n        console.log(value)\n    }\n\n    let handlePasswordInput = () => {\n\n    }\n\n    let handleReEnterPassword = () => {\n\n    }\n\n    let signup = () => {\n\n    }\n\n    return {\n        loadSignup,\n        signup\n    }\n})()\n\n//# sourceURL=webpack:///./webapps/js/register.js?");

/***/ })

/******/ });