<template>
	<view class="position-absolute d-flex flex-column a-center j-center top-0 left-0 right-0 bottom-0"
	 style="background: #F5F5F5;">
		<image :src="getIcon" mode="widthFix" style="width: 250rpx;"></image>
		<view style="color: #B2B2B2;">{{msg}} </view>
	</view>
</template>

<script>
	export default {
		props: {
			icon: {
				type: String,
				default: 'no_comment'
			},
			msg:{
				type:String,
				default:"您还没待付款订单"
			}
		},
		computed: {
			getIcon() {
				return `/static/images/nothing/` + this.icon + '.png'
			}
		},
	}
</script>

<style>
</style>
