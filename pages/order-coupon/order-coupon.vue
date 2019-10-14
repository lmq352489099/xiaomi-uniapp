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

							<coupon v-for="(item,index) in tab.list" :key="index"
							 :item="item" :index="index"></coupon>

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
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: "可用",
						no_thing: 'no_receiving',
						list: [{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: false
							},
							{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: true
							},
							{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: true
							},	{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: true
							},	{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: true
							},	{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: true
							},	{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: true
							},	{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: true
							},	{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: true
							},	{
								title: "第三季防微信100元券",
								start_time: "	2019-10-01",
								end_time: "2019-11-01",
								price: 100,
								desc: "满300元使用",
								status: true,
								disable: true
							}
						],
						msg: "你还没有可用的优惠券"
					},
					{ name: "已失效", no_thing: 'no_comment', list: [], msg: "你还没有优惠券" }
				],
			};
		},
		methods: {
			changTab(e) {
				this.tabIndex = e
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
