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
<<<<<<< HEAD
						{{path.province}}{{path.city}}{{path.district}} {{path.address}}
=======
						{{path.pth}}{{path.detailPath}}
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
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
<<<<<<< HEAD
						<image v-for="(item,index) in goodsList" :key="index" style="width: 100rpx;height: 100rpx;"
						 class="rounded mr-2"
						 :src="item.cover" mode=""></image>

					</view>
					<view slot="rightContent">共{{goodsList.length}}件</view>
				</uniListItem>
				<uniListItem title="商品总结" :showArrowIcon="false">
					<view slot="rightContent">
						<price color="text-dark">{{totalPrice}}</price>
=======
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
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
					</view>
				</uniListItem>
				<uniListItem title="运费" :showArrowIcon="false">
					<view slot="rightContent">
						包邮
					</view>
				</uniListItem>
<<<<<<< HEAD
				<uniListItem title="优惠券" @click="openCoupon">
					<view slot="rightContent" :class="couponCount > 0 ? 'main-text-color' : 'text-light-muted'" class="">
						<text v-if="coupon.id > 0">{{coupon.type == 0 ? '-' + coupon.value + '元' : coupon.value + '折'}} </text>

						<text color="text-dark">{{couponCount == 0 ? '无可用' : couponCount + "张可用" }} </text>
					</view>
				</uniListItem>
				<uniListItem title="" :showArrowIcon="false">
					<text class="main-text-color">小计</text>
					<view slot="rightContent">
						<price>{{price}}</price>
=======
				<navigator url="../order-coupon/order-coupon">
				<uniListItem title="优惠券">
					<view slot="rightContent" class="text-light-muted">
						<text color="text-dark">无可用</text>
					</view>
				</uniListItem>
				</navigator>
				<uniListItem title="" :showArrowIcon="false">
					<text class="main-text-color">小计</text>
					<view slot="rightContent">
						<price>20.00</price>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
					</view>
				</uniListItem>
				<divider></divider>
				<uniListItem title="发票">
					<view slot="rightContent" extraWidth="40%"
<<<<<<< HEAD
					 @click="openOrderInvoice">
=======
					@click="openOrderInvoice">
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
						电子发票
					</view>
				</uniListItem>
			</view>
		</view>

		<view class="position-fixed d-flex border a-center j-end bottom-0 left-0 right-0 bg-white p-2 fong-md">
			合计:
			<view class="ml-2">
<<<<<<< HEAD
				<price>{{price}}</price>
			</view>

			<view @click="openPayMethods" style="border-radius: 80rpx;" class="px-2 py-1 ml-2   text-white"
			 :class="loading ? 'bg-secondary' : 'main-bg-color'"
			 hover-class="main-bg-hover-color">
				{{loading ? '加载中'  : '去支付'}}
=======
				<price>24.00</price>
			</view>

			<view @click="openPayMethods" style="border-radius: 80rpx;" class="px-2 py-1 ml-2  main-bg-color text-white" hover-class="main-bg-hover-color">
				去支付
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			</view>
		</view>


	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import price from "../../components/common/price.vue"

<<<<<<< HEAD
	import { mapGetters, mapState } from "vuex"
=======
	import { mapGetters } from "vuex"
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	export default {
		components: {
			uniListItem,
			price
		},
		computed: {
<<<<<<< HEAD
			...mapState({ list: state => state.cart.list }),
			...mapGetters(['defaultPath', 'totalPrice']),
			// 商品列表
			goodsList() {
				let list = this.items.map(id => {
					console.log(id)
					return this.list.find(v => {
						return v.id == id
					})
				})
				console.log(JSON.stringify(list));
				return list
			},
			// 最终价格
			price() {
				// 没有优惠券
				if (this.coupon.id == 0) {
					return this.totalPrice
				}
				// 满减
				if (this.coupon.type == 0) {
					return this.totalPrice - this.coupon.value
				}
				// 打折
				return (this.totalPrice * (this.coupon.value / 10)).toFixed(2)
			}
		},
		onShow() {
			// 如果已经提交过订单了,重定向到订单详情页
			if(this.order_id > 0){
				uni.navigateTo({
					url:"../order-detail/order-detail?id=" + this.order_id
				})
			}
		},
		onLoad(e) {
			if (!e.detail) {
				uni.showToast({
					title: "请选择要下单的商品",
					icon: "none"
				})
				return uni.navigateBack({})
			}
			this.items = JSON.parse(e.detail)

			console.log(e.detail);

			console.log(this.goodsList);
=======

			...mapGetters(['defaultPath'])
		},
		onLoad(e) {
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0

			if (this.defaultPath.length) this.path = this.defaultPath[0]
			console.log(this.path);
			// 开启监听选择地址事件
			uni.$on('choosePath', (res) => {
				this.path = res
				console.log("接收到参数", res);
			})
<<<<<<< HEAD
			// 开启监听优惠券
			uni.$on('couponUser', (res) => {
				this.coupon = res
				console.log("接收到参数", res);
			})
			// 计算当前价格有多少可用的优惠券
			this.getCouponCount()
=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
		},
		onUnload() {
			// 关闭监听
			uni.$off("choosePath", () => console.log("关闭监听收货地址"))
<<<<<<< HEAD
			uni.$off("couponUser", () => console.log("关闭监听couponUser"))
		},
		data() {
			return {
				loading: false,
				path: false,
				items: [],
				couponCount: 0,
				coupon: {
					id: 0,
					value: 0,
					type: 0
				},
				order_id:0
			};
		},
		methods: {
			openCoupon() {
				uni.navigateTo({
					url: '/pages/order-coupon/order-coupon?detail=' + JSON.stringify({ price: this.totalPrice }),

				});
			},
			// 下单,支付
			openPayMethods() {
				// 防止重复下单
				if (this.loading) return
					
				

				if (!this.path) {
					return uni.showToast({
						title: "请选择收货地址",
						icon: "none"
					})
				}
				console.log(this.path);
				let options = {
					user_addresses_id: this.path.id,
					items: this.items.join(',')
				}
				// 是否选择优惠券
				if (this.coupon.id > 0) {
					options.coupon_user_id = this.coupon.id
				}

				this.loading = true
				this.$H.post('/order', options, { token: true }).then(res => {
					this.loading = false
					console.log(res);
					// 跳转到支付页面
					uni.navigateTo({
						url: '../pay-methods/pay-methods?detail=' + JSON.stringify({
							id: res.id,
							price: res.total_price
						}),
					});
					// 保存订单id
					this.order_id =res.id
					// 通知购物车更新数据
					uni.$emit('updateCart')
				}).catch(err => {
					this.loading = false
					console.log(err);
					uni.showToast({
						title: "创建订单失败",
						icon: "none"
					})
				})


=======
		},
		data() {
			return {
				path: false
			};
		},
		methods: {
			openPayMethods(){
				uni.navigateTo({
					url: '../pay-methods/pay-methods',
				
				});
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			},
			openPathList() {
				uni.navigateTo({
					url: "../user-path-list/user-path-list?type=choose"
				})
			},
<<<<<<< HEAD
			openOrderInvoice() {
				console.log("4534");
				uni.navigateTo({
					url: '../order-invoice/order-invoice'
				})
			},
			getCouponCount() {
				this.$H.post('/coupon_count', {
					price: this.totalPrice
				}, { token: true }).then(res => {
					console.log(res);
					this.couponCount = res
				}).catch(res => {
					console.log(res);
=======
			openOrderInvoice(){
				console.log("4534");
				uni.navigateTo({
					url:'../order-invoice/order-invoice'
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
				})
			}
		},
	}
</script>

<style lang="scss">

</style>
