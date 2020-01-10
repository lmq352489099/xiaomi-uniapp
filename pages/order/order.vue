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
<<<<<<< HEAD
						<order-list @update="getOrderList" :item="item" :index="index"></order-list>
=======
						<order-list :item="item" :index="index"></order-list>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
					</block>
				</template>

				<!-- 默认无 -->
				<template v-else>
					<!-- <view class="position-relative border" style="height: 400rpx;"> -->
<<<<<<< HEAD
					<no-thing :icon="tab.no_thing" :msg="tab.msg"></no-thing>
=======
						<no-thing :icon="tab.no_thing" :msg="tab.msg"></no-thing>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
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
<<<<<<< HEAD
						key: "all",
						list: [],
					},
					{ name: "代付款", no_thing: 'no_pay', key: "paying", list: [], msg: "你还没待付款订单" },
					{ name: "待收货", no_thing: 'no_receiving', key: "receiving", list: [], msg: "你还没待收货收货" },
					{ name: "待评价", no_thing: 'no_comment', key: "reviewing", list: [], msg: "你还没待评价" }
				],
				hotList: []
			};
		},
		onLoad(e) {
	
			if (e.tabIndex) {
				this.tabIndex = parseInt(e.tabIndex)
			}
					this.getHotList()
		},
		onShow() {
			this.getOrderList()
		},
		computed: {
			key() {
				return this.tabBars[this.tabIndex].key
			}
		},
		methods: {
			changTab(e) {
				this.tabIndex = e
				this.getOrderList()
			},
			// 获取订单列表
			getOrderList() {
				let index = this.tabIndex
				this.$H.post('/order/' + this.key, {}, { token: true }).then(res => {
					console.log(res);
					this.tabBars[index].list = res.map(item => {
						let order_items = item.order_items.map(v => {
							let attrs = []
							if (v.skus_type == 1 && v.goods_skus && v.goods_skus.skus) {
								let skus = v.goods_skus.skus
								for (let k in skus) {
									attrs.push(skus[k].value)
								}
							}

							return {
								id: v.goods_id,
								cover: v.goods_item.cover,
								title: v.goods_item.title,
								pprice: v.price,
								attrs: attrs.join(','),
								num: v.num
							}
						})


						return {
							id: item.id,
							create_time: item.create_time,
							status: this.$U.formatStatus(item),
							order_items: order_items,
							total_price: item.total_price
						}
					})
					// {
					// 	create_time: "2019-09-10 10:20",
					// 	status: "已发货",
					// 	order_items: [{ cover: '/static/images/demo/demo6.jpg', title: "小米8", pprice: "1999.00", attrs: '金色 标配', num: '1' }],
					// 	total_num: 3,
					// 	total_price: 299.00
					// }
				})
			},
			getHotList() {
				this.$H.get('/goods/hotlist').then(res => {
					this.hotList = res.map(v => {
						return {
							id: v.id,
							cover: v.cover,
							title: v.title,
							oprice: v.min_oprice,
							desc: v.desc,
							pprice: v.min_price
						}
					})
				})
=======
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
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
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
