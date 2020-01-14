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
					 v-if="item.skus_type ==1"
					 @tap.stop="showPopup(index,item)">
						<!-- 		<text class="mr-1" v-for="(attr,attrIndex) in item.attrs" :key="attrIndex">
							{{attr.list[attr.selected].name}}
						</text> -->
						{{item.skusText}}
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



		<view class="mt-5 text-center main-text-color font-md font-weight">为你推荐</view>
		<view class="mb-3 pt-3 position-relative d-flex a-center j-center text-secondary">
			<view class="px-2 position-absolute " style="z-index: 2; background: #F5F5F5;">买的人还买了</view>
			<view class="position-absolute " style="background: #dddddd; height: 2upx;left: 0;right: 0;"></view>
		</view>
		<!-- 为你推荐 -->
		<view class="row j-sb bg-white">
			<common-list v-for="(item,index) in hotList" :item="item" :key='index'></common-list>
		</view>


		<!-- 合计 -->
		<!-- #ifdef APP-PLUS -->
		<view style="height: 100upx;" class="bg-white heji-hei"></view>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view style="height: 200upx;" class="bg-white heji-hei"></view>
		<!-- #endif -->

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
				 hover-class="main-bg-hover-color" @tap="orderConfirm">
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
		<skuPopup></skuPopup>

	</view>
</template>

<script>
	import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
	import price from "@/components/common/price.vue"
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import numberBox from "@/components/uni-ui/uni-number-box/uni-number-box.vue"
	import skuPopup from "../../components/cart/sku-popup.vue"

	import commonList from "@/components/common/common.vue"
	export default {
		components: {
			commonList,
			uniNavBar,
			price,
			numberBox,
			skuPopup
		},
		data() {
			return {
				isedit: false,
				hotList: []

			};
		},
		onPullDownRefresh() {
			this.getData()
		},
		methods: {
			...mapActions(['doSelectAll', 'doDelGoods', 'doShowPopup', 'doHidePopup', 'updateCartList']),
			...mapMutations(['selectItem', 'initCartList', 'unSelectAll']),
			changeNum(e, item, index) {
				console.log("进来之后会先请求监听");
				if (e == item.num) return
				uni.showLoading({
					title: "加载中..."
				})

				this.$H.post('/cart/updatenumber/' + item.id, { num: e }, { token: true }).then(res => {
					console.log(res);
					item.num = e
					uni.hideLoading()
				})

			},
			// 订单结算
			orderConfirm() {
				if (this.selectedList.length == 0) {
					return uni.showToast({
						title: "请选择要结算的商品",
						icon: "none"
					})

				}
				uni.navigateTo({
					url: "../order-confirm/order-confirm?detail=" + JSON.stringify(this.selectedList)
				})
			},
			showPopup(index, item) {
				if (!this.isedit) return
				this.$H.get('/cart/' + item.id + '/sku', {}, {
					token: true
				}).then(res => {



					// 商品规格(选项部分)
					// {
					// 		title: "颜色",
					// 		selected: 0,
					// 		list: [{ name: "黄色" }, { name: "黑色" }, { name: "黄色" }]
					// 	},
					let ckeck = item.skusText.split(",")
					res.selects = res.goods_skus_card.map((v, i) => {
						// 选择商品标题的时候和弹出的商品selected要一样
						// 判断
						let selected = 0
						let list = v.goods_skus_card_value.map((v1, i1) => {
							if (ckeck[i] == v1.value) {
								selected = i1
							}

							return {
								id: v1.id,
								name: v1.value
							}
						})

						return {
							id: v.id,
							title: v.name,
							selected,
							list: list
						}
					})
					// 商品规格(匹配价格)
					res.goods_skus.forEach(item => {
						let arr = []

						for (let key in item.skus) {
							arr.push(item.skus[key].value)
						}
						item.skusText = arr.join(',')
					})

					console.log(res);


					// if (this.isedit) {
					this.doShowPopup({
						index,
						data: res
					})
					// }
				})


			},
			// 获取数据
			getData() {
				// 获取购物车数据
				this.updateCartList().then(res => {
					uni.stopPullDownRefresh()
				}).catch(err => {
					uni.stopPullDownRefresh()
				})
				// this.$H.get('/cart', {}, { token: true, toast: false }).then(res => {
				// 	// 取消选中状态
				// 	this.unSelectAll()

				// 	// 赋值
				// 	this.initCartList(res)
				// 	uni.stopPullDownRefresh()
				// }).catch(err=>{
				// 		uni.stopPullDownRefresh()
				// })



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
			}
		},
		onLoad() {
			this.getData()

			// 监听购物车更新
			// uni.$on('updateCart', () => {
			// 	this.getData()
			// })
		},
		beforeDestroy() {
			uni.$off('updateCart')
		},
		computed: {
			...mapState({
				list: state => state.cart.list,
				selectedList: state => state.cart.selectedList
			}),
			...mapGetters([
				'checkedAll',
				'totalPrice',
				'disableSelectAll',
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
