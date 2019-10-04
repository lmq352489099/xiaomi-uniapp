(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/index/swiper-Image"],{"017a":function(e,t,n){"use strict";n.r(t);var r=n("2de4"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=u.a},"2de4":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{}},props:{resdata:Array,height:{type:String,default:"350"},preview:{type:Boolean,default:!1}},computed:{getStyle:function(){return"height:".concat(this.height,"rpx")},getUrls:function(){return this.resdata.map(function(e){return e.src})}},methods:{event:function(t,r){if(console.log(e("点击了轮播图"," at components\\index\\swiper-Image.vue:42")),this.preview)return n.previewImage({current:r,urls:this.getUrls,indicator:"default"})}}};t.default=r}).call(this,n("0de9")["default"],n("6e42")["default"])},7784:function(e,t,n){"use strict";n.r(t);var r=n("e0eb"),u=n("017a");for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);var i=n("2877"),o=Object(i["a"])(u["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},e0eb:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/index/swiper-Image-create-component',
    {
        'components/index/swiper-Image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("7784"))
        })
    },
    [['components/index/swiper-Image-create-component']]
]);                
