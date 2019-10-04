<template>
	<view style="background-color: #F5F5F5;">



		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top border-light-secondary border-bottom">
			<view class="flex-1 d-flex j-center py-2" v-for="(item,index) in tabBars" :key='index'
			 :class="tabIndex == index ? `tabactive` : '' "
			 @tap="changTab(index)">
				{{item.name}}
			</view>
		</view>


		<!-- 订单列表 -->
		<block v-for="(tab,tabI) in tabBars" :key='tabI'>
			<view class="position-relative" v-show="tabI == tabIndex" style=" min-height: 440rpx;">

				<template v-if="tab.list.length > 0">
					<block v-for="(item,index) in tab.list" :key="index">
						<order-list :item="item" :index="index"></order-list>
					</block>
				</template>

				<!-- 默认无 -->
				<template v-else>
					<!-- <view class="position-relative border" style="height: 400rpx;"> -->
						<no-thing :icon="tab.no_thing" :msg="tab.msg"></no-thing>
					<!-- </view> -->
				</template>

			</view>
		</block>




















		<view class="mt-5 text-center main-text-color font-md font-weight">为你推荐</view>
		<view class="mb-3 pt-3 position-relative d-flex a-center j-center text-secondary">
			<view class="px-2 position-absolute " style="z-index: 2; background: #F5F5F5;">买的人还买了</view>
			<view class="position-absolute " style="background: #dddddd; height: 2upx;left: 0;right: 0;"></view>
		</view>
		<!-- 为你推荐 -->
		<view class="row j-sb bg-white">
			<common-list v-for="(item,index) in hotList" :item="item" :key='index'></common-list>
		</view>
	</view>
</template>

<script>
	import commonList from "@/components/common/common.vue"
	import noThing from '@/components/common/no-thing.vue';
	import orderList from '@/components/order/order-list.vue'
	export default {
		components: {
			commonList,
			noThing,
			orderList
		},
		data() {
			return {

				tabIndex: 0,
				tabBars: [{
						name: "全部",
						no_thing: 'no_pay',
						msg: "你还没订单",
						list: [{
							create_time: "2019-09-10 10:20",
							status: "已发货",
							order_items: [{ cover: '/static/images/demo/demo6.jpg', title: "小米8", pprice: "1999.00", attrs: '金色 标配', num: '1' }],
							total_num: 3,
							total_price: 299.00
						}, {
							create_time: "2019-09-10 10:20",
							status: "已发货",
							order_items: [{ cover: '/static/images/demo/demo6.jpg', title: "小米8", pprice: "1999.00", attrs: '金色 标配', num: '1' }],
							total_num: 3,
							total_price: 299.00
						}, {
							create_time: "2019-09-10 10:20",
							status: "已发货",
							order_items: [{ cover: '/static/images/demo/demo6.jpg', title: "小米8", pprice: "1999.00", attrs: '金色 标配', num: '1' }],
							total_num: 3,
							total_price: 299.00
						}],
					},
					{ name: "代付款", no_thing: 'no_pay', list: [], msg: "你还没待付款订单" },
					{ name: "待收货", no_thing: 'no_receiving', list: [], msg: "你还没待收货收货" },
					{ name: "待评价", no_thing: 'no_comment', list: [], msg: "你还没待评价" }
				],
				hotList: [{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						oprice: "2699",
						desc: "1.5匹变频",
						pprice: "1399"
					},
					{
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						oprice: "2699",
						desc: "1.5匹变频",
						pprice: "1399"
					}, {
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						oprice: "2699",
						desc: "1.5匹变频",
						pprice: "1399"
					}, {
						cover: "/static/images/demo/list/1.jpg",
						title: "米家空调",
						oprice: "2699",
						desc: "1.5匹变频",
						pprice: "1399"
					},
				]
			};
		},
		methods: {
			changTab(e) {
				this.tabIndex = e
			}
		},
	}
</script>

<style lang="scss">
	.tabactive {
		border-bottom: 5rpx solid #FD6801;
		color: #FD6801;
		margin-bottom: -2rpx;
	}
</style>
