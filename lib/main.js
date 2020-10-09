(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_less_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_less_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_less_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_less_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal.vue?vue&type=template&id=0eaeaf66&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "drag-modal-vue-modal-warp",
      style: {
        background: _vm.mask ? "rgba(0, 0, 0, 0.5)" : "transparent",
        "z-index": _vm.zIndex
      },
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.onClickMask($event)
        }
      }
    },
    [
      _vm.visible
        ? _c(
            "main-content",
            {
              attrs: {
                id: _vm.modalId,
                title: _vm.title,
                width: _vm.width,
                height: _vm.height
              },
              on: { cancel: _vm.cancel },
              scopedSlots: _vm._u(
                [
                  {
                    key: "footer",
                    fn: function() {
                      return [
                        _vm._t("footer", [
                          _c(
                            "button",
                            {
                              staticClass: "drag-modal-vue-modal-btn",
                              on: { click: _vm.confirm }
                            },
                            [_vm._v("确 定")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "drag-modal-vue-modal-btn",
                              on: { click: _vm.close }
                            },
                            [_vm._v("取 消")]
                          )
                        ])
                      ]
                    },
                    proxy: true
                  }
                ],
                null,
                true
              )
            },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/mainContent.vue?vue&type=template&id=736cdaa0&
var mainContentvue_type_template_id_736cdaa0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "drag-modal-vue-modal",
      style: {
        width: typeof _vm.width == "number" ? _vm.width + "px" : _vm.width
      },
      attrs: { id: _vm.id }
    },
    [
      _c(
        "div",
        {
          staticClass: "drag-modal-vue-header",
          on: { mousedown: _vm.mousedown }
        },
        [
          _c("div", { staticClass: "drag-modal-vue-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _c("img", {
            staticClass: "drag-modal-vue-close",
            attrs: { alt: "无图片", src: _vm.closeImg },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.close($event)
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "drag-modal-vue-main",
          style: { height: _vm.height === 0 ? "auto" : _vm.height + "px" }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "drag-modal-vue-footer" }, [_vm._t("footer")], 2)
    ]
  )
}
var mainContentvue_type_template_id_736cdaa0_staticRenderFns = []
mainContentvue_type_template_id_736cdaa0_render._withStripped = true


// CONCATENATED MODULE: ./src/assest/close.png
/* harmony default export */ var assest_close = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/mainContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var mainContentvue_type_script_lang_js_ = ({
  name: 'mainContent',
  props: {
    title: {
      // 标题
      type: String,
      default: ''
    },
    id: {
      // id
      type: String,
      default: ''
    },
    width: {
      // 宽度
      type: [String, Number],
      default: 500
    },
    height: {
      // 内部高度
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      modalEl: '', // 保存的modal元素实例
      closeImg: assest_close, // 关闭按钮图标
    }
  },
  methods: {
    close () {
      this.$emit('cancel')
    },
    mousedown (e) {
      var dv = document.getElementById(this.id)
      var x = 0
      var y = 0
      var l = 0
      var t = 0
      var isDown = false
      // 鼠标按下事件
      // 获取x坐标和y坐标
      x = e.clientX
      y = e.clientY
      // 获取左部和顶部的偏移量
      l = dv.offsetLeft
      t = dv.offsetTop
      // 开关打开
      isDown = true
      // 设置样式
      dv.style.cursor = 'move'
      // 鼠标移动
      window.onmousemove = function (e) {
        if (isDown === false) {
          return
        }
        // 获取x和y
        var nx = e.clientX
        var ny = e.clientY
        // 计算移动后的左偏移量和顶部的偏移量
        var nl = nx - (x - l)
        var nt = ny - (y - t)
        // dv.style.left = nl + 'px'
        // dv.style.top = nt + 'px'
        let windowW = document.body.clientWidth
        let windowH = document.body.clientHeight
        if (nl > dv.offsetWidth / 2 && nl + dv.offsetWidth / 2 < windowW) {
          dv.style.left = nl + 'px'
        } else if (nl < dv.offsetWidth / 2) {
          dv.style.left = parseInt(dv.offsetWidth / 2) + 'px'
        } else if (nl + dv.offsetWidth / 2 > windowW) {
          parseInt(windowW - (dv.offsetWidth / 2)) + 'px'
        }
        if (nt > dv.offsetHeight / 2 && nt + dv.offsetHeight / 2 < windowH) {
          dv.style.top = nt + 'px'
        } else if (nt < dv.offsetHeight / 2) {
          dv.style.top = parseInt(dv.offsetHeight / 2) + 'px'
        } else if (nt + dv.offsetHeight / 2 > windowH) {
          dv.style.top = parseInt(windowH - (dv.offsetHeight / 2)) + 'px'
        }
      }
      // 鼠标抬起事件
      dv.onmouseup = function () {
        // 开关关闭
        isDown = false
        dv.style.cursor = 'default'
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/mainContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mainContentvue_type_script_lang_js_ = (mainContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/index.less?vue&type=style&index=0&lang=css&
var componentsvue_type_style_index_0_lang_css_ = __webpack_require__(1);

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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

// CONCATENATED MODULE: ./src/components/mainContent.vue






/* normalize component */

var component = normalizeComponent(
  components_mainContentvue_type_script_lang_js_,
  mainContentvue_type_template_id_736cdaa0_render,
  mainContentvue_type_template_id_736cdaa0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/mainContent.vue"
/* harmony default export */ var mainContent = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var modalvue_type_script_lang_js_ = ({
  name: 'dragModalVue',
  props: {
    title: {
      // 标题
      type: String,
      default: ''
    },
    width: {
      // 宽度
      type: [String, Number],
      default: 500
    },
    height: {
      // 内部高度
      type: Number,
      default: 0
    },
    mask: {
      // 是否显示遮罩
      type: Boolean,
      default: true
    },
    maskClosable: {
      // 点击蒙层是否允许关闭
      type: Boolean,
      default: true
    },
    zIndex: {
      // 内部高度
      type: Number,
      default: 10
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    mainContent: mainContent
  },
  data () {
    return {
      modalId: 'ufModal'
    }
  },
  watch: {
  },
  methods: {
    /**
     * @description: 关闭 并发送cancel事件
     */
    close () {
      this.$emit('cancel')
      this.$emit('afterClose')
      this.$emit('update:visible', false)
      this.$emit('close', false)
    },
    /**
     * @description:
     */
    confirm () {
      this.$emit('ok')
      this.close()
    },
    onClickMask () {
      if (this.maskClosable) {
        this.close()
      }
    },
    cancel () {
      this.close()
    }
  },
  model: {
    prop: 'visible',
    event: 'close'
  },
  created () {
    if (this.visible) {
      this.modalId = 'ufModal_' + parseInt(Math.random() * 1e10)
    }
  }
});

// CONCATENATED MODULE: ./src/components/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/modal.vue






/* normalize component */

var modal_component = normalizeComponent(
  components_modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var modal_api; }
modal_component.options.__file = "src/components/modal.vue"
/* harmony default export */ var modal = (modal_component.exports);
// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src = __webpack_exports__["default"] = (modal);

/***/ })
/******/ ]);
});