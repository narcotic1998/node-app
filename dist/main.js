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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

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

/***/ "./webapps/js/chatHandler.js":
/*!***********************************!*\
  !*** ./webapps/js/chatHandler.js ***!
  \***********************************/
/*! exports provided: ChatHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatHandler\", function() { return ChatHandler; });\n/* harmony import */ var _userStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userStore */ \"./webapps/js/userStore.js\");\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html */ \"./webapps/js/html.js\");\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socketHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socketHandler */ \"./webapps/js/socketHandler.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ \"./webapps/js/util.js\");\n\n\n\n\n\nlet ChatHandler = (function() {\n\n    let user_name = '';\n    let composer;\n    let emit = _socketHandler__WEBPACK_IMPORTED_MODULE_2__[\"SocketHandler\"].emit;\n    let isTyping;\n    let typingListener;\n    let invertIsTyping;\n    let typer = '';\n    let feedback;\n    let getUserId = '';\n\n    function init() {\n        setUserName();\n        constructChatArea();\n        bindEventListeners();\n        _socketHandler__WEBPACK_IMPORTED_MODULE_2__[\"SocketHandler\"].subscribe('message', handleIncomingMessage);\n        _socketHandler__WEBPACK_IMPORTED_MODULE_2__[\"SocketHandler\"].subscribe('typing', handleTypingMessage);\n        _socketHandler__WEBPACK_IMPORTED_MODULE_2__[\"SocketHandler\"].subscribe('textdraft', handleDraftedText);\n        _socketHandler__WEBPACK_IMPORTED_MODULE_2__[\"SocketHandler\"].subscribe('textclear', handleTyperClear)\n        getUserId = _socketHandler__WEBPACK_IMPORTED_MODULE_2__[\"SocketHandler\"].getID()\n    }\n\n    function setUserName() {\n        user_name = _userStore__WEBPACK_IMPORTED_MODULE_0__[\"UserStore\"].getUserName()\n    }\n\n    function constructChatArea() {\n        let textAreaConfig = {\n            className : 'chat-composer',\n            id : 'composer'\n        }\n        let buttonConfig = {\n            onclick : 'sendmessage',\n            text : 'Send'\n        }\n        let message_container = _html__WEBPACK_IMPORTED_MODULE_1__[\"chatHTML\"].getMessageContainer()\n        let chat_container = _html__WEBPACK_IMPORTED_MODULE_1__[\"chatHTML\"].getChatContainer({ textAreaConfig, buttonConfig });\n        let maincontainer = $('#maincontainer');\n        maincontainer.html(message_container + chat_container);\n        composer = $(\"#composer\");\n        feedback = $('#feedback')\n        composer.focus()\n    }\n\n    function bindEventListeners() {\n        Gator(composer[0]).on(\"keydown\", handleKeyDown)\n    }\n\n    function handleKeyDown(event) {\n        if (event.key === 'Enter') {\n            event.preventDefault();\n            sendMessage();\n            return;\n        }\n        isTyping = true;\n        sendTypingStatus()\n        setTypingListener()\n    }\n\n    let sendTypingStatus = Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"throttle\"])(() => {\n        let data = {\n            type: 'typing',\n            data: {\n                name: user_name,\n                message : getValue()\n            }\n        }\n        emit(data)\n    }, 1000)\n\n    function handleIncomingMessage({ data, id }) {\n        clearTyper(data.name)\n        if (getUserId === id) data.name = 'You'\n        $('#messagecontainer').append(getConstructedMessage(data)) \n    }\n\n    function handleTyperClear() {\n        clearTyper(typer)\n    }\n\n    function clearTyper(name) {\n        if (typer === name) {\n            typer = '';\n            feedback.text('')\n        }\n    }\n\n    function getConstructedMessage(data) {\n        return `<div class=\"message\">\n                    <strong>${data.name} : </strong> ${data.message}\n                </div>`\n    }\n\n    function handleTypingMessage(data) {\n        typer = data.name;\n       feedback.text(`${data.name} is typing... (${data.message}...)`)\n    }\n\n    function setTypingListener() {\n        if (typingListener || invertIsTyping) {\n            return;\n        }\n        typingListener = setInterval(() => {\n            if (isTyping) {\n                return;\n            }\n            sendDraftStatus();\n            clearTimers()\n        }, 3000);\n        invertIsTyping = setInterval(() => {\n            isTyping = false;\n        }, 2000)\n    }\n\n    function clearTimers() {\n        clearInterval(typingListener);\n        clearInterval(invertIsTyping);\n        typingListener = undefined;\n        invertIsTyping = undefined;\n    }\n\n    function sendDraftStatus() {\n        let message = getValue().trim()\n        if (!message) {\n            sendTextClear();\n            return;\n        }\n        let data = {\n            type : 'textdraft',\n            data : {\n                name : user_name,\n                message\n            }\n        }\n        emit(data)\n    }\n\n    function sendTextClear() {\n        emit({type : 'textclear'})\n    }\n\n    function getValue() {\n        return composer.val()\n    }\n\n    function sendMessage() {\n        let message = getValue().trim();\n        if (!message) return;\n        let data = {\n            type : 'message',\n             data : {\n                 name: user_name,\n                 message\n             }\n        }\n        emit(data);\n        composer.val('')\n    }\n\n    function handleDraftedText(data) {\n        typer = data.name\n        feedback.text(`${data.name} has entered text (${data.message})`)\n    }\n\n    return {\n        init,\n        sendMessage\n    }\n\n})()\n\n//# sourceURL=webpack:///./webapps/js/chatHandler.js?");

/***/ }),

/***/ "./webapps/js/events.js":
/*!******************************!*\
  !*** ./webapps/js/events.js ***!
  \******************************/
/*! exports provided: EventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventHandler\", function() { return EventHandler; });\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ \"./webapps/js/login.js\");\n/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.js */ \"./webapps/js/register.js\");\n/* harmony import */ var _chatHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatHandler.js */ \"./webapps/js/chatHandler.js\");\n\n\n\n__webpack_require__(/*! ./gator.js */ \"./webapps/js/gator.js\")\n\nlet EventHandler = (function () {\n    Gator(document).on(\"click\", \"[documentclick]\", function (e) {\n        dispatchEvent(\"documentclick\", this, e)\n    })\n    function dispatchEvent(type, curr, event) {\n        let handler = $(curr).attr(type)\n        eventHandler[type][handler](curr, event)\n    }\n\n    let eventHandler = {\n        documentclick: {\n            login: _login_js__WEBPACK_IMPORTED_MODULE_0__[\"Login\"].handleLogin,\n            loadsignup : _register_js__WEBPACK_IMPORTED_MODULE_1__[\"Register\"].loadSignup,\n            signup: _register_js__WEBPACK_IMPORTED_MODULE_1__[\"Register\"].register,\n            sendmessage : _chatHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"ChatHandler\"].sendMessage\n        }\n    }\n})()\n\n//# sourceURL=webpack:///./webapps/js/events.js?");

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

eval("let appHTML = {\n    getBody : () => {\n        return `<div class=\"login-body\">\n                </div>`\n    },\n    getInputHtml : (config = {}) => {\n        return `<div class=\"input-wrap ${config.icon_class || ''}\">\n                    <input type=\"${config.type || \"text\"}\" class=\"naren-input\" id='${config.id || ''}' placeholder=\"${config.placeholder || ''}\"\n                    ${config.tooltip ? `tooltip=\"${config.placeholder}\"` : ''}>\n                </div>`\n    },\n    getButtonHtml : (config = {}) => {\n        return `<div class=\"naren-btn\" ${config.onclick ? `documentclick=\"${config.onclick}\"` : ''}>\n                   <span class=\"btn-text\">${config.text || \"Button\"}</span>\n                </div>`\n    },\n    getLoginContainer : () => {\n        let username_input = appHTML.getInputHtml({id : \"login_name\", placeholder: \"Username/Email\", tooltip:true})\n        let password_input = appHTML.getInputHtml({id : \"login_pass\", placeholder : \"Password\", type: \"password\", tooltip:true})\n        let login_btn = appHTML.getButtonHtml({onclick : \"login\", text: \"Login\"})\n        let signup_btn = appHTML.getButtonHtml({onclick : \"loadsignup\", text: \"signup\"})\n        return `<div class=\"login-header\">\n                        <p class=\"header-text\">Login</p>\n                    </div>\n                <div class=\"login-container\">\n                    <div class=\"name-input-wrap\">\n                        ${username_input}\n                    </div>\n                    <div class=\"pass-input-wrap\">\n                        ${password_input}\n                    </div>\n                    <div class=\"login-btn\">\n                    ${login_btn}\n                    </div>\n                    <div class=\"signup-btn\">\n                    <span> Don't have an account ?</span>\n                    ${signup_btn}\n                    </div>\n                </div>`\n    },\n    getSignupContainer : () => {\n        let username_input = appHTML.getInputHtml({id : \"signup_name\", placeholder: \"Username/Email\",tooltip:true})\n        let password_input = appHTML.getInputHtml({id : \"signup_pass1\", placeholder : \"Password\", type: \"password\",tooltip:true})\n        let retypepass_input = appHTML.getInputHtml({id : \"signup_pass2\", placeholder : \"Reenter-Password\", type: \"password\",tooltip:true})\n        let signup_btn = appHTML.getButtonHtml({onclick : \"loadsignup\", text: \"signup\"})\n        return `<div class=\"login-header\">\n                        <p class=\"header-text\">REGISTER</p>\n                    </div>\n                    <div class=\"signup-container\">\n                    <div class=\"name-input-wrap\">\n                        ${username_input}\n                    </div>\n                    <div class=\"pass-input-wrap\">\n                        ${password_input}\n                    </div>\n                    <div class=\"repass-input-wrap\">\n                        ${retypepass_input}\n                    </div>\n                    <div class=\"signup-btn\">\n                    ${signup_btn}\n                    </div>\n                </div>`\n    }\n};\n\nlet getTextAreaHTML = (config) => {\n    let { className, id } = config;\n    return `<textarea class=\"${className}\" id=\"${id}\"></textarea>`\n}\n\nlet chatHTML = {\n    getChatContainer : (config) => {\n        let textArea = getTextAreaHTML(config.textAreaConfig);\n        let button = appHTML.getButtonHtml(config.buttonConfig)\n        return `<div class=\"chat-container\">\n                    ${textArea}\n                    ${button}\n                </div>`\n        \n    },\n    getMessageContainer : () => {\n        return `<div id=\"messagecontainer\" class=\"message-container\">\n                </div>\n                <div id=\"feedback\"></div>`\n    }\n}\n\nmodule.exports = {\n    appHTML,\n    chatHTML\n}\n\n//# sourceURL=webpack:///./webapps/js/html.js?");

/***/ }),

/***/ "./webapps/js/index.js":
/*!*****************************!*\
  !*** ./webapps/js/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ \"./webapps/js/html.js\");\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _socketHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socketHandler */ \"./webapps/js/socketHandler.js\");\n\n__webpack_require__(/*! ./events */ \"./webapps/js/events.js\")\n__webpack_require__(/*! ./inputHandler */ \"./webapps/js/inputHandler.js\");\n\n\nfunction init() {\n    constructLogin()\n    bindEventListeners()\n    _socketHandler__WEBPACK_IMPORTED_MODULE_1__[\"SocketHandler\"].init();\n}\n\nfunction constructLogin() {\n    let bodyHtml = _html_js__WEBPACK_IMPORTED_MODULE_0__[\"appHTML\"].getBody()\n    $(\"#maincontainer\").append(bodyHtml)\n    let login_container_html = _html_js__WEBPACK_IMPORTED_MODULE_0__[\"appHTML\"].getLoginContainer()\n    $(\".login-body\").append(login_container_html)\n    $(\"#login_name\").focus()\n}\n\nfunction bindEventListeners() {\n   \n}\n\ninit()\n\n\n\n//# sourceURL=webpack:///./webapps/js/index.js?");

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
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html */ \"./webapps/js/html.js\");\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userStore */ \"./webapps/js/userStore.js\");\n/* harmony import */ var _chatHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatHandler */ \"./webapps/js/chatHandler.js\");\n\n\n\n\nlet Login = (function() {\n\n    function handleLogin() {\n        let username = $(\"#login_name\").val();\n        _userStore__WEBPACK_IMPORTED_MODULE_1__[\"UserStore\"].setUserName(username);\n        _chatHandler__WEBPACK_IMPORTED_MODULE_2__[\"ChatHandler\"].init()\n    }\n\n    return {\n        handleLogin\n    }\n})()\n\n//# sourceURL=webpack:///./webapps/js/login.js?");

/***/ }),

/***/ "./webapps/js/register.js":
/*!********************************!*\
  !*** ./webapps/js/register.js ***!
  \********************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Register\", function() { return Register; });\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ \"./webapps/js/html.js\");\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_html_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action.js */ \"./webapps/js/action.js\");\n\n\n\n\nlet Register = (function () {\n\n    let username;\n    let pass1;\n    let pass2;\n\n\n    let loadSignup = () => {\n        let signup_html = _html_js__WEBPACK_IMPORTED_MODULE_0__[\"appHTML\"].getSignupContainer();\n        $(\".login-body\").html(signup_html);\n        $(\"#signup_name\").focus()\n        bindSignupEvents()\n    }\n\n    let bindSignupEvents = () => {\n        let dispatchInputEvents = {\n            signup_name : handleUsernameInput,\n            signup_pass1 : handlePasswordInput,\n            signup_pass2 : handleReEnterPassword\n        }\n        Gator(document).on(\"keyup\", \"input\", function(e) {\n            let id = this.id;\n            dispatchInputEvents[id](this.value)\n        })\n    }\n\n    let handleUsernameInput = (value) => {\n        console.log(value)\n    }\n\n    let handlePasswordInput = () => {\n\n    }\n\n    let handleReEnterPassword = () => {\n\n    }\n\n    let signup = () => {\n\n    }\n\n    return {\n        loadSignup,\n        signup\n    }\n})()\n\n//# sourceURL=webpack:///./webapps/js/register.js?");

/***/ }),

/***/ "./webapps/js/socketHandler.js":
/*!*************************************!*\
  !*** ./webapps/js/socketHandler.js ***!
  \*************************************/
/*! exports provided: SocketHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocketHandler\", function() { return SocketHandler; });\nlet SocketHandler = (function() {\n    let port = process.env.PORT || 5000\n    let socket;\n    let subscriptions = {};\n    \n    function init() {\n        socket = io.connect(window.location.origin)\n    }\n\n    function subscribe(type, handler) {\n        if (!type || typeof(handler) !== 'function') {\n            return;\n        }\n        socket.on(type, handler)\n    }\n\n    function emit(emit_data = {}) {\n        if (!emit_data.type) {\n            return;\n        }\n        socket.emit(emit_data.type, emit_data.data)\n    }\n\n    function getID() {\n        return socket.id\n    }\n\n    return {\n        init,\n        subscribe,\n        emit,\n        getID\n    }\n})()\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./webapps/js/socketHandler.js?");

/***/ }),

/***/ "./webapps/js/userStore.js":
/*!*********************************!*\
  !*** ./webapps/js/userStore.js ***!
  \*********************************/
/*! exports provided: UserStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserStore\", function() { return UserStore; });\nlet UserStore = (function() {\n    let user_name =  '';\n\n    function setUserName(name) {\n        user_name = name;\n    }\n\n    function getUserName() {\n        return user_name\n    }\n\n    return {\n        setUserName,\n        getUserName\n    }\n})()\n\n//# sourceURL=webpack:///./webapps/js/userStore.js?");

/***/ }),

/***/ "./webapps/js/util.js":
/*!****************************!*\
  !*** ./webapps/js/util.js ***!
  \****************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\nconst throttle = (func, limit) => {\n    let inThrottle\n    return function () {\n        const args = arguments;\n        const context = this;\n        if (!inThrottle) {\n            func.apply(context, args);\n            inThrottle = true;\n            setTimeout(() => inThrottle = false, limit)\n        }\n    }\n}\n\n//# sourceURL=webpack:///./webapps/js/util.js?");

/***/ })

/******/ });