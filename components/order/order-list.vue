<template>
	<view class="bg-white" @click.stop="openDetail">
		<divider></divider>
		<!-- 头部 -->
		<view class="d-flex a-center p-2 border-bottom border-light-secondary">
			<text class="text-light-muted font-md">{{item.create_time}}</text>
			<text class="font-md main-text-color ml-auto">{{item.status}}</text>
		</view>
		<!-- 身体 -->
		<view class="px-2 ">
			<view v-for="(item1,index1) in item.order_items" :key="index1" class="border-bottom border-light-secondary d-flex a-center py-2">
				<image :src="item1.cover" mode="widthFix"
				 style="width: 150rpx;height: 150rpx;" class="rounded mx-2 flex-shrink"></image>
				<view class="flex-1  ">
					<view class="d-flex a-center">
						<text class="font-md text-dark">{{item1.title}}</text>
						<text class="font-md text-muted ml-auto">{{item1.pprice}}</text>
					</view>
					<view class="d-flex a-center">
						<text class="font text-dark">{{item1.attrs}}</text>
						<text class="font text-muted ml-auto">X{{item1.num}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="d-flex a-center p-2">

			<text class="text-dark font-md ml-auto">
				共{{item.order_items.length}}件商品,合计: ¥{{item.total_price}}
			</text>
		</view>
		<view class="d-flex j-end a-center px-2 pb-2">
			<template v-if="item.status === '待支付'">
				<common-button @click="openPayMethods">去支付</common-button>
				<common-button @click="closeOrder">取消订单</common-button>
			</template>
			<template v-else-if="item.status === '待发货'">
				<common-button>提醒发货</common-button>
				<common-button @click="applyRefund">申请退款</common-button>
			</template>
			<template v-else-if="item.status === '待收货'">
				<common-button @click="openLogistics">查看物流</common-button>
				<common-button @click="received">确认收货</common-button>
			</template>
			<template v-else>
				<common-button @click="openDetail">查看详情</common-button>
			</template>
		</view>
	</view>
</template>

<script>
	import commonButton from "../common/common-button.vue"
	export default {
		components: {
			commonButton
		},
		props: {
			item: Object,
			index: Number
		},
		methods: {
			// 去支付
			openPayMethods() {
				// 跳转到支付页面
				uni.navigateTo({
					url: '../pay-methods/pay-methods?detail=' + JSON.stringify({
						id: this.item.id,
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
							this.$H.post('/closeorder/' + this.item.id, {}, { token: true }).then(res => {
								console.log(res);

								uni.hideLoading()
								uni.showToast({
									title: '取消订单成功',
									icon: "none"
								});
								this.$emit('update')
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
						id: this.item.id,
					})

				});
			},
			// 查看物流
			openLogistics() {
				uni.navigateTo({
					url: '/pages/logistics-detail/logistics-detail?detail=' + JSON.stringify({
						id: this.item.id,
					}),
				});
			},
			// 确定收货
			received() {

				uni.showModal({
					title: '',
					content: '是否要确认收货?',
					success: res => {
						this.$H.post('/order/' + this.item.id + '/received', {}, { token: true }).then(res => {
							uni.hideLoading()
							uni.showToast({
								title: '确认收货成功',
								icon: "none"
							});
							this.$emit('update')
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
			openDetail() {
				uni.navigateTo({
					url: '../../pages/order-detail/order-detail?id='+ this.item.id,
				})
			},


		}
	}
</script>

<style>
</style>
