(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vgeneraltable"] = factory();
	else
		root["vgeneraltable"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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

/***/ "3024":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "b15c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_table_vue_vue_type_style_index_0_id_251d9c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3024");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_table_vue_vue_type_style_index_0_id_251d9c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_table_vue_vue_type_style_index_0_id_251d9c3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f40e1e66-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/general-table/src/general-table.vue?vue&type=template&id=251d9c3e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-container",class:[
    {
      'table-scrollable-x': _vm.scrollX,
      'table-scrollable-y': _vm.scrollY,
      sticky: _vm.sticky && _vm.isIos,
    } ]},[(_vm.showHeader)?_c('div',{ref:"headerWrapper",staticClass:"table-header-wrapper",class:{ isFixed: _vm.titleFixed },style:({
      top: _vm.sticky && typeof _vm.headerTop === 'number' ? _vm.headerTop + 'px' : '',
    })},[_c('table',{ref:"tableHeader",style:({
        width: _vm.bodyWidth ? _vm.bodyWidth + 'px' : '',
      })},[_c('colgroup',_vm._l((_vm.targetColumns),function(item,index){return _c('col',{key:index,attrs:{"align":item.headerAlign,"width":item.width}})}),0),_c('thead',_vm._l((_vm.tableHeaderData),function(item,index){return _c('tr',{key:index},_vm._l((item),function(one,i){return _c('th',{key:i,class:[{ 'is-hidden': one.fixed }, 'is-' + one.headerAlign],attrs:{"colspan":one.colspan,"rowspan":one.rowspan}},[_c('div',{staticClass:"cell",domProps:{"innerHTML":_vm._s(one.label)}})])}),0)}),0)])]):_vm._e(),(_vm.showHeader)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.titleFixed),expression:"titleFixed"}],style:({ height: _vm.headerHeight ? _vm.headerHeight + 'px' : '' })}):_vm._e(),_c('div',{ref:"bodyWrapper",staticClass:"table-body-wrapper",class:[
      _vm.scrollX ? ("is-scrolling-" + _vm.scrollPosition) : 'is-scrolling-none' ],style:(_vm.bodyWrapperStyle)},[_c('table',{ref:"tableBody",style:({
        width: _vm.bodyWidth ? _vm.bodyWidth + 'px' : '',
      })},[_c('colgroup',_vm._l((_vm.targetColumns),function(item,index){return _c('col',{key:index,attrs:{"align":item.align,"width":item.width}})}),0),_c('tbody',_vm._l((_vm.tableBodyData),function(item,index){return _c('tr',{key:index,class:{ 'sub-table': !!item.originData.parent }},_vm._l((item.data),function(one,i){return _c('td',{key:i,class:[{ 'is-hidden': one.fixed }, 'is-' + one.align],attrs:{"colspan":one.colspan,"rowspan":one.rowspan}},[_vm._t(("col" + i),function(){return [(
                  i === 0 &&
                    item.originData.children &&
                    item.originData.children.length > 0
                )?_c('div',{staticClass:"cell",class:item.originData.isOpend ? 'is-open' : 'is-close',on:{"click":function($event){$event.stopPropagation();return _vm.toggleSubTable(item, index)}}},[_vm._v(" "+_vm._s(one.value)+" "),_c('b',{staticClass:"more-btn"})]):_c('div',{staticClass:"cell"},[_vm._v(_vm._s(one.value))])]},{"cell":one})],2)}),0)}),0)])]),(_vm.fixedColumns.length > 0)?_c('div',{ref:"leftFixedWrapper",staticClass:"table-fixed-wrapper",class:{ moved: _vm.scrollPosition === 'left' },style:({
      width: _vm.fixedWrapperWidth ? _vm.fixedWrapperWidth + 'px' : '',
    })},[(_vm.showHeader)?_c('div',{ref:"fixedHeaderWrapper",staticClass:"table-left-fixed-header-wrapper",class:{ isFixed: _vm.titleFixed },style:({
        top: typeof _vm.headerTop === 'number' ? _vm.headerTop + 'px' : '',
        width: _vm.fixedWrapperWidth ? _vm.fixedWrapperWidth + 'px' : '',
      })},[_c('table',{ref:"fixedTableHeader",style:({ width: _vm.bodyWidth ? _vm.bodyWidth + 'px' : '' })},[_c('colgroup',_vm._l((_vm.targetColumns),function(item,index){return _c('col',{key:index,attrs:{"align":item.headerAlign,"width":item.width}})}),0),_c('thead',_vm._l((_vm.tableHeaderData),function(item,index){return _c('tr',{key:index},_vm._l((item),function(one,i){return _c('th',{key:i,class:[
                {
                  'is-hidden': !one.fixed,
                  'is-fixed-last': i == _vm.fixedColumns.length - 1,
                },
                'is-' + one.headerAlign ],attrs:{"colspan":one.colspan,"rowspan":one.rowspan}},[_c('div',{staticClass:"cell",domProps:{"innerHTML":_vm._s(one.label)}})])}),0)}),0)])]):_vm._e(),(_vm.showHeader)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.titleFixed),expression:"titleFixed"}],style:({
        height: _vm.headerHeight ? _vm.headerHeight + 'px' : '',
        width: _vm.fixedWrapperWidth ? _vm.fixedWrapperWidth + 'px' : '',
      })}):_vm._e(),_c('div',{ref:"fixedBodyWrapper",staticClass:"table-left-fixed-body-wrapper",style:({ height: _vm.fixedBodyHeight ? _vm.fixedBodyHeight + 'px' : '' })},[_c('table',{ref:"fixedTableBody",style:({
          width: _vm.bodyWidth ? _vm.bodyWidth + 'px' : '',
        })},[_c('colgroup',_vm._l((_vm.targetColumns),function(item,index){return _c('col',{key:index,attrs:{"align":item.align,"width":item.width}})}),0),_c('tbody',_vm._l((_vm.tableBodyData),function(item,index){return _c('tr',{key:index,class:{ 'sub-table': !!item.originData.parent }},_vm._l((item.data),function(one,i){return _c('td',{key:i,class:[
                {
                  'is-hidden': !one.fixed,
                  'is-fixed-last': i == _vm.fixedColumns.length - 1,
                },
                'is-' + one.align ],attrs:{"colspan":one.colspan,"rowspan":one.rowspan}},[_vm._t(("col" + i),function(){return [(
                    i === 0 &&
                      item.originData.children &&
                      item.originData.children.length > 0
                  )?_c('div',{staticClass:"cell",class:item.originData.isOpend ? 'is-open' : 'is-close',on:{"click":function($event){$event.stopPropagation();return _vm.toggleSubTable(item, index)}}},[_vm._v(" "+_vm._s(one.value)+" "),_c('b',{staticClass:"more-btn"})]):_c('div',{staticClass:"cell"},[_vm._v(" "+_vm._s(one.value)+" ")])]},{"cell":one})],2)}),0)}),0)])])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/general-table/src/general-table.vue?vue&type=template&id=251d9c3e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/general-table/src/general-table.vue?vue&type=script&lang=js&
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
//
//
//
//

const throttle = function(func, delay = 60) {
  let lock = false;
  return function(...args) {
    if (lock) {
      return;
    }
    func.apply(this, ...args);
    lock = true;
    setTimeout(() => (lock = false), delay);
  };
};

/* harmony default export */ var general_tablevue_type_script_lang_js_ = ({
  name: "general-table",
  props: {
    // 表格数据
    tableData: {
      type: Array,
    },
    // 列定义
    columns: {
      type: Array,
      default: () => [
        {
          label: "", // 列名称
          field: "", // 列字段
          fixed: false, // 是否固定， 可选值 true, false, 'left', 'right'
          hide: false, // 是否显示该列
          align: "", // 表格主体单元格对齐方式
          headerAlign: "", // 表头单元格对齐方式
          width: "", // 该列宽度
          minWidth: "", // 该列最小宽度
          filter: '', // 全局过滤器名称
          children: [], // 该列包含嵌套列，暂只支持一层嵌套
        },
      ],
    },
    // 表格宽度
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    // 表头粘性定位距离顶部距离
    headerTop: {
      type: [String, Number],
      default: 0,
    },
    // 是否显示表头
    showHeader: {
      type: Boolean,
      default: true,
    },
    // 表头是否粘性定位
    sticky: {
      type: Boolean,
      default: true,
    },
    // 单元格自定义合并方法
    spanMethod: {
      type: Function,
    },
  },
  data() {
    return {
      layout: {},
      isLeftFixed: false,
      isRightFixed: false,
      tableHeaderData: [],
      tableBodyData: [],
      targetColumns: [],
      fixedColumns: [],
      rightFixedColumns: [],
      fixedWrapperWidth: null,
      bodyWidth: null,
      bodyHeight: null,
      fixedBodyHeight: null,
      scrollX: false,
      scrollY: false,
      titleFixed: false,
      scrollPosition: "right",
      baseSize: 60,
      headerHeight: null,
      isIos: false,
    };
  },
  computed: {
    shouldUpdateHeight() {
      return (
        this.height ||
        this.maxHeight ||
        this.fixedColumns.length > 0 ||
        this.rightFixedColumns.length > 0
      );
    },
    bodyWrapperStyle() {
      const obj = {};
      if (this.bodyHeight) {
        if (this.height) {
          obj.height = `${this.bodyHeight}px`;
        }
        if (this.maxHeight) {
          obj["max-height"] = `${Math.max(
            this.bodyHeight,
            this.maxHeight - this.headerHeight
          )}px`;
        }
      }
      return obj;
    },
  },
  watch: {
    columns: {
      handler(newV) {
        console.log(newV);
        this.createTableHeader(newV);
        this.createTableBody();
        this.$nextTick(() => {
          this.doLayout();
        });
      },
      immediate: true,
    },
    tableData: {
      handler() {
        this.createTableBody();
        this.$nextTick(() => {
          this.doLayout();
          this.bodyScrollFunc();
        });
      },
    },
    height: {
      handler(value) {
        this.setHeight(value);
      },
      immediate: true,
    },
    maxHeight: {
      handler(value) {
        this.setMaxHeight(value);
      },
      immediate: true,
    },
  },
  created() {
    const UA =
      typeof window !== "undefined" && window.navigator.userAgent.toLowerCase();
    this.isIos = UA && /iphone|ipad|ipod|ios/.test(UA);
    this.createTableHeader(this.columns);
  },
  mounted() {
    // 绑定事件
    this.$refs.bodyWrapper.addEventListener(
      "touchstart",
      this.startFunc.bind(this)
    );
    this.$refs.bodyWrapper.addEventListener(
      "touchmove",
      this.moveFunc.bind(this)
    );
    this.$refs.bodyWrapper.addEventListener(
      "touchend",
      this.endFunc.bind(this)
    );

    if (this.sticky && !this.isIos) {
      window.addEventListener("scroll", this.handleScroll.bind(this));
    }
    // 设置每个单元宽度
    this.updateColumnsWidth();

    this.doLayout();
  },
  beforeDestroyed() {
    this.$refs.bodyWrapper.removeEventListener(
      "touchstart",
      this.startFunc.bind(this)
    );
    this.$refs.bodyWrapper.removeEventListener(
      "touchmove",
      this.moveFunc.bind(this)
    );
    this.$refs.bodyWrapper.removeEventListener(
      "touchend",
      this.endFunc.bind(this)
    );
    if (this.sticky && !this.isIos) {
      window.removeEventListener("scroll", this.handleScroll.bind(this));
    }
  },
  methods: {
    startFunc() {},
    moveFunc: throttle(function() {
      this.bodyScrollFunc();
    }, 17),
    endFunc() {
      setTimeout(() => {
        this.bodyScrollFunc();
      }, 500);
    },
    bodyScrollFunc() {
      if (typeof this.$refs.bodyWrapper !== "object") {
        return;
      }
      const { scrollLeft, scrollTop } = this.$refs.bodyWrapper;
      if (scrollLeft > 0) {
        this.scrollPosition = "left";
      } else {
        this.scrollPosition = "right";
      }
      this.$refs.tableHeader.style.transform = `translate3d(${-scrollLeft}px, 0, 0)`;
      if (this.$refs.fixedTableBody && this.$refs.fixedTableBody.style) {
        this.$refs.fixedTableBody.style.transform = `translate3d(0, ${-scrollTop}px, 0)`;
      }
      if (
        typeof this.$listeners === "object" &&
        this.$listeners["update:position"]
      ) {
        this.$emit("update:position", {
          left: scrollLeft,
          top: scrollTop,
        });
      }
    },
    handleScroll: throttle(function() {
      if (this.isIos) {
        this.titleFixed = false;
        return;
      }
      const offsetTop = this.$el.getBoundingClientRect().top;
      this.titleFixed = offsetTop <= Number(this.headerTop);
    }, 17),
    createTableHeader(columns = []) {
      // 过滤掉需要隐藏的元素
      let filterColumns = columns.filter((item) => !item.hide);
      filterColumns.forEach((item) => {
        if (Array.isArray(item.children) && item.children.length > 0) {
          item.children = item.children.filter((one) => !one.hide);
        }
      });
      // 固定列不支持嵌套 重新排列
      const leftFixedColumns = filterColumns.filter(
        (column) => column.fixed === true || column.fixed === "left"
      );
      const rightFixedColumns = filterColumns.filter(
        (column) => column.fixed === "right"
      );
      const notFixedColumns = filterColumns.filter((column) => !column.fixed);
      filterColumns = []
        .concat(leftFixedColumns)
        .concat(notFixedColumns)
        .concat(rightFixedColumns);
      this.updateColumns(filterColumns);

      // 判断columns是否是二级表头
      const isExistChildren = filterColumns.some(
        (col) => Array.isArray(col.children) && col.children.length > 0
      );
      // 生成表头，对每个单元格设置colspan rowspan
      const arr = isExistChildren ? [[], []] : [[]];
      for (const col of filterColumns) {
        const obj = Object.assign(
          {
            headerAlign: "right",
            align: "right",
            colspan: 1,
            rowspan: 1,
          },
          col
        );
        // 如果该列存在子节点，对子节点进行处理
        if (Array.isArray(col.children) && col.children.length > 0) {
          obj.colspan = col.children.length;
          const arr2 = col.children.map((item) =>
            Object.assign(
              {
                headerAlign: "right",
                align: "right",
                colspan: 1,
                rowspan: 1,
              },
              item
            )
          );
          arr[1].push(...arr2);
        } else if (isExistChildren) {
          obj.rowspan = 2;
        }
        arr[0].push(obj);
      }
      this.tableHeaderData = arr;
    },
    updateColumns(filterColumns) {
      // 扁平化columns，将原columns转为一级表头
      this.flattenColumns = this.flatColumns(filterColumns).map((item) => {
        const obj = Object.assign(
          {
            headerAlign: "right",
            align: "right",
          },
          item
        );
        return obj;
      });
      this.fixedColumns = this.flattenColumns.filter(
        (column) => column.fixed === true || column.fixed === "left"
      );
      this.rightFixedColumns = this.flattenColumns.filter(
        (column) => column.fixed === "right"
      );
      const notFixedColumns = this.flattenColumns.filter(
        (column) => !column.fixed
      );
      this.targetColumns = []
        .concat(this.fixedColumns)
        .concat(notFixedColumns)
        .concat(this.rightFixedColumns);
    },
    getOneData(item, rowIndex) {
      const temp = {};
      temp.originData = item;
      temp.data = this.targetColumns.map((one, colIndex) => {
        const { rowspan = 1, colspan = 1 } = this.getSpan(
          item,
          one,
          rowIndex,
          colIndex
        );
        const obj = Object.assign({}, one);
        obj.row = item;
        obj.rowspan = rowspan;
        obj.colspan = colspan;
        if (
          obj.filter &&
          typeof this.$options.filters[obj.filter] === "function"
        ) {
          obj.value = this.$options.filters[obj.filter](item[obj.field]);
        } else {
          obj.value = item[obj.field];
        }
        return obj;
      });
      return temp;
    },
    getSpan(row, column, rowIndex, columnIndex) {
      let rowspan = 1;
      let colspan = 1;
      const fn = this.spanMethod;
      if (typeof fn === "function") {
        const result = fn({
          row,
          column,
          rowIndex,
          columnIndex,
        });
        if (typeof result === "object") {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
      }
      return { rowspan, colspan };
    },
    // 扁平化表头
    flatColumns(columns) {
      const result = [];
      columns.forEach((item) => {
        if (item.children) {
          result.push(...this.flatColumns(item.children));
        } else {
          result.push(item);
        }
      });
      return result;
    },
    // 扁平化表格数据，只扁平化一层
    flatTable(data) {
      const result = [];
      data.forEach((item, i) => {
        result.push(this.getOneData(item, i));
        if (item.isOpend && item.children) {
          result.push(...this.flatTable(item.children));
        }
      });
      return result;
    },
    createTableBody() {
      console.log(this.tableData);
      this.tableBodyData = this.flatTable(this.tableData);
      console.log(this.tableBodyData);
    },
    // 二级表格展开或取消
    toggleSubTable(row, i) {
      console.log(i)
      if (row.originData.isOpend) {
        const len =
          (row.originData.children && row.originData.children.length) || 0;
        this.tableBodyData.splice(i + 1, len);
      } else {
        const copyArr = row.originData.children.map((item, index) =>
          this.getOneData(item, i + index)
        );
        this.tableBodyData.splice(i + 1, 0, ...copyArr);
      }
      row.originData.isOpend = !row.originData.isOpend;
      this.$nextTick(() => {
        this.moveFunc();
        this.updateElsHeight();
      });
    },
    doLayout() {
      if (this.shouldUpdateHeight) {
        this.updateElsHeight();
      }
      this.updateColumnsWidth();
    },
    // 计算表格内元素的高度
    updateElsHeight() {
      const { headerWrapper } = this.$refs;
      if (this.showHeader && !headerWrapper) {
        return;
      }
      // eslint-disable-next-line no-multi-assign
      const headerHeight = (this.headerHeight = this.showHeader
        ? headerWrapper.offsetHeight
        : 0);
      // eslint-disable-next-line no-multi-assign
      const tableHeight = (this.tableHeight = this.$el.clientHeight);
      if (this.height !== null) {
        this.bodyHeight = tableHeight - headerHeight;
      }
      this.fixedBodyHeight = this.bodyHeight;
      this.viewportHeight = tableHeight;
    },
    // 计算每列的实际宽度
    updateColumnsWidth() {
      const bodyWidth = this.$el.clientWidth;
      let bodyMinWidth = 0;
      const { targetColumns } = this;
      const flexColumns = targetColumns.filter(
        (column) => typeof column.width !== "number"
      );
      targetColumns.forEach((column) => {
        column.minWidth = column.minWidth || this.baseSize;
        if (typeof column.width === "number") {
          column.realWidth = column.width;
        }
      });
      if (flexColumns.length > 0) {
        targetColumns.forEach((column) => {
          bodyMinWidth += column.width || column.minWidth;
        });

        if (bodyMinWidth <= bodyWidth) {
          this.scrollX = false;
          const totalFlexWidth = bodyWidth - bodyMinWidth;

          if (flexColumns.length === 1) {
            flexColumns[0].realWidth = flexColumns[0].minWidth + totalFlexWidth;
          } else {
            const allColumnsWidth = flexColumns.reduce(
              (prev, column) => prev + column.minWidth,
              0
            );
            const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
            let noneFirstWidth = 0;

            flexColumns.forEach((column, index) => {
              if (index === 0) return;
              const flexWidth = Math.floor(column.minWidth * flexWidthPerPixel);
              noneFirstWidth += flexWidth;
              column.realWidth = column.minWidth + flexWidth;
            });

            flexColumns[0].realWidth =
              flexColumns[0].minWidth + totalFlexWidth - noneFirstWidth;
          }
        } else {
          this.scrollX = true;
          flexColumns.forEach((column) => {
            column.realWidth = column.minWidth;
          });
        }
        this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
      } else {
        targetColumns.forEach((column) => {
          column.realWidth = column.width || column.minWidth;
          bodyMinWidth += column.realWidth;
        });
        this.scrollX = bodyMinWidth > bodyWidth;
        this.bodyWidth = Math.max(bodyWidth, bodyMinWidth);
      }
      this.targetColumns.forEach((item) => {
        item.width = targetColumns.find(
          (one) => one.field === item.field
        ).realWidth;
      });
      this.fixedWrapperWidth = this.fixedColumns
        .map((item) => item.width || 0)
        .reduce((pre, cur) => pre + cur, 0);
    },
    setHeight(val, prop = "height") {
      const el = this.$el;
      const value = this.parseHeight(val);

      if (!el && (value || value === 0)) {
        return this.$nextTick(() => this.setHeight(value, prop));
      }
      this.scrollY = true;

      if (typeof value === "number") {
        el.style[prop] = `${value}px`;
        this.updateElsHeight();
      } else if (typeof value === "string") {
        el.style[prop] = value;
        this.updateElsHeight();
      }
      return null;
    },
    setMaxHeight(value) {
      this.setHeight(value, "max-height");
    },
    parseHeight(height) {
      if (typeof height === "number") {
        return height;
      }
      if (typeof height === "string") {
        if (/^\d+(?:px)?$/.test(height)) {
          return parseInt(height, 10);
        }
        return height;
      }
      return null;
    },
  },
});

// CONCATENATED MODULE: ./packages/general-table/src/general-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_general_tablevue_type_script_lang_js_ = (general_tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/general-table/src/general-table.vue?vue&type=style&index=0&id=251d9c3e&scoped=true&lang=css&
var general_tablevue_type_style_index_0_id_251d9c3e_scoped_true_lang_css_ = __webpack_require__("b15c");

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

// CONCATENATED MODULE: ./packages/general-table/src/general-table.vue






/* normalize component */

var component = normalizeComponent(
  src_general_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "251d9c3e",
  null
  
)

/* harmony default export */ var general_table = (component.exports);
// CONCATENATED MODULE: ./packages/general-table/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
general_table.install = function(Vue) {
  Vue.component(general_table.name, general_table);
};

// 默认导出组件
/* harmony default export */ var packages_general_table = (general_table);

// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


// 存储组件列表
const components = [packages_general_table];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  generalTable: packages_general_table,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=vgeneraltable.umd.js.map