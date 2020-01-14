<template>
	<view class="d-flex flex-column " style="height: 100%;">
		<!-- 选项卡 -->
		<view class="d-flex bg-white a-center font-md text-muted border-top border-light-secondary border-bottom">
			<view class="flex-1 d-flex j-center py-2" v-for="(item,index) in tabBars" :key='index'
			 :class="tabIndex == index ? `tabactive` : '' "
			 @tap="changTab(index)">
				{{item.name}}
			</view>
		</view>



		<scroll-view scroll-y="true" class="flex-1" style="background: #F5F5F5;">
			<!-- 订单列表 -->
			<block v-for="(tab,tabI) in tabBars" :key='tabI'>
				<view class="position-relative" v-show="tabI == tabIndex" style=" min-height: 440rpx;">

					<template v-if="tab.list.length > 0">
						<view class="p-3">

							<coupon @click="choosecoupon(item)" v-for="(item,index) in tab.list" :key="index"
							 :item="item" :index="index">
								<text v-if="item.disable">已使用</text>
								<text v-else>{{item.status ? '去使用' : validText}}</text>


							</coupon>

						</view>
					</template>

					<!-- 默认无 -->
					<template v-else>
						<!-- <view class="position-relative border" style="height: 400rpx;"> -->
						<no-thing :icon="tab.no_thing" :msg="tab.msg"></no-thing>
						<!-- </view> -->
					</template>

				</view>
			</block>
		</scroll-view>

	</view>
</template>

<script>
	import noThing from '@/components/common/no-thing.vue';
	import coupon from "@/components/order-coupon/coupon/coupon.vue"
	export default {
		components: {
			noThing,
			coupon
		},
		onLoad(e) {
			if (e.detail) { this.price = JSON.parse(e.detail).price }
			this.getData()
		},
		data() {
			return {
				tabIndex: 0,
				price: 0,
				tabBars: [{
						name: "可用",
						no_thing: 'no_receiving',
						msg: "你还没有可用的优惠券",
						page: 1,
						key: "valid",
						firstLoad: false,
						list: [],

					},
					{
						name: "已失效",
						page: 1,
						key: "invalid",
						no_thing: 'no_comment',
						firstLoad: false,
						list: [],
						msg: "你还没有优惠券"
					}
				],
			};
		},
		computed: {
			// 是否失效
			isvalid() {
				return this.tabBars[this.tabIndex].key
			},
			//当前页码
			page() {
				return this.tabBars[this.tabIndex].page
			},
			validText() {
				return this.tabIndex === 0 ? '不可用' : '已失效'
			}
		},
		methods: {
			// 
			getData() {
				let index = this.tabIndex
				this.$H.get('/usercoupon/' + this.page + "/" + this.isvalid, {}, {
					token: true
				}).then(res => {
					this.tabBars[index].list = res.map(item => {
						let status = (index === 0) && (this.price >= parseFloat(item.coupon.min_price))
						return {
							id: item.id,
							title: item.coupon.name,
							start_time: item.coupon.start_time,
							end_time: item.coupon.end_time,
							price: item.coupon.value,
							desc: item.coupon.desc,
							status: status, //为0 生效,
							disable: item.used, //user 1 使用过
							type: item.coupon.type // 0位折 1为元
						}
						this.tabBars[index].firstLoad = true
						console.log(res);
					})
					this.tabBars[index].firstLoad = true
					console.log(res);
				})
			},
			changTab(e) {
				this.tabIndex = e

				if (!this.tabBars[e].firstLoad) {
					this.getData()
				}
			},
			// 选择优惠券
			choosecoupon(item) {
				if (item.disable) {
					return uni.showToast({
						title: "该优惠券已经使用过了",
						icon: "none"
					})
				}
				// 已失效|不可用
				if(!item.status){
					return uni.showToast({
						title: "该优惠券" + this.validText,
						icon: "none"
					})
				}


				console.log(item);
				uni.$emit('couponUser', {
					id: item.id,
					value: item.price,
					type: item.type
				})
				uni.navigateBack({

				})
			}
		}
	}
</script>

<style lang="scss">
	.tabactive {
		border-bottom: 5rpx solid #FD6801;
		color: #FD6801;
		margin-bottom: -2rpx;
	}
</style>
