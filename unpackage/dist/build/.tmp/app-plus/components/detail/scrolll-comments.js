(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/detail/scrolll-comments"],{"1afa":function(t,e,n){"use strict";n.r(e);var a=n("8cc2"),o=n("ad2a");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var u=n("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},6154:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("6d94"));function o(t){return t&&t.__esModule?t:{default:t}}var r={props:["comments","goods_id"],filters:{formatTime:function(t){return a.default.gettime(t)}},methods:{open:function(){t.navigateTo({url:"/pages/detail-comment/detail-comment?id="+this.goods_id})}}};e.default=r}).call(this,n("6e42")["default"])},"8cc2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.comments,function(e,n){var a=t._f("formatTime")(e.create_time);return{$orig:t.__get_orig(e),f0:a}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},ad2a:function(t,e,n){"use strict";n.r(e);var a=n("6154"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/detail/scrolll-comments-create-component',
    {
        'components/detail/scrolll-comments-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("1afa"))
        })
    },
    [['components/detail/scrolll-comments-create-component']]
]);                
