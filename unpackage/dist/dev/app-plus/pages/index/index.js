"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 1);


_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'pages/index/index'
_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'

new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 1 */
/*!***********************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/pages/index/index.nvue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_nvue_vue_type_template_id_07e834b9_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=07e834b9&mpType=page */ 2);
/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 4);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css&mpType=page */ 56).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css&mpType=page */ 56).default)
          }

}

/* normalize component */

var component = Object(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_nvue_vue_type_template_id_07e834b9_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_nvue_vue_type_template_id_07e834b9_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "e575f49a"
  
)

component.options.__file = "F:/UNIAPP最新版本的/uniapp-xiaomi/pages/index/index.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/pages/index/index.nvue?vue&type=template&id=07e834b9&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_index_nvue_vue_type_template_id_07e834b9_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./index.nvue?vue&type=template&id=07e834b9&mpType=page */ 3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_index_nvue_vue_type_template_id_07e834b9_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_index_nvue_vue_type_template_id_07e834b9_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 3 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/pages/index/index.nvue?vue&type=template&id=07e834b9&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["display:flex;flex-direction:column;"] },
    [
      _c("sum-tabbar", {
        attrs: { tabIndex: _vm.tabIndex, tabBars: _vm.tabBars },
        on: { tabchange: _vm.tabchange }
      }),
      _c(
        "slider",
        {
          staticClass: ["flex-1"],
          attrs: { index: _vm.tabIndex, infinite: false },
          on: { change: _vm.sliderChange }
        },
        _vm._l(_vm.newsitems, function(list, listIndex) {
          return _c(
            "list",
            { key: listIndex, attrs: { showScrollbar: false } },
            [
              _c(
                "refresh",
                {
                  staticClass: ["w-100", "flex-row", "j-center", "a-center"],
                  staticStyle: { height: "80px" },
                  attrs: { display: list.refreshShow },
                  on: { pullingdown: _vm.pullingdown, refresh: _vm.refresh }
                },
                [
                  _c("text", { staticClass: ["font-md", "text-muted"] }, [
                    _vm._v(" " + _vm._s(list.refreshtext))
                  ])
                ]
              ),
              _vm.tabBars[listIndex].template === "index"
                ? _vm._l(list.data, function(listItem, itemIndex) {
                    return _c(
                      "cell",
                      {
                        key: itemIndex,
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [
                        listItem.type === "swiper"
                          ? _c("sumSlider", {
                              attrs: { swipers: listItem.data }
                            })
                          : _vm._e(),
                        listItem.type === "indexnavs"
                          ? [
                              _c("indexNav", {
                                attrs: { indexnavs: listItem.data }
                              }),
                              _c("divider")
                            ]
                          : _vm._e(),
                        listItem.type === "threeAdv"
                          ? [
                              _c("sumThreeAdv", {
                                attrs: { resdata: listItem.data }
                              }),
                              _c("divider")
                            ]
                          : _vm._e(),
                        listItem.type === "oneAdv"
                          ? _c("sumOneAdv", { attrs: { item: listItem.data } })
                          : _vm._e(),
                        listItem.type === "list"
                          ? _c(
                              "div",
                              { staticClass: ["row", "w-100"] },
                              _vm._l(listItem.data, function(item, index) {
                                return _c(
                                  "block",
                                  { key: index },
                                  [
                                    _c("commonList", {
                                      attrs: { index: index, item: item }
                                    })
                                  ],
                                  1
                                )
                              }),
                              1
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  })
                : _vm.tabBars[listIndex].template === "special"
                ? _vm._l(list.data, function(listItem, itemIndex) {
                    return _c(
                      "cell",
                      {
                        key: itemIndex,
                        appendAsTree: true,
                        attrs: { append: "tree" }
                      },
                      [
                        listItem.type === "swiper"
                          ? _c("sumSlider", {
                              attrs: { swipers: listItem.data }
                            })
                          : _vm._e(),
                        listItem.type === "indexnavs"
                          ? [
                              _c("indexNav", {
                                attrs: { indexnavs: listItem.data }
                              }),
                              _c("divider")
                            ]
                          : _vm._e(),
                        listItem.type === "list"
                          ? _c(
                              "div",
                              { staticClass: ["row", "w-100"] },
                              _vm._l(listItem.data, function(item, index) {
                                return _c(
                                  "block",
                                  { key: index },
                                  [
                                    _c("commonList", {
                                      attrs: { index: index, item: item }
                                    })
                                  ],
                                  1
                                )
                              }),
                              1
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  })
                : _vm._e(),
              _c(
                "loading",
                {
                  staticClass: ["w-100", "flex-row", "j-center", "a-center"],
                  attrs: { display: list.loadingShow },
                  on: { loading: _vm.onLoading }
                },
                [
                  _c("text", { staticClass: ["text-muted", "font-md"] }, [
                    _vm._v("Loading...")
                  ])
                ]
              )
            ],
            2
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 4 */
/*!***********************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./index.nvue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 5 */
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, __f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




































































































var _sumTabbar = _interopRequireDefault(__webpack_require__(/*! @/components/index/nvue/sum-tabbar.nvue */ 8));
var _sumSlider = _interopRequireDefault(__webpack_require__(/*! @/components/index/nvue/sum-slider.nvue */ 19));
var _indexnavs = _interopRequireDefault(__webpack_require__(/*! @/components/index/nvue/indexnavs.nvue */ 26));
var _divider = _interopRequireDefault(__webpack_require__(/*! @/components/common/divider.nvue */ 31));
var _sumThreeAdv = _interopRequireDefault(__webpack_require__(/*! @/components/index/nvue/sum-three-adv.nvue */ 36));
var _sumOneAdv = _interopRequireDefault(__webpack_require__(/*! @/components/index/nvue/sum-one-adv.nvue */ 41));
var _common = _interopRequireDefault(__webpack_require__(/*! @/components/common/common.nvue */ 46));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}
var dom = weex.requireModule('dom');
// 监听当前窗口显示 1)解决Nvue页面没有ONshow的问题
var currentWebview = plus.webview.currentWebview();var _default =
{
  components: {
    sumTabbar: _sumTabbar.default,
    sumSlider: _sumSlider.default,
    indexNav: _indexnavs.default,
    divider: _divider.default,
    sumThreeAdv: _sumThreeAdv.default,
    sumOneAdv: _sumOneAdv.default,
    commonList: _common.default },

  data: function data() {
    return {
      // refreshtext: "下拉刷新",
      // refreshShow: "hide",
      // loadingShow: 'hide',
      tabIndex: 0,
      tabBars: [{
        name: '关注',
        id: 'guanzhu',
        template: "index" },
      {
        name: '推荐',
        id: 'tuijian',
        template: "special" },
      {
        name: '体育',
        id: 'tiyu',
        template: "special" },
      {
        name: '热点',
        id: 'redian',
        template: "special" },
      {
        name: '财经',
        id: 'caijing',
        template: "special" },
      {
        name: '娱乐',
        id: 'yule',
        template: "special" },
      {
        name: '军事',
        id: 'junshi',
        template: "special" },
      {
        name: '历史',
        id: 'lishi',
        template: "special" },
      {
        name: '本地',
        id: 'bendi',
        template: "special" }],

      newsitems: []
      // swipers: [
      // 	{ src: "../../static/images/demo/demo4.jpg" },
      // 	{ src: "../../static/images/demo/demo4.jpg" },
      // 	{ src: "../../static/images/demo/demo4.jpg" }
      // ],
      // indexnavs: [
      // 	{ src: '/static/images/indexnav/1.png', text: '新品发布' },
      // 	{ src: '/static/images/indexnav/2.gif', text: '小米众筹' },
      // 	{ src: '/static/images/indexnav/3.gif', text: '以旧换新' },
      // 	{ src: '/static/images/indexnav/4.gif', text: '一分换团' },
      // 	{ src: '/static/images/indexnav/5.gif', text: '超值特卖' },
      // 	{ src: '/static/images/indexnav/6.gif', text: '小米秒杀' },
      // 	{ src: '/static/images/indexnav/7.gif', text: '真心想要' },
      // 	{ src: '/static/images/indexnav/8.gif', text: '电视热卖' },
      // 	{ src: '/static/images/indexnav/9.gif', text: '家电热卖' },
      // 	{ src: '/static/images/indexnav/10.gif', text: '米粉卡' }
      // ],
      // oneAdv: {
      // 	cover: "/static/images/demo/demo4.jpg",
      // 	title: "每日精选"
      // },
      // threeAdv: [
      // 	{ src: '/static/images/demo/demo1.jpg' },
      // 	{ src: '/static/images/demo/demo2.jpg' },
      // 	{ src: "/static/images/demo/demo3.jpg" }
      // ],
      // commlist: [{
      // 	cover: "/static/images/demo/list/1.jpg",
      // 	title: "米家空调",
      // 	oprice: "2699",
      // 	desc: "1.5匹变频",
      // 	pprice: "1399"
      // }, {
      // 	cover: "/static/images/demo/list/1.jpg",
      // 	title: "米家空调",
      // 	oprice: "2699",
      // 	desc: "1.5匹变频",
      // 	pprice: "1399"
      // }, {
      // 	cover: "/static/images/demo/list/1.jpg",
      // 	title: "米家空调",
      // 	oprice: "2699",
      // 	desc: "1.5匹变频",
      // 	pprice: "1399"
      // }, ]
    };
  },

  methods: {
    // 模拟加载数据
    addData: function addData(e) {
      if (this.newsitems[e].data.length > 30) {
        this.newsitems[e].loadingText = '没有更多了';
        return;
      }
      // for (let i = 1; i <= 10; i++) {		}
      // this.newsitems[e].data.push(tpl['data' + Math.floor(Math.random() * 5)]);
      var arr = [{
        type: "swiper",
        data: [
        { src: '../../static/images/demo/demo4.jpg' },
        { src: '../../static/images/demo/demo4.jpg' },
        { src: '../../static/images/demo/demo4.jpg' }] },

      {
        type: "indexnavs",
        data: [{ src: '/static/images/indexnav/1.png', text: '新品发布' },
        { src: '/static/images/indexnav/2.gif', text: '小米众筹' },
        { src: '/static/images/indexnav/3.gif', text: '以旧换新' },
        { src: '/static/images/indexnav/4.gif', text: '一分换团' },
        { src: '/static/images/indexnav/5.gif', text: '超值特卖' }] },


      {
        type: "list",
        data: [{
          cover: "/static/images/demo/list/1.jpg",
          title: "米家空调",
          oprice: "2699",
          desc: "1.5匹变频",
          pprice: "1399" },
        {
          cover: "/static/images/demo/list/1.jpg",
          title: "米家空调",
          oprice: "2699",
          desc: "1.5匹变频",
          pprice: "1399" },
        {
          cover: "/static/images/demo/list/1.jpg",
          title: "米家空调",
          oprice: "2699",
          desc: "1.5匹变频",
          pprice: "1399" },
        {
          cover: "/static/images/demo/list/1.jpg",
          title: "米家空调",
          oprice: "2699",
          desc: "1.5匹变频",
          pprice: "1399" }] }];



      this.newsitems[e].data = [].concat(_toConsumableArray(this.newsitems[e].data), arr);
      console.log(__f__(this.newsitems, " at pages\\index\\index.nvue:269"));

    },
    // 生成随机数据
    randomfn: function randomfn() {
      var ary = [];
      // 拿到tabbars的长度,根据长度生成页面
      var tablength = this.tabBars.length;
      console.log(__f__(tablength, " at pages\\index\\index.nvue:277"));
      for (var i = 0; i < tablength; i++) {
        var aryItem = {
          refreshtext: "下拉刷新",
          refreshShow: "hide",
          loadingShow: 'hide',
          loadingText: '加载更多...',
          data: [] };

        // if (i < 1) {
        // for (let j = 1; j <= 10; j++) {
        // 	aryItem.data.push(tpl['data' + Math.floor(Math.random() * 5)]);
        // }
        // }
        // 给页面添加数据
        if (this.tabBars[i].template === "index") {
          aryItem.data = [{
            type: "swiper",
            data: [
            { src: '../../static/images/demo/demo4.jpg' },
            { src: '../../static/images/demo/demo4.jpg' },
            { src: '../../static/images/demo/demo4.jpg' }] },

          {
            type: "indexnavs",
            data: [{ src: '/static/images/indexnav/1.png', text: '新品发布' },
            { src: '/static/images/indexnav/2.gif', text: '小米众筹' },
            { src: '/static/images/indexnav/3.gif', text: '以旧换新' },
            { src: '/static/images/indexnav/4.gif', text: '一分换团' },
            { src: '/static/images/indexnav/5.gif', text: '超值特卖' },
            { src: '/static/images/indexnav/6.gif', text: '小米秒杀' },
            { src: '/static/images/indexnav/7.gif', text: '真心想要' },
            { src: '/static/images/indexnav/8.gif', text: '电视热卖' },
            { src: '/static/images/indexnav/9.gif', text: '家电热卖' },
            { src: '/static/images/indexnav/10.gif', text: '米粉卡' }] },


          {
            type: "threeAdv",
            data: [{ src: '/static/images/demo/demo4.jpg' },
            { src: '/static/images/demo/demo4.jpg' },
            { src: '/static/images/demo/demo4.jpg' }] },

          {
            type: "oneAdv",
            data: {
              title: "每日精选",
              cover: "/static/images/demo/demo4.jpg" } },


          {
            type: "list",
            data: [{
              cover: "/static/images/demo/list/1.jpg",
              title: "米家空调",
              oprice: "2699",
              desc: "1.5匹变频",
              pprice: "1399" },
            {
              cover: "/static/images/demo/list/1.jpg",
              title: "米家空调",
              oprice: "2699",
              desc: "1.5匹变频",
              pprice: "1399" },
            {
              cover: "/static/images/demo/list/1.jpg",
              title: "米家空调",
              oprice: "2699",
              desc: "1.5匹变频",
              pprice: "1399" },
            {
              cover: "/static/images/demo/list/1.jpg",
              title: "米家空调",
              oprice: "2699",
              desc: "1.5匹变频",
              pprice: "1399" }] }];



        }
        // console.log();
        ary.push(aryItem);

      }
      return ary;
    },
    tabchange: function tabchange(index) {
      this.tabIndex = index;
    },
    // 监听横向列表事件
    sliderChange: function sliderChange(e) {
      console.log(__f__(e.index, " at pages\\index\\index.nvue:368"));
      this.tabIndex = e.index;
      console.log(__f__(this.tabIndex, " at pages\\index\\index.nvue:370"));
      // this.change()
    },
    // 上拉加载事件
    onLoading: function onLoading() {var _this = this;
      this.loadingShow = 'show';
      setTimeout(function () {
        // 加载数据
        _this.loadingShow = 'hide';
      }, 2000);
    },
    // 执行刷新
    refresh: function refresh(e) {var _this2 = this;
      console.log(__f__("wanchengle ", " at pages\\index\\index.nvue:383"));
      // return;
      console.log(__f__(e, " at pages\\index\\index.nvue:385"));
      this.refreshShow = "show";
      console.log(__f__("zhixingle", " at pages\\index\\index.nvue:387"));
      this.refreshtext = "正在刷新中";
      console.log(__f__("zhixingle", " at pages\\index\\index.nvue:389"));
      // return
      setTimeout(function () {
        _this2.refreshShow = "hide";
        _this2.refreshtext = "下拉可以刷新";
      }, 2500);
    },
    // 判断下刷刷新状态 
    pullingdown: function pullingdown(e) {
      // console.log(-e.pullingDistance,e.viewHeight) ;
      // if (-e.pullingDistance > e.viewHeight) {
      // 	// console.log(111);
      // 	this.refreshtext = "釋放即可刷新了"
      // 	this.refresh()
      // } else {
      // 	this.refreshtext = "下拉可以刷新"
      // }
      // console.log("zhixingle");
      console.log(__f__(e.pullingDistance, e.viewHeight, " at pages\\index\\index.nvue:407"));
      if (e.pullingDistance > e.viewHeight) {
        // console.log(111);
        this.refreshtext = "釋放即可刷新了";
        // this.refresh()
      } else {
        this.refreshtext = "下拉可以刷新";
      }
    } },


  created: function created() {
    // console.log(currentWebview);
    // const currentWebview = this.$mp.page.$getAppWebview();
    currentWebview.addEventListener('show', function (e) {
      console.log(__f__(e, " at pages\\index\\index.nvue:422"));
      console.log(__f__("indexshow", " at pages\\index\\index.nvue:423"));
    });
    // 生成随机数据
    this.newsitems = this.randomfn();
  },
  beforeDestroy: function beforeDestroy() {
    currentWebview.removeEventListener('show', function (e) {

    });
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)["default"]))

/***/ }),
/* 6 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, weexPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlus", function() { return weexPlus; });
function initUni() {

    var isFn = function isFn(v) {
        return typeof v === 'function';
    };

    var handlePromise = function handlePromise(promise) {
        return promise.then(function(data) {
            return [null, data];
        }).catch(function(err) {
            return [err];
        });
    };

    var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
    var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
        'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
        'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
        'pageScrollTo', 'drawCanvas'
    ];

    var shouldPromise = function shouldPromise(name) {
        if (REGEX.test(name) && name !== 'createBLEConnection') {
            return false;
        }
        if (~API_NORMAL_LIST.indexOf(name)) {
            return false;
        }
        return true;
    };

    var promisify = function promisify(api) {
        return function() {
            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = arguments[_key];
            }

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return api.apply(undefined, [options].concat(params));
            }
            return handlePromise(new Promise(function(resolve, reject) {
                api.apply(undefined, [Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                })].concat(params));
                /* eslint-disable no-extend-native */
                Promise.prototype.finally = function(callback) {
                    var promise = this.constructor;
                    return this.then(function(value) {
                        return promise.resolve(callback()).then(function() {
                            return value;
                        });
                    }, function(reason) {
                        return promise.resolve(callback()).then(function() {
                            throw reason;
                        });
                    });
                };
            }));
        };
    };

    var onMessageCallbacks = [];

    var origin = void 0;

    function onSubNVueMessage(data) {
        onMessageCallbacks.forEach(function(callback) {
            return callback({
                origin: origin,
                data: data
            });
        });
    }

    var webviewId = weexPlus.webview.currentWebview().id;

    var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
    channel.onmessage = function(event) {
        if (event.data.to === webviewId) {
            onSubNVueMessage(event.data.data);
        }
    };

    function wrapper(webview) {
        webview.$processed = true;

        var currentWebviewId = weexPlus.webview.currentWebview().id;
        var isPopupNVue = currentWebviewId === webview.id;

        var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
        var popupNVueId = webview.id;

        webview.postMessage = function(data) {
            if (hostNVueId) {
                channel.postMessage({
                    data: data,
                    to: isPopupNVue ? hostNVueId : popupNVueId
                });
            } else {
                postMessage({
                    type: 'UniAppSubNVue',
                    data: data
                });
            }
        };
        webview.onMessage = function(callback) {
            onMessageCallbacks.push(callback);
        };

        if (!webview.__uniapp_mask_id) {
            return;
        }
        origin = webview.__uniapp_host;

        var maskColor = webview.__uniapp_mask;

        var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
        maskWebview = maskWebview.parent() || maskWebview;//再次检测父
        var oldShow = webview.show;
        var oldHide = webview.hide;
        var oldClose = webview.close;

        var showMask = function showMask() {
            maskWebview.setStyle({
                mask: maskColor
            });
        };
        var closeMask = function closeMask() {
            maskWebview.setStyle({
                mask: 'none'
            });
        };
        webview.show = function() {
            showMask();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return oldShow.apply(webview, args);
        };
        webview.hide = function() {
            closeMask();

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return oldHide.apply(webview, args);
        };
        webview.close = function() {
            closeMask();

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return oldClose.apply(webview, args);
        };
    }

    function getSubNVueById(id) {
        var webview = weexPlus.webview.getWebviewById(id);
        if (webview && !webview.$processed) {
            wrapper(webview);
        }
        return webview;
    }

    function getCurrentSubNVue() {
        return getSubNVueById(weexPlus.webview.currentWebview().id);
    }

    var plus = weex.requireModule('plus');
    var globalEvent = weex.requireModule('globalEvent');

    var id = 0;
    var callbacks = {};

    var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

    globalEvent.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppJsApi') {
            invoke(e.data.id, e.data.data);
        } else if (e.data.type === 'UniAppSubNVue') {
            onSubNVueMessage(e.data.data, e.data.options);
        } else if (e.data.type === 'onNavigationBarButtonTap') {
            if (typeof onNavigationBarButtonTapCallback === 'function') {
                onNavigationBarButtonTapCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
            if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
                onNavigationBarSearchInputChangedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
            if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
                onNavigationBarSearchInputConfirmedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
            if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
                onNavigationBarSearchInputClickedCallback(e.data.data);
            }
        }
    });

    var createCallback = function createCallback(args, type) {
        var callback = function callback(res) {
            if (isFn(args)) {
                args(res);
            } else if (args) {
                if (~res.errMsg.indexOf(':ok')) {
                    isFn(args.success) && args.success(res);
                } else if (~res.errMsg.indexOf(':fail')) {
                    isFn(args.fail) && args.fail(res);
                }
                isFn(args.complete) && args.complete(res);
            }
        };
        if (isFn(args) || args && isFn(args.callback)) {
            callback.keepAlive = true;
        }
        return callback;
    };

    var invoke = function invoke(callbackId, data) {
        var callback = callbacks[callbackId];
        if (callback) {
            callback(data);
            if (!callback.keepAlive) {
                delete callbacks[callbackId];
            }
        } else {
            console.error('callback[' + callbackId + '] is undefined');
        }
    };

    var publish = function publish(_ref) {
        var id = _ref.id,
            type = _ref.type,
            params = _ref.params;

        callbacks[id] = createCallback(params, type);
        plus.postMessage({
            id: id,
            type: type,
            params: params
        }, UNIAPP_SERVICE_NVUE_ID);
    };

    function postMessage(data) {
        plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
    }

    var createPublish = function createPublish(name) {
        return function(args) {
            publish({
                id: id++,
                type: name,
                params: args
            });
        };
    };

    var onNavigationBarButtonTapCallback = void 0;
    var onNavigationBarSearchInputChangedCallback = void 0;
    var onNavigationBarSearchInputConfirmedCallback = void 0;
    var onNavigationBarSearchInputClickedCallback = void 0;

    function onNavigationBarButtonTap(callback) {
        onNavigationBarButtonTapCallback = callback;
    }

    function onNavigationBarSearchInputChanged(callback) {
        onNavigationBarSearchInputChangedCallback = callback;
    }

    function onNavigationBarSearchInputConfirmed(callback) {
        onNavigationBarSearchInputConfirmedCallback = callback;
    }

    function onNavigationBarSearchInputClicked(callback) {
        onNavigationBarSearchInputClickedCallback = callback;
    }

    function requireNativePlugin(pluginName) {
        return weex.requireModule(pluginName);
    }

    var dom = weex.requireModule('dom');

    function loadFontFace(_ref) {
        var family = _ref.family,
            source = _ref.source,
            desc = _ref.desc,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        dom.addRule('fontFace', {
            fontFamily: family,
            src: source.replace(/"/g, '\'')
        });
        var res = {
            errMsg: 'loadFontFace:ok',
            status: 'loaded'
        };
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var globalEvent$1 = weex.requireModule('globalEvent');

    var callbacks$1 = [];

    globalEvent$1.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppReady') {
            ready.isUniAppReady = true;
            if (callbacks$1.length) {
                callbacks$1.forEach(function(callback) {
                    return callback();
                });
                callbacks$1 = [];
            }
        }
    });

    function ready(callback) {
        if (typeof callback === 'function') {
            if (this.isUniAppReady) {
                callback();
            } else {
                callbacks$1.push(callback);
            }
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
            "symbol" : typeof obj;
    };

    var stream = weex.requireModule('stream');

    // let requestTaskId = 0

    var METHOD_GET = 'GET';
    var METHOD_POST = 'POST';
    var CONTENT_TYPE_JSON = 'application/json';
    var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

    var serialize = function serialize(data) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
        var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
                return JSON.stringify(data);
            } else {
                return Object.keys(data).map(function(key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                }).join('&');
            }
        }
        return data;
    };

    function request(_ref) {
        var url = _ref.url,
            data = _ref.data,
            header = _ref.header,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'GET' : _ref$method,
            _ref$dataType = _ref.dataType,
            dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
            responseType = _ref.responseType,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        // requestTaskId++
        var aborted = false;

        var hasContentType = false;
        var headers = {};
        if (header) {
            for (var name in header) {
                if (!hasContentType && name.toLowerCase() === 'content-type') {
                    hasContentType = true;
                    headers['Content-Type'] = header[name];
                } else {
                    headers[name] = header[name];
                }
            }
        }
        if (method === METHOD_GET && data) {
            url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
                serialize(data);
        }
        stream.fetch({
            url: url,
            method: method,
            headers: headers,
            type: dataType === 'json' ? 'json' : 'text',
            body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
        }, function(_ref2) {
            var status = _ref2.status,
                ok = _ref2.ok,
                statusText = _ref2.statusText,
                data = _ref2.data,
                headers = _ref2.headers;

            var ret = {};
            if (!status || status === -1 || aborted) {
                ret.errMsg = 'request:fail';
                isFn(fail) && fail(ret);
            } else {
                ret.data = data;
                ret.statusCode = status;
                ret.header = headers;
                isFn(success) && success(ret);
            }
            isFn(complete) && complete(ret);
        });
        return {
            abort: function abort() {
                aborted = true;
            }
        };
    }

    var storage = weex.requireModule('plusstorage');
    var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

    function getStorage(_ref) {
        var key = _ref.key,
            data = _ref.data,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function(ret) {
            if (ret.result === 'success') {
                var dataType = ret.data;
                storage.getItem(key, function(res) {
                    if (res.result === 'success') {
                        var result = res.data;
                        if (dataType && result) {
                            if (dataType !== 'String') {
                                result = JSON.parse(result);
                            }
                            isFn(success) && success({
                                errMsg: 'getStorage:ok',
                                data: result
                            });
                        } else {
                            res.errMsg = 'setStorage:fail';
                            isFn(fail) && fail(res);
                        }
                    } else {
                        res.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(res);
                    }
                    isFn(complete) && complete(res);
                });
            } else {
                ret.errMsg = 'setStorage:fail';
                isFn(fail) && fail(ret);
                isFn(complete) && complete(ret);
            }
        });
    }

    function setStorage(_ref2) {
        var key = _ref2.key,
            data = _ref2.data,
            success = _ref2.success,
            fail = _ref2.fail,
            complete = _ref2.complete;

        var dataType = 'String';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            dataType = 'Object';
            data = JSON.stringify(data);
        }
        storage.setItem(key, data, function(res) {
            if (res.result === 'success') {
                storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function(ret) {
                    if (ret.result === 'success') {
                        isFn(success) && success({
                            errMsg: 'setStorage:ok'
                        });
                    } else {
                        ret.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(ret);
                    }
                });
            } else {
                res.errMsg = 'setStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
    }

    function removeStorage(_ref3) {
        var key = _ref3.key,
            data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        storage.removeItem(key, function(res) {
            if (res.result === 'success') {
                isFn(success) && success({
                    errMsg: 'removeStorage:ok'
                });
            } else {
                res.errMsg = 'removeStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
        storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
    }

    function clearStorage(_ref4) {
        var key = _ref4.key,
            data = _ref4.data,
            success = _ref4.success,
            fail = _ref4.fail,
            complete = _ref4.complete;
    }

    var clipboard = weex.requireModule('clipboard');

    function getClipboardData(_ref) {
        var success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        clipboard.getString(function(_ref2) {
            var data = _ref2.data;

            var res = {
                errMsg: 'getClipboardData:ok',
                data: data
            };
            isFn(success) && success(res);
            isFn(complete) && complete(res);
        });
    }

    function setClipboardData(_ref3) {
        var data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        var res = {
            errMsg: 'setClipboardData:ok'
        };
        clipboard.setString(data);
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var getEmitter = function() {
        if (typeof getUniEmitter === 'function') {
            /* eslint-disable no-undef */
            return getUniEmitter;
        }
        var Emitter = {
            $on: function $on() {
                console.warn('uni.$on failed');
            },
            $off: function $off() {
                console.warn('uni.$off failed');
            },
            $once: function $once() {
                console.warn('uni.$once failed');
            },
            $emit: function $emit() {
                console.warn('uni.$emit failed');
            }
        };
        return function getUniEmitter() {
            return Emitter;
        };
    }();

    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }

    function $on() {
        return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $off() {
        return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $once() {
        return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $emit() {
        return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
    }



    var api = /*#__PURE__*/ Object.freeze({
        loadFontFace: loadFontFace,
        ready: ready,
        request: request,
        getStorage: getStorage,
        setStorage: setStorage,
        removeStorage: removeStorage,
        clearStorage: clearStorage,
        getClipboardData: getClipboardData,
        setClipboardData: setClipboardData,
        onSubNVueMessage: onSubNVueMessage,
        getSubNVueById: getSubNVueById,
        getCurrentSubNVue: getCurrentSubNVue,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });


    var wx = {
        uploadFile: true,
        downloadFile: true,
        chooseImage: true,
        previewImage: true,
        getImageInfo: true,
        saveImageToPhotosAlbum: true,
        chooseVideo: true,
        saveVideoToPhotosAlbum: true,
        saveFile: true,
        getSavedFileList: true,
        getSavedFileInfo: true,
        removeSavedFile: true,
        openDocument: true,
        setStorage: true,
        getStorage: true,
        getStorageInfo: true,
        removeStorage: true,
        clearStorage: true,
        getLocation: true,
        chooseLocation: true,
        openLocation: true,
        getSystemInfo: true,
        getNetworkType: true,
        makePhoneCall: true,
        scanCode: true,
        setScreenBrightness: true,
        getScreenBrightness: true,
        setKeepScreenOn: true,
        vibrateLong: true,
        vibrateShort: true,
        addPhoneContact: true,
        showToast: true,
        showLoading: true,
        hideToast: true,
        hideLoading: true,
        showModal: true,
        showActionSheet: true,
        setNavigationBarTitle: true,
        setNavigationBarColor: true,
        navigateTo: true,
        redirectTo: true,
        reLaunch: true,
        switchTab: true,
        navigateBack: true,
        getProvider: true,
        login: true,
        getUserInfo: true,
        share: true,
        requestPayment: true,
        subscribePush: true,
        unsubscribePush: true,
        onPush: true,
        offPush: true
    };

    var baseUni = {
        os: {
            nvue: true
        }
    };

    var uni = {};

    if (typeof Proxy !== 'undefined') {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (name === 'os') {
                    return {
                        nvue: true
                    };
                }
                if (name === 'postMessage') {
                    return postMessage;
                }
                if (name === 'requireNativePlugin') {
                    return requireNativePlugin;
                }
                if (name === 'onNavigationBarButtonTap') {
                    return onNavigationBarButtonTap;
                }
                if (name === 'onNavigationBarSearchInputChanged') {
                    return onNavigationBarSearchInputChanged;
                }
                if (name === 'onNavigationBarSearchInputConfirmed') {
                    return onNavigationBarSearchInputConfirmed;
                }
                if (name === 'onNavigationBarSearchInputClicked') {
                    return onNavigationBarSearchInputClicked;
                }
                var method = api[name];
                if (!method) {
                    method = createPublish(name);
                }
                if (shouldPromise(name)) {
                    return promisify(method);
                }
                return method;
            }
        });
    } else {
        Object.keys(baseUni).forEach(function(key) {
            uni[key] = baseUni[key];
        });

        uni.postMessage = postMessage;

        uni.requireNativePlugin = requireNativePlugin;

        uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

        uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

        uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

        uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

        Object.keys(wx).forEach(function(name) {
            var method = api[name];
            if (!method) {
                method = createPublish(name);
            }
            if (shouldPromise(name)) {
                uni[name] = promisify(method);
            } else {
                uni[name] = method;
            }
        });
    }
    return uni;
}

var createUni;

if (typeof getUni === 'function') {
    createUni = getUni;
} else {
    createUni = initUni;
}
var weexPlus = new WeexPlus(weex);
/* harmony default export */ __webpack_exports__["default"] = (createUni(weex, weexPlus, BroadcastChannel));



/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  const s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function formatLog (...args) {
  const msgs = args.map((v) => {
    const type = Object.prototype.toString.call(v)
    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        const vType = typof(v).toUpperCase()
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }
    return v
  })
  let msg = ''
  if (msgs.length > 1) {
    const lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }
  return msg
}


/***/ }),
/* 8 */
/*!**************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-tabbar.nvue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sum_tabbar_nvue_vue_type_template_id_5c57bd18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum-tabbar.nvue?vue&type=template&id=5c57bd18& */ 9);
/* harmony import */ var _sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sum-tabbar.nvue?vue&type=script&lang=js& */ 11);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }

}

/* normalize component */

var component = Object(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sum_tabbar_nvue_vue_type_template_id_5c57bd18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sum_tabbar_nvue_vue_type_template_id_5c57bd18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "d4da55f6"
  
)

component.options.__file = "F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-tabbar.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/*!*********************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-tabbar.nvue?vue&type=template&id=5c57bd18& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_tabbar_nvue_vue_type_template_id_5c57bd18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./sum-tabbar.nvue?vue&type=template&id=5c57bd18& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_tabbar_nvue_vue_type_template_id_5c57bd18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_tabbar_nvue_vue_type_template_id_5c57bd18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 10 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-tabbar.nvue?vue&type=template&id=5c57bd18& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["w-100"], staticStyle: { height: "75px" } },
    [
      _c(
        "scroller",
        {
          staticClass: ["w-100", "flex-row"],
          staticStyle: { height: "75px" },
          attrs: { showScrollbar: false, scrollDirection: "horizontal" }
        },
        _vm._l(_vm.tabBars, function(item, index) {
          return _c(
            "div",
            {
              key: index,
              ref: "tab" + index,
              refInFor: true,
              staticClass: ["a-center", "j-center"],
              staticStyle: { height: "75px", width: "120px" },
              on: {
                click: function($event) {
                  return _vm.change(index)
                }
              }
            },
            [
              _c(
                "text",
                {
                  staticClass: ["font-md"],
                  staticStyle: {
                    borderStyle: "solid",
                    height: "75px",
                    lineHeight: "75px",
                    borderBottomWidth: "5px"
                  },
                  style: {
                    color: _vm.tabIndex === index ? "#f46801" : "#555",
                    "border-color":
                      _vm.tabIndex === index ? "#FD6801" : "#FFFFFF"
                  }
                },
                [_vm._v(_vm._s(item.name))]
              )
            ]
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!***************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-tabbar.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./sum-tabbar.nvue?vue&type=script&lang=js& */ 12);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_tabbar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-tabbar.nvue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');var _default =
{
  props: {
    tabBars: {
      type: Array,
      default: [] },

    tabIndex: {
      type: Number,
      default: 0 } },


  // 监听tabIndex的变化
  watch: {
    tabIndex: function tabIndex(newValue, oldValue) {
      console.log(__f__(newValue, " at components\\index\\nvue\\sum-tabbar.nvue:36"));
      this.change(newValue);
    } },

  methods: {
    // 点击选项卡事件
    change: function () {var _change = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(index) {var _this = this;var el;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                // console.log(1111);
                // console.log(index);
                // this.tabIndex = index
                this.$emit('tabchange', index);
                // 监听滚动区域变化
                //拿到当前元素

                el = this.$refs["tab".concat(index)][0];
                // 当前节点信息
                dom.getComponentRect(el, function (ret) {
                  console.log(__f__(ret, " at components\\index\\nvue\\sum-tabbar.nvue:53"));
                  // 处于右边
                  if (ret.size.right > 750) {
                    // 拿到处于中间的节点
                    var newEl = _this.$refs["tab".concat(index - 4)][0];
                    // 将节点滚动醉左边
                    dom.scrollToElement(newEl, {});
                  }
                  // 处于左边
                  if (ret.size.left < 0) {
                    dom.scrollToElement(el, {});
                  }
                });case 3:case "end":return _context.stop();}}}, _callee, this);}));function change(_x) {return _change.apply(this, arguments);}return change;}() } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)["default"]))

/***/ }),
/* 13 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 14);


/***/ }),
/* 14 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 15);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 15 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 16 */
/*!**********************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 17);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!F:/UNIAPP最新版本的/uniapp-xiaomi/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "position-relative": {
    "position": "relative"
  },
  "left-0": {
    "left": 0
  },
  "top-0": {
    "top": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "right-0": {
    "right": 0
  },
  "w-100": {
    "width": "750"
  },
  "w-50": {
    "width": "375"
  },
  "h-100": {
    "height": "1250"
  },
  "h-50": {
    "width": "625"
  },
  "font": {
    "fontSize": "25"
  },
  "font-sm": {
    "fontSize": "20"
  },
  "font-md": {
    "fontSize": "30"
  },
  "font-lg": {
    "fontSize": "40"
  },
  "font-big": {
    "fontSize": "60"
  },
  "font-weight": {
    "fontWeight": "bold"
  },
  "font-weight-100": {
    "fontWeight": "100"
  },
  "line-through": {
    "textDecoration": "line-through"
  },
  "row": {
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "col-1": {
    "width": "62.5"
  },
  "col-2": {
    "width": "125"
  },
  "col-3": {
    "width": "187.5"
  },
  "col-4": {
    "width": "250"
  },
  "col-5": {
    "width": "312.5"
  },
  "col-6": {
    "width": "375"
  },
  "col-7": {
    "width": "437.5"
  },
  "col-8": {
    "width": "500"
  },
  "col-9": {
    "width": "562.5"
  },
  "col-10": {
    "width": "625"
  },
  "col-11": {
    "width": "687.5"
  },
  "col-12": {
    "width": "750"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "j-start": {
    "justifyContent": "flex-start"
  },
  "j-center": {
    "justifyContent": "center"
  },
  "j-end": {
    "justifyContent": "flex-end"
  },
  "j-sb": {
    "justifyContent": "space-between"
  },
  "a-center": {
    "alignItems": "center"
  },
  "a-start": {
    "alignItems": "flex-start"
  },
  "a-end": {
    "alignItems": "flex-end"
  },
  "a-stretch": {
    "alignItems": "stretch"
  },
  "border": {
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-success": {
    "borderColor": "#6c757d"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#ffffff"
  },
  "border-light-secondary": {
    "borderColor": "#F1F1F1"
  },
  "rounded": {
    "borderRadius": "5"
  },
  "rounded-circle": {
    "borderRadius": 100
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-success": {
    "color": "#6c757d"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#B2B2B2"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-success": {
    "backgroundColor": "#6c757d"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "m-0": {
    "marginLeft": 0,
    "marginRight": 0,
    "marginTop": 0,
    "marginBottom": 0
  },
  "m": {
    "marginLeft": "5",
    "marginRight": "5",
    "marginTop": "5",
    "marginBottom": "5"
  },
  "m-1": {
    "marginLeft": "10",
    "marginRight": "10",
    "marginTop": "10",
    "marginBottom": "10"
  },
  "m-2": {
    "marginLeft": "20",
    "marginRight": "20",
    "marginTop": "20",
    "marginBottom": "20"
  },
  "m-3": {
    "marginLeft": "30",
    "marginRight": "30",
    "marginTop": "30",
    "marginBottom": "30"
  },
  "m-4": {
    "marginLeft": "40",
    "marginRight": "40",
    "marginTop": "40",
    "marginBottom": "40"
  },
  "m-5": {
    "marginLeft": "50",
    "marginRight": "50",
    "marginTop": "50",
    "marginBottom": "50"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx": {
    "marginLeft": "5",
    "marginRight": "5"
  },
  "mx-1": {
    "marginLeft": "10",
    "marginRight": "10"
  },
  "mx-2": {
    "marginLeft": "20",
    "marginRight": "20"
  },
  "mx-3": {
    "marginLeft": "30",
    "marginRight": "30"
  },
  "mx-4": {
    "marginLeft": "40",
    "marginRight": "40"
  },
  "mx-5": {
    "marginLeft": "50",
    "marginRight": "50"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my": {
    "marginTop": "5",
    "marginBottom": "5"
  },
  "my-1": {
    "marginTop": "10",
    "marginBottom": "10"
  },
  "my-2": {
    "marginTop": "20",
    "marginBottom": "20"
  },
  "my-3": {
    "marginTop": "30",
    "marginBottom": "30"
  },
  "my-4": {
    "marginTop": "40",
    "marginBottom": "40"
  },
  "my-5": {
    "marginTop": "50",
    "marginBottom": "50"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt": {
    "marginTop": "5"
  },
  "mt-1": {
    "marginTop": "10"
  },
  "mt-2": {
    "marginTop": "20"
  },
  "mt-3": {
    "marginTop": "30"
  },
  "mt-4": {
    "marginTop": "40"
  },
  "mt-5": {
    "marginTop": "50"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb": {
    "marginBottom": "5"
  },
  "mb-1": {
    "marginBottom": "10"
  },
  "mb-2": {
    "marginBottom": "20"
  },
  "mb-3": {
    "marginBottom": "30"
  },
  "mb-4": {
    "marginBottom": "40"
  },
  "mb-5": {
    "marginBottom": "50"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml": {
    "marginLeft": "5"
  },
  "ml-1": {
    "marginLeft": "10"
  },
  "ml-2": {
    "marginLeft": "20"
  },
  "ml-3": {
    "marginLeft": "30"
  },
  "ml-4": {
    "marginLeft": "40"
  },
  "ml-5": {
    "marginLeft": "50"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr": {
    "marginRight": "5"
  },
  "mr-1": {
    "marginRight": "10"
  },
  "mr-2": {
    "marginRight": "20"
  },
  "mr-3": {
    "marginRight": "30"
  },
  "mr-4": {
    "marginRight": "40"
  },
  "mr-5": {
    "marginRight": "50"
  },
  "p-0": {
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "p": {
    "paddingLeft": "5",
    "paddingRight": "5",
    "paddingTop": "5",
    "paddingBottom": "5"
  },
  "p-1": {
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "p-2": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "p-3": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "p-4": {
    "paddingLeft": "40",
    "paddingRight": "40",
    "paddingTop": "40",
    "paddingBottom": "40"
  },
  "p-5": {
    "paddingLeft": "50",
    "paddingRight": "50",
    "paddingTop": "50",
    "paddingBottom": "50"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px": {
    "paddingLeft": "5",
    "paddingRight": "5"
  },
  "px-1": {
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "px-2": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "px-3": {
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "px-4": {
    "paddingLeft": "40",
    "paddingRight": "40"
  },
  "px-5": {
    "paddingLeft": "50",
    "paddingRight": "50"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5",
    "paddingBottom": "5"
  },
  "py-1": {
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "py-2": {
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "py-3": {
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "py-4": {
    "paddingTop": "40",
    "paddingBottom": "40"
  },
  "py-5": {
    "paddingTop": "50",
    "paddingBottom": "50"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5"
  },
  "pt-1": {
    "paddingTop": "10"
  },
  "pt-2": {
    "paddingTop": "20"
  },
  "pt-3": {
    "paddingTop": "30"
  },
  "pt-4": {
    "paddingTop": "40"
  },
  "pt-5": {
    "paddingTop": "50"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb": {
    "paddingBottom": "5"
  },
  "pb-1": {
    "paddingBottom": "10"
  },
  "pb-2": {
    "paddingBottom": "20"
  },
  "pb-3": {
    "paddingBottom": "30"
  },
  "pb-4": {
    "paddingBottom": "40"
  },
  "pb-5": {
    "paddingBottom": "50"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5"
  },
  "pl-1": {
    "paddingLeft": "10"
  },
  "pl-2": {
    "paddingLeft": "20"
  },
  "pl-3": {
    "paddingLeft": "30"
  },
  "pl-4": {
    "paddingLeft": "40"
  },
  "pl-5": {
    "paddingLeft": "50"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5"
  },
  "pr-1": {
    "paddingRight": "10"
  },
  "pr-2": {
    "paddingRight": "20"
  },
  "pr-3": {
    "paddingRight": "30"
  },
  "pr-4": {
    "paddingRight": "40"
  },
  "pr-5": {
    "paddingRight": "50"
  }
}

/***/ }),
/* 18 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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


/***/ }),
/* 19 */
/*!**************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-slider.nvue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sum_slider_nvue_vue_type_template_id_10559316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum-slider.nvue?vue&type=template&id=10559316&scoped=true& */ 20);
/* harmony import */ var _sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sum-slider.nvue?vue&type=script&lang=js& */ 22);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./sum-slider.nvue?vue&type=style&index=0&id=10559316&scoped=true&lang=css& */ 24).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./sum-slider.nvue?vue&type=style&index=0&id=10559316&scoped=true&lang=css& */ 24).default)
          }

}

/* normalize component */

var component = Object(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sum_slider_nvue_vue_type_template_id_10559316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sum_slider_nvue_vue_type_template_id_10559316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "10559316",
  "31104e62"
  
)

component.options.__file = "F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-slider.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/*!*********************************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-slider.nvue?vue&type=template&id=10559316&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_template_id_10559316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./sum-slider.nvue?vue&type=template&id=10559316&scoped=true& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_template_id_10559316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_template_id_10559316_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 21 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-slider.nvue?vue&type=template&id=10559316&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "slider",
      { staticClass: ["slider"], attrs: { autoPlay: true, interval: 3000 } },
      [
        _vm._l(_vm.swipers, function(item, index) {
          return _c(
            "div",
            { key: index, staticStyle: { position: "relative" } },
            [
              _c("image", {
                staticClass: ["image"],
                attrs: { resize: "cover", src: item.src }
              })
            ]
          )
        }),
        _c("indicator", { staticClass: ["indicator"] })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/*!***************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-slider.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./sum-slider.nvue?vue&type=script&lang=js& */ 23);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-slider.nvue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    swipers: Array } };exports.default = _default;

/***/ }),
/* 24 */
/*!***********************************************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-slider.nvue?vue&type=style&index=0&id=10559316&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_style_index_0_id_10559316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!./sum-slider.nvue?vue&type=style&index=0&id=10559316&scoped=true&lang=css& */ 25);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_style_index_0_id_10559316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_style_index_0_id_10559316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_style_index_0_id_10559316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_style_index_0_id_10559316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_slider_nvue_vue_type_style_index_0_id_10559316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-slider.nvue?vue&type=style&index=0&id=10559316&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "width": "750",
    "height": "300"
  },
  "image": {
    "width": "750",
    "height": "300"
  },
  "indicator": {
    "position": "absolute",
    "right": 0,
    "bottom": 0,
    "width": "150",
    "height": "80",
    "backgroundColor": "rgba(0,0,0,0)",
    "itemColor": "rgba(255,255,255,0.5)",
    "itemSelectedColor": "#ffffff"
  }
}

/***/ }),
/* 26 */
/*!*************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/indexnavs.nvue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexnavs_nvue_vue_type_template_id_0c8eab52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexnavs.nvue?vue&type=template&id=0c8eab52& */ 27);
/* harmony import */ var _indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexnavs.nvue?vue&type=script&lang=js& */ 29);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }

}

/* normalize component */

var component = Object(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexnavs_nvue_vue_type_template_id_0c8eab52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexnavs_nvue_vue_type_template_id_0c8eab52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "ca6b3c76"
  
)

component.options.__file = "F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/indexnavs.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
/*!********************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/indexnavs.nvue?vue&type=template&id=0c8eab52& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_indexnavs_nvue_vue_type_template_id_0c8eab52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./indexnavs.nvue?vue&type=template&id=0c8eab52& */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_indexnavs_nvue_vue_type_template_id_0c8eab52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_indexnavs_nvue_vue_type_template_id_0c8eab52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 28 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/indexnavs.nvue?vue&type=template&id=0c8eab52& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: ["w-100", "row", "px-2", "mb-3"] },
      _vm._l(_vm.indexnavs, function(item, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: ["j-center", "a-center", "mt-3"],
            staticStyle: { width: "142px" }
          },
          [
            _c("image", {
              staticStyle: { width: "58px", height: "58px" },
              attrs: { src: item.src }
            }),
            _c("text", { staticClass: ["font", "text-muted", "mt-1"] }, [
              _vm._v(_vm._s(item.text))
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/*!**************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/indexnavs.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./indexnavs.nvue?vue&type=script&lang=js& */ 30);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_indexnavs_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 30 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/indexnavs.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    indexnavs: Array } };exports.default = _default;

/***/ }),
/* 31 */
/*!*******************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/divider.nvue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _divider_nvue_vue_type_template_id_bd490a36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divider.nvue?vue&type=template&id=bd490a36& */ 32);
/* harmony import */ var _divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divider.nvue?vue&type=script&lang=js& */ 34);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }

}

/* normalize component */

var component = Object(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _divider_nvue_vue_type_template_id_bd490a36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _divider_nvue_vue_type_template_id_bd490a36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "4375f425"
  
)

component.options.__file = "F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/divider.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 32 */
/*!**************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/divider.nvue?vue&type=template&id=bd490a36& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_divider_nvue_vue_type_template_id_bd490a36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./divider.nvue?vue&type=template&id=bd490a36& */ 33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_divider_nvue_vue_type_template_id_bd490a36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_divider_nvue_vue_type_template_id_bd490a36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 33 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/divider.nvue?vue&type=template&id=bd490a36& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", {
        staticClass: ["w-100"],
        staticStyle: { height: "18px", backgroundColor: "red" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),
/* 34 */
/*!********************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/divider.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./divider.nvue?vue&type=script&lang=js& */ 35);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_divider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/divider.nvue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
var _default =
{};exports.default = _default;

/***/ }),
/* 36 */
/*!*****************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-three-adv.nvue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sum_three_adv_nvue_vue_type_template_id_3d4a7cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum-three-adv.nvue?vue&type=template&id=3d4a7cd2& */ 37);
/* harmony import */ var _sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sum-three-adv.nvue?vue&type=script&lang=js& */ 39);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }

}

/* normalize component */

var component = Object(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sum_three_adv_nvue_vue_type_template_id_3d4a7cd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sum_three_adv_nvue_vue_type_template_id_3d4a7cd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "410fc1c5"
  
)

component.options.__file = "F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-three-adv.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 37 */
/*!************************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-three-adv.nvue?vue&type=template&id=3d4a7cd2& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_three_adv_nvue_vue_type_template_id_3d4a7cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./sum-three-adv.nvue?vue&type=template&id=3d4a7cd2& */ 38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_three_adv_nvue_vue_type_template_id_3d4a7cd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_three_adv_nvue_vue_type_template_id_3d4a7cd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 38 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-three-adv.nvue?vue&type=template&id=3d4a7cd2& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: ["w-100", "row"] }, [
      _c("div", { staticClass: ["col-6"] }, [
        _c("image", {
          staticStyle: { width: "373px", height: "530px" },
          attrs: { src: _vm.resdata[0].src, mode: "" }
        })
      ]),
      _c(
        "div",
        { staticClass: ["col-6", "j-sb"], staticStyle: { height: "530px" } },
        [
          _c("image", {
            staticStyle: { width: "375px", height: "263.5px" },
            attrs: { src: _vm.resdata[1].src, mode: "" }
          }),
          _c("image", {
            staticStyle: { width: "375px", height: "263.5px" },
            attrs: { src: _vm.resdata[2].src, mode: "" }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 39 */
/*!******************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-three-adv.nvue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./sum-three-adv.nvue?vue&type=script&lang=js& */ 40);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_three_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-three-adv.nvue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    resdata: Array } };exports.default = _default;

/***/ }),
/* 41 */
/*!***************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-one-adv.nvue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sum_one_adv_nvue_vue_type_template_id_5532490a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum-one-adv.nvue?vue&type=template&id=5532490a& */ 42);
/* harmony import */ var _sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sum-one-adv.nvue?vue&type=script&lang=js& */ 44);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }

}

/* normalize component */

var component = Object(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sum_one_adv_nvue_vue_type_template_id_5532490a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sum_one_adv_nvue_vue_type_template_id_5532490a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "435a2ebd"
  
)

component.options.__file = "F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-one-adv.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 42 */
/*!**********************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-one-adv.nvue?vue&type=template&id=5532490a& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_one_adv_nvue_vue_type_template_id_5532490a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./sum-one-adv.nvue?vue&type=template&id=5532490a& */ 43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_one_adv_nvue_vue_type_template_id_5532490a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_one_adv_nvue_vue_type_template_id_5532490a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 43 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-one-adv.nvue?vue&type=template&id=5532490a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: ["w-100"] }, [
      _c("div", { staticClass: ["p-2", "border-bottom"] }, [
        _c("text", { staticClass: ["text-dark", "font-md", "font-weight"] }, [
          _vm._v(_vm._s(_vm.item.title))
        ])
      ]),
      _c("div", [
        _c("image", {
          staticClass: ["w-100"],
          staticStyle: { height: "300px" },
          attrs: { src: _vm.item.cover }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 44 */
/*!****************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-one-adv.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./sum-one-adv.nvue?vue&type=script&lang=js& */ 45);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_sum_one_adv_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/index/nvue/sum-one-adv.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    item: Object } };exports.default = _default;

/***/ }),
/* 46 */
/*!******************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/common.nvue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_nvue_vue_type_template_id_3f9b16a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.nvue?vue&type=template&id=3f9b16a3& */ 47);
/* harmony import */ var _common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.nvue?vue&type=script&lang=js& */ 49);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }

}

/* normalize component */

var component = Object(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _common_nvue_vue_type_template_id_3f9b16a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _common_nvue_vue_type_template_id_3f9b16a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "c0a7153a"
  
)

component.options.__file = "F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/common.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 47 */
/*!*************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/common.nvue?vue&type=template&id=3f9b16a3& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_common_nvue_vue_type_template_id_3f9b16a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./common.nvue?vue&type=template&id=3f9b16a3& */ 48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_common_nvue_vue_type_template_id_3f9b16a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_common_nvue_vue_type_template_id_3f9b16a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 48 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/common.nvue?vue&type=template&id=3f9b16a3& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: ["col-6", "mb-1"],
        staticStyle: { paddingLeft: "2.5px", paddingRight: "2.5px" }
      },
      [
        _c("image", {
          staticStyle: { width: "370px", height: "370px" },
          attrs: { src: _vm.item.cover }
        }),
        _c(
          "text",
          {
            staticClass: ["font-md", "text-dark", "px-2", "py-1"],
            staticStyle: { lines: "1" }
          },
          [_vm._v(_vm._s(_vm.item.title) + "\n\t\t")]
        ),
        _c(
          "text",
          {
            staticClass: ["font", "px-2", "text-light-muted"],
            staticStyle: { lines: "1" }
          },
          [_vm._v(_vm._s(_vm.item.desc))]
        ),
        _c(
          "div",
          { staticClass: ["px-2", "pt-1", "row", "a-end"] },
          [
            _c("price", [_vm._v(_vm._s(_vm.item.pprice))]),
            _c(
              "text",
              {
                staticClass: ["line-through", "text-light-muted", "ml-1"],
                staticStyle: { fontSize: "24px" }
              },
              [_vm._v("¥" + _vm._s(_vm.item.oprice))]
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 49 */
/*!*******************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/common.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./common.nvue?vue&type=script&lang=js& */ 50);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_common_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 50 */
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/common.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















var _price = _interopRequireDefault(__webpack_require__(/*! @/components/common/price.nvue */ 51));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { price: _price.default }, props: { item: Object, index: Number } };exports.default = _default;

/***/ }),
/* 51 */
/*!*****************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/price.nvue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _price_nvue_vue_type_template_id_5593de96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price.nvue?vue&type=template&id=5593de96& */ 52);
/* harmony import */ var _price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price.nvue?vue&type=script&lang=js& */ 54);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 18);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! @/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css& */ 16).default)
          }

}

/* normalize component */

var component = Object(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _price_nvue_vue_type_template_id_5593de96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _price_nvue_vue_type_template_id_5593de96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "121dd9f5"
  
)

component.options.__file = "F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/price.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 52 */
/*!************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/price.nvue?vue&type=template&id=5593de96& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_price_nvue_vue_type_template_id_5593de96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./price.nvue?vue&type=template&id=5593de96& */ 53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_price_nvue_vue_type_template_id_5593de96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_price_nvue_vue_type_template_id_5593de96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 53 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/price.nvue?vue&type=template&id=5593de96& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: ["flex-row"] }, [
      _c("text", { staticClass: ["font"], staticStyle: { color: "#FD6801" } }, [
        _vm._v("¥")
      ]),
      _c(
        "text",
        { staticStyle: { color: "#FD6801", fontSize: "32px" } },
        [_vm._t("default")],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 54 */
/*!******************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/price.nvue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./price.nvue?vue&type=script&lang=js& */ 55);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_price_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!F:/UNIAPP最新版本的/uniapp-xiaomi/components/common/price.nvue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
var _default =
{};exports.default = _default;

/***/ }),
/* 56 */
/*!*********************************************************************************************************!*\
  !*** F:/UNIAPP最新版本的/uniapp-xiaomi/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./zcm-main-nvue.css?vue&type=style&index=0&lang=css&mpType=page */ 57);
/* harmony import */ var _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_download_HBuilderX_full_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_zcm_main_nvue_css_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!F:/UNIAPP最新版本的/uniapp-xiaomi/common/zcm-main-nvue.css?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "position-relative": {
    "position": "relative"
  },
  "left-0": {
    "left": 0
  },
  "top-0": {
    "top": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "right-0": {
    "right": 0
  },
  "w-100": {
    "width": "750"
  },
  "w-50": {
    "width": "375"
  },
  "h-100": {
    "height": "1250"
  },
  "h-50": {
    "width": "625"
  },
  "font": {
    "fontSize": "25"
  },
  "font-sm": {
    "fontSize": "20"
  },
  "font-md": {
    "fontSize": "30"
  },
  "font-lg": {
    "fontSize": "40"
  },
  "font-big": {
    "fontSize": "60"
  },
  "font-weight": {
    "fontWeight": "bold"
  },
  "font-weight-100": {
    "fontWeight": "100"
  },
  "line-through": {
    "textDecoration": "line-through"
  },
  "row": {
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "col-1": {
    "width": "62.5"
  },
  "col-2": {
    "width": "125"
  },
  "col-3": {
    "width": "187.5"
  },
  "col-4": {
    "width": "250"
  },
  "col-5": {
    "width": "312.5"
  },
  "col-6": {
    "width": "375"
  },
  "col-7": {
    "width": "437.5"
  },
  "col-8": {
    "width": "500"
  },
  "col-9": {
    "width": "562.5"
  },
  "col-10": {
    "width": "625"
  },
  "col-11": {
    "width": "687.5"
  },
  "col-12": {
    "width": "750"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "j-start": {
    "justifyContent": "flex-start"
  },
  "j-center": {
    "justifyContent": "center"
  },
  "j-end": {
    "justifyContent": "flex-end"
  },
  "j-sb": {
    "justifyContent": "space-between"
  },
  "a-center": {
    "alignItems": "center"
  },
  "a-start": {
    "alignItems": "flex-start"
  },
  "a-end": {
    "alignItems": "flex-end"
  },
  "a-stretch": {
    "alignItems": "stretch"
  },
  "border": {
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-success": {
    "borderColor": "#6c757d"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#ffffff"
  },
  "border-light-secondary": {
    "borderColor": "#F1F1F1"
  },
  "rounded": {
    "borderRadius": "5"
  },
  "rounded-circle": {
    "borderRadius": 100
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-success": {
    "color": "#6c757d"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#B2B2B2"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-success": {
    "backgroundColor": "#6c757d"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "m-0": {
    "marginLeft": 0,
    "marginRight": 0,
    "marginTop": 0,
    "marginBottom": 0
  },
  "m": {
    "marginLeft": "5",
    "marginRight": "5",
    "marginTop": "5",
    "marginBottom": "5"
  },
  "m-1": {
    "marginLeft": "10",
    "marginRight": "10",
    "marginTop": "10",
    "marginBottom": "10"
  },
  "m-2": {
    "marginLeft": "20",
    "marginRight": "20",
    "marginTop": "20",
    "marginBottom": "20"
  },
  "m-3": {
    "marginLeft": "30",
    "marginRight": "30",
    "marginTop": "30",
    "marginBottom": "30"
  },
  "m-4": {
    "marginLeft": "40",
    "marginRight": "40",
    "marginTop": "40",
    "marginBottom": "40"
  },
  "m-5": {
    "marginLeft": "50",
    "marginRight": "50",
    "marginTop": "50",
    "marginBottom": "50"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx": {
    "marginLeft": "5",
    "marginRight": "5"
  },
  "mx-1": {
    "marginLeft": "10",
    "marginRight": "10"
  },
  "mx-2": {
    "marginLeft": "20",
    "marginRight": "20"
  },
  "mx-3": {
    "marginLeft": "30",
    "marginRight": "30"
  },
  "mx-4": {
    "marginLeft": "40",
    "marginRight": "40"
  },
  "mx-5": {
    "marginLeft": "50",
    "marginRight": "50"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my": {
    "marginTop": "5",
    "marginBottom": "5"
  },
  "my-1": {
    "marginTop": "10",
    "marginBottom": "10"
  },
  "my-2": {
    "marginTop": "20",
    "marginBottom": "20"
  },
  "my-3": {
    "marginTop": "30",
    "marginBottom": "30"
  },
  "my-4": {
    "marginTop": "40",
    "marginBottom": "40"
  },
  "my-5": {
    "marginTop": "50",
    "marginBottom": "50"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt": {
    "marginTop": "5"
  },
  "mt-1": {
    "marginTop": "10"
  },
  "mt-2": {
    "marginTop": "20"
  },
  "mt-3": {
    "marginTop": "30"
  },
  "mt-4": {
    "marginTop": "40"
  },
  "mt-5": {
    "marginTop": "50"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb": {
    "marginBottom": "5"
  },
  "mb-1": {
    "marginBottom": "10"
  },
  "mb-2": {
    "marginBottom": "20"
  },
  "mb-3": {
    "marginBottom": "30"
  },
  "mb-4": {
    "marginBottom": "40"
  },
  "mb-5": {
    "marginBottom": "50"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml": {
    "marginLeft": "5"
  },
  "ml-1": {
    "marginLeft": "10"
  },
  "ml-2": {
    "marginLeft": "20"
  },
  "ml-3": {
    "marginLeft": "30"
  },
  "ml-4": {
    "marginLeft": "40"
  },
  "ml-5": {
    "marginLeft": "50"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr": {
    "marginRight": "5"
  },
  "mr-1": {
    "marginRight": "10"
  },
  "mr-2": {
    "marginRight": "20"
  },
  "mr-3": {
    "marginRight": "30"
  },
  "mr-4": {
    "marginRight": "40"
  },
  "mr-5": {
    "marginRight": "50"
  },
  "p-0": {
    "paddingLeft": 0,
    "paddingRight": 0,
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "p": {
    "paddingLeft": "5",
    "paddingRight": "5",
    "paddingTop": "5",
    "paddingBottom": "5"
  },
  "p-1": {
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "p-2": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "p-3": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "p-4": {
    "paddingLeft": "40",
    "paddingRight": "40",
    "paddingTop": "40",
    "paddingBottom": "40"
  },
  "p-5": {
    "paddingLeft": "50",
    "paddingRight": "50",
    "paddingTop": "50",
    "paddingBottom": "50"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px": {
    "paddingLeft": "5",
    "paddingRight": "5"
  },
  "px-1": {
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "px-2": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "px-3": {
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "px-4": {
    "paddingLeft": "40",
    "paddingRight": "40"
  },
  "px-5": {
    "paddingLeft": "50",
    "paddingRight": "50"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5",
    "paddingBottom": "5"
  },
  "py-1": {
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "py-2": {
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "py-3": {
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "py-4": {
    "paddingTop": "40",
    "paddingBottom": "40"
  },
  "py-5": {
    "paddingTop": "50",
    "paddingBottom": "50"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5"
  },
  "pt-1": {
    "paddingTop": "10"
  },
  "pt-2": {
    "paddingTop": "20"
  },
  "pt-3": {
    "paddingTop": "30"
  },
  "pt-4": {
    "paddingTop": "40"
  },
  "pt-5": {
    "paddingTop": "50"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb": {
    "paddingBottom": "5"
  },
  "pb-1": {
    "paddingBottom": "10"
  },
  "pb-2": {
    "paddingBottom": "20"
  },
  "pb-3": {
    "paddingBottom": "30"
  },
  "pb-4": {
    "paddingBottom": "40"
  },
  "pb-5": {
    "paddingBottom": "50"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5"
  },
  "pl-1": {
    "paddingLeft": "10"
  },
  "pl-2": {
    "paddingLeft": "20"
  },
  "pl-3": {
    "paddingLeft": "30"
  },
  "pl-4": {
    "paddingLeft": "40"
  },
  "pl-5": {
    "paddingLeft": "50"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5"
  },
  "pr-1": {
    "paddingRight": "10"
  },
  "pr-2": {
    "paddingRight": "20"
  },
  "pr-3": {
    "paddingRight": "30"
  },
  "pr-4": {
    "paddingRight": "40"
  },
  "pr-5": {
    "paddingRight": "50"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9tYWluLmpzP2U5Y2EiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/MjZiNiIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZT9jZjdiIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9wYWdlcy9pbmRleC9pbmRleC5udnVlPzUzMWQiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/NTg3MiIsInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy91bmktYXBwLXBsdXMtbnZ1ZS12OC9kaXN0L2luZGV4LmpzPzk5MmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9pbmRleC9udnVlL3N1bS10YWJiYXIubnZ1ZT9kZTU5Iiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2luZGV4L252dWUvc3VtLXRhYmJhci5udnVlP2U1OWIiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tdGFiYmFyLm52dWU/MmMyNSIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9pbmRleC9udnVlL3N1bS10YWJiYXIubnZ1ZT83NzBjIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2luZGV4L252dWUvc3VtLXRhYmJhci5udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcz9hMzRhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzP2JiZGQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcz85NmNmIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/NjJjNCIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzP2NiM2UiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz8yODc3Iiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2luZGV4L252dWUvc3VtLXNsaWRlci5udnVlPzU0NzciLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tc2xpZGVyLm52dWU/ODU5ZiIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9pbmRleC9udnVlL3N1bS1zbGlkZXIubnZ1ZT9lODBjIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2luZGV4L252dWUvc3VtLXNsaWRlci5udnVlPzIxOGUiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tc2xpZGVyLm52dWUiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tc2xpZGVyLm52dWU/ZWJjOCIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9pbmRleC9udnVlL3N1bS1zbGlkZXIubnZ1ZT84ZjBmIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2luZGV4L252dWUvaW5kZXhuYXZzLm52dWU/ZDNlZSIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9pbmRleC9udnVlL2luZGV4bmF2cy5udnVlP2I1YTMiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9pbmRleG5hdnMubnZ1ZT81NDcyIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2luZGV4L252dWUvaW5kZXhuYXZzLm52dWU/NzBjMyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9pbmRleC9udnVlL2luZGV4bmF2cy5udnVlIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2NvbW1vbi9kaXZpZGVyLm52dWU/OGUxZCIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlPzk2MjMiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvY29tbW9uL2RpdmlkZXIubnZ1ZT83ZmZiIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2NvbW1vbi9kaXZpZGVyLm52dWU/MjczYiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2luZGV4L252dWUvc3VtLXRocmVlLWFkdi5udnVlPzFhYmYiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tdGhyZWUtYWR2Lm52dWU/MTNmMiIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9pbmRleC9udnVlL3N1bS10aHJlZS1hZHYubnZ1ZT9lYmRlIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2luZGV4L252dWUvc3VtLXRocmVlLWFkdi5udnVlP2VkMjkiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tdGhyZWUtYWR2Lm52dWUiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tb25lLWFkdi5udnVlPzMzMjYiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tb25lLWFkdi5udnVlPzQ5Y2MiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tb25lLWFkdi5udnVlPzNhMTMiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tb25lLWFkdi5udnVlPzY3MzgiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tb25lLWFkdi5udnVlIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2NvbW1vbi9jb21tb24ubnZ1ZT85NzU3Iiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2NvbW1vbi9jb21tb24ubnZ1ZT9hYzVhIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2NvbW1vbi9jb21tb24ubnZ1ZT82MTc5Iiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2NvbW1vbi9jb21tb24ubnZ1ZT81OWFlIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2NvbW1vbi9jb21tb24ubnZ1ZSIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9jb21tb24vcHJpY2UubnZ1ZT81ZTA0Iiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2NvbW1vbi9wcmljZS5udnVlP2ZmNWEiLCJ3ZWJwYWNrOi8vL0Y6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvY29tbW9uL3ByaWNlLm52dWU/YzhiYSIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9jb21tb24vcHJpY2UubnZ1ZT8wNzdmIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2NvbW1vbi9wcmljZS5udnVlIiwid2VicGFjazovLy9GOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/ZTY5ZCIsIndlYnBhY2s6Ly8vRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzP2UxY2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGc0Q7QUFDdEQsMkVBQUc7QUFDSCwyRUFBRztBQUNILDJFQUFHOztBQUVILFFBQVEsMkVBQUc7Ozs7Ozs7Ozs7OztBQ05YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDM0I7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtQkFBTyxDQUFDLGdGQUF3RTtBQUNqSCxXQUFXO0FBQ1gsZ0RBQWdELG1CQUFPLENBQUMsZ0ZBQXdFO0FBQ2hJOztBQUVBOztBQUVBO0FBQzRKO0FBQzVKLGdCQUFnQix3S0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7QUNqQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDZCQUE2QixzQkFBc0IsSUFBSTtBQUM1RDtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUErQztBQUMvRCxhQUFhO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVDQUF1QztBQUN6RCxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCLHVCQUF1QixFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pELDBCQUEwQiw0QkFBNEI7QUFDdEQsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBLDhCQUE4Qix5Q0FBeUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLHNCQUFzQixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdDQUFnQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsYUFBYTtBQUNoRDtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0NBQWdDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0QkFBNEI7QUFDdEQsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBLDhCQUE4Qix5Q0FBeUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RLQTtBQUFBO0FBQUE7QUFBQTtBQUE0ZCxDQUFnQixxZ0JBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUdoZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRztBQUNBO0FBQ0E7QUFDQSxtRDtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLGlDQUZBO0FBR0EsZ0NBSEE7QUFJQSw2QkFKQTtBQUtBLHFDQUxBO0FBTUEsaUNBTkE7QUFPQSwrQkFQQSxFQURBOztBQVVBLE1BVkEsa0JBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUpBO0FBS0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBO0FBR0EseUJBSEE7QUFJQTtBQUNBLGtCQURBO0FBRUEscUJBRkE7QUFHQSwyQkFIQSxFQUpBO0FBUUE7QUFDQSxrQkFEQTtBQUVBLGtCQUZBO0FBR0EsMkJBSEEsRUFSQTtBQVlBO0FBQ0Esa0JBREE7QUFFQSxvQkFGQTtBQUdBLDJCQUhBLEVBWkE7QUFnQkE7QUFDQSxrQkFEQTtBQUVBLHFCQUZBO0FBR0EsMkJBSEEsRUFoQkE7QUFvQkE7QUFDQSxrQkFEQTtBQUVBLGtCQUZBO0FBR0EsMkJBSEEsRUFwQkE7QUF3QkE7QUFDQSxrQkFEQTtBQUVBLG9CQUZBO0FBR0EsMkJBSEEsRUF4QkE7QUE0QkE7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0EsMkJBSEEsRUE1QkE7QUFnQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0EsMkJBSEEsRUFoQ0EsQ0FMQTs7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2RkE7QUF5RkEsR0FwR0E7O0FBc0dBO0FBQ0E7QUFDQSxXQUZBLG1CQUVBLENBRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUNBLHFEQURBO0FBRUEscURBRkE7QUFHQSxxREFIQSxDQUZBOztBQU9BO0FBQ0EseUJBREE7QUFFQTtBQUNBLDhEQURBO0FBRUEsOERBRkE7QUFHQSw4REFIQTtBQUlBLDhEQUpBLENBRkEsRUFQQTs7O0FBZ0JBO0FBQ0Esb0JBREE7QUFFQTtBQUNBLGlEQURBO0FBRUEsdUJBRkE7QUFHQSx3QkFIQTtBQUlBLHdCQUpBO0FBS0Esd0JBTEE7QUFNQTtBQUNBLGlEQURBO0FBRUEsdUJBRkE7QUFHQSx3QkFIQTtBQUlBLHdCQUpBO0FBS0Esd0JBTEEsRUFOQTtBQVlBO0FBQ0EsaURBREE7QUFFQSx1QkFGQTtBQUdBLHdCQUhBO0FBSUEsd0JBSkE7QUFLQSx3QkFMQSxFQVpBO0FBa0JBO0FBQ0EsaURBREE7QUFFQSx1QkFGQTtBQUdBLHdCQUhBO0FBSUEsd0JBSkE7QUFLQSx3QkFMQSxFQWxCQSxDQUZBLEVBaEJBOzs7O0FBNkNBO0FBQ0E7O0FBRUEsS0F6REE7QUEwREE7QUFDQSxZQTNEQSxzQkEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLDZCQUZBO0FBR0EsNkJBSEE7QUFJQSxnQ0FKQTtBQUtBLGtCQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0EseURBREE7QUFFQSx5REFGQTtBQUdBLHlEQUhBLENBRkE7O0FBT0E7QUFDQSw2QkFEQTtBQUVBO0FBQ0Esa0VBREE7QUFFQSxrRUFGQTtBQUdBLGtFQUhBO0FBSUEsa0VBSkE7QUFLQSxrRUFMQTtBQU1BLGtFQU5BO0FBT0Esa0VBUEE7QUFRQSxrRUFSQTtBQVNBLGtFQVRBLENBRkEsRUFQQTs7O0FBcUJBO0FBQ0EsNEJBREE7QUFFQTtBQUNBLG9EQURBO0FBRUEsb0RBRkEsQ0FGQSxFQXJCQTs7QUEyQkE7QUFDQSwwQkFEQTtBQUVBO0FBQ0EsMkJBREE7QUFFQSxvREFGQSxFQUZBLEVBM0JBOzs7QUFrQ0E7QUFDQSx3QkFEQTtBQUVBO0FBQ0EscURBREE7QUFFQSwyQkFGQTtBQUdBLDRCQUhBO0FBSUEsNEJBSkE7QUFLQSw0QkFMQTtBQU1BO0FBQ0EscURBREE7QUFFQSwyQkFGQTtBQUdBLDRCQUhBO0FBSUEsNEJBSkE7QUFLQSw0QkFMQSxFQU5BO0FBWUE7QUFDQSxxREFEQTtBQUVBLDJCQUZBO0FBR0EsNEJBSEE7QUFJQSw0QkFKQTtBQUtBLDRCQUxBLEVBWkE7QUFrQkE7QUFDQSxxREFEQTtBQUVBLDJCQUZBO0FBR0EsNEJBSEE7QUFJQSw0QkFKQTtBQUtBLDRCQUxBLEVBbEJBLENBRkEsRUFsQ0E7Ozs7QUErREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQXBKQTtBQXFKQSxhQXJKQSxxQkFxSkEsS0FySkEsRUFxSkE7QUFDQTtBQUNBLEtBdkpBO0FBd0pBO0FBQ0EsZ0JBekpBLHdCQXlKQSxDQXpKQSxFQXlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5SkE7QUErSkE7QUFDQSxhQWhLQSx1QkFnS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsRUFHQSxJQUhBO0FBSUEsS0F0S0E7QUF1S0E7QUFDQSxXQXhLQSxtQkF3S0EsQ0F4S0EsRUF3S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLElBSEE7QUFJQSxLQXJMQTtBQXNMQTtBQUNBLGVBdkxBLHVCQXVMQSxDQXZMQSxFQXVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsS0F6TUEsRUF0R0E7OztBQWtUQSxTQWxUQSxxQkFrVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBO0FBQ0E7QUFDQSxHQTNUQTtBQTRUQSxlQTVUQSwyQkE0VEE7QUFDQTs7QUFFQSxLQUZBO0FBR0EsR0FoVUEsRTs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdHQUFnRyxhQUFhO0FBQzdHO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLDJFQUEyRSxhQUFhO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4RUFBOEUsZUFBZTtBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNlLDBHQUEyQyxFQUFDO0FBR3pEOzs7Ozs7Ozs7Ozs7QUM1d0JGO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUMzQjtBQUNMO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFPLENBQUMscUVBQTZEO0FBQ3RHLFdBQVc7QUFDWCxnREFBZ0QsbUJBQU8sQ0FBQyxxRUFBNkQ7QUFDckg7O0FBRUE7O0FBRUE7QUFDNEo7QUFDNUosZ0JBQWdCLHdLQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwrRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ2pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUNBQXVDLGlCQUFpQixFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQXNkLENBQWdCLCtmQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29CMWUsb0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGlCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBTEEsRUFEQTs7O0FBV0E7QUFDQTtBQUNBLFlBREEsb0JBQ0EsUUFEQSxFQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBLEVBWkE7O0FBa0JBO0FBQ0E7QUFDQSxVQUZBLHdHQUVBLEtBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBVkEsR0FVQSxrQ0FWQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFiQSxFQVpBLGdKQWxCQSxFOzs7Ozs7Ozs7OztBQ3JCQSxpQkFBaUIsbUJBQU8sQ0FBQyw2QkFBcUI7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLG1CQUFXOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDaHRCQTtBQUFBO0FBQUE7QUFBQTtBQUFxdEIsQ0FBZ0IsNnVCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0F6dUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNob0JBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQyxvRkFBNEU7QUFDckgsV0FBVztBQUNYLGdEQUFnRCxtQkFBTyxDQUFDLG9GQUE0RTtBQUNwSTs7QUFFQTs7QUFFQTtBQUM0SjtBQUM1SixnQkFBZ0Isd0tBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsa0dBQU07QUFDUixFQUFFLDJHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtDQUFrQyxpQ0FBaUMsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkJBQTJCLHVCQUF1QixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLFNBQVM7QUFDVCx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQXNkLENBQWdCLCtmQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNZMWU7QUFDQTtBQUNBLGtCQURBLEVBREEsRTs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFpMkIsQ0FBZ0IsNjJCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FyM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUMzQjtBQUNMO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFPLENBQUMscUVBQTZEO0FBQ3RHLFdBQVc7QUFDWCxnREFBZ0QsbUJBQU8sQ0FBQyxxRUFBNkQ7QUFDckg7O0FBRUE7O0FBRUE7QUFDNEo7QUFDNUosZ0JBQWdCLHdLQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw4RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ2pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnREFBZ0Q7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RCxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLHdCQUF3Qiw4Q0FBOEM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQXFkLENBQWdCLDhmQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNZemU7QUFDQTtBQUNBLG9CQURBLEVBREEsRTs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzNCO0FBQ0w7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQyxxRUFBNkQ7QUFDdEcsV0FBVztBQUNYLGdEQUFnRCxtQkFBTyxDQUFDLHFFQUE2RDtBQUNySDs7QUFFQTs7QUFFQTtBQUM0SjtBQUM1SixnQkFBZ0Isd0tBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBbWQsQ0FBZ0IsNGZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNPdmUsRTs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZGO0FBQzNCO0FBQ0w7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQyxxRUFBNkQ7QUFDdEcsV0FBVztBQUNYLGdEQUFnRCxtQkFBTyxDQUFDLHFFQUE2RDtBQUNySDs7QUFFQTs7QUFFQTtBQUM0SjtBQUM1SixnQkFBZ0Isd0tBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUseUZBQU07QUFDUixFQUFFLGtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFELGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUywrQ0FBK0Msa0JBQWtCLEVBQUU7QUFDNUU7QUFDQTtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQsb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQsb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUF5ZCxDQUFnQixrZ0JBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2U3ZTtBQUNBO0FBQ0Esa0JBREEsRUFEQSxFOzs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkY7QUFDM0I7QUFDTDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtQkFBTyxDQUFDLHFFQUE2RDtBQUN0RyxXQUFXO0FBQ1gsZ0RBQWdELG1CQUFPLENBQUMscUVBQTZEO0FBQ3JIOztBQUVBOztBQUVBO0FBQzRKO0FBQzVKLGdCQUFnQix3S0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7QUNqQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEMsaUJBQWlCLHdDQUF3QztBQUN6RCxvQkFBb0IsdURBQXVEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUMsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBdWQsQ0FBZ0IsZ2dCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlM2U7QUFDQTtBQUNBLGdCQURBLEVBREEsRTs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQyxxRUFBNkQ7QUFDdEcsV0FBVztBQUNYLGdEQUFnRCxtQkFBTyxDQUFDLHFFQUE2RDtBQUNySDs7QUFFQTs7QUFFQTtBQUM0SjtBQUM1SixnQkFBZ0Isd0tBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRCxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBZ0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQWtkLENBQWdCLDJmQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0J0ZSxtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxjQUNBLHFCQURBLEVBREEsRUFJQSxTQUNBLFlBREEsRUFFQSxhQUZBLEVBSkEsRTs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFPLENBQUMscUVBQTZEO0FBQ3RHLFdBQVc7QUFDWCxnREFBZ0QsbUJBQU8sQ0FBQyxxRUFBNkQ7QUFDckg7O0FBRUE7O0FBRUE7QUFDNEo7QUFDNUosZ0JBQWdCLHdLQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ2pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRCQUE0QjtBQUMzQyxrQkFBa0Isc0NBQXNDLG1CQUFtQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxlQUFlLHFDQUFxQyxFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBaWQsQ0FBZ0IsMGZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNVcmUsRTs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFndUIsQ0FBZ0Isd3ZCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FwdkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJwYWdlcy9pbmRleC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/bXBUeXBlPXBhZ2UnXG5BcHAubXBUeXBlID0gJ3BhZ2UnXG5BcHAucm91dGUgPSAncGFnZXMvaW5kZXgvaW5kZXgnXG5BcHAuZWwgPSAnI3Jvb3QnXG5cbm5ldyBWdWUoQXBwKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ZTgzNGI5Jm1wVHlwZT1wYWdlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCJAL2NvbW1vbi96Y20tbWFpbi1udnVlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCJlNTc1ZjQ5YVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkY6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL3BhZ2VzL2luZGV4L2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMCFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ZTgzNGI5Jm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogW1wiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcIl0gfSxcbiAgICBbXG4gICAgICBfYyhcInN1bS10YWJiYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0YWJJbmRleDogX3ZtLnRhYkluZGV4LCB0YWJCYXJzOiBfdm0udGFiQmFycyB9LFxuICAgICAgICBvbjogeyB0YWJjaGFuZ2U6IF92bS50YWJjaGFuZ2UgfVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJzbGlkZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJmbGV4LTFcIl0sXG4gICAgICAgICAgYXR0cnM6IHsgaW5kZXg6IF92bS50YWJJbmRleCwgaW5maW5pdGU6IGZhbHNlIH0sXG4gICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uc2xpZGVyQ2hhbmdlIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5uZXdzaXRlbXMsIGZ1bmN0aW9uKGxpc3QsIGxpc3RJbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwibGlzdFwiLFxuICAgICAgICAgICAgeyBrZXk6IGxpc3RJbmRleCwgYXR0cnM6IHsgc2hvd1Njcm9sbGJhcjogZmFsc2UgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJlZnJlc2hcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widy0xMDBcIiwgXCJmbGV4LXJvd1wiLCBcImotY2VudGVyXCIsIFwiYS1jZW50ZXJcIl0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNwbGF5OiBsaXN0LnJlZnJlc2hTaG93IH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBwdWxsaW5nZG93bjogX3ZtLnB1bGxpbmdkb3duLCByZWZyZXNoOiBfdm0ucmVmcmVzaCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiZm9udC1tZFwiLCBcInRleHQtbXV0ZWRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MobGlzdC5yZWZyZXNodGV4dCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLnRhYkJhcnNbbGlzdEluZGV4XS50ZW1wbGF0ZSA9PT0gXCJpbmRleFwiXG4gICAgICAgICAgICAgICAgPyBfdm0uX2wobGlzdC5kYXRhLCBmdW5jdGlvbihsaXN0SXRlbSwgaXRlbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0udHlwZSA9PT0gXCJzd2lwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3VtU2xpZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN3aXBlcnM6IGxpc3RJdGVtLmRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS50eXBlID09PSBcImluZGV4bmF2c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbmRleE5hdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGluZGV4bmF2czogbGlzdEl0ZW0uZGF0YSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2aWRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnR5cGUgPT09IFwidGhyZWVBZHZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3VtVGhyZWVBZHZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByZXNkYXRhOiBsaXN0SXRlbS5kYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZpZGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0udHlwZSA9PT0gXCJvbmVBZHZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3VtT25lQWR2XCIsIHsgYXR0cnM6IHsgaXRlbTogbGlzdEl0ZW0uZGF0YSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS50eXBlID09PSBcImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInJvd1wiLCBcInctMTAwXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wobGlzdEl0ZW0uZGF0YSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImNvbW1vbkxpc3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpbmRleDogaW5kZXgsIGl0ZW06IGl0ZW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0udGFiQmFyc1tsaXN0SW5kZXhdLnRlbXBsYXRlID09PSBcInNwZWNpYWxcIlxuICAgICAgICAgICAgICAgID8gX3ZtLl9sKGxpc3QuZGF0YSwgZnVuY3Rpb24obGlzdEl0ZW0sIGl0ZW1JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnR5cGUgPT09IFwic3dpcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInN1bVNsaWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzd2lwZXJzOiBsaXN0SXRlbS5kYXRhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0udHlwZSA9PT0gXCJpbmRleG5hdnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5kZXhOYXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpbmRleG5hdnM6IGxpc3RJdGVtLmRhdGEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdmlkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS50eXBlID09PSBcImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInJvd1wiLCBcInctMTAwXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wobGlzdEl0ZW0uZGF0YSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImNvbW1vbkxpc3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpbmRleDogaW5kZXgsIGl0ZW06IGl0ZW0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsb2FkaW5nXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInctMTAwXCIsIFwiZmxleC1yb3dcIiwgXCJqLWNlbnRlclwiLCBcImEtY2VudGVyXCJdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzcGxheTogbGlzdC5sb2FkaW5nU2hvdyB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgbG9hZGluZzogX3ZtLm9uTG9hZGluZyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGV4dC1tdXRlZFwiLCBcImZvbnQtbWRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMi0wIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0yLTEhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMi0wIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0yLTEhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO1wiPlxyXG5cdFx0PCEtLSDmqKrlkJHmu5rliqjpobbpg6jpgInpobnljaEgLS0+XHJcblx0XHQ8c3VtLXRhYmJhciA6dGFiSW5kZXg9XCJ0YWJJbmRleFwiIDp0YWJCYXJzPVwidGFiQmFyc1wiXHJcblx0XHQgQHRhYmNoYW5nZT1cInRhYmNoYW5nZVwiPjwvc3VtLXRhYmJhcj5cclxuXHRcdDwhLS0gZW5kLi4uLiAtLT5cclxuXHRcdDwhLS0g5qiq5ZCR5rua5Yqo5p2hIC0tPlxyXG5cdFx0PHNsaWRlciBjbGFzcz1cImZsZXgtMVwiIDppbmRleD1cInRhYkluZGV4XCIgOmluZmluaXRlPVwiZmFsc2VcIlxyXG5cdFx0IEBjaGFuZ2U9XCJzbGlkZXJDaGFuZ2VcIj5cclxuXHRcdFx0PGxpc3QgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiB2LWZvcj1cIihsaXN0LGxpc3RJbmRleCkgaW4gbmV3c2l0ZW1zXCJcclxuXHRcdFx0IDprZXk9XCJsaXN0SW5kZXhcIj5cclxuXHRcdFx0XHQ8IS0tIOS4i+aLieWIt+aWsCAtLT5cclxuXHRcdFx0XHQ8cmVmcmVzaCBjbGFzcz1cInctMTAwIGZsZXgtcm93IGotY2VudGVyIGEtY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDgwcHg7XCJcclxuXHRcdFx0XHQgOmRpc3BsYXk9XCJsaXN0LnJlZnJlc2hTaG93XCJcclxuXHRcdFx0XHQgQHB1bGxpbmdkb3duPVwicHVsbGluZ2Rvd25cIiBAcmVmcmVzaD1cInJlZnJlc2hcIj5cclxuXHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQtbWQgdGV4dC1tdXRlZFwiPiB7e2xpc3QucmVmcmVzaHRleHR9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3JlZnJlc2g+XHJcblxyXG5cdFx0XHRcdDwhLS0g6aaW6aG15qih5p2/IC0tPlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwidGFiQmFyc1tsaXN0SW5kZXhdLnRlbXBsYXRlID09PSAnaW5kZXgnXCI+XHJcblx0XHRcdFx0XHQ8Y2VsbCB2LWZvcj1cIihsaXN0SXRlbSxpdGVtSW5kZXgpIGluIGxpc3QuZGF0YVwiIDprZXk9XCJpdGVtSW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDova7mkq3lm77nu4Tku7YgLS0+XHJcblx0XHRcdFx0XHRcdDxzdW1TbGlkZXIgdi1pZj1cImxpc3RJdGVtLnR5cGUgPT09ICdzd2lwZXInXCIgOnN3aXBlcnM9XCJsaXN0SXRlbS5kYXRhXCI+PC9zdW1TbGlkZXI+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Zu+5qCH5YiG57G757uE5Lu2IFxyXG5cdFx0XHRcdFx0XHRcdFx0KiA3NTBcclxuXHRcdFx0XHRcdFx0XHRcdCrmr4/kuIDkuKrlm77moIfliIbnsbs6IDE0MnB4ICogNSA9IDcxMFxyXG5cdFx0XHRcdFx0XHRcdFx0KiDlm77moIcgNTggKiA1OFxyXG5cdFx0XHRcdFx0XHRcdFx0KlxyXG5cdFx0XHRcdFx0XHRcdFx0LS0+XHJcblx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwibGlzdEl0ZW0udHlwZSA9PT0gJ2luZGV4bmF2cydcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5kZXhOYXYgOmluZGV4bmF2cz1cImxpc3RJdGVtLmRhdGFcIj48L2luZGV4TmF2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWwgeijheWFqOWIhuWJsue6v+e7hOS7tiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOS4ieWbvuW5v+WRiue7hOS7tiAtLT5cclxuXHRcdFx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJsaXN0SXRlbS50eXBlID09PSAndGhyZWVBZHYnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHN1bVRocmVlQWR2XHJcblx0XHRcdFx0XHRcdFx0IDpyZXNkYXRhPVwibGlzdEl0ZW0uZGF0YVwiPjwvc3VtVGhyZWVBZHY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdmlkZXIgLz5cclxuXHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PCEtLSDlpKflm77lub/lkYogLS0+XHJcblx0XHRcdFx0XHRcdDxzdW1PbmVBZHYgdi1pZj1cImxpc3RJdGVtLnR5cGUgPT09ICdvbmVBZHYnXCIgOml0ZW09XCJsaXN0SXRlbS5kYXRhXCI+PC9zdW1PbmVBZHY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWFrOWRiuWIl+ihqOe7hOS7tlxyXG5cdFx0XHRcdFx0XHRcdCog6Ze06ZqZIDVweFxyXG5cdFx0XHRcdFx0XHRcdCog5q+P5YiX5Y2gOjM3NXB4XHJcblx0XHRcdFx0XHRcdFx0LS0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgdy0xMDBcIiB2LWlmPVwibGlzdEl0ZW0udHlwZSA9PT0gJ2xpc3QnXCI+XHJcblx0XHRcdFx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGxpc3RJdGVtLmRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxjb21tb25MaXN0IDppbmRleD1cImluZGV4XCIgOml0ZW09XCJpdGVtXCI+PC9jb21tb25MaXN0PlxyXG5cdFx0XHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9jZWxsPlxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0XHRcdFx0PCEtLSDkuJPpopjpobUgLS0+XHJcblx0XHRcdFx0PHRlbXBsYXRlIHYtZWxzZS1pZj1cInRhYkJhcnNbbGlzdEluZGV4XS50ZW1wbGF0ZSA9PT0gJ3NwZWNpYWwnXCI+XHJcblx0XHRcdFx0XHQ8Y2VsbCB2LWZvcj1cIihsaXN0SXRlbSxpdGVtSW5kZXgpIGluIGxpc3QuZGF0YVwiIDprZXk9XCJpdGVtSW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDova7mkq3lm77nu4Tku7YgLS0+XHJcblx0XHRcdFx0XHRcdDxzdW1TbGlkZXIgdi1pZj1cImxpc3RJdGVtLnR5cGUgPT09ICdzd2lwZXInXCIgOnN3aXBlcnM9XCJsaXN0SXRlbS5kYXRhXCI+PC9zdW1TbGlkZXI+XHJcblx0XHRcdFx0XHRcdDwhLS0g5Zu+5qCH5YiG57G757uE5Lu2IFxyXG5cdFx0XHRcdFx0XHRcdFx0KiA3NTBcclxuXHRcdFx0XHRcdFx0XHRcdCrmr4/kuIDkuKrlm77moIfliIbnsbs6IDE0MnB4ICogNSA9IDcxMFxyXG5cdFx0XHRcdFx0XHRcdFx0KiDlm77moIcgNTggKiA1OFxyXG5cdFx0XHRcdFx0XHRcdFx0KlxyXG5cdFx0XHRcdFx0XHRcdFx0LS0+XHJcblx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwibGlzdEl0ZW0udHlwZSA9PT0gJ2luZGV4bmF2cydcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5kZXhOYXYgOmluZGV4bmF2cz1cImxpc3RJdGVtLmRhdGFcIj48L2luZGV4TmF2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWwgeijheWFqOWIhuWJsue6v+e7hOS7tiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cclxuXHRcdFx0XHRcdFx0PCEtLSDlhazlkYrliJfooajnu4Tku7ZcclxuXHRcdFx0XHRcdFx0XHQqIOmXtOmamSA1cHhcclxuXHRcdFx0XHRcdFx0XHQqIOavj+WIl+WNoDozNzVweFxyXG5cdFx0XHRcdFx0XHRcdC0tPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IHctMTAwXCIgdi1pZj1cImxpc3RJdGVtLnR5cGUgPT09ICdsaXN0J1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxibG9jayB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBsaXN0SXRlbS5kYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Y29tbW9uTGlzdCA6aW5kZXg9XCJpbmRleFwiIDppdGVtPVwiaXRlbVwiPjwvY29tbW9uTGlzdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvY2VsbD5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdDxsb2FkaW5nIGNsYXNzPVwidy0xMDAgZmxleC1yb3cgai1jZW50ZXIgYS1jZW50ZXJcIlxyXG5cdFx0XHRcdCBAbG9hZGluZz1cIm9uTG9hZGluZ1wiIDpkaXNwbGF5PVwibGlzdC5sb2FkaW5nU2hvd1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LW11dGVkIGZvbnQtbWRcIj5Mb2FkaW5nLi4uPC90ZXh0PlxyXG5cdFx0XHRcdDwvbG9hZGluZz5cclxuXHRcdFx0PC9saXN0PlxyXG5cdFx0PC9zbGlkZXI+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBzdW1UYWJiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9pbmRleC9udnVlL3N1bS10YWJiYXIubnZ1ZVwiXHJcblx0aW1wb3J0IHN1bVNsaWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2luZGV4L252dWUvc3VtLXNsaWRlci5udnVlXCJcclxuXHRpbXBvcnQgaW5kZXhOYXYgZnJvbSBcIkAvY29tcG9uZW50cy9pbmRleC9udnVlL2luZGV4bmF2cy5udnVlXCJcclxuXHRpbXBvcnQgZGl2aWRlciBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9kaXZpZGVyLm52dWVcIlxyXG5cdGltcG9ydCBzdW1UaHJlZUFkdiBmcm9tIFwiQC9jb21wb25lbnRzL2luZGV4L252dWUvc3VtLXRocmVlLWFkdi5udnVlXCJcclxuXHRpbXBvcnQgc3VtT25lQWR2IGZyb20gXCJAL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tb25lLWFkdi5udnVlXCJcclxuXHRpbXBvcnQgY29tbW9uTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9jb21tb24ubnZ1ZVwiXHJcblx0Y29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxyXG5cdC8vIOebkeWQrOW9k+WJjeeql+WPo+aYvuekuiAxKeino+WGs052dWXpobXpnaLmsqHmnIlPTnNob3fnmoTpl67pophcclxuXHRjb25zdCBjdXJyZW50V2VidmlldyA9IHBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRzdW1UYWJiYXIsXHJcblx0XHRcdHN1bVNsaWRlcixcclxuXHRcdFx0aW5kZXhOYXYsXHJcblx0XHRcdGRpdmlkZXIsXHJcblx0XHRcdHN1bVRocmVlQWR2LFxyXG5cdFx0XHRzdW1PbmVBZHYsXHJcblx0XHRcdGNvbW1vbkxpc3RcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIHJlZnJlc2h0ZXh0OiBcIuS4i+aLieWIt+aWsFwiLFxyXG5cdFx0XHRcdC8vIHJlZnJlc2hTaG93OiBcImhpZGVcIixcclxuXHRcdFx0XHQvLyBsb2FkaW5nU2hvdzogJ2hpZGUnLFxyXG5cdFx0XHRcdHRhYkluZGV4OiAwLFxyXG5cdFx0XHRcdHRhYkJhcnM6IFt7XHJcblx0XHRcdFx0XHRuYW1lOiAn5YWz5rOoJyxcclxuXHRcdFx0XHRcdGlkOiAnZ3VhbnpodScsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogXCJpbmRleFwiXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bmFtZTogJ+aOqOiNkCcsXHJcblx0XHRcdFx0XHRpZDogJ3R1aWppYW4nLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IFwic3BlY2lhbFwiXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bmFtZTogJ+S9k+iCsicsXHJcblx0XHRcdFx0XHRpZDogJ3RpeXUnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IFwic3BlY2lhbFwiXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bmFtZTogJ+eDreeCuScsXHJcblx0XHRcdFx0XHRpZDogJ3JlZGlhbicsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogXCJzcGVjaWFsXCJcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRuYW1lOiAn6LSi57uPJyxcclxuXHRcdFx0XHRcdGlkOiAnY2FpamluZycsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogXCJzcGVjaWFsXCJcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRuYW1lOiAn5aix5LmQJyxcclxuXHRcdFx0XHRcdGlkOiAneXVsZScsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogXCJzcGVjaWFsXCJcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRuYW1lOiAn5Yab5LqLJyxcclxuXHRcdFx0XHRcdGlkOiAnanVuc2hpJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiBcInNwZWNpYWxcIlxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdG5hbWU6ICfljoblj7InLFxyXG5cdFx0XHRcdFx0aWQ6ICdsaXNoaScsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogXCJzcGVjaWFsXCJcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRuYW1lOiAn5pys5ZywJyxcclxuXHRcdFx0XHRcdGlkOiAnYmVuZGknLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IFwic3BlY2lhbFwiXHJcblx0XHRcdFx0fV0sXHJcblx0XHRcdFx0bmV3c2l0ZW1zOiBbXVxyXG5cdFx0XHRcdC8vIHN3aXBlcnM6IFtcclxuXHRcdFx0XHQvLyBcdHsgc3JjOiBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVtby9kZW1vNC5qcGdcIiB9LFxyXG5cdFx0XHRcdC8vIFx0eyBzcmM6IFwiLi4vLi4vc3RhdGljL2ltYWdlcy9kZW1vL2RlbW80LmpwZ1wiIH0sXHJcblx0XHRcdFx0Ly8gXHR7IHNyYzogXCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2RlbW8vZGVtbzQuanBnXCIgfVxyXG5cdFx0XHRcdC8vIF0sXHJcblx0XHRcdFx0Ly8gaW5kZXhuYXZzOiBbXHJcblx0XHRcdFx0Ly8gXHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzEucG5nJywgdGV4dDogJ+aWsOWTgeWPkeW4gycgfSxcclxuXHRcdFx0XHQvLyBcdHsgc3JjOiAnL3N0YXRpYy9pbWFnZXMvaW5kZXhuYXYvMi5naWYnLCB0ZXh0OiAn5bCP57Gz5LyX5625JyB9LFxyXG5cdFx0XHRcdC8vIFx0eyBzcmM6ICcvc3RhdGljL2ltYWdlcy9pbmRleG5hdi8zLmdpZicsIHRleHQ6ICfku6Xml6fmjaLmlrAnIH0sXHJcblx0XHRcdFx0Ly8gXHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzQuZ2lmJywgdGV4dDogJ+S4gOWIhuaNouWboicgfSxcclxuXHRcdFx0XHQvLyBcdHsgc3JjOiAnL3N0YXRpYy9pbWFnZXMvaW5kZXhuYXYvNS5naWYnLCB0ZXh0OiAn6LaF5YC854m55Y2WJyB9LFxyXG5cdFx0XHRcdC8vIFx0eyBzcmM6ICcvc3RhdGljL2ltYWdlcy9pbmRleG5hdi82LmdpZicsIHRleHQ6ICflsI/nsbPnp5LmnYAnIH0sXHJcblx0XHRcdFx0Ly8gXHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzcuZ2lmJywgdGV4dDogJ+ecn+W/g+aDs+imgScgfSxcclxuXHRcdFx0XHQvLyBcdHsgc3JjOiAnL3N0YXRpYy9pbWFnZXMvaW5kZXhuYXYvOC5naWYnLCB0ZXh0OiAn55S16KeG54Ot5Y2WJyB9LFxyXG5cdFx0XHRcdC8vIFx0eyBzcmM6ICcvc3RhdGljL2ltYWdlcy9pbmRleG5hdi85LmdpZicsIHRleHQ6ICflrrbnlLXng63ljZYnIH0sXHJcblx0XHRcdFx0Ly8gXHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzEwLmdpZicsIHRleHQ6ICfnsbPnsonljaEnIH1cclxuXHRcdFx0XHQvLyBdLFxyXG5cdFx0XHRcdC8vIG9uZUFkdjoge1xyXG5cdFx0XHRcdC8vIFx0Y292ZXI6IFwiL3N0YXRpYy9pbWFnZXMvZGVtby9kZW1vNC5qcGdcIixcclxuXHRcdFx0XHQvLyBcdHRpdGxlOiBcIuavj+aXpeeyvumAiVwiXHJcblx0XHRcdFx0Ly8gfSxcclxuXHRcdFx0XHQvLyB0aHJlZUFkdjogW1xyXG5cdFx0XHRcdC8vIFx0eyBzcmM6ICcvc3RhdGljL2ltYWdlcy9kZW1vL2RlbW8xLmpwZycgfSxcclxuXHRcdFx0XHQvLyBcdHsgc3JjOiAnL3N0YXRpYy9pbWFnZXMvZGVtby9kZW1vMi5qcGcnIH0sXHJcblx0XHRcdFx0Ly8gXHR7IHNyYzogXCIvc3RhdGljL2ltYWdlcy9kZW1vL2RlbW8zLmpwZ1wiIH1cclxuXHRcdFx0XHQvLyBdLFxyXG5cdFx0XHRcdC8vIGNvbW1saXN0OiBbe1xyXG5cdFx0XHRcdC8vIFx0Y292ZXI6IFwiL3N0YXRpYy9pbWFnZXMvZGVtby9saXN0LzEuanBnXCIsXHJcblx0XHRcdFx0Ly8gXHR0aXRsZTogXCLnsbPlrrbnqbrosINcIixcclxuXHRcdFx0XHQvLyBcdG9wcmljZTogXCIyNjk5XCIsXHJcblx0XHRcdFx0Ly8gXHRkZXNjOiBcIjEuNeWMueWPmOmikVwiLFxyXG5cdFx0XHRcdC8vIFx0cHByaWNlOiBcIjEzOTlcIlxyXG5cdFx0XHRcdC8vIH0sIHtcclxuXHRcdFx0XHQvLyBcdGNvdmVyOiBcIi9zdGF0aWMvaW1hZ2VzL2RlbW8vbGlzdC8xLmpwZ1wiLFxyXG5cdFx0XHRcdC8vIFx0dGl0bGU6IFwi57Gz5a6256m66LCDXCIsXHJcblx0XHRcdFx0Ly8gXHRvcHJpY2U6IFwiMjY5OVwiLFxyXG5cdFx0XHRcdC8vIFx0ZGVzYzogXCIxLjXljLnlj5jpopFcIixcclxuXHRcdFx0XHQvLyBcdHBwcmljZTogXCIxMzk5XCJcclxuXHRcdFx0XHQvLyB9LCB7XHJcblx0XHRcdFx0Ly8gXHRjb3ZlcjogXCIvc3RhdGljL2ltYWdlcy9kZW1vL2xpc3QvMS5qcGdcIixcclxuXHRcdFx0XHQvLyBcdHRpdGxlOiBcIuexs+Wutuepuuiwg1wiLFxyXG5cdFx0XHRcdC8vIFx0b3ByaWNlOiBcIjI2OTlcIixcclxuXHRcdFx0XHQvLyBcdGRlc2M6IFwiMS415Yy55Y+Y6aKRXCIsXHJcblx0XHRcdFx0Ly8gXHRwcHJpY2U6IFwiMTM5OVwiXHJcblx0XHRcdFx0Ly8gfSwgXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g5qih5ouf5Yqg6L295pWw5o2uXHJcblx0XHRcdGFkZERhdGEoZSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLm5ld3NpdGVtc1tlXS5kYXRhLmxlbmd0aCA+IDMwKSB7XHJcblx0XHRcdFx0XHR0aGlzLm5ld3NpdGVtc1tlXS5sb2FkaW5nVGV4dCA9ICfmsqHmnInmm7TlpJrkuoYnO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XHRcdH1cclxuXHRcdFx0XHQvLyB0aGlzLm5ld3NpdGVtc1tlXS5kYXRhLnB1c2godHBsWydkYXRhJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpXSk7XHJcblx0XHRcdFx0bGV0IGFyciA9IFt7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwic3dpcGVyXCIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IFtcclxuXHRcdFx0XHRcdFx0XHR7IHNyYzogJy4uLy4uL3N0YXRpYy9pbWFnZXMvZGVtby9kZW1vNC5qcGcnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyBzcmM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2RlbW8vZGVtbzQuanBnJyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgc3JjOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9kZW1vL2RlbW80LmpwZycgfVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwiaW5kZXhuYXZzXCIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IFt7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzEucG5nJywgdGV4dDogJ+aWsOWTgeWPkeW4gycgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzIuZ2lmJywgdGV4dDogJ+Wwj+exs+S8l+etuScgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzMuZ2lmJywgdGV4dDogJ+S7peaXp+aNouaWsCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzQuZ2lmJywgdGV4dDogJ+S4gOWIhuaNouWboicgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzUuZ2lmJywgdGV4dDogJ+i2heWAvOeJueWNlicgfSxcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJsaXN0XCIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IFt7XHJcblx0XHRcdFx0XHRcdFx0Y292ZXI6IFwiL3N0YXRpYy9pbWFnZXMvZGVtby9saXN0LzEuanBnXCIsXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi57Gz5a6256m66LCDXCIsXHJcblx0XHRcdFx0XHRcdFx0b3ByaWNlOiBcIjI2OTlcIixcclxuXHRcdFx0XHRcdFx0XHRkZXNjOiBcIjEuNeWMueWPmOmikVwiLFxyXG5cdFx0XHRcdFx0XHRcdHBwcmljZTogXCIxMzk5XCJcclxuXHRcdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHRcdGNvdmVyOiBcIi9zdGF0aWMvaW1hZ2VzL2RlbW8vbGlzdC8xLmpwZ1wiLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuexs+Wutuepuuiwg1wiLFxyXG5cdFx0XHRcdFx0XHRcdG9wcmljZTogXCIyNjk5XCIsXHJcblx0XHRcdFx0XHRcdFx0ZGVzYzogXCIxLjXljLnlj5jpopFcIixcclxuXHRcdFx0XHRcdFx0XHRwcHJpY2U6IFwiMTM5OVwiXHJcblx0XHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0XHRjb3ZlcjogXCIvc3RhdGljL2ltYWdlcy9kZW1vL2xpc3QvMS5qcGdcIixcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLnsbPlrrbnqbrosINcIixcclxuXHRcdFx0XHRcdFx0XHRvcHJpY2U6IFwiMjY5OVwiLFxyXG5cdFx0XHRcdFx0XHRcdGRlc2M6IFwiMS415Yy55Y+Y6aKRXCIsXHJcblx0XHRcdFx0XHRcdFx0cHByaWNlOiBcIjEzOTlcIlxyXG5cdFx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdFx0Y292ZXI6IFwiL3N0YXRpYy9pbWFnZXMvZGVtby9saXN0LzEuanBnXCIsXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi57Gz5a6256m66LCDXCIsXHJcblx0XHRcdFx0XHRcdFx0b3ByaWNlOiBcIjI2OTlcIixcclxuXHRcdFx0XHRcdFx0XHRkZXNjOiBcIjEuNeWMueWPmOmikVwiLFxyXG5cdFx0XHRcdFx0XHRcdHBwcmljZTogXCIxMzk5XCJcclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdFx0dGhpcy5uZXdzaXRlbXNbZV0uZGF0YSA9IFsuLi50aGlzLm5ld3NpdGVtc1tlXS5kYXRhLCAuLi5hcnJdXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5uZXdzaXRlbXMpO1xyXG5cdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g55Sf5oiQ6ZqP5py65pWw5o2uXHJcblx0XHRcdHJhbmRvbWZuKCkge1xyXG5cdFx0XHRcdGxldCBhcnkgPSBbXTtcclxuXHRcdFx0XHQvLyDmi7/liLB0YWJiYXJz55qE6ZW/5bqmLOagueaNrumVv+W6pueUn+aIkOmhtemdolxyXG5cdFx0XHRcdGxldCB0YWJsZW5ndGggPSB0aGlzLnRhYkJhcnMubGVuZ3RoXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGFibGVuZ3RoKTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRsZXQgYXJ5SXRlbSA9IHtcclxuXHRcdFx0XHRcdFx0cmVmcmVzaHRleHQ6IFwi5LiL5ouJ5Yi35pawXCIsXHJcblx0XHRcdFx0XHRcdHJlZnJlc2hTaG93OiBcImhpZGVcIixcclxuXHRcdFx0XHRcdFx0bG9hZGluZ1Nob3c6ICdoaWRlJyxcclxuXHRcdFx0XHRcdFx0bG9hZGluZ1RleHQ6ICfliqDovb3mm7TlpJouLi4nLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiBbXVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdC8vIGlmIChpIDwgMSkge1xyXG5cdFx0XHRcdFx0Ly8gZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xyXG5cdFx0XHRcdFx0Ly8gXHRhcnlJdGVtLmRhdGEucHVzaCh0cGxbJ2RhdGEnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSldKTtcclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdC8vIOe7memhtemdoua3u+WKoOaVsOaNrlxyXG5cdFx0XHRcdFx0aWYgKHRoaXMudGFiQmFyc1tpXS50ZW1wbGF0ZSA9PT0gXCJpbmRleFwiKSB7XHJcblx0XHRcdFx0XHRcdGFyeUl0ZW0uZGF0YSA9IFt7XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInN3aXBlclwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YTogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHNyYzogJy4uLy4uL3N0YXRpYy9pbWFnZXMvZGVtby9kZW1vNC5qcGcnIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgc3JjOiAnLi4vLi4vc3RhdGljL2ltYWdlcy9kZW1vL2RlbW80LmpwZycgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyBzcmM6ICcuLi8uLi9zdGF0aWMvaW1hZ2VzL2RlbW8vZGVtbzQuanBnJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJpbmRleG5hdnNcIixcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGE6IFt7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzEucG5nJywgdGV4dDogJ+aWsOWTgeWPkeW4gycgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyBzcmM6ICcvc3RhdGljL2ltYWdlcy9pbmRleG5hdi8yLmdpZicsIHRleHQ6ICflsI/nsbPkvJfnrbknIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgc3JjOiAnL3N0YXRpYy9pbWFnZXMvaW5kZXhuYXYvMy5naWYnLCB0ZXh0OiAn5Lul5pen5o2i5pawJyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzQuZ2lmJywgdGV4dDogJ+S4gOWIhuaNouWboicgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyBzcmM6ICcvc3RhdGljL2ltYWdlcy9pbmRleG5hdi81LmdpZicsIHRleHQ6ICfotoXlgLznibnljZYnIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgc3JjOiAnL3N0YXRpYy9pbWFnZXMvaW5kZXhuYXYvNi5naWYnLCB0ZXh0OiAn5bCP57Gz56eS5p2AJyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzcuZ2lmJywgdGV4dDogJ+ecn+W/g+aDs+imgScgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyBzcmM6ICcvc3RhdGljL2ltYWdlcy9pbmRleG5hdi84LmdpZicsIHRleHQ6ICfnlLXop4bng63ljZYnIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgc3JjOiAnL3N0YXRpYy9pbWFnZXMvaW5kZXhuYXYvOS5naWYnLCB0ZXh0OiAn5a6255S154Ot5Y2WJyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2luZGV4bmF2LzEwLmdpZicsIHRleHQ6ICfnsbPnsonljaEnIH1cclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGhyZWVBZHZcIixcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGE6IFt7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2RlbW8vZGVtbzQuanBnJyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2RlbW8vZGVtbzQuanBnJyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHNyYzogJy9zdGF0aWMvaW1hZ2VzL2RlbW8vZGVtbzQuanBnJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJvbmVBZHZcIixcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5q+P5pel57K+6YCJXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvdmVyOiBcIi9zdGF0aWMvaW1hZ2VzL2RlbW8vZGVtbzQuanBnXCJcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwibGlzdFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YTogW3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y292ZXI6IFwiL3N0YXRpYy9pbWFnZXMvZGVtby9saXN0LzEuanBnXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuexs+Wutuepuuiwg1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHJpY2U6IFwiMjY5OVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjOiBcIjEuNeWMueWPmOmikVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcHJpY2U6IFwiMTM5OVwiXHJcblx0XHRcdFx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvdmVyOiBcIi9zdGF0aWMvaW1hZ2VzL2RlbW8vbGlzdC8xLmpwZ1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLnsbPlrrbnqbrosINcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3ByaWNlOiBcIjI2OTlcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVzYzogXCIxLjXljLnlj5jpopFcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHByaWNlOiBcIjEzOTlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb3ZlcjogXCIvc3RhdGljL2ltYWdlcy9kZW1vL2xpc3QvMS5qcGdcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi57Gz5a6256m66LCDXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wcmljZTogXCIyNjk5XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlc2M6IFwiMS415Yy55Y+Y6aKRXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBwcmljZTogXCIxMzk5XCJcclxuXHRcdFx0XHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y292ZXI6IFwiL3N0YXRpYy9pbWFnZXMvZGVtby9saXN0LzEuanBnXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuexs+Wutuepuuiwg1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHJpY2U6IFwiMjY5OVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjOiBcIjEuNeWMueWPmOmikVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcHJpY2U6IFwiMTM5OVwiXHJcblx0XHRcdFx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coKTtcclxuXHRcdFx0XHRcdGFyeS5wdXNoKGFyeUl0ZW0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGFyeTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFiY2hhbmdlKGluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy50YWJJbmRleCA9IGluZGV4XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOebkeWQrOaoquWQkeWIl+ihqOS6i+S7tlxyXG5cdFx0XHRzbGlkZXJDaGFuZ2UoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUuaW5kZXgpO1xyXG5cdFx0XHRcdHRoaXMudGFiSW5kZXggPSBlLmluZGV4XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy50YWJJbmRleCk7XHJcblx0XHRcdFx0Ly8gdGhpcy5jaGFuZ2UoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkuIrmi4nliqDovb3kuovku7ZcclxuXHRcdFx0b25Mb2FkaW5nKCkge1xyXG5cdFx0XHRcdHRoaXMubG9hZGluZ1Nob3cgPSAnc2hvdyc7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQvLyDliqDovb3mlbDmja5cclxuXHRcdFx0XHRcdHRoaXMubG9hZGluZ1Nob3cgPSAnaGlkZSc7XHJcblx0XHRcdFx0fSwgMjAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5omn6KGM5Yi35pawXHJcblx0XHRcdHJlZnJlc2goZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwid2FuY2hlbmdsZSBcIik7XHJcblx0XHRcdFx0Ly8gcmV0dXJuO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRcdHRoaXMucmVmcmVzaFNob3cgPSBcInNob3dcIlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiemhpeGluZ2xlXCIpO1xyXG5cdFx0XHRcdHRoaXMucmVmcmVzaHRleHQgPSBcIuato+WcqOWIt+aWsOS4rVwiXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ6aGl4aW5nbGVcIik7XHJcblx0XHRcdFx0Ly8gcmV0dXJuXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hTaG93ID0gXCJoaWRlXCJcclxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaHRleHQgPSBcIuS4i+aLieWPr+S7peWIt+aWsFwiXHJcblx0XHRcdFx0fSwgMjUwMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWIpOaWreS4i+WIt+WIt+aWsOeKtuaAgSBcclxuXHRcdFx0cHVsbGluZ2Rvd24oZSkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKC1lLnB1bGxpbmdEaXN0YW5jZSxlLnZpZXdIZWlnaHQpIDtcclxuXHRcdFx0XHQvLyBpZiAoLWUucHVsbGluZ0Rpc3RhbmNlID4gZS52aWV3SGVpZ2h0KSB7XHJcblx0XHRcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZygxMTEpO1xyXG5cdFx0XHRcdC8vIFx0dGhpcy5yZWZyZXNodGV4dCA9IFwi6YeL5pS+5Y2z5Y+v5Yi35paw5LqGXCJcclxuXHRcdFx0XHQvLyBcdHRoaXMucmVmcmVzaCgpXHJcblx0XHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0XHQvLyBcdHRoaXMucmVmcmVzaHRleHQgPSBcIuS4i+aLieWPr+S7peWIt+aWsFwiXHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiemhpeGluZ2xlXCIpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUucHVsbGluZ0Rpc3RhbmNlLCBlLnZpZXdIZWlnaHQpO1xyXG5cdFx0XHRcdGlmIChlLnB1bGxpbmdEaXN0YW5jZSA+IGUudmlld0hlaWdodCkge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coMTExKTtcclxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaHRleHQgPSBcIumHi+aUvuWNs+WPr+WIt+aWsOS6hlwiXHJcblx0XHRcdFx0XHQvLyB0aGlzLnJlZnJlc2goKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2h0ZXh0ID0gXCLkuIvmi4nlj6/ku6XliLfmlrBcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjdXJyZW50V2Vidmlldyk7XHJcblx0XHRcdC8vIGNvbnN0IGN1cnJlbnRXZWJ2aWV3ID0gdGhpcy4kbXAucGFnZS4kZ2V0QXBwV2VidmlldygpO1xyXG5cdFx0XHRjdXJyZW50V2Vidmlldy5hZGRFdmVudExpc3RlbmVyKCdzaG93JywgZSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpbmRleHNob3dcIik7XHJcblx0XHRcdH0pXHJcblx0XHRcdC8vIOeUn+aIkOmaj+acuuaVsOaNrlxyXG5cdFx0XHR0aGlzLm5ld3NpdGVtcyA9IHRoaXMucmFuZG9tZm4oKVxyXG5cdFx0fSxcclxuXHRcdGJlZm9yZURlc3Ryb3koKSB7XHJcblx0XHRcdGN1cnJlbnRXZWJ2aWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Nob3cnLCBlID0+IHtcclxuXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNyYz1cIkAvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzXCI+XHJcblx0PHN0eWxlPlxyXG48L3N0eWxlPlxuIiwiZnVuY3Rpb24gaW5pdFVuaSgpIHtcclxuXHJcbiAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uIGlzRm4odikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbmRsZVByb21pc2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUkVHRVggPSAvXlxcJHxeb258XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxecGF1c2UvO1xyXG4gICAgdmFyIEFQSV9OT1JNQUxfTElTVCA9IFsnb3MnLCAnZ2V0Q3VycmVudFN1Yk5WdWUnLCAnZ2V0U3ViTlZ1ZUJ5SWQnLCAnc3RvcFJlY29yZCcsICdzdG9wVm9pY2UnLFxyXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXHJcbiAgICAgICAgJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnY2FuSVVzZScsICduYXZpZ2F0ZUJhY2snLCAnY2xvc2VTb2NrZXQnLFxyXG4gICAgICAgICdwYWdlU2Nyb2xsVG8nLCAnZHJhd0NhbnZhcydcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHNob3VsZFByb21pc2UgPSBmdW5jdGlvbiBzaG91bGRQcm9taXNlKG5hbWUpIHtcclxuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgdmFyIG9yaWdpbiA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Yk5WdWVNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3ZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XHJcbiAgICBjaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudG8gPT09IHdlYnZpZXdJZCkge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwcGVyKHdlYnZpZXcpIHtcclxuICAgICAgICB3ZWJ2aWV3LiRwcm9jZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuICAgICAgICB2YXIgaXNQb3B1cE5WdWUgPSBjdXJyZW50V2Vidmlld0lkID09PSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5WdWVJZCA9IHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX3R5cGUgPT09ICd1bmlOVmlldycgJiYgd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5faWQ7XHJcbiAgICAgICAgdmFyIHBvcHVwTlZ1ZUlkID0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGhvc3ROVnVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGlzUG9wdXBOVnVlID8gaG9zdE5WdWVJZCA6IHBvcHVwTlZ1ZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcub25NZXNzYWdlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xyXG5cclxuICAgICAgICB2YXIgbWFza0NvbG9yID0gd2Vidmlldy5fX3VuaWFwcF9tYXNrO1xyXG5cclxuICAgICAgICB2YXIgbWFza1dlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKHdlYnZpZXcuX191bmlhcHBfbWFza19pZCk7XG4gICAgICAgIG1hc2tXZWJ2aWV3ID0gbWFza1dlYnZpZXcucGFyZW50KCkgfHwgbWFza1dlYnZpZXc7Ly/lho3mrKHmo4DmtYvniLZcclxuICAgICAgICB2YXIgb2xkU2hvdyA9IHdlYnZpZXcuc2hvdztcclxuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcclxuICAgICAgICB2YXIgb2xkQ2xvc2UgPSB3ZWJ2aWV3LmNsb3NlO1xyXG5cclxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogbWFza0NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNsb3NlTWFzayA9IGZ1bmN0aW9uIGNsb3NlTWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5zaG93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZFNob3cuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkSGlkZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkQ2xvc2UuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xyXG4gICAgICAgIHZhciB3ZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdlYnZpZXcgJiYgIXdlYnZpZXcuJHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VidmlldztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3ViTlZ1ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xyXG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBpZCA9IDA7XHJcbiAgICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xyXG4gICAgICAgICAgICBpbnZva2UoZS5kYXRhLmlkLCBlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFN1Yk5WdWUnKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhhcmdzLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZuKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpvaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLnN1Y2Nlc3MpICYmIGFyZ3Muc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLmZhaWwpICYmIGFyZ3MuZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5rZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2tbJyArIGNhbGxiYWNrSWQgKyAnXSBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX3JlZi5pZCxcclxuICAgICAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSBjcmVhdGVDYWxsYmFjayhwYXJhbXMsIHR5cGUpO1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKGRhdGEsIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjcmVhdGVQdWJsaXNoID0gZnVuY3Rpb24gY3JlYXRlUHVibGlzaChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgcHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xyXG4gICAgICAgIHZhciBmYW1pbHkgPSBfcmVmLmZhbWlseSxcclxuICAgICAgICAgICAgc291cmNlID0gX3JlZi5zb3VyY2UsXHJcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgZG9tLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXHJcbiAgICAgICAgICAgIHNyYzogc291cmNlLnJlcGxhY2UoL1wiL2csICdcXCcnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ2xvYWRGb250RmFjZTpvaycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRlZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbEV2ZW50JDEgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrcyQxID0gW107XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBSZWFkeScpIHtcclxuICAgICAgICAgICAgcmVhZHkuaXNVbmlBcHBSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuaUFwcFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/XHJcbiAgICAgICAgICAgIFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyZWFtID0gd2VleC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKTtcclxuXHJcbiAgICAvLyBsZXQgcmVxdWVzdFRhc2tJZCA9IDBcclxuXHJcbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xyXG4gICAgdmFyIE1FVEhPRF9QT1NUID0gJ1BPU1QnO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IENPTlRFTlRfVFlQRV9GT1JNO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gTUVUSE9EX1BPU1QgJiYgY29udGVudFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gQ09OVEVOVF9UWVBFX0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xyXG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybCxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXHJcbiAgICAgICAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXHJcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYkbWV0aG9kLFxyXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSBfcmVmJGRhdGFUeXBlID09PSB1bmRlZmluZWQgPyAnanNvbicgOiBfcmVmJGRhdGFUeXBlLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUgPSBfcmVmLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0VGFza0lkKytcclxuICAgICAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaGFzQ29udGVudFR5cGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ29udGVudFR5cGUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfR0VUICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgKH51cmwuaW5kZXhPZignPycpID8gdXJsLnN1YnN0cigtMSkgPT09ICcmJyB8fCB1cmwuc3Vic3RyKC0xKSA9PT0gJz8nID8gJycgOiAnJicgOiAnPycpICtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxyXG4gICAgICAgICAgICBib2R5OiBtZXRob2QgIT09IE1FVEhPRF9HRVQgPyBzZXJpYWxpemUoZGF0YSwgbWV0aG9kLCBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkgOiAnJ1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBvayA9IF9yZWYyLm9rLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IF9yZWYyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfcmVmMi5oZWFkZXJzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09IC0xIHx8IGFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAncmVxdWVzdDpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXQuaGVhZGVyID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdG9yYWdlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzc3RvcmFnZScpO1xyXG4gICAgdmFyIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSA9ICdfX1RZUEUnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JhZ2UoX3JlZikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0U3RvcmFnZTpvaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZShfcmVmMikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVHlwZSA9ICdTdHJpbmcnO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSAnT2JqZWN0JztcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdyZW1vdmVTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3JlbW92ZVN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmNC5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmNC5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWY0LmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjQuY29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNsaXBib2FyZCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YShfcmVmKSB7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0Q2xpcGJvYXJkRGF0YTpvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnc2V0Q2xpcGJvYXJkRGF0YTpvaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VW5pRW1pdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICRvbjogZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb2ZmOiBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9uY2U6IGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBsb2FkRm9udEZhY2U6IGxvYWRGb250RmFjZSxcclxuICAgICAgICByZWFkeTogcmVhZHksXHJcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHNldFN0b3JhZ2UsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcclxuICAgICAgICBnZXRDbGlwYm9hcmREYXRhOiBnZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgb25TdWJOVnVlTWVzc2FnZTogb25TdWJOVnVlTWVzc2FnZSxcclxuICAgICAgICBnZXRTdWJOVnVlQnlJZDogZ2V0U3ViTlZ1ZUJ5SWQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxyXG4gICAgICAgICRvbjogJG9uLFxyXG4gICAgICAgICRvZmY6ICRvZmYsXHJcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxyXG4gICAgICAgICRlbWl0OiAkZW1pdFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciB3eCA9IHtcclxuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VJbWFnZTogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0SW1hZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXHJcbiAgICAgICAgc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBzYXZlRmlsZTogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU2F2ZWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgY2hvb3NlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgb3BlbkxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXHJcbiAgICAgICAgZ2V0TmV0d29ya1R5cGU6IHRydWUsXHJcbiAgICAgICAgbWFrZVBob25lQ2FsbDogdHJ1ZSxcclxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcclxuICAgICAgICBzZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIGdldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVMb25nOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVTaG9ydDogdHJ1ZSxcclxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1RvYXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcclxuICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXHJcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZTogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyQ29sb3I6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcclxuICAgICAgICByZWRpcmVjdFRvOiB0cnVlLFxyXG4gICAgICAgIHJlTGF1bmNoOiB0cnVlLFxyXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZUJhY2s6IHRydWUsXHJcbiAgICAgICAgZ2V0UHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgZ2V0VXNlckluZm86IHRydWUsXHJcbiAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICB1bnN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgb25QdXNoOiB0cnVlLFxyXG4gICAgICAgIG9mZlB1c2g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VVbmkgPSB7XHJcbiAgICAgICAgb3M6IHtcclxuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVuaSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncG9zdE1lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdyZXF1aXJlTmF0aXZlUGx1Z2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGJhc2VVbmkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHVuaVtrZXldID0gYmFzZVVuaVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bmkucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4gPSByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMod3gpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbnZhciBjcmVhdGVVbmk7XHJcblxyXG5pZiAodHlwZW9mIGdldFVuaSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY3JlYXRlVW5pID0gZ2V0VW5pO1xyXG59IGVsc2Uge1xyXG4gICAgY3JlYXRlVW5pID0gaW5pdFVuaTtcclxufVxyXG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaSh3ZWV4LCB3ZWV4UGx1cywgQnJvYWRjYXN0Q2hhbm5lbCk7XHJcbmV4cG9ydCB7XHJcbiAgICB3ZWV4UGx1c1xyXG59O1xuIiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcclxuICBjb25zdCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICguLi5hcmdzKSB7XHJcbiAgY29uc3QgbXNncyA9IGFyZ3MubWFwKCh2KSA9PiB7XHJcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcclxuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcclxuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdlxyXG4gIH0pXHJcbiAgbGV0IG1zZyA9ICcnXHJcbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgY29uc3QgbGFzdE1zZyA9IG1zZ3MucG9wKClcclxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxyXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XHJcbiAgICAgIG1zZyArPSBsYXN0TXNnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbXNnID0gbXNnc1swXVxyXG4gIH1cclxuICByZXR1cm4gbXNnXHJcbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3VtLXRhYmJhci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjNTdiZDE4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N1bS10YWJiYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3VtLXRhYmJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCJAL2NvbW1vbi96Y20tbWFpbi1udnVlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCJkNGRhNTVmNlwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkY6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tdGFiYmFyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMCFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9zdW0tdGFiYmFyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM1N2JkMTgmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogW1widy0xMDBcIl0sIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI3NXB4XCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInNjcm9sbGVyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1widy0xMDBcIiwgXCJmbGV4LXJvd1wiXSxcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiNzVweFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgc2hvd1Njcm9sbGJhcjogZmFsc2UsIHNjcm9sbERpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfVxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woX3ZtLnRhYkJhcnMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgcmVmOiBcInRhYlwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYS1jZW50ZXJcIiwgXCJqLWNlbnRlclwiXSxcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjc1cHhcIiwgd2lkdGg6IFwiMTIwcHhcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlKGluZGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImZvbnQtbWRcIl0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNzVweFwiLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjc1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6IFwiNXB4XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogX3ZtLnRhYkluZGV4ID09PSBpbmRleCA/IFwiI2Y0NjgwMVwiIDogXCIjNTU1XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYkluZGV4ID09PSBpbmRleCA/IFwiI0ZENjgwMVwiIDogXCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0yLTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTItMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9zdW0tdGFiYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0yLTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTItMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9zdW0tdGFiYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBzdHlsZT1cImhlaWdodDogNzVweDtcIiBjbGFzcz1cInctMTAwXCI+XHJcblx0XHQ8c2Nyb2xsZXJcclxuXHRcdCBjbGFzcz1cInctMTAwIGZsZXgtcm93XCIgc3R5bGU9XCJoZWlnaHQ6IDc1cHg7XCJcclxuXHRcdCA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiXHJcblx0XHQgc2Nyb2xsLWRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cclxuXHRcdFx0PGRpdiBAY2xpY2s9XCJjaGFuZ2UoaW5kZXgpXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gdGFiQmFyc1wiXHJcblx0XHRcdCA6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHQgc3R5bGU9XCJoZWlnaHQ6IDc1cHg7IHdpZHRoOiAxMjBweDtcIiBjbGFzcz1cImEtY2VudGVyIGotY2VudGVyXCJcclxuXHRcdFx0IDpyZWY9XCJgdGFiJHtpbmRleH1gXCI+XHJcblx0XHRcdFx0PHRleHRcclxuXHRcdFx0XHQgc3R5bGU9XCJib3JkZXItc3R5bGU6IHNvbGlkO2hlaWdodDogNzVweDtsaW5lLWhlaWdodDogNzVweDsgYm9yZGVyLWJvdHRvbS13aWR0aDogNXB4O1wiXHJcblx0XHRcdFx0IDpzdHlsZT1cInsnY29sb3InOnRhYkluZGV4ID09PSBpbmRleCA/ICAnI2Y0NjgwMScgOicjNTU1JywnYm9yZGVyLWNvbG9yJzp0YWJJbmRleCA9PT0gaW5kZXggPyAgJyNGRDY4MDEnIDonI0ZGRkZGRicgfVwiXHJcblx0XHRcdFx0IGNsYXNzPVwiZm9udC1tZFwiPnt7aXRlbS5uYW1lfX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zY3JvbGxlcj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0XHRjb25zdCBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dGFiQmFyczoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFtdXHJcblx0XHRcdH0sXHJcblx0XHRcdHRhYkluZGV4OiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOebkeWQrHRhYkluZGV455qE5Y+Y5YyWXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHR0YWJJbmRleChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcblx0XHRcdFx0dGhpcy5jaGFuZ2UobmV3VmFsdWUpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOeCueWHu+mAiemhueWNoeS6i+S7tlxyXG5cdFx0XHRhc3luYyBjaGFuZ2UoaW5kZXgpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygxMTExKTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbmRleCk7XHJcblx0XHRcdFx0Ly8gdGhpcy50YWJJbmRleCA9IGluZGV4XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndGFiY2hhbmdlJyxpbmRleClcclxuXHRcdFx0XHQvLyDnm5HlkKzmu5rliqjljLrln5/lj5jljJZcclxuXHRcdFx0XHQvL+aLv+WIsOW9k+WJjeWFg+e0oFxyXG5cclxuXHRcdFx0XHRsZXQgZWwgPSB0aGlzLiRyZWZzW2B0YWIke2luZGV4fWBdWzBdO1xyXG5cdFx0XHRcdC8vIOW9k+WJjeiKgueCueS/oeaBr1xyXG5cdFx0XHRcdGRvbS5nZXRDb21wb25lbnRSZWN0KGVsLCByZXQgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmV0KTtcclxuXHRcdFx0XHRcdC8vIOWkhOS6juWPs+i+uVxyXG5cdFx0XHRcdFx0aWYgKHJldC5zaXplLnJpZ2h0ID4gNzUwKSB7XHJcblx0XHRcdFx0XHRcdC8vIOaLv+WIsOWkhOS6juS4remXtOeahOiKgueCuVxyXG5cdFx0XHRcdFx0XHRsZXQgbmV3RWwgPSB0aGlzLiRyZWZzW2B0YWIke2luZGV4LTR9YF1bMF1cclxuXHRcdFx0XHRcdFx0Ly8g5bCG6IqC54K55rua5Yqo6YaJ5bem6L65XHJcblx0XHRcdFx0XHRcdGRvbS5zY3JvbGxUb0VsZW1lbnQobmV3RWwsIHt9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8g5aSE5LqO5bem6L65XHJcblx0XHRcdFx0XHRpZiAocmV0LnNpemUubGVmdCA8IDApIHtcclxuXHRcdFx0XHRcdFx0ZG9tLnNjcm9sbFRvRWxlbWVudChlbCwge30pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzcmM9XCJAL2NvbW1vbi96Y20tbWFpbi1udnVlLmNzc1wiPlxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG59KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbiAgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTIhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0zIS4vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTEhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0yIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMyEuL3pjbS1tYWluLW52dWUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwb3NpdGlvbi1hYnNvbHV0ZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCJcbiAgfSxcbiAgXCJwb3NpdGlvbi1maXhlZFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCJcbiAgfSxcbiAgXCJwb3NpdGlvbi1yZWxhdGl2ZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJsZWZ0LTBcIjoge1xuICAgIFwibGVmdFwiOiAwXG4gIH0sXG4gIFwidG9wLTBcIjoge1xuICAgIFwidG9wXCI6IDBcbiAgfSxcbiAgXCJib3R0b20tMFwiOiB7XG4gICAgXCJib3R0b21cIjogMFxuICB9LFxuICBcInJpZ2h0LTBcIjoge1xuICAgIFwicmlnaHRcIjogMFxuICB9LFxuICBcInctMTAwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCJcbiAgfSxcbiAgXCJ3LTUwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzc1XCJcbiAgfSxcbiAgXCJoLTEwMFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxMjUwXCJcbiAgfSxcbiAgXCJoLTUwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjI1XCJcbiAgfSxcbiAgXCJmb250XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjVcIlxuICB9LFxuICBcImZvbnQtc21cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMFwiXG4gIH0sXG4gIFwiZm9udC1tZFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwXCJcbiAgfSxcbiAgXCJmb250LWxnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDBcIlxuICB9LFxuICBcImZvbnQtYmlnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNjBcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0XCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodC0xMDBcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjEwMFwiXG4gIH0sXG4gIFwibGluZS10aHJvdWdoXCI6IHtcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibGluZS10aHJvdWdoXCJcbiAgfSxcbiAgXCJyb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJjb2wtMVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYyLjVcIlxuICB9LFxuICBcImNvbC0yXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTI1XCJcbiAgfSxcbiAgXCJjb2wtM1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE4Ny41XCJcbiAgfSxcbiAgXCJjb2wtNFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjI1MFwiXG4gIH0sXG4gIFwiY29sLTVcIjoge1xuICAgIFwid2lkdGhcIjogXCIzMTIuNVwiXG4gIH0sXG4gIFwiY29sLTZcIjoge1xuICAgIFwid2lkdGhcIjogXCIzNzVcIlxuICB9LFxuICBcImNvbC03XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDM3LjVcIlxuICB9LFxuICBcImNvbC04XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTAwXCJcbiAgfSxcbiAgXCJjb2wtOVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjU2Mi41XCJcbiAgfSxcbiAgXCJjb2wtMTBcIjoge1xuICAgIFwid2lkdGhcIjogXCI2MjVcIlxuICB9LFxuICBcImNvbC0xMVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY4Ny41XCJcbiAgfSxcbiAgXCJjb2wtMTJcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIlxuICB9LFxuICBcImZsZXgtMVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJmbGV4LWNvbHVtblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJmbGV4LXJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJmbGV4LXdyYXBcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJmbGV4LW5vd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIm5vd3JhcFwiXG4gIH0sXG4gIFwiai1zdGFydFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImotY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJqLWVuZFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJqLXNiXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiYS1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYS1zdGFydFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiYS1lbmRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJhLXN0cmV0Y2hcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIlxuICB9LFxuICBcImJvcmRlclwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLXRvcFwiOiB7XG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLXJpZ2h0XCI6IHtcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJSaWdodFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItbGVmdFwiOiB7XG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJMZWZ0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLTBcIjoge1xuICAgIFwiYm9yZGVyV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci10b3AtMFwiOiB7XG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXJpZ2h0LTBcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLWJvdHRvbS0wXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItbGVmdC0wXCI6IHtcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXByaW1hcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJib3JkZXItc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYm9yZGVyLXN1Y2Nlc3NcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJib3JkZXItZGFuZ2VyXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwiYm9yZGVyLXdhcm5pbmdcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJib3JkZXItaW5mb1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcImJvcmRlci1saWdodFwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmOGY5ZmFcIlxuICB9LFxuICBcImJvcmRlci1kYXJrXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwiYm9yZGVyLXdoaXRlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYm9yZGVyLWxpZ2h0LXNlY29uZGFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNGMUYxRjFcIlxuICB9LFxuICBcInJvdW5kZWRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNVwiXG4gIH0sXG4gIFwicm91bmRlZC1jaXJjbGVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDEwMFxuICB9LFxuICBcInJvdW5kZWQtMFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogMFxuICB9LFxuICBcInRleHQtcHJpbWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcInRleHQtc2Vjb25kYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwidGV4dC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwidGV4dC1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJ0ZXh0LXdhcm5pbmdcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJ0ZXh0LWluZm9cIjoge1xuICAgIFwiY29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwidGV4dC1kYXJrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwidGV4dC1tdXRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcInRleHQtbGlnaHQtbXV0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjQjJCMkIyXCJcbiAgfSxcbiAgXCJ0ZXh0LXdoaXRlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJiZy1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYmctc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwiYmctd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJiZy1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcImJnLWxpZ2h0XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY5ZmFcIlxuICB9LFxuICBcImJnLWRhcmtcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwiYmctd2hpdGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwibS0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwXG4gIH0sXG4gIFwibVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCJcbiAgfSxcbiAgXCJtLTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBcIlxuICB9LFxuICBcIm0tMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwibS0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwXCJcbiAgfSxcbiAgXCJtLTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBcIlxuICB9LFxuICBcIm0tNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MFwiXG4gIH0sXG4gIFwibXgtMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXhcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiXG4gIH0sXG4gIFwibXgtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBcIlxuICB9LFxuICBcIm14LTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJteC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMFwiXG4gIH0sXG4gIFwibXgtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBcIlxuICB9LFxuICBcIm14LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJteS0wXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJteVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1XCJcbiAgfSxcbiAgXCJteS0xXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMFwiXG4gIH0sXG4gIFwibXktMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBcIlxuICB9LFxuICBcIm15LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwXCJcbiAgfSxcbiAgXCJteS00XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MFwiXG4gIH0sXG4gIFwibXktNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBcIlxuICB9LFxuICBcIm10LTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDBcbiAgfSxcbiAgXCJtdFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCJcbiAgfSxcbiAgXCJtdC0xXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJtdC0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJtdC0zXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJtdC00XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJtdC01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJtYi0wXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwXG4gIH0sXG4gIFwibWJcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiXG4gIH0sXG4gIFwibWItMVwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMFwiXG4gIH0sXG4gIFwibWItMlwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwibWItM1wiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMFwiXG4gIH0sXG4gIFwibWItNFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MFwiXG4gIH0sXG4gIFwibWItNVwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MFwiXG4gIH0sXG4gIFwibWwtMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDBcbiAgfSxcbiAgXCJtbFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNVwiXG4gIH0sXG4gIFwibWwtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBcIlxuICB9LFxuICBcIm1sLTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJtbC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMFwiXG4gIH0sXG4gIFwibWwtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBcIlxuICB9LFxuICBcIm1sLTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJtci0wXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJtclwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIlxuICB9LFxuICBcIm1yLTFcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwibXItMlwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJtci0zXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBcIlxuICB9LFxuICBcIm1yLTRcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MFwiXG4gIH0sXG4gIFwibXItNVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJwLTBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwXG4gIH0sXG4gIFwicFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNVwiXG4gIH0sXG4gIFwicC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMFwiXG4gIH0sXG4gIFwicC0yXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwicC0zXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMFwiXG4gIH0sXG4gIFwicC00XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MFwiXG4gIH0sXG4gIFwicC01XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MFwiXG4gIH0sXG4gIFwicHgtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDBcbiAgfSxcbiAgXCJweFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVcIlxuICB9LFxuICBcInB4LTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBcIlxuICB9LFxuICBcInB4LTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcInB4LTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBcIlxuICB9LFxuICBcInB4LTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBcIlxuICB9LFxuICBcInB4LTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBcIlxuICB9LFxuICBcInB5LTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwXG4gIH0sXG4gIFwicHlcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1XCJcbiAgfSxcbiAgXCJweS0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJweS0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJweS0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwXCJcbiAgfSxcbiAgXCJweS00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJweS01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJwdC0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMFxuICB9LFxuICBcInB0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1XCJcbiAgfSxcbiAgXCJwdC0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiXG4gIH0sXG4gIFwicHQtMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBcIlxuICB9LFxuICBcInB0LTNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJwdC00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MFwiXG4gIH0sXG4gIFwicHQtNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBcIlxuICB9LFxuICBcInBiLTBcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwXG4gIH0sXG4gIFwicGJcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVcIlxuICB9LFxuICBcInBiLTFcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJwYi0yXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwicGItM1wiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBcIlxuICB9LFxuICBcInBiLTRcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJwYi01XCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MFwiXG4gIH0sXG4gIFwicGwtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwicGxcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1XCJcbiAgfSxcbiAgXCJwbC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIlxuICB9LFxuICBcInBsLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiXG4gIH0sXG4gIFwicGwtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJwbC00XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBcIlxuICB9LFxuICBcInBsLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MFwiXG4gIH0sXG4gIFwicHItMFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMFxuICB9LFxuICBcInByXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVcIlxuICB9LFxuICBcInByLTFcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBcIlxuICB9LFxuICBcInByLTJcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcInByLTNcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBcIlxuICB9LFxuICBcInByLTRcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBcIlxuICB9LFxuICBcInByLTVcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBcIlxuICB9XG59IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3VtLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEwNTU5MzE2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N1bS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3VtLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9zdW0tc2xpZGVyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMDU1OTMxNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3N1bS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEwNTU5MzE2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgXCIxMDU1OTMxNlwiLFxuICBcIjMxMTA0ZTYyXCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9pbmRleC9udnVlL3N1bS1zbGlkZXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0wIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3N1bS1zbGlkZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMDU1OTMxNiZzY29wZWQ9dHJ1ZSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJzbGlkZXJcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInNsaWRlclwiXSwgYXR0cnM6IHsgYXV0b1BsYXk6IHRydWUsIGludGVydmFsOiAzMDAwIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS5zd2lwZXJzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY1N0eWxlOiB7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaW1hZ2VcIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcmVzaXplOiBcImNvdmVyXCIsIHNyYzogaXRlbS5zcmMgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIF9jKFwiaW5kaWNhdG9yXCIsIHsgc3RhdGljQ2xhc3M6IFtcImluZGljYXRvclwiXSB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTItMCFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMi0xIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3N1bS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTItMCFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMi0xIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3N1bS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0PHNsaWRlciA6YXV0by1wbGF5PVwidHJ1ZVwiIDppbnRlcnZhbD0nMzAwMCcgY2xhc3M9XCJzbGlkZXJcIj5cclxuXHRcdFx0PGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBzd2lwZXJzXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaW1hZ2VcIiByZXNpemU9XCJjb3ZlclwiIDpzcmM9XCJpdGVtLnNyY1wiPjwvaW1hZ2U+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9pbmRpY2F0b3I+XHJcblx0XHQ8L3NsaWRlcj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0c3dpcGVyczogQXJyYXksXHJcblx0XHR9LFxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5zbGlkZXIsXHJcblx0LmltYWdlIHtcclxuXHRcdHdpZHRoOiA3NTBweDtcclxuXHRcdGhlaWdodDogMzAwcHg7XHJcblx0fVxyXG5cclxuXHQuaW5kaWNhdG9yIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuXHRcdGl0ZW0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRcdGl0ZW0tc2VsZWN0ZWQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTEhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0yIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMyFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9zdW0tc2xpZGVyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMDU1OTMxNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTEhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0yIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMyFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9zdW0tc2xpZGVyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMDU1OTMxNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInNsaWRlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzAwXCJcbiAgfSxcbiAgXCJpbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMzAwXCJcbiAgfSxcbiAgXCJpbmRpY2F0b3JcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwid2lkdGhcIjogXCIxNTBcIixcbiAgICBcImhlaWdodFwiOiBcIjgwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJpdGVtQ29sb3JcIjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIixcbiAgICBcIml0ZW1TZWxlY3RlZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4bmF2cy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjOGVhYjUyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4bmF2cy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleG5hdnMubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy4kb3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy4kb3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUgJiYgdGhpcy4kcm9vdCAmJiB0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKXtcbiAgdGhpcy5fX21lcmdlX3N0eWxlKHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpXG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICB0aGlzLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIkAvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIG51bGwsXG4gIFwiY2E2YjNjNzZcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJGOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2luZGV4L252dWUvaW5kZXhuYXZzLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMCFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9pbmRleG5hdnMubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzhlYWI1MiZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInctMTAwXCIsIFwicm93XCIsIFwicHgtMlwiLCBcIm1iLTNcIl0gfSxcbiAgICAgIF92bS5fbChfdm0uaW5kZXhuYXZzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImotY2VudGVyXCIsIFwiYS1jZW50ZXJcIiwgXCJtdC0zXCJdLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTQycHhcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNThweFwiLCBoZWlnaHQ6IFwiNThweFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5zcmMgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiZm9udFwiLCBcInRleHQtbXV0ZWRcIiwgXCJtdC0xXCJdIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnRleHQpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMi0wIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0yLTEhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vaW5kZXhuYXZzLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0yLTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTItMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9pbmRleG5hdnMubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cInctMTAwIHJvdyBweC0yIG1iLTNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIiBqLWNlbnRlciBhLWNlbnRlciBtdC0zXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gaW5kZXhuYXZzXCIgOmtleT1cImluZGV4XCIgc3R5bGU9XCJ3aWR0aDogMTQycHg7XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLnNyY1wiIHN0eWxlPVwid2lkdGg6IDU4cHg7aGVpZ2h0OiA1OHB4O1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb250IHRleHQtbXV0ZWQgbXQtMVwiPnt7aXRlbS50ZXh0fX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGluZGV4bmF2czogQXJyYXlcclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNyYz1cIkAvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzXCI+XHJcblxyXG48L3N0eWxlPlxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmQ0OTBhMzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGl2aWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCJAL2NvbW1vbi96Y20tbWFpbi1udnVlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJG9wdGlvbnMuc3R5bGUscmVxdWlyZShcIkAvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBudWxsLFxuICBcIjQzNzVmNDI1XCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRjovVU5JQVBQ5pyA5paw54mI5pys55qEL3VuaWFwcC14aWFvbWkvY29tcG9uZW50cy9jb21tb24vZGl2aWRlci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vZGl2aWRlci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJkNDkwYTM2JlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcInctMTAwXCJdLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMThweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIgfVxuICAgICAgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0yLTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTItMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0yLTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTItMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9kaXZpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTEwMFwiIHN0eWxlPVwiaGVpZ2h0OiAxOHB4O2JhY2tncm91bmQtY29sb3I6IHJlZDtcIj4gPC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdFxuXHR9XG48L3NjcmlwdD5cblxyXG48c3R5bGUgc3JjPVwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3NcIj5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3VtLXRocmVlLWFkdi5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkNGE3Y2QyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N1bS10aHJlZS1hZHYubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3VtLXRocmVlLWFkdi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCJAL2NvbW1vbi96Y20tbWFpbi1udnVlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCI0MTBmYzFjNVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkY6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvaW5kZXgvbnZ1ZS9zdW0tdGhyZWUtYWR2Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMCFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9zdW0tdGhyZWUtYWR2Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Q0YTdjZDImXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ3LTEwMFwiLCBcInJvd1wiXSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJjb2wtNlwiXSB9LCBbXG4gICAgICAgIF9jKFwiaW1hZ2VcIiwge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjM3M3B4XCIsIGhlaWdodDogXCI1MzBweFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ucmVzZGF0YVswXS5zcmMsIG1vZGU6IFwiXCIgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY29sLTZcIiwgXCJqLXNiXCJdLCBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiNTMwcHhcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjM3NXB4XCIsIGhlaWdodDogXCIyNjMuNXB4XCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnJlc2RhdGFbMV0uc3JjLCBtb2RlOiBcIlwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjM3NXB4XCIsIGhlaWdodDogXCIyNjMuNXB4XCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnJlc2RhdGFbMl0uc3JjLCBtb2RlOiBcIlwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMi0wIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0yLTEhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vc3VtLXRocmVlLWFkdi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMi0wIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0yLTEhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vc3VtLXRocmVlLWFkdi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInctMTAwIHJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogMzczcHg7aGVpZ2h0OiA1MzBweDtcIiA6c3JjPVwicmVzZGF0YVswXS5zcmNcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDUzMHB4O1wiIGNsYXNzPVwiY29sLTYgai1zYiBcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogMzc1cHg7aGVpZ2h0OiAyNjMuNXB4O1wiIDpzcmM9XCJyZXNkYXRhWzFdLnNyY1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOiAzNzVweDtoZWlnaHQ6IDI2My41cHg7XCIgOnNyYz1cInJlc2RhdGFbMl0uc3JjXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiB7XHJcblx0XHRcdHJlc2RhdGE6QXJyYXksXHJcblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxyXG48c3R5bGUgc3JjPVwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3NcIj5cclxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3N1bS1vbmUtYWR2Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTUzMjQ5MGEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3VtLW9uZS1hZHYubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3VtLW9uZS1hZHYubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy4kb3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy4kb3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUgJiYgdGhpcy4kcm9vdCAmJiB0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKXtcbiAgdGhpcy5fX21lcmdlX3N0eWxlKHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpXG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICB0aGlzLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIkAvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIG51bGwsXG4gIFwiNDM1YTJlYmRcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJGOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2luZGV4L252dWUvc3VtLW9uZS1hZHYubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0wIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3N1bS1vbmUtYWR2Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTUzMjQ5MGEmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ3LTEwMFwiXSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJwLTJcIiwgXCJib3JkZXItYm90dG9tXCJdIH0sIFtcbiAgICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRleHQtZGFya1wiLCBcImZvbnQtbWRcIiwgXCJmb250LXdlaWdodFwiXSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbS50aXRsZSkpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJpbWFnZVwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInctMTAwXCJdLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIzMDBweFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uaXRlbS5jb3ZlciB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTItMCFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMi0xIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3N1bS1vbmUtYWR2Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0yLTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTItMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9zdW0tb25lLWFkdi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJ3LTEwMFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicC0yIGJvcmRlci1ib3R0b21cIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtZGFyayBmb250LW1kIGZvbnQtd2VpZ2h0XCI+e3tpdGVtLnRpdGxlfX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5jb3ZlclwiXHJcblx0XHRcdFx0c3R5bGU9XCJoZWlnaHQ6IDMwMHB4O1wiIGNsYXNzPVwidy0xMDBcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczp7XHJcblx0XHRcdGl0ZW06T2JqZWN0XHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuPHN0eWxlIHNyYz1cIkAvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzXCI+PC9zdHlsZT5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29tbW9uLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Y5YjE2YTMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29tbW9uLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbW1vbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCJAL2NvbW1vbi96Y20tbWFpbi1udnVlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgXCJjMGE3MTUzYVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkY6L1VOSUFQUOacgOaWsOeJiOacrOeahC91bmlhcHAteGlhb21pL2NvbXBvbmVudHMvY29tbW9uL2NvbW1vbi5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vY29tbW9uLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Y5YjE2YTMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBbXCJjb2wtNlwiLCBcIm1iLTFcIl0sXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IHBhZGRpbmdMZWZ0OiBcIjIuNXB4XCIsIHBhZGRpbmdSaWdodDogXCIyLjVweFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaW1hZ2VcIiwge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjM3MHB4XCIsIGhlaWdodDogXCIzNzBweFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uaXRlbS5jb3ZlciB9XG4gICAgICAgIH0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZm9udC1tZFwiLCBcInRleHQtZGFya1wiLCBcInB4LTJcIiwgXCJweS0xXCJdLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbGluZXM6IFwiMVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLnRpdGxlKSArIFwiXFxuXFx0XFx0XCIpXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZm9udFwiLCBcInB4LTJcIiwgXCJ0ZXh0LWxpZ2h0LW11dGVkXCJdLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbGluZXM6IFwiMVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLmRlc2MpKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJweC0yXCIsIFwicHQtMVwiLCBcInJvd1wiLCBcImEtZW5kXCJdIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwcmljZVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5wcHJpY2UpKV0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImxpbmUtdGhyb3VnaFwiLCBcInRleHQtbGlnaHQtbXV0ZWRcIiwgXCJtbC0xXCJdLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjI0cHhcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLCpVwiICsgX3ZtLl9zKF92bS5pdGVtLm9wcmljZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0yLTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTItMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9jb21tb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTItMCFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMi0xIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL2NvbW1vbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sLTYgbWItMVwiXHJcblx0XHQgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6Mi41cHg7cGFkZGluZy1yaWdodDogMi41cHg7XCI+XHJcblx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOiAzNzBweDtoZWlnaHQ6IDM3MHB4O1wiXHJcblx0XHRcdCA6c3JjPVwiaXRlbS5jb3ZlclwiPjwvaW1hZ2U+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC1tZCB0ZXh0LWRhcmsgcHgtMiBweS0xXCJcclxuXHRcdFx0IHN0eWxlPVwibGluZXM6IDE7XCI+e3tpdGVtLnRpdGxlfX1cclxuXHRcdFx0PC90ZXh0PlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQgcHgtMiB0ZXh0LWxpZ2h0LW11dGVkXCJcclxuXHRcdFx0IHN0eWxlPVwibGluZXM6IDE7XCI+e3tpdGVtLmRlc2N9fTwvdGV4dD5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInB4LTIgcHQtMSByb3cgYS1lbmRcIj5cclxuXHRcdFx0XHQ8cHJpY2U+e3tpdGVtLnBwcmljZX19PC9wcmljZT5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpbmUtdGhyb3VnaCB0ZXh0LWxpZ2h0LW11dGVkIG1sLTEgXCIgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7XCI+wqV7e2l0ZW0ub3ByaWNlfX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcHJpY2UgZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vcHJpY2UubnZ1ZVwiXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRwcmljZVxyXG5cdFx0fSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGl0ZW06IE9iamVjdCxcclxuXHRcdFx0aW5kZXg6IE51bWJlclxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc3JjPVwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3NcIj5cclxuXHQ8c3R5bGU+XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3ByaWNlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU5M2RlOTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcHJpY2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJpY2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy4kb3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy4kb3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUgJiYgdGhpcy4kcm9vdCAmJiB0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKXtcbiAgdGhpcy5fX21lcmdlX3N0eWxlKHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpXG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICB0aGlzLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIkAvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiQC9jb21tb24vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIG51bGwsXG4gIFwiMTIxZGQ5ZjVcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJGOi9VTklBUFDmnIDmlrDniYjmnKznmoQvdW5pYXBwLXhpYW9taS9jb21wb25lbnRzL2NvbW1vbi9wcmljZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vcHJpY2UubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NTkzZGU5NiZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZsZXgtcm93XCJdIH0sIFtcbiAgICAgIF9jKFwidGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250XCJdLCBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjRkQ2ODAxXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIsKlXCIpXG4gICAgICBdKSxcbiAgICAgIF9jKFxuICAgICAgICBcInRleHRcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjRkQ2ODAxXCIsIGZvbnRTaXplOiBcIjMycHhcIiB9IH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTItMCFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMi0xIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3ByaWNlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0yLTAhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTItMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9wcmljZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJmb250XCIgc3R5bGU9XCJjb2xvcjogI0ZENjgwMTtcIj7CpTwvdGV4dD5cclxuXHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI0ZENjgwMTtmb250LXNpemU6MzJweDtcIj48c2xvdD48L3Nsb3Q+PC90ZXh0PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNyYz1cIkAvY29tbW9uL3pjbS1tYWluLW52dWUuY3NzXCI+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTIhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0zIS4vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXGRvd25sb2FkXFxcXEhCdWlsZGVyWC5mdWxsLmFscGhhXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMSFEOlxcXFxkb3dubG9hZFxcXFxIQnVpbGRlclguZnVsbC5hbHBoYVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTIhRDpcXFxcZG93bmxvYWRcXFxcSEJ1aWxkZXJYLmZ1bGwuYWxwaGFcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0zIS4vemNtLW1haW4tbnZ1ZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicG9zaXRpb24tYWJzb2x1dGVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiXG4gIH0sXG4gIFwicG9zaXRpb24tZml4ZWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG4gIH0sXG4gIFwicG9zaXRpb24tcmVsYXRpdmVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwibGVmdC0wXCI6IHtcbiAgICBcImxlZnRcIjogMFxuICB9LFxuICBcInRvcC0wXCI6IHtcbiAgICBcInRvcFwiOiAwXG4gIH0sXG4gIFwiYm90dG9tLTBcIjoge1xuICAgIFwiYm90dG9tXCI6IDBcbiAgfSxcbiAgXCJyaWdodC0wXCI6IHtcbiAgICBcInJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJ3LTEwMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiXG4gIH0sXG4gIFwidy01MFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjM3NVwiXG4gIH0sXG4gIFwiaC0xMDBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTI1MFwiXG4gIH0sXG4gIFwiaC01MFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjYyNVwiXG4gIH0sXG4gIFwiZm9udFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1XCJcbiAgfSxcbiAgXCJmb250LXNtXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBcIlxuICB9LFxuICBcImZvbnQtbWRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMFwiXG4gIH0sXG4gIFwiZm9udC1sZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJmb250LWJpZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjYwXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwiZm9udC13ZWlnaHQtMTAwXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCIxMDBcIlxuICB9LFxuICBcImxpbmUtdGhyb3VnaFwiOiB7XG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcImxpbmUtdGhyb3VnaFwiXG4gIH0sXG4gIFwicm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwiY29sLTFcIjoge1xuICAgIFwid2lkdGhcIjogXCI2Mi41XCJcbiAgfSxcbiAgXCJjb2wtMlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEyNVwiXG4gIH0sXG4gIFwiY29sLTNcIjoge1xuICAgIFwid2lkdGhcIjogXCIxODcuNVwiXG4gIH0sXG4gIFwiY29sLTRcIjoge1xuICAgIFwid2lkdGhcIjogXCIyNTBcIlxuICB9LFxuICBcImNvbC01XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzEyLjVcIlxuICB9LFxuICBcImNvbC02XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMzc1XCJcbiAgfSxcbiAgXCJjb2wtN1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQzNy41XCJcbiAgfSxcbiAgXCJjb2wtOFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwMFwiXG4gIH0sXG4gIFwiY29sLTlcIjoge1xuICAgIFwid2lkdGhcIjogXCI1NjIuNVwiXG4gIH0sXG4gIFwiY29sLTEwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjI1XCJcbiAgfSxcbiAgXCJjb2wtMTFcIjoge1xuICAgIFwid2lkdGhcIjogXCI2ODcuNVwiXG4gIH0sXG4gIFwiY29sLTEyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCJcbiAgfSxcbiAgXCJmbGV4LTFcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiZmxleC1jb2x1bW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiZmxleC1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC13cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwiZmxleC1ub3dyYXBcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJub3dyYXBcIlxuICB9LFxuICBcImotc3RhcnRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJqLWNlbnRlclwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiai1lbmRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiai1zYlwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImEtY2VudGVyXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImEtc3RhcnRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImEtZW5kXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiYS1zdHJldGNoXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCJcbiAgfSxcbiAgXCJib3JkZXJcIjoge1xuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci10b3BcIjoge1xuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1yaWdodFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyUmlnaHRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLWJvdHRvbVwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLWxlZnRcIjoge1xuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyTGVmdFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci0wXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItdG9wLTBcIjoge1xuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1yaWdodC0wXCI6IHtcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1ib3R0b20tMFwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLWxlZnQtMFwiOiB7XG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1wcmltYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiYm9yZGVyLXNlY29uZGFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJvcmRlci1zdWNjZXNzXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYm9yZGVyLWRhbmdlclwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJvcmRlci13YXJuaW5nXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwiYm9yZGVyLWluZm9cIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJib3JkZXItbGlnaHRcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJib3JkZXItZGFya1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJvcmRlci13aGl0ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJvcmRlci1saWdodC1zZWNvbmRhcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjRjFGMUYxXCJcbiAgfSxcbiAgXCJyb3VuZGVkXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVcIlxuICB9LFxuICBcInJvdW5kZWQtY2lyY2xlXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMDBcbiAgfSxcbiAgXCJyb3VuZGVkLTBcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDBcbiAgfSxcbiAgXCJ0ZXh0LXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJ0ZXh0LXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcInRleHQtc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcInRleHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwidGV4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwidGV4dC1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwidGV4dC1saWdodFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmOGY5ZmFcIlxuICB9LFxuICBcInRleHQtZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcInRleHQtbXV0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0LW11dGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0IyQjJCMlwiXG4gIH0sXG4gIFwidGV4dC13aGl0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiYmctc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJnLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYmctZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJnLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwiYmctaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJiZy1saWdodFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJiZy1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJnLXdoaXRlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcIm0tMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm1cIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiXG4gIH0sXG4gIFwibS0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwXCJcbiAgfSxcbiAgXCJtLTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBcIlxuICB9LFxuICBcIm0tM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMFwiXG4gIH0sXG4gIFwibS00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwXCJcbiAgfSxcbiAgXCJtLTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBcIlxuICB9LFxuICBcIm14LTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMFxuICB9LFxuICBcIm14XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIlxuICB9LFxuICBcIm14LTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJteC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwibXgtM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBcIlxuICB9LFxuICBcIm14LTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJteC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MFwiXG4gIH0sXG4gIFwibXktMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwXG4gIH0sXG4gIFwibXlcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNVwiXG4gIH0sXG4gIFwibXktMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBcIlxuICB9LFxuICBcIm15LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJteS0zXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMFwiXG4gIH0sXG4gIFwibXktNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBcIlxuICB9LFxuICBcIm15LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwXCJcbiAgfSxcbiAgXCJtdC0wXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAwXG4gIH0sXG4gIFwibXRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNVwiXG4gIH0sXG4gIFwibXQtMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMFwiXG4gIH0sXG4gIFwibXQtMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMFwiXG4gIH0sXG4gIFwibXQtM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMFwiXG4gIH0sXG4gIFwibXQtNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MFwiXG4gIH0sXG4gIFwibXQtNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MFwiXG4gIH0sXG4gIFwibWItMFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm1iXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjVcIlxuICB9LFxuICBcIm1iLTFcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBcIlxuICB9LFxuICBcIm1iLTJcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBcIlxuICB9LFxuICBcIm1iLTNcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBcIlxuICB9LFxuICBcIm1iLTRcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBcIlxuICB9LFxuICBcIm1iLTVcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBcIlxuICB9LFxuICBcIm1sLTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwXG4gIH0sXG4gIFwibWxcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjVcIlxuICB9LFxuICBcIm1sLTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJtbC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMFwiXG4gIH0sXG4gIFwibWwtM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBcIlxuICB9LFxuICBcIm1sLTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJtbC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MFwiXG4gIH0sXG4gIFwibXItMFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXJcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCJcbiAgfSxcbiAgXCJtci0xXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBcIlxuICB9LFxuICBcIm1yLTJcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwibXItM1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJtci00XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBcIlxuICB9LFxuICBcIm1yLTVcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MFwiXG4gIH0sXG4gIFwicC0wXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMFxuICB9LFxuICBcInBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVcIlxuICB9LFxuICBcInAtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIlxuICB9LFxuICBcInAtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBcIlxuICB9LFxuICBcInAtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBcIlxuICB9LFxuICBcInAtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBcIlxuICB9LFxuICBcInAtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBcIlxuICB9LFxuICBcInB4LTBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwXG4gIH0sXG4gIFwicHhcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1XCJcbiAgfSxcbiAgXCJweC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJweC0yXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJweC0zXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJweC00XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJweC01XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJweS0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMFxuICB9LFxuICBcInB5XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNVwiXG4gIH0sXG4gIFwicHktMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMFwiXG4gIH0sXG4gIFwicHktMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwicHktM1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMFwiXG4gIH0sXG4gIFwicHktNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MFwiXG4gIH0sXG4gIFwicHktNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MFwiXG4gIH0sXG4gIFwicHQtMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDBcbiAgfSxcbiAgXCJwdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNVwiXG4gIH0sXG4gIFwicHQtMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBcIlxuICB9LFxuICBcInB0LTJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJwdC0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMFwiXG4gIH0sXG4gIFwicHQtNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBcIlxuICB9LFxuICBcInB0LTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJwYi0wXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMFxuICB9LFxuICBcInBiXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1XCJcbiAgfSxcbiAgXCJwYi0xXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMFwiXG4gIH0sXG4gIFwicGItMlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBcIlxuICB9LFxuICBcInBiLTNcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwXCJcbiAgfSxcbiAgXCJwYi00XCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MFwiXG4gIH0sXG4gIFwicGItNVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBcIlxuICB9LFxuICBcInBsLTBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInBsXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNVwiXG4gIH0sXG4gIFwicGwtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJwbC0yXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIlxuICB9LFxuICBcInBsLTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMFwiXG4gIH0sXG4gIFwicGwtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJwbC01XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNTBcIlxuICB9LFxuICBcInByLTBcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDBcbiAgfSxcbiAgXCJwclwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1XCJcbiAgfSxcbiAgXCJwci0xXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJwci0yXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJwci0zXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwXCJcbiAgfSxcbiAgXCJwci00XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwXCJcbiAgfSxcbiAgXCJwci01XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwXCJcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=