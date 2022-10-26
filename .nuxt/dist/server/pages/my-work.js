exports.ids = [9];
exports.modules = {

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-work.vue?vue&type=template&id=5d2ca8a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('NuxtChild',{key:_vm.$route.fullPath})}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/my-work.vue?vue&type=template&id=5d2ca8a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/my-work.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var my_workvue_type_script_lang_js_ = ({
  async mounted() {
    console.log(this.$route.params.work);

    if (!this.$route.params.work) {
      const routeData = await this.$axios.$get(`/data/data.json`);
      this.$router.push("/my-work/" + routeData.data[0].attributes.slug);
    }
  }

});
// CONCATENATED MODULE: ./pages/my-work.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_my_workvue_type_script_lang_js_ = (my_workvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/my-work.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_my_workvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e5067fba"
  
)

/* harmony default export */ var my_work = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=my-work.js.map