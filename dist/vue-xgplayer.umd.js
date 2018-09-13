(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/debounce"), require("xgplayer"), require("nanoid/generate"), require("lodash/split"), require("lodash/assign"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/debounce", "xgplayer", "nanoid/generate", "lodash/split", "lodash/assign"], factory);
	else if(typeof exports === 'object')
		exports["vue-xgplayer"] = factory(require("lodash/debounce"), require("xgplayer"), require("nanoid/generate"), require("lodash/split"), require("lodash/assign"));
	else
		root["vue-xgplayer"] = factory(root["lodash/debounce"], root["xgplayer"], root["nanoid/generate"], root["lodash/split"], root["lodash/assign"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__3540__, __WEBPACK_EXTERNAL_MODULE__5de4__, __WEBPACK_EXTERNAL_MODULE__669e__, __WEBPACK_EXTERNAL_MODULE_bee3__, __WEBPACK_EXTERNAL_MODULE_dcd8__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "3540":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3540__;

/***/ }),

/***/ "5de4":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5de4__;

/***/ }),

/***/ "669e":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__669e__;

/***/ }),

/***/ "bee3":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_bee3__;

/***/ }),

/***/ "dcd8":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dcd8__;

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4cd02416-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/player.vue?vue&type=template&id=27bd7c52&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"player",staticClass:"vue-xgplayer",attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/player.vue?vue&type=template&id=27bd7c52&

// EXTERNAL MODULE: external "xgplayer"
var external_xgplayer_ = __webpack_require__("5de4");
var external_xgplayer_default = /*#__PURE__*/__webpack_require__.n(external_xgplayer_);

// EXTERNAL MODULE: external "nanoid/generate"
var generate_ = __webpack_require__("669e");
var generate_default = /*#__PURE__*/__webpack_require__.n(generate_);

// CONCATENATED MODULE: ./src/utils.js

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // for valid css selector

function genId() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return generate_default()(alphabet, length);
}
// EXTERNAL MODULE: external "lodash/assign"
var assign_ = __webpack_require__("dcd8");
var assign_default = /*#__PURE__*/__webpack_require__.n(assign_);

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__("3540");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: external "lodash/split"
var split_ = __webpack_require__("bee3");
var split_default = /*#__PURE__*/__webpack_require__.n(split_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/player.vue?vue&type=script&lang=js&
//
//
//
//





var defaultOptions = {// playsinline: true
  // 'x5-video-player-type': 'h5'
};
/* harmony default export */ var playervue_type_script_lang_js_ = ({
  name: 'xgplayer',
  props: {
    id: {
      type: String,
      default: function _default() {
        return 'xgplayer_' + genId();
      }
    },
    globalOptions: {
      type: Object,
      default: function _default() {}
    },
    options: {
      type: Object,
      default: function _default() {
        return defaultOptions;
      }
    },
    noDestroy: {
      type: Boolean,
      default: false
    },
    aspect: {
      type: String,
      default: '16by9' // 16by9|21by9|4by3|1by1

    },
    autoHeightDebounce: {
      type: Number,
      default: 250
    }
  },
  data: function data() {
    return {
      player: null
    };
  },
  computed: {
    aspectRatio: function aspectRatio() {
      var aspectArr = split_default()(this.aspect, 'by');

      if (aspectArr.length !== 2) {
        return 16 / 9;
      }

      return aspectArr[0] / aspectArr[1];
    }
  },
  methods: {
    init: function init() {
      this.player = new external_xgplayer_default.a(assign_default()({}, defaultOptions, this.globalOptions, this.options, {
        id: this.id
      }));
    },
    destroy: function destroy() {
      this.player && this.player.destroy();
    },
    reload: function reload() {
      this.player && this.player.reload();
    },
    _updateHeight: function _updateHeight() {
      if (this.$refs.player) {
        var height = Math.floor(this.$refs.player.offsetWidth * 1 / this.aspectRatio) + 'px';
        this.$refs.player.style.height = height;
      }
    },
    autoResize: function autoResize() {
      this._updateHeight();

      window.addEventListener('resize', debounce_default()(this._updateHeight.bind(this), this.autoHeightDebounce));
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.init();
    setTimeout(function () {
      // hack
      _this.autoResize();
    });
  },
  destroyed: function destroyed() {
    !this.noDestroy && this.destroy();
  }
});
// CONCATENATED MODULE: ./src/player.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_playervue_type_script_lang_js_ = (playervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/player.vue





/* normalize component */

var component = normalizeComponent(
  src_playervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "player.vue"
/* harmony default export */ var player = (component.exports);
// CONCATENATED MODULE: ./src/index.js


var src_install = function install(Vue, options) {
  if (options) {
    player.props.globalOptions.default = function () {
      return options;
    };
  }

  Vue.component(player.name, player);
};

/* harmony default export */ var src = ({
  install: src_install
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "install", function() { return src_install; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "XgPlayer", function() { return player; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-xgplayer.umd.js.map