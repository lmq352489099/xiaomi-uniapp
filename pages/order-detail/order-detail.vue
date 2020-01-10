<template>
	<view>
		<view class="main-bg-color text-white p-4 d-flex a-end j-sb" style="height: 300rpx;">
			<view class="mb-3">
<<<<<<< HEAD
				<view class="font-lg">{{status}}</view>
				<view class="font">{{timeDownText}}</view>
=======
				<view class="font-lg">卖家已发货</view>
				<view class="font">还差7天10时自动确认</view>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			</view>
			<view class="iconfont icon-daishouhuo line-h mb-3" style="font-size: 100rpx;"></view>
		</view>
		<view class="p-3 bg-white">
			<view class="text-light-muted font-md">
<<<<<<< HEAD
				<text class="font-lg text-dark mr-2"> {{address.name}}</text>
				{{address.phone}}
			</view>
			<view class="text-light-muted font-md">
				{{path}}
=======
				<text class="font-lg text-dark mr-2">楚绵</text>
				135****123
			</view>
			<view class="text-light-muted font-md">
				广东省 广州市 白云区 帝莎编程学院实战基地
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
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
<<<<<<< HEAD
				{{price}}
=======
				¥123.01
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			</view>
		</uni-list-item>
		<uni-list-item>
			<text class="font-md text-light-muted">快递</text>

			<view slot="right" class="font-md text-light-muted">
<<<<<<< HEAD
				包邮
=======
				¥10.00
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			</view>
		</uni-list-item>

		<uni-list-item>
			<text class="font-md text-light-muted">优惠券</text>

			<view slot="right" class="font-md text-light-muted">
<<<<<<< HEAD
				{{coupon}}
=======
				- ¥20.01
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			</view>
		</uni-list-item>

		<uni-list-item>
			<text class="font-md main-text-color">实际付款</text>

			<view slot="right" class="font-md text-light-muted">
<<<<<<< HEAD
				<price>{{total_price}}</price>
=======
				<price>110.00</price>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			</view>
		</uni-list-item>
		<divider></divider>
		<card headTitle="订单信息">
			<uni-list-item title="订单标号">

				<view slot="right" class="font-md text-light-muted">
<<<<<<< HEAD
					{{no}}
=======
					11321
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
				</view>
			</uni-list-item>

		</card>
<<<<<<< HEAD
		<card v-if="extra" headTitle="退款相关">
			<uni-list-item title="申请退款">
				<view slot="right" class="font-md text-light-muted">
					{{extra.refund_reason}}
				</view>
			</uni-list-item>

		</card>


		<view v-if="status == '待支付' || status=='待发货' ||status == '待收货' " style="height: 100rpx;"></view>
		<view v-if="status == '待支付' || status=='待发货' ||status == '待收货' " class="position-fixed bottom-0 left-0 right-0 d-flex a-center j-end px-3"
		 style="height: 100rpx;">
			<template v-if="status === '待支付'">
				<common-button @click="openPayMethods">去支付</common-button>
				<common-button @click="closeOrder">取消订单</common-button>
			</template>
			<template v-else-if="status === '待发货'">
				<common-button>提醒发货</common-button>
				<common-button @click="applyRefund">申请退款</common-button>
			</template>
			<template v-else-if="item.status === '待收货'">
				<common-button @click="openLogistics">查看物流</common-button>
				<common-button @click="received">确认收货</common-button>
			</template>
		</view>
=======




>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	</view>
</template>

<script>
<<<<<<< HEAD
	let timer = null
=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	import orderListItem from "@/components/order/order-list-item.vue"
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "../../components/common/price.vue"
	import card from "../../components/common/card.vue"
<<<<<<< HEAD
	import $T from "@/common/lib/time.js"
	// import commonButton from "@/common/common-button.vue"
	import commonButton from "@/components/common/common-button.vue"
=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	export default {
		components: {
			orderListItem,
			uniListItem,
			price,
<<<<<<< HEAD
			card,
			commonButton
		},
		computed: {
			// 商品总价
			price() {
				let p = 0
				this.order_items.forEach(item => {
					p += item.pprice * item.num
				})
				return p.toFixed(2)
			},
			path() {
				let { province, city, district, addrress } = this.address
				return `${province}${city}${district}${addrress}`
			},
			status() {
				return this.$U.formatStatus({
					paid_time: this.paid_time,
					refund_status: this.refund_status,
					ship_status: this.ship_status
				})
			},
			timeDownText() {
				let msg = ''
				switch (this.status) {
					case '待支付':
						msg = '取消'
						break;
					case '待收货':
						msg = '确认'
						break;
					case '待发货':
						return '等待商家发货'
						break;
					case '退款中':
						return '等待商家审核'
						break;
					case '已签收':
						return '订单已签收'
						break;
				}
				if (msg !== '' && this.timeDown !== '') {
					return `还差 ${this.timeDown} 自动${msg}`
				}
				return ''
			},
	
			coupon() {
				if (Array.isArray(this.couponUserItem) && this.couponUserItem.length == 0) {
					return "未使用"
				}
				let { type, value } = this.couponUserItem.coupon
				if (type == 0) {
					return '-¥' + value
				} else {
					return '打' + value + '折'
				}




				this.couponUserItem.coupon.value
			}
		},
		onShow() {
			this.getData()
		},
		onLoad(e) {
			if (!e.id) {
				uni.navigateBack({

				})
				return uni.showToast({
					title: '订单不存在',
					icon: "none"
				});

			}
			this.id = e.id

		},
		onUnload() {
			if (timer) {
				clearInterval(timer)
			}
		},
		data() {
			return {
				id: 0,
				no: "",
				address: {
					province: "",
					city: "",
					district: "",
					address: "",
					zip: 0,
					name: "",
					phone: "",
				},
				total_price: 0,
				remark: "",
				paid_time: null,
				payment_method: "",
				payment_no: "",
				refund_status: "pending",
				ship_status: "",
				extra: null,
				create_time: "",
				update_time: "",
				reviewed: 0,
				order_items: [],
				couponUserItem: [],
				end_time: 0,
				timeDown: ''
			}
		},
		methods: {
			getData() {
				this.$H.get('/order/' + this.id, {}, { token: true }).then(res => {
					console.log(res);
					this.end_time = res.end_time ? res.end_time : 0
					this.no = res.no
					this.address = res.address
					this.total_price = res.total_price
					this.remark = res.remark
					this.paid_time = res.paid_time
					this.payment_method = res.payment_method
					this.payment_no = res.payment_no
					this.refund_status = res.refund_status
					this.ship_status = res.ship_status
					this.extra = res.extra
					this.create_time = res.create_time
					this.update_time = res.update_time
					this.reviewed = res.reviewed
					// 整理商品列表数据
					let order_items = res.orderItems.map(v => {
						let attrs = []
						if (v.skus_type === 1 && v.goodsSkus && v.goodsSkus.skus) {
							let skus = v.goodsSkus.skus
							for (let k in skus) {
								attrs.push(skus[k].value)
							}
						}
						return {
							id: v.goods_id,
							cover: v.goodsItem.cover,
							title: v.goodsItem.title,
							pprice: v.price,
							attrs: attrs.join(','),
							num: v.num
						}
					})
					// 开启定时器
					this.openTimeDown()
					this.order_items = order_items
					this.couponUserItem = res.couponUserItem
				})
			},
			// 开启定时器
			openTimeDown() {
				console.log("进去待支付");
				if (this.status === '待支付' || this.status === '待收货') {
					if (timer) {
						clearInterval(timer)
					}
					timer = setInterval(() => {
						let now = (new Date().getTime()) / 1000

						if (now > this.end_time) {
							uni.switchTab({
								url: "../index/index"
							})
							uni.showToast({
								title: this.status === '待支付' ? '订单已关闭' : '订单已确认',
								icon: "none"
							});
							return clearInterval(timer)
						}
						this.timeDown = $T.timeDown(this.end_time)
					}, 1000)
				}
			},

			// 去支付
			openPayMethods() {
				// 跳转到支付页面
				uni.navigateTo({
					url: '/pages/pay-methods/pay-methods?detail=' + JSON.stringify({
						id: this.id,
						price: this.item.total_price
					}),
				});
			},
			// 取消订单
			closeOrder() {
				uni.showModal({
					content: '是否取消订单',
					success: res => {
						if (res.confirm) {
							uni.showLoading({
								title: '取消订单中...',
								mask: false
							});
							this.$H.post('/closeorder/' + this.id, {}, { token: true }).then(res => {
								console.log(res);

								uni.hideLoading()
								uni.showToast({
									title: '取消订单成功',
									icon: "none"
								});
								uni.navigateBack({
									delta: 1
								})
							}).catch(err => {
								uni.hideLoading()
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 申请退款
			applyRefund() {
				uni.navigateTo({
					url: '/pages/order-refund/order-refund?detail=' + JSON.stringify({
						id: this.id,
					})

				});
			},
			// 查看物流
			openLogistics() {
				uni.navigateTo({
					url: '/pages/logistics-detail/logistics-detail?detail=' + JSON.stringify({
						id: this.id,
					}),
				});
			},
			// 确定收货
			received() {

				uni.showModal({
					title: '',
					content: '是否要确认收货?',
					success: res => {
						this.$H.post('/order/' + this.id + '/received', {}, { token: true }).then(res => {
							uni.hideLoading()
							uni.showToast({
								title: '确认收货成功',
								icon: "none"
							});
							uni.navigateBack({
								delta: 1
							})
						}).catch(err => {
							uni.hideLoading()
						})
					},
					fail: () => {},
					complete: () => {}
				});

				// uni.navigateTo({
				// 	url: '../../pages/after-sale/after-sale',

				// });
			},

=======
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
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0

		}
	}
</script>

<style>

</style>
