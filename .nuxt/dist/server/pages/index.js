exports.ids = [8,1,2,3,5];
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

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("592762fc", content, true, context)
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer.vue?vue&type=template&id=950244ce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"bg-pink"},[_vm._ssrNode("<div class=\"max-w-6xl m-auto p-7\">","</div>",[_vm._ssrNode("<div class=\"p-always relative\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h3 class=\"text-3xl font-semibold mb-4\">Vind je mijn werk leuk?</h3> "),_c('nuxt-link',{staticClass:"text-2xl",attrs:{"to":"#"}},[_vm._v("Neem contact met mij op →")])],2),_vm._ssrNode(" <div class=\"mt-5\"><h3 class=\"text-xl\">Social media:</h3> <div class=\"flex gap-4\">"+(_vm._ssrList((_vm.icons),function(icon){return ("<div><p class=\"text-center\">"+_vm._ssrEscape(_vm._s(icon.title))+"</p> <div class=\"w-12 h-12 mt-2 bg-bluebg rounded-full flex justify-center items-center cursor-pointer\">"+(_vm._s(icon.src))+"</div></div>")}))+"</div></div> <div class=\"absolute bottom-0 logo 700:hidden\"><img src=\"/me.png\" alt class=\"w-64\"></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer.vue?vue&type=template&id=950244ce&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var footervue_type_script_lang_js_ = ({
  data() {
    return {
      icons: [{
        src: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
        title: "instagram",
        link: "hello"
      }, {
        src: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        title: "linkedin",
        link: "nothello"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_footervue_type_script_lang_js_ = (footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d9bcc1e0"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(32).default})


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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\nsvg{\n  fill:#fff;\n  padding:.2em;\n  width:30px;\n  height:30px\n}\n.logo{\n  right:4%\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("bad8e090", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.work:nth-child(2n)>article{\n  order:1;\n  display:flex;\n  flex-direction:column;\n  align-items:flex-end\n}\n.bg{\n  background-color:#fff\n}\n.max-w{\n  max-width:16em\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2521dea4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('header-component'),_vm._ssrNode(" "),_vm._ssrNode("<main id=\"main\" class=\"bg-mainbg bg-no-repeat bg-center bg-cover bg-fixed relative pb-16\">","</main>",[_vm._ssrNode("<div class=\"absolute h-24 bg-gradient-to-b from-white w-full\"></div> "),_vm._ssrNode("<div class=\"max-w-6xl m-auto pt-16 pb-16\">","</div>",[_vm._ssrNode("<div class=\"p-always flex flex-col gap-9\">","</div>",_vm._l((_vm.items),function(item){return _vm._ssrNode("<div class=\"flex justify-between items-start work bg-white rounded shadow p-7 700:flex-col 700:gap-3 700:m-auto 700:items-center 700:h-auto w-full h-60\">","</div>",[_vm._ssrNode("<article class=\"700:flex 700:flex-col 700:items-center\">","</article>",[_vm._ssrNode("<h3 class=\"text-5xl font-write 1000:text-4xl 700:m-auto\">"+_vm._ssrEscape("\n              "+_vm._s(item.attributes.name)+"\n            ")+"</h3> <p class=\"mb-4 mt-1 text-xl 1000:text-lg 700:mb-0\">"+_vm._ssrEscape("\n              "+_vm._s(item.attributes.description)+"\n            ")+"</p> "),_c('nuxt-link',{staticClass:"text-3xl 1000:text-2xl 700:hidden",attrs:{"to":("/my-work/" + (item.attributes.slug))}},[_vm._v("\n              Bekijk meer →\n            ")])],2),_vm._ssrNode(" <img"+(_vm._ssrAttr("src",item.attributes.indeximage))+" alt class=\"max-h-44 max-w mt-auto mb-auto\"> "),_c('nuxt-link',{staticClass:"text-2xl hidden 700:block",attrs:{"to":("/my-work/" + (item.attributes.slug))}},[_vm._v("\n            Bekijk meer →\n          ")])],2)}),0)])],2),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2521dea4&

// EXTERNAL MODULE: ./components/header-component.vue + 4 modules
var header_component = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    headerComponent: header_component["default"]
  },
  name: "IndexPage",

  data() {
    return {
      items: []
    };
  },

  async mounted() {
    const data = await this.$axios.$get(`/data/data.json`);
    this.items = data.data;
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4172eca3"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderComponent: __webpack_require__(46).default,Footer: __webpack_require__(32).default})


/***/ })

};;
//# sourceMappingURL=index.js.map