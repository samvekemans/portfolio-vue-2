exports.ids = [3,1,5];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("20ef75fa", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.navElement .nuxt-link-active,.navElement a:hover{\n  font-weight:500;\n  border-bottom:2px solid #d97386\n}\nsvg{\n  fill:#d97386\n}\nsvg.white{\n  fill:#fff\n}\n@media (max-width:700px){\nnav{\n    transition:.7s\n}\nul{\n    flex-direction:column;\n    height:100%\n}\n.nav-active{\n    transform:translateX(0);\n    padding-left:28px\n}\n.nav-active,.nav-disabled{\n    position:absolute;\n    background-color:#d97386;\n    top:0;\n    bottom:0;\n    right:0;\n    left:0;\n    z-index:999999;\n    flex-direction:column;\n    gap:4em\n}\n.nav-disabled{\n    transform:translateX(-200%)\n}\n}\n.active{\n  visibility:visible;\n  opacity:1\n}\n.notactive{\n  visibility:hidden;\n  opacity:0\n}\n.ulBorder{\n  transition:.4s\n}\n.ulBorder:after{\n  content:\"\";\n  bottom:100%;\n  left:0;\n  right:0;\n  margin:auto;\n  height:0;\n  width:0;\n  position:absolute;\n  -o-border-image:initial;\n     border-image:initial;\n  border:10px solid hsla(0,0%,100%,0);\n  border-bottom-color:#d97386\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/nav-component.vue?vue&type=template&id=0232ca6a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-7"},[_vm._ssrNode("<div class=\"border-border border-b-2 pb-2 hidden 700:block\"><svg viewBox=\"0 0 100 80\" class=\"w-12 h-12\"><rect width=\"100\" height=\"5\"></rect> <rect y=\"30\" width=\"100\" height=\"5\"></rect> <rect y=\"60\" width=\"100\" height=\"5\"></rect></svg></div> "),_vm._ssrNode("<nav class=\"border-b-2 border-border pb-2 nav-disabled relative\">","</nav>",[_vm._ssrNode("<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\" class=\"white absolute top-7 left-7 h-12 w-12 hidden 700:block\">","</svg>",[_c('metadata',[_vm._v("\n        Svg Vector Icons : http://www.onlinewebfonts.com/icon\n      ")]),_vm._ssrNode(" <g><g transform=\"translate(0.000000,511.000000) scale(0.100000,-0.100000)\"><path d=\"M279.7,4972.1c-148.7-72.2-220.9-297.5-144.4-450.6c19.7-39.4,1010.5-1047.7,2202.5-2239.7L4507.6,109.9L2326.9-2070.8C1097.7-3300,135.3-4279.9,122.2-4314.9C15-4605.8,316.8-4890.1,588-4754.5C627.4-4734.8,1635.7-3744,2827.8-2552L4999.7-382.2l2180.7-2180.7c1229.2-1229.2,2209.1-2191.6,2244.1-2204.7c159.7-59.1,321.5,0,424.3,150.9c54.7,80.9,65.6,199,28.4,301.8c-13.1,35-975.5,1014.9-2204.7,2244.1L5491.8,109.9l2180.7,2182.8c1229.2,1227,2191.6,2206.9,2204.7,2241.9c105,282.2-170.6,557.7-452.8,452.8c-35-13.1-1014.9-975.5-2241.9-2204.7L4999.7,602L2819,2782.7C1589.8,4011.9,609.9,4974.3,574.9,4987.4C485.3,5020.2,362.8,5013.6,279.7,4972.1z\"></path></g></g>")],2),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"flex justify-center gap-11 mb-2\">","</ul>",[_vm._ssrNode("<li class=\"navElement\">","</li>",[_c('nuxt-link',{staticClass:"text-2xl px-1.5 py-1",attrs:{"to":"/","exact":""}},[_vm._v("\n          Home\n        ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"navElement relative\">","</li>",[_c('nuxt-link',{ref:"work",staticClass:"text-2xl px-1.5 py-1",attrs:{"to":"/my-work","event":'/my-work' === _vm.$route.matched[0].path ? '' : 'click'}},[_vm._v("\n          Mijn Werk\n        ")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"bg-pink absolute top-9 w-32 rounded notactive ulBorder\">","</ul>",_vm._l((_vm.workItems),function(workItem){return _vm._ssrNode("<li class=\"p-2 hover:bg-white border-2 border-pink rounded works\">","</li>",[_c('nuxt-link',{staticClass:"h-full w-full rounded",attrs:{"to":("/my-work/" + (workItem.attributes.slug))}},[_vm._v(_vm._s(workItem.attributes.name))])],1)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"navElement\">","</li>",[_c('nuxt-link',{staticClass:"text-2xl px-1.5 py-1",attrs:{"to":"/about-me"}},[_vm._v("\n          Over mij\n        ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"navElement\">","</li>",[_c('nuxt-link',{staticClass:"text-2xl px-1.5 py-1",attrs:{"to":"/contact"}},[_vm._v("\n          Contact\n        ")])],1)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/nav-component.vue?vue&type=template&id=0232ca6a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/nav-component.vue?vue&type=script&lang=js&
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
/* harmony default export */ var nav_componentvue_type_script_lang_js_ = ({
  data() {
    return {
      workItems: []
    };
  },

  async fetch() {
    const data = await this.$axios.$get(`/data/data.json`);
    this.workItems = data.data;
  },

  methods: {
    activateNav() {
      this.$refs.nav.classList.remove("nav-disabled");
      this.$refs.nav.classList.add("nav-active");
    },

    disableNav() {
      this.$refs.nav.classList.remove("nav-active");
      this.$refs.nav.classList.add("nav-disabled");
    },

    enter() {
      if (window.innerWidth >= 800) {
        this.$refs.ul.classList.remove('notactive');
        this.$refs.ul.classList.add('active');
        this.$refs.work.$el.style.borderBottom = 'none';
      }
    },

    leave() {
      if (window.innerWidth >= 800) {
        this.$refs.ul.classList.add('notactive');
        this.$refs.ul.classList.remove('active');

        if (this.$refs.work.$el.classList.contains('nuxt-link-active')) {
          this.$refs.work.$el.style.borderBottom = '2px solid #d97386';
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/nav-component.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nav_componentvue_type_script_lang_js_ = (nav_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/nav-component.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_nav_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "196b8a24"
  
)

/* harmony default export */ var nav_component = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("851e173c", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_action_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_action_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_action_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_action_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_action_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.button{\n  background:#1a4d8b;\n  box-shadow:5px 5px 10px rgba(0,0,0,.384)\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/action.vue?vue&type=template&id=337a3188&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"text-2xl button text-white px-4 py-2 rounded-lg",attrs:{"to":_vm.link}},[_vm._v("\n  "+_vm._s(_vm.title)+"\n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/action.vue?vue&type=template&id=337a3188&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/action.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var actionvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#"
    }
  }
});
// CONCATENATED MODULE: ./components/action.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_actionvue_type_script_lang_js_ = (actionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/action.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_actionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a652bbaa"
  
)

/* harmony default export */ var action = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("13542c7c", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.hello{\n  background-image:url(/banner.png)\n}\n.arrow{\n  top:-5px;\n  -webkit-animation:arrow 2.5s linear 0s infinite normal none running;\n          animation:arrow 2.5s linear 0s infinite normal none running\n}\n@-webkit-keyframes arrow{\n0%{\n    top:-5px;\n    oppacity:.7\n}\n25%{\n    top:2.5px;\n    oppacity:1\n}\n50%{\n    top:10px;\n    oppacity:.7\n}\n75%{\n    top:2.5px;\n    oppacity:.7\n}\nto{\n    top:-5px;\n    oppacity:1\n}\n}\n@keyframes arrow{\n0%{\n    top:-5px;\n    oppacity:.7\n}\n25%{\n    top:2.5px;\n    oppacity:1\n}\n50%{\n    top:10px;\n    oppacity:.7\n}\n75%{\n    top:2.5px;\n    oppacity:.7\n}\nto{\n    top:-5px;\n    oppacity:1\n}\n}\n.fixedImg{\n  position:fixed;\n  top:10px;\n  z-index:99;\n  width:175px\n}\n.transitionImg{\n  transition:.7s\n}\n@media (max-width:700px){\nimg.dontShow{\n    display:none\n}\n.img{\n    max-height:50vh;\n    max-width:80vw\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header-component.vue?vue&type=template&id=eff81208&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_vm._ssrNode("<header class=\"h-screen flex flex-col justify-between relative\">","</header>",[_c('nav-component'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex items-center justify-between h-full bg-banner bg-contain bg-no-repeat bg-right 1000:bg-center 1000:bg-none 1000:m-0 my-14 mr-9 700:p-0 700:justify-center\">","</div>",[_vm._ssrNode("<div class=\"ml-9 bg-white rounded-xl px-7 pt-5 pb-7 shadow-2xl 1000:bg-none 1000:shadow-none 1000:flex 1000:flex-col 1000:items-center 700:m-0 700:p-0\">","</div>",[_vm._ssrNode("<img src=\"/me.png\" alt=\"Ik\" class=\"w-96 1200:w-72 transitionImg 700:hidden\"> <img src=\"/me-small.png\" alt=\"Ik\" class=\"hidden 700:block m-auto img\"> "),_c('action',{staticClass:"1000:hidden",attrs:{"title":"Over mij →","link":"/about-me"}}),_vm._ssrNode(" <img src=\"/banner.png\" alt class=\"hidden 1000:block dontShow\">")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-10\">","</div>",[_c('div',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:({ el: '#main', duration: 1000 }),expression:"{ el: '#main', duration: 1000 }"}],staticClass:"text-3xl pt-7 text-center mt-8 cursor-pointer border-t-2 border-border"},[_vm._ssrNode("<p class=\"font-semibold\">Bekijk mijn werk</p> <p class=\"arrow relative\">↓</p>")])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header-component.vue?vue&type=template&id=eff81208&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header-component.vue?vue&type=script&lang=js&
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
/* harmony default export */ var header_componentvue_type_script_lang_js_ = ({
  data() {
    return {
      imgOffsetTop: "",
      navItems: [{
        slug: "hello",
        img: "/"
      }]
    };
  },

  mounted() {
    var _this$$refs$img, _this$$refs$img2;

    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.resize);
    this.imgOffsetTop = ((_this$$refs$img = this.$refs.img) === null || _this$$refs$img === void 0 ? void 0 : _this$$refs$img.offsetTop) + ((_this$$refs$img2 = this.$refs.img) === null || _this$$refs$img2 === void 0 ? void 0 : _this$$refs$img2.clientHeight) / 2;
  },

  methods: {
    onScroll() {
      if (this.$refs.img) {
        if (window.scrollY >= this.imgOffsetTop) {
          this.$refs.img.classList.add("fixedImg");
        } else {
          this.$refs.img.classList.remove("fixedImg");
        }
      }
    },

    resize() {
      var _this$$refs$img3, _this$$refs$img4;

      this.imgOffsetTop = ((_this$$refs$img3 = this.$refs.img) === null || _this$$refs$img3 === void 0 ? void 0 : _this$$refs$img3.offsetTop) + ((_this$$refs$img4 = this.$refs.img) === null || _this$$refs$img4 === void 0 ? void 0 : _this$$refs$img4.clientHeight) / 2;
    }

  }
});
// CONCATENATED MODULE: ./components/header-component.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_header_componentvue_type_script_lang_js_ = (header_componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/header-component.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_header_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f7a6641c"
  
)

/* harmony default export */ var header_component = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavComponent: __webpack_require__(33).default,Action: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=header-component.js.map