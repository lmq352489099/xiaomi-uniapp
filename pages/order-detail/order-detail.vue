<template>
	<view>
		<view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 300rpx;">
			<view class="mb-3">
				<view class="font-lg">卖家已发货</view>
				<view class="font">还差7天10时自动确认</view>
			</view>
			<view class="iconfont icon-daishouhuo line-h mb-3" style="font-size: 100rpx;"></view>
		</view>
		<view class="p-3 bg-white">
			<view class="text-light-muted font-md">
				<text class="font-lg text-dark mr-2">楚绵</text>
				135****123
			</view>
			<view class="text-light-muted font-md">
				广东省 广州市 白云区 帝莎编程学院实战基地
			</view>
		</view>
		<divider></divider>
		<view class="px-2">
			<block v-for="(item,index) in order_items" :key="index">
				<order-list-item :item="item" :index="index"></order-list-item>
			</block>
		</view>
		<divider></divider>

		<uni-list-item>
			<text class="font-md text-light-muted">商品总价</text>

			<view slot="right" class="font-md text-light-muted">
				¥123.01
			</view>
		</uni-list-item>
		<uni-list-item>
			<text class="font-md text-light-muted">快递</text>

			<view slot="right" class="font-md text-light-muted">
				¥10.00
			</view>
		</uni-list-item>

		<uni-list-item>
			<text class="font-md text-light-muted">优惠券</text>

			<view slot="right" class="font-md text-light-muted">
				- ¥20.01
			</view>
		</uni-list-item>

		<uni-list-item>
			<text class="font-md main-text-color">实际付款</text>

			<view slot="right" class="font-md text-light-muted">
				<price>110.00</price>
			</view>
		</uni-list-item>
		<divider></divider>
		<card headTitle="订单信息">
			<uni-list-item title="订单标号">

				<view slot="right" class="font-md text-light-muted">
					11321
				</view>
			</uni-list-item>

		</card>




	</view>
</template>

<script>
	import orderListItem from "@/components/order/order-list-item.vue"
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "../../components/common/price.vue"
	import card from "../../components/common/card.vue"
	export default {
		components: {
			orderListItem,
			uniListItem,
			price,
			card
		},
		data() {
			return {
				create_time: "2019-09-10 10:20",
				status: "已发货",
				order_items: [{
					cover: "/static/images/demo/demo6.jpg",
					title: "小米8",
					pprice: 1999.00,
					attrs: "金色 标配",
					num: 1
				}],
				total_num: 3,
				total_price: 299.00
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
