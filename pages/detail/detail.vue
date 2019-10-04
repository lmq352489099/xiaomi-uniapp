<template>
	<view>

		<!-- 商品详情大图 -->
		<swiperImage :resdata="banners" height="750" :preview="true"></swiperImage>
		<!-- 基础详情 -->
		<baseInfo :detail="detail"></baseInfo>
		<!-- 滚动商品特性 w170*h10 -->
		<scrollAttrs :baseAttrs='baseAttrs'></scrollAttrs>
		<!-- 属性选择 -->
		<view class="p-2">
			<view class="rounded border bg-light-secondary">
				<uni-list-item @click="show('attr')">
					<view class="d-flex">
						<text class="mr-2 text-muted">已选</text>
						<text>火焰红 64G 标配</text>
					</view>
				</uni-list-item>
				<uni-list-item @click="show('express')">
					<view class="d-flex">
						<text class="mr-2 text-muted">配送</text>
						<text class="mr-2">北京 东城区</text>
						<text class="main-text-color">现配</text>
					</view>
				</uni-list-item>
				<uni-list-item extraWidth="15%" @click="show('service')">
					<view class="d-flex a-center">
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color"></view>
							小米自营
						</view>
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color"></view>
							小米发货
						</view>
						<view class="text-muted font d-flex a-center mr-2">
							<view class="iconfont icon-finish main-text-color"></view>
							七天无理由退货
						</view>
					</view>
				</uni-list-item>
			</view>
		</view>
		<!-- 横向滚动评论 -->
		<scrolllComments :comments="comments"></scrolllComments>
		<!-- 商品详情 -->

		<view class="py-4 px-2">
			<uParse className='uparse' :content="context" @preview="preview" @navigate="navigate"></uParse>
		</view>
		<!-- 特闷推荐 -->
		<card headTitle="热门推荐" :headBorderBottom="false" :headTitleWeight="false">
			<view class="row j-sb">
				<common-list v-for="(item,index) in hotList" :item="item" :key='index'></common-list>
			</view>
		</card>

		<!-- 底部操作条 -->
		<!-- 站位 -->
		<view style="height: 100rpx;"></view>
		<!-- 底部操作条 -->
		<bottomBtn @show="show('attr')"></bottomBtn>
		<!-- 弹出框 -->
		<commonPopup :popupClass="popup.attr" @hide="hide('attr')">

			<view class="d-flex a-center" style="height: 275rpx;">
				<image src="../../static/images/demo/list/1.jpg"
				 style="height: 180rpx;width: 180rpx;" mode="widthFix" class="border rounded"></image>
				<view class="pl-2">
					<price priceSize="font-lg" unitSize="font">2365</price>
					<text class="d-block">
						火焰红 64GB 标配
					</text>
				</view>
			</view>
			<!-- 表单部分 660rpx -->
			<scroll-view scroll-y class="w-100" style="height: 660rpx;">
				<card :headTitle="item.title" v-for="(item,index) in selects" :key="index" :headBorderBottom="false"
				 :headTitleWeight="false">
					<zcmRradioGroup :label="item" :selected111.sync='item.selected'></zcmRradioGroup>
				</card>
				<view class="d-flex j-sb a-center p-2 border-top border-light-secondary">
					<text>购买数量</text>
					<!-- -->
					<!-- :selected711.sync= 'detail.num' -->
					<uni-number-box :min='1' @change="detail.num = $event" :value="detail.num"></uni-number-box>
				</view>
			</scroll-view>
			<!-- anniu 100rpx -->
			<view class="main-bg-color text-white font-md d-flex a-center j-center "
			 @tap.stop="addCart"
			 hover-class="main-bg-hover-color"
			 style="height: 100rpx;margin: 0 -30rpx;">
				加入购物车
			</view>
		</commonPopup>



		<!-- 服务说明 -->
		<!-- 弹出框 -->
		<commonPopup :popupClass="popup.service" @hide="hide('service')">
			<!-- 275 + 660   935 -100 = 835 做标题   -->
			<view class="d-flex a-center j-center font-md border-bottom border-light-secondary" style="height:100rpx;">
				服务说明
			</view>
			<!-- 表单部分 660rpx -->
			<scroll-view scroll-y class="w-100" style="height: 835rpx;">
				<view>
					<view class="d-flex a-center">
						<view class="iconfont icon-finish main-text-color mr-1">

						</view>
						小米自营
					</view>
					<text class="text-light-muted font pl-4">
						不管满多少,就是不包邮
					</text>
				</view>
			</scroll-view>
			<!-- 按钮 100rpx -->
			<view class="main-bg-color text-white font-md d-flex a-center j-center "
			 @tap.stop="hide('service')"
			 hover-class="main-bg-hover-color"
			 style="height: 100rpx;margin: 0 -30rpx;">
				选择新的地址
			</view>
		</commonPopup>

		<!-- 收货地址 -->

		<!-- 弹出框 -->
		<commonPopup :popupClass="popup.express" @hide="hide('express')">
			<!-- 275 + 660   935 -100 = 835 做标题   -->
			<view class="d-flex a-center j-center font-md border-bottom border-light-secondary" style="height:100rpx;">
				收货地址
			</view>
			<!-- 表单部分 660rpx -->
			<scroll-view scroll-y class="w-100" style="height: 835rpx;">
				<uniListItem v-for="(item,index) in pathList" :key="index">
					<view class="iconfont icon-dingwei font-weight font-md">
						{{item.name}}
					</view>
					<view class="font text-light-muted">{{item.path}} {{item.detailPath}}</view>
				</uniListItem>
			</scroll-view>
			<!-- 按钮 100rpx -->
			<view class="main-bg-color text-white font-md d-flex a-center j-center "
			 @tap.stop="openCreatePath"
			 hover-class="main-bg-hover-color"
			 style="height: 100rpx;margin: 0 -30rpx;">
				选择新的地址
			</view>
		</commonPopup>


	</view>
</template>

<script>
	import swiperImage from "@/components/index/swiper-Image.vue"
	import baseInfo from '@/components/detail/base-info.vue';
	import scrollAttrs from '@/components/detail/scroll-attrs.vue';
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import scrolllComments from '@/components/detail/scrolll-comments.vue';
	import uParse from '@/components/uni-ui/uParse/src/wxParse.vue'
	import card from '@/components/common/card.vue';
	import commonList from "@/components/common/common.vue"
	import bottomBtn from "@/components/detail/bottom-btn.vue"
	import commonPopup from "@/components/common/common-popup.vue"
	import price from '@/components/common/price.vue';
	import zcmRradioGroup from '@/components/common/radio-group.vue';
	import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue';

	var htmlString =
		`
	<p>
			<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eec2e38c06ca4747e5640a4d21332b6b.jpg">
			<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf8e8e88b858d3ff49436538987d4801.jpg">
			<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eec2e38c06ca4747e5640a4d21332b6b.jpg">
			<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ab1fa03f3eccd7a94c85838b37ea19d.jpg">
			<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/546795e0c2f27dc9c1ab747ebd421a9a.jpg">
			<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19e8e24c4b1b5b65ebb18056f4d4b774.jpg">
			<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c965d19e02c5d73f171d9df72ae8e963.jpg">
			<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4b78bb87aab6fcc9ee522eafb7cd94c.jpg">
			<img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png">
	</p>
	    `
	import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
	export default {
		components: {
			swiperImage,
			uniListItem,
			baseInfo,
			scrolllComments,
			scrollAttrs,
			uParse,
			card,
			commonList,
			bottomBtn,
			commonPopup,
			price,
			zcmRradioGroup,
			uniNumberBox
		},
		props: {

		},
		// 监听页面返回事件
		onBackPress() {
			// 关闭模态框
			for (let key in this.popup) {
				if (this.popup[key] !== 'none') {
					this.hide(key)
					return true
				}

			}

		},
		computed: {
			...mapState({ pathList: state => state.path.list })
		},
		data() {
			return {
				// 弹出框
				// popupClass: 'none',
				popup: {
					attr: 'none',
					express: 'none',
					service: "none"
				},
				context: htmlString,
				selects: [{
						title: "颜色",
						selected: 0,
						list: [{ name: "黄色" }, { name: "黑色" }, { name: "黄色" }]
					},
					{
						title: "容量",
						selected: 0,
						list: [{ name: "64GB" }, { name: "128GB" }]
					},
					{
						title: "套餐",
						selected: 0,
						list: [{ name: "标配套餐一" }, { name: "标配套餐二" }, { name: "标配套餐三" }]
					}
				],

				comments: [{
						userpic: "/static/images/demo/demo6.jpg",
						username: "初棉",
						create_time: '2018/08/02',
						goods_num: '12',
						context: "啊啊啊",
						imgList: [
							"/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg"
						]
					},
					{
						userpic: "/static/images/demo/demo6.jpg",
						username: "初棉",
						create_time: '2018/08/02',
						goods_num: '12',
						context: "啊啊啊",
						imgList: [
							"/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg"
						]
					},
					{
						userpic: "/static/images/demo/demo6.jpg",
						username: "初棉",
						create_time: '2018/08/02',
						goods_num: '12',
						context: "啊啊啊",
						imgList: [
							"/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg"
						]
					},
					{
						userpic: "/static/images/demo/demo6.jpg",
						username: "初棉",
						create_time: '2018/08/02',
						goods_num: '12',
						context: "啊啊啊",
						imgList: [
							"/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg"
						]
					},
					{
						userpic: "/static/images/demo/demo6.jpg",
						username: "初棉",
						create_time: '2018/08/02',
						goods_num: '12',
						context: "啊啊啊",
						imgList: [
							"/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg", "/static/images/demo/demo6.jpg"
						]
					},
				],
				banners: [
					{ src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13c41ccd1bd8b38f9017c6faf569fb24.jpg' },
					{ src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg' }
				],
				baseAttrs: [
					{ icon: "icon-cpu", title: "CPU", desc: "蛟龙845八核" },
					{ icon: "icon-cpu", title: "CPU", desc: "蛟龙845八核" },
					{ icon: "icon-cpu", title: "CPU", desc: "蛟龙845八核" },
					{ icon: "icon-cpu", title: "CPU", desc: "蛟龙845八核" },
					{ icon: "icon-cpu", title: "CPU", desc: "蛟龙845八核" },
					{ icon: "icon-cpu", title: "CPU", desc: "蛟龙845八核" },
					{ icon: "icon-cpu", title: "CPU", desc: "蛟龙845八核" },
				],
				detail: {
					id: 20,
					title: "小米MIX3 6GB+128GB",
					desc: "磁动力滑盖全面屏 / 前后旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电",
					cover: "/static/images/demo/list/1.jpg",
					pprice: 3299,
					num: 1,
					max: 100
				},

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

			...mapMutations(['addGoodsToCart']),
			openCreatePath() {
				uni.navigateTo({
					url: "../user-path-edit/user-path-edit"
				})
				this.hide('express')
			},
			// 加入购物车
			addCart() {
				let goods = this.detail
				goods['checked'] = false
				goods['attrs'] = this.selects
				// 加入购物车
				this.addGoodsToCart(goods)

				// 隐藏筛选框
				this.hide('attr')
				// 成功提示
				uni.showToast({
					title: '加入成功'
				})
			},
			hide(key) {
				this.popup[key] = 'hide'
				setTimeout(() => {
					this.popup[key] = 'none'
				}, 200)
			},
			show(key) {
				this.popup[key] = 'show'
				// this.popupClass = 'show'
			},
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
				uni.showModal({
					content: "点击链接为：" + href,
					showCancel: false
				})
			}
		}
	}
</script>

<style lang="scss">
	.uparse {
		.p {
			padding: 0 !important;
		}

		div {
			line-height: 0 !important;
		}
	}
</style>
