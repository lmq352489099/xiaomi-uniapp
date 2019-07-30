<template>
	<view>
		<!-- <view class="iconfont icon-scan_icon"></view> -->
		<!-- 轮播图 -->
		<swiper-image :resdata="swipers" />

		<!-- 首页分类 -->
		<index-nav :resdata="indexnavs"></index-nav>
		<!-- 全局分割线 -->

		<divider></divider>

		<!-- 三图广告 -->
		<thress-adv :resdata="threeAdv"></thress-adv>

	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-Image.vue';
	import indexNav from "@/components/index/index-nav.vue"
	import thressAdv from "@/components/index/thress-adv.vue"
	export default {
		components: {
			swiperImage,
			indexNav,
			thressAdv
		},
		data() {
			return {
				title: 'Hello',
				show: true,
				threeAdv: {
					big: { src: "/static/images/demo/demo4.jpg" },
					smalltop: { src: "/static/images/demo/demo4.jpg" },
					smalltop2: { src: "/static/images/demo/demo4.jpg" }
				},
				swipers: [{
						src: '../../static/images/demo/demo4.jpg'
					},
					{
						src: '../../static/images/demo/demo4.jpg'
					},
					{
						src: '../../static/images/demo/demo4.jpg'
					},
				],
				indexnavs: [
					{ src: "/static/images/indexnav/1.png", text: "新品发布" },
					{ src: "/static/images/indexnav/2.gif", text: "小米众筹" },
					{ src: "/static/images/indexnav/3.gif", text: "以旧换新" },
					{ src: "/static/images/indexnav/4.gif", text: "一分换团" },
					{ src: "/static/images/indexnav/5.gif", text: "超值特卖" },
					{ src: "/static/images/indexnav/6.gif", text: "小米秒杀" },
					{ src: "/static/images/indexnav/7.gif", text: "真心想要" },
					{ src: "/static/images/indexnav/8.gif", text: "电视热卖" },
					{ src: "/static/images/indexnav/9.gif", text: "家电热卖" },
					{ src: "/static/images/indexnav/10.gif", text: "米粉卡" }
				]
			};
		},
		onLoad() {},
		methods: {}
	};
</script>

<style></style>
