<template>
	<view>
		<!-- 头部 -->
		<view class="position-relative d-flex a-center" style="height: 320rpx;">
			<view class="iconfont icon-xiaoxi" style="font-size: 50rpx;"></view>
			<image src="../../static/images/bg.jpg" style="height: 320rpx; width: 100%;" mode=""></image>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad() {
			this.getFirstTime()
		},
		methods: {
			getFirstTime() {
				console.log(1)
				this.asyfun()
				// asyfun();
				console.log(3)
			},
			async asyfun() {
				console.log(2)
			}
		},
	}
</script>

<style lang="scss">

</style>
