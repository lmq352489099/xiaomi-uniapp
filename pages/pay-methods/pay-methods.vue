<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="text-light-muted font-md">支付金额</text>
			<price priceSize="font-lg" unitSize="font-md">38.00</price>
		</view>
		<view class="px-5">
			<label for="">
				<uniListItem leftIcon="icon-zhifubao text-primary"
				 showExtraIcon
				 leftIconStyle="font-size:60rpx;"
				 title="支付宝支付" note="推荐使用支付宝支付">
					<radio slot="right" value="1" color="#FD6801"></radio>

				</uniListItem>
			</label>
			<label for="">
				<uniListItem leftIcon="icon-weixinzhifu text-success"
				 showExtraIcon
				 leftIconStyle="font-size:60rpx;"
				 title="微信支付">
					<radio slot="right" value="3" color="#FD6801"></radio>

				</uniListItem>
			</label>
			
			<view @tap="submit" class="rounded main-bg-color text-white font-md w-100 py-2 mt-3 text-center" hover-class="main-bg-hover-color">
				确认支付
			</view>
		</view>
	</view>
</template>

<script>
	import price from "../../components/common/price.vue"
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"

	export default {
		components: {
			price,
			uniListItem
		},
		data() {
			return {

			};
		},
		methods: {
			submit() {
				uni.navigateTo({
					url: '../pay-result/pay-result',
		
				});
			}
		},
	}
</script>

<style lang="scss">

</style>
