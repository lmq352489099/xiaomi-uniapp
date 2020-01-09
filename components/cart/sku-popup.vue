<template>
	<commonPopup :popupClass="popupShow" @hide="doHidePopup">

		<view class="d-flex a-center" style="height: 275rpx;">
			<image :src="popupData.cover || '/static/images/demo/list/1.jpg'"
			 style="height: 180rpx;width: 180rpx;" mode="widthFix" class="border rounded"></image>
			<view class="pl-2">
				<price priceSize="font-lg" unitSize="font">{{showPrice}}</price>
				<view class="d-block">
					<!-- 		<text class="mr-1" v-for="(attr,attrIndex) in popupData.attrs" :key="attrIndex">
						{{attr.list[attr.selected].name}}
					</text> -->
					{{checkedSkus}}
				</view>
			</view>
		</view>
		<!-- 表单部分 660rpx -->
		<scroll-view scroll-y class="w-100" style="height: 660rpx;">
			<card :headTitle="item.title" v-for="(item,index) in popupData.selects" :key="index" :headBorderBottom="false"
			 :headTitleWeight="false">
				<zcmRradioGroup :label="item" :selected111.sync='item.selected'></zcmRradioGroup>
			</card>
			<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
				<text>购买数量</text>
				<numberBox :min='1' @change="popupData.item.num = $event" :value="popupData.item.num"></numberBox>
			</view>
		</scroll-view>
		<!-- anniu 100rpx -->
		<view class="main-bg-color text-white font-md d-flex a-center j-center "
		 @tap.stop="doHidePopup"
		 hover-class="main-bg-hover-color"
		 style="height: 100rpx;margin: 0 -30rpx;">
			确定
		</view>
	</commonPopup>
</template>

<script>
	import commonPopup from "@/components/common/common-popup.vue"
	import price from "@/components/common/price.vue"
	import zcmRradioGroup from '@/components/common/radio-group.vue';
	import card from '@/components/common/card.vue';
	import numberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
	export default {
		components: {
			card,
			commonPopup,
			price,
			zcmRradioGroup,
			numberBox
		},
		computed: {
			...mapState({
				popupShow: state => state.cart.popupShow,
				popupData: state => state.cart.popupData
			}),
			// ...mapGetters(['popupData'])
			checkedSkus() {
				// 拿到现在的sku组成字符串(会自动监听)与后端传过来的进行对比
				let checkedSkus = this.popupData.selects.map(v => {
					return v.list[v.selected].name
				})
				console.log(checkedSkus);
				return checkedSkus.join(',')
			},
			// 选择skus的索引 与后端传过来的进行对比价格
			checkedSkusIndex() {
			
				let index = this.popupData.goods_skus.findIndex(item => {
					return item.skusText === this.checkedSkus
				})
				return index
			},
			// 显示价格
			showPrice() {
				console.log(this.checkedSkus);
				// 没有匹配就显示默认的价格
				if (this.checkedSkusIndex < 0) {
					return this.popupData.item.pprice || 0.00
				}
				// 与后端传过来的进行对比价格
				return this.popupData.goods_skus[this.checkedSkusIndex].pprice
			},


		},


		watch: {
			popupData(newValue, oldValue) {
				console.log(newValue);
			}
		},
		methods: {
			...mapActions(['doHidePopup']),
		}
	}
</script>

<style>
</style>
