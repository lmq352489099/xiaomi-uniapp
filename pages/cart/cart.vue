<template>
	<view style="background: #F5F5F5;">
		<uni-nav-bar :fixed="true" @click-right="isedit = !isedit" :shadow="false" :statusBar="true" :right-text="isedit ?'完成': '编辑' "
		 title="购物车"></uni-nav-bar>

		<!-- 购物车为空 -->

		<view class="py-5 d-flex a-center j-center bg-white" v-if="disableSelectAll">
			<view class="iconfont icon-gouwuche text-light-muted" style="font-size:50upx"></view>
			<text class="text-light-muted mx-2">购物车还是为空</text>
			<view class="px-2 py-1 border border-light-secondary rounded"
			 hover-class="bg-light-secondary ">
				去逛逛</view>
		</view>
		<!-- 购物车商品列表 -->

		<view v-else class="bg-white px-2">
			<view class="d-flex a-center py-3 border-bottom border-light-secondary"
			 v-for="(item,index) in list" :key="index">
				<label @tap="selectItem(index)" class="radio  d-flex a-center j-center flex-shrink" style="width: 80upx; height: 80upx;">
					<radio value="item.id" color="#FD6801" :checked='item.checked' />
				</label>
				<image :src="item.cover"
				 class="border border-light-secondary rounded py-2 flex-shrink"
				 mode="widthFix" style="height: 150rpx;width: 150rpx;"></image>


				<view class="flex-1 d-flex flex-column pl-2">
					<view class="text-dark" style="font-size: 35upx;"> {{item.title}}</view>
					<!-- 规格属性 -->
					<view class="d-flex text-light-muted mb-1 "
					 :class="isedit ? 'p1 bg-light-secondary mb-2' : ''"
					 @tap.stop="doShowPopup(index)">
						<text class="mr-1" v-for="(attr,attrIndex) in item.attrs" :key="attrIndex">
							{{attr.list[attr.selected].name}}
						</text>
						<view v-if="isedit" class="iconfont icon-bottom font ml-auto"></view>
					</view>
					<view class="mt-auto d-flex j-sb">
						<price>{{item.pprice}}</price>
						<view class="a-self-end">
							<numberBox @change="changeNum($event,item,index)" :min='item.minnum' :value="item.num" :max="item.maxnum"></numberBox>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 合计 -->
		<view style="height: 100upx;" class="bg-white"></view>
		<view
		 class="d-flex heji border-top bg-white border-light-secondary a-stretch  a-center position-fixed left-0 right-0 bottom-0"
		 style="height:100upx ;z-index: 10000;">
			<label @tap="doSelectAll" class="radio  d-flex a-center j-center flex-shrink" style="width: 120upx;">
				<radio :disabled="disableSelectAll" value="1" color="#FD6801" :checked="checkedAll" />
			</label>
			<template v-if="!isedit">
				<view class="flex-1 d-flex a-center j-center font-md">
					合计 <price>{{totalPrice}}</price>
				</view>
				<view class="flex-1 d-flex a-center j-center main-bg-color text-white font-md"
				 hover-class="main-bg-hover-color">
					结算
				</view>
			</template>

			<template v-if="isedit">
				<view class="flex-1 d-flex a-center j-center font-md text-white main-bg-color">
					引入收藏
				</view>
				<view class="flex-1 d-flex a-center j-center bg-danger text-white font-md"
				 hover-class="main-bg-hover-color"
				 @tap="doDelGoods">
					删除
				</view>
			</template>
		</view>


		<!-- 弹出框 -->
		<commonPopup :popupClass="popupShow" @hide="doHidePopup">

			<view class="d-flex a-center" style="height: 275rpx;">
				<image src="../../static/images/demo/list/1.jpg"
				 style="height: 180rpx;width: 180rpx;" mode="widthFix" class="border rounded"></image>
				<view class="pl-2">
					<price priceSize="font-lg" unitSize="font">2365</price>
					<view class="d-block">
						<text class="mr-1" v-for="(attr,attrIndex) in popupData.attrs" :key="attrIndex">
							{{attr.list[attr.selected].name}}
						</text>
					</view>
				</view>
			</view>
			<!-- 表单部分 660rpx -->
			<scroll-view scroll-y class="w-100" style="height: 660rpx;">
				<card :headTitle="item.title" v-for="(item,index) in popupData.attrs" :key="index" :headBorderBottom="false"
				 :headTitleWeight="false">
					<zcmRradioGroup :label="item" :selected111.sync='item.selected'></zcmRradioGroup>
				</card>
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<numberBox :min='1' @change="popupData.num = $event" :value="popupData.num"></numberBox>
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

	</view>
</template>

<script>
	import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
	import price from "@/components/common/price.vue"
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import numberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	import card from '@/components/common/card.vue';
	import zcmRradioGroup from '@/components/common/radio-group.vue';
	import commonPopup from "@/components/common/common-popup.vue"
	export default {
		components: {
			uniNavBar,
			price,
			numberBox,
			card,
			zcmRradioGroup,
			commonPopup
		},
		data() {
			return {
				isedit: false,

			};
		},
		methods: {
			...mapActions(['doSelectAll', 'doDelGoods', 'doShowPopup', 'doHidePopup']),
			...mapMutations(['selectItem']),
			changeNum(e, item) {
				item.num = e
			}
		},
		onLoad() {},
		computed: {
			...mapState({
				list: state => state.cart.list,
				popupShow: state => state.cart.popupShow
			}),
			...mapGetters([
				'checkedAll',
				'totalPrice',
				'disableSelectAll',
				'popupData'
			])
		}
	}
</script>

<style lang="scss">
	/* #ifdef H5 */
	.heji {
		bottom: 50px;
	}

	/* #endif */
</style>
