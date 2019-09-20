<template>
	<view class="d-flex a-stretch bg-white position-fixed bottom-0 left-0 right-0"
	 style="height: 100rpx;z-index: 100;">
		<view class="flex-1 d-flex flex-column a-center j-center line-h-md "
		 hover-class="bg-light-secondary">
			<view class="iconfont icon-xihuan text-muted line-h-md "></view>
			收藏
		</view>
		<view class="flex-1 d-flex flex-column a-center j-center line-h-md"
		 hover-class="bg-light-secondary"
		 @tap="toCart"
		 >

			<view class="iconfont icon-gouwuche text-muted line-h-md"></view>
			购物车
		</view>
		<view style="flex: 2.5;"
		 hover-class="main-bg-hover-color"
		 class=" d-flex j-center a-center font-md main-bg-color text-white"
		 @tap="$emit('show')">
			加入购物车
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			toCart(){
				uni.switchTab({
					url:"../../pages/cart/cart"
				})
			}
		}
	}
</script>

<style>
</style>
