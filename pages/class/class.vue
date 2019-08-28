<template>
	<view class="d-flex border-top border-light-secondary" style="height: 100%;box-sizing: border-box;">
		<scroll-view scroll-y style="flex: 1;height: 100%;"
		 class="border-right border-light-secondary">
			<!-- <view v-for="i in 50" key=" i">{{i}}</view> -->
			<view class="border-bottom border-light-secondary py-1">
				<view class=" py-1 font-md text-muted text-center class-active"
				 style="">分类一</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y style="flex: 3.5;height: 100%;">
			<view v-for="i in 50" key=" i">{{i}}</view>

		</scroll-view>

	</view>
</template>

<script>
	export default {
		onShow() {

		}
	}
</script>

<style>
	.class-active {
		border-left: 8upx solid #FD6801;
		color: #FD6801 !important;
	}
</style>
