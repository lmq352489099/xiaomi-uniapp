<template>
	<view>
		<!-- <view class="iconfont icon-scan_icon"></view> -->
		<!-- 轮播图 -->
		<swiper-image :resdata="swipers" />

		<view class="row">
			<view class="span4">
				<image src="../../static/images/indexnav/1.png" 
				       style="width: 60upx;" 
							 mode="widthFix"></image>
				1
			</view>
			<view class="span4">2</view>
			<view class="span4">3</view>
			<view class="span4">4</view>
			<view class="span4">5</view>
			<view class="span4">6</view>
			<view class="span4">7</view>
			<view class="span4">8</view>
			<view class="span4">9</view>
			<view class="span4">10</view>
		</view>

		<view class="d-flex bg-white border-top position-fixed bottom-0 left-0 right-0" style="height: 99upx;box-sizing: border-box;">
			<view class="flex-1 d-flex j-center a-center flex-column line-h">
				<view class="iconfont icon-xihuan line-h"></view>
				收藏
			</view>

			<view class="flex-1 d-flex j-center a-center flex-column line-h">
				<view class="iconfont icon-gouwuche line-h"></view>
				购物车
			</view>
			<view hover-class="main-bg-hover-color" style="flex:2.5;height: 100%;" class="text-white main-bg-color d-flex j-center a-center">加入购物车</view>
		</view>

		<view class="span-1"></view>
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-Image.vue';
export default {
	components: {
		swiperImage
	},
	data() {
		return {
			title: 'Hello',
			show: true,
			swipers: [
				{
					src: '../../static/images/demo/demo4.jpg'
				},
				{
					src: '../../static/images/demo/demo4.jpg'
				},
				{
					src: '../../static/images/demo/demo4.jpg'
				},
				{
					src: '../../static/images/demo/demo4.jpg'
				}
			]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style></style>
