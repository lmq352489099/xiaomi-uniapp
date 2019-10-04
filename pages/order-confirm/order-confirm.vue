<template>
	<view style="background-color: #F5F5F5;min-height: 100%;height: auto;">
		<!-- 地址选择 -->
		<view hover-class="main-bg-hover-color"
		 class="main-bg-color text-white d-flex a-center px-3" style="height: 250rpx;"
		 @tap="openPathList">
			<view>

				<template v-if="path">
					<view class="font-weight font-md d-flex a-center font-lg">
						{{path.name}} {{path.phone}}
						<view class="border border-white rounded px-1 font ml-2"
						 v-if="path.isdefault">默认</view>
					</view>
					<view class="font">
						{{path.pth}}{{path.detailPath}}
					</view>
				</template>

				<template v-else>
					<view class="font-weight font-md d-flex a-center font-lg">
						请选择默认地址</view>
				</template>


			</view>
			<view class="iconfont icon-you ml-auto"> </view>
		</view>

		<view style="border-top-left-radius: 25rpx;border-top-right-radius: 25rpx;
		margin-top: -25rpx;overflow: hidden;">
			<view class="bg-white">

				<uniListItem showArrow>
					<view class="d-flex a-center">
						<image style="width: 100rpx;height: 100rpx;"
						 class="rounded mr-2"
						 src="../../static/ceshitupian/images/demo/demo6.jpg" mode=""></image>
						<image style="width: 100rpx;height: 100rpx;"
						 class="rounded mr-2"
						 src="../../static/ceshitupian/images/demo/demo6.jpg" mode=""></image>
						<image style="width: 100rpx;height: 100rpx;"
						 class="rounded mr-2"
						 src="../../static/ceshitupian/images/demo/demo6.jpg" mode=""></image>
					</view>
					<view slot="rightContent">共三件</view>
				</uniListItem>
				<uniListItem title="商品总结" :showArrowIcon="false">
					<view slot="rightContent">
						<price color="text-dark">20.00</price>
					</view>
				</uniListItem>
				<uniListItem title="运费" :showArrowIcon="false">
					<view slot="rightContent">
						包邮
					</view>
				</uniListItem>
				<uniListItem title="优惠券">
					<view slot="rightContent" class="text-light-muted">
						<text color="text-dark">无可用</text>
					</view>
				</uniListItem>
				<uniListItem title="" :showArrowIcon="false">
					<text class="main-text-color">小计</text>
					<view slot="rightContent">
						<price>20.00</price>
					</view>
				</uniListItem>
				<divider></divider>
				<uniListItem title="发票">
					<view slot="rightContent" extraWidth="40%"
					@click="openOrderInvoice">
						电子发票
					</view>
				</uniListItem>
			</view>
		</view>

		<view class="position-fixed d-flex border a-center j-end bottom-0 left-0 right-0 bg-white p-2 fong-md">
			合计:
			<view class="ml-2">
				<price>24.00</price>
			</view>

			<view style="border-radius: 80rpx;" class="px-2 py-1 ml-2  main-bg-color text-white" hover-class="main-bg-hover-color">
				去支付
			</view>
		</view>


	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "../../components/common/price.vue"

	import { mapGetters } from "vuex"
	export default {
		components: {
			uniListItem,
			price
		},
		computed: {

			...mapGetters(['defaultPath'])
		},
		onLoad(e) {

			if (this.defaultPath.length) this.path = this.defaultPath[0]
			console.log(this.path);
			// 开启监听选择地址事件
			uni.$on('choosePath', (res) => {
				this.path = res
				console.log("接收到参数", res);
			})
		},
		onUnload() {
			// 关闭监听
			uni.$off("choosePath", () => console.log("关闭监听收货地址"))
		},
		data() {
			return {
				path: false
			};
		},
		methods: {
			openPathList() {
				uni.navigateTo({
					url: "../user-path-list/user-path-list?type=choose"
				})
			},
			openOrderInvoice(){
				console.log("4534");
				uni.navigateTo({
					url:'../order-invoice/order-invoice'
				})
			}
		},
	}
</script>

<style lang="scss">

</style>
