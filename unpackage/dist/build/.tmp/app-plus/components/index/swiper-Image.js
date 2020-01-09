(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/index/swiper-Image"],{"017a":function(t,e,n){"use strict";n.r(e);var r=n("2de4"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=a.a},"2a13":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"2de4":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{}},props:{resdata:[Array,Object],height:{type:String,default:"350"},preview:{type:Boolean,default:!1}},computed:{getStyle:function(){return"height:".concat(this.height,"rpx")},getUrls:function(){var t=[];for(var e in this.resdata)t.push(this.resdata[e].src);return t}},methods:{event:function(e,r){if(console.log(t("点击了轮播图"," at components\\index\\swiper-Image.vue:49")),this.preview)return n.previewImage({current:r,urls:this.getUrls,indicator:"default"})}}};e.default=r}).call(this,n("0de9")["default"],n("6e42")["default"])},7784:function(t,e,n){"use strict";n.r(e);var r=n("2a13"),a=n("017a");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);var i=n("2877"),o=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/index/swiper-Image-create-component',
    {
        'components/index/swiper-Image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("7784"))
        })
    },
    [['components/index/swiper-Image-create-component']]
]);                
