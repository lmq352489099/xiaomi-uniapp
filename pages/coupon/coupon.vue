<template>
	<view class="p-3">
		<coupon
		 v-for="(item,index) in list" :key="index" :item="item" :index="index"
		 @click="getCoupon(item)">
			<text v-if="!item.status">已失效 </text>
			<text v-else-if="item.disable">已领取</text>
			<text v-else> 马上领取 </text>
		</coupon>
		<divider />
		<view
		 v-if="list.length > 0"
		 class="d-flex a-center j-center text-light-muted font-md py-3">
			{{ loadtext }}
		</view>

		<noThing v-else msg="没有优惠券"></noThing>

	</view>
</template>

<script>
	import coupon from '@/components/order-coupon/coupon/coupon.vue';
	import noThing from '@/components/common/no-thing.vue';
	export default {
		components: {
			coupon,
			noThing
		},
		onLoad() {
			this.getData()
		},
		data() {
			return {
				list: [],
				// 上啦加载更多 2. 加载中3.没有更多
				loadtext: "上啦加载更多",
				page: 1
			}
		},

		onPullDownRefresh() {
			console.log("啦");
			this.page = 1
			this.getData(true).then(res => {
				uni.stopPullDownRefresh()
			}).catch(err => {
				uni.stopPullDownRefresh()
			})
		},
		// 上啦加载
		onReachBottom() {
			if (this.loadtext !== "上啦加载更多") return
			this.loadtext = "加载中..."
			this.page++
			this.getData()
		},
		methods: {
			getData(refresh = false) {
				return new Promise((res, rej) => {
					this.$H.get('/coupon/' + this.page, {}, { token: true }).then(result => {


						let list = result.map(item => {
							let time = (new Date()).getTime()
							console.log(item.end_time);
							let status = (item.end_time > time / 1000) && item.status // 有效的
							return {
								id: item.id,
								title: item.name,
								start_time: item.start_time,
								end_time: item.end_time,
								price: item.value,
								desc: item.desc,
								status: status, //false 已失效
								disable: (item.coupon_user.length > 0) // true 已领取 //数组大于0说明用户领取过了
							}
						})
						this.list = !refresh ? [...this.list, ...list] : [...list]

						this.loadtext = result.length == 10 ? "上啦加载更多" : "没有更多了"


						res(result)
					}).catch(err => {
						this.page--
						rej(err)
					})

				})





			},
			// 领取优惠券
			getCoupon(item) {
				console.log(item);
				this.$H.post("/getcoupon/" + item.id, {}, { token: true }).then(res => {
					console.log(res);
					// 设为已领取状态
					item.disable = true
					uni.showToast({
						title: '领取成功',
						icon: "none"
					});
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>

<style>

</style>
