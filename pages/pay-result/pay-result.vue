<template>
	<view>

		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="line-h iconfont icon-iconfontxuanzhong4 main-text-color"
			 style="font-size: 180rpx;"></text>
			<text class="text-dark font-lg line-h-sm">支付成功</text>
		</view>
		<view class="px-5"></view>
<<<<<<< HEAD
		<view @tap="openDetai" class="rounded main-bg-color text-white font-md w-100 py-2 mt-3 text-center" hover-class="main-bg-hover-color">
			查看订单
		</view>
		<view @tap="openIndex" class="rounded  border font-md w-100 py-2 mt-3 text-center"
		 hover-class="bg-light">
=======
		<view class="rounded main-bg-color text-white font-md w-100 py-2 mt-3 text-center" hover-class="main-bg-hover-color">
			查看订单
		</view>
		<view class="rounded  border font-md w-100 py-2 mt-3 text-center" 
		hover-class="bg-light">
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			返回首页
		</view>
	</view>
</template>

<script>
	export default {
<<<<<<< HEAD
		onLoad(e) {
		
		},
		data() {
			return {
			
			};
		},
		methods: {
			openIndex() {
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			openDetai(){
				uni.navigateBack({
					delta: 1
				});
			}
		},
=======
		data() {
			return {

			};
		}
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	}
</script>

<style lang="scss">

</style>
