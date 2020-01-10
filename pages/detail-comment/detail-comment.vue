<template>
	<view>
		<view class="p-2">
			<view class="d-flex a-center py-2 border-bottom border-light-secondary">
				<text class="text-muted">用户评论 ({{total}})</text>
				<text class="main-text-color ml-auto mr-1">{{good_rate * 100 + '%'}}</text>
				<text class="text-muted">满意</text>
			</view>
			<view class="d-flex flex-wrap pt-2" style="margin-right: -20rpx;">
				<view class="px-2 py border rounded mr-2 mb-2 cate-item"
				 :class="cateIndex == index ? 'active' : ''"
				 @tap="catechange(index)"
				 v-for="(item,index) in cateList" :key="index">

					{{item.name}}
				</view>
			</view>
		</view>
		<divider></divider>
		<view class="p-2 d-flex a-start border-bottom border-light-secondary"
		 v-for="(item,index) in list" :key="index">
			<image :src="item.user.avatar" mode="widthFix" style="width: 90rpx;height: 90rpx;"
			 class="rounded flex-shrink"></image>
			<view class="pl-2 flex-1 ">
				<view class="d-flex a-center " style="height: 90rpx;">
					<text class="font-md text-primary font-weight  ml-auto">{{item.user.nickname}}</text>
					<view class="iconfont icon-service main-text-color">
						<text class="pl-1">{{item.rating | rating}}</text>
					</view>
				</view>
				<view class="line-h-md font-md">
					{{item.review.data}}
				</view>
				<view class="row" v-if="item.review.image.length > 0">
					<view class="span24-8 px pb" :key="imgIndex" v-for="(img,imgIndex) in item.review.image">
						<image :src="img" mode="widthFix" style="height: 100rpx;"></image>
					</view>
				</view>
				<view class="d-flex a-center ">
					<text class="text-light-muted mr-auto">{{item.review_time | formatTime}}</text>
					<view class="d-flex a-center text-light-muted mr-2">
						{{item.goods_num}} <text class="iconfont icon-dianzan text-muted ml-1"></text>
					</view>
					<view class="d-flex a-center text-light-muted ">
						10 <text class="iconfont icon-pinglun text-muted ml-1"></text>
					</view>
				</view>
				<!-- 客服回复 -->
<<<<<<< HEAD
				<view class="bg-light-secondary rounded p-2 d-flex flex-wrap a-center mt-1"
				v-for="(item2,index2) in item.extra" :key="index2"
				>
					<text class="main-text-color">官方回复:</text>
		{{item2.data}}
					<view class="iconfont icon-dianzan text-light-muted line-h-md font ml-2">
						<text class="text-muted pl-1">赞客服 {{item2.good_num}} </text>
=======
				<view class="bg-light-secondary rounded p-2 d-flex flex-wrap a-center mt-1">
					<text class="main-text-color">官方回复:</text>
					官府回复,哈哈哈哈
					<view class="iconfont icon-dianzan text-light-muted line-h-md font ml-2">
						<text class="text-muted pl-1">赞客服 120 </text>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
					</view>
				</view>
			</view>


		</view>

		<!-- 上拉加载更多 -->
		<divider />
		<view
		 class="d-flex a-center j-center text-light-muted font-md py-3">
			{{loadtext }}
		</view>


	</view>
</template>

<script>
	import $T from '@/common/lib/time.js';
	export default {
		onLoad(e) {
			console.log(e);
			this.id = e.id
			this.__init()
		},

		data() {
			return {
				loadtext: "上啦加载更多",
				id: 0,
				cateIndex: 0,
				cateList: [
					{ name: "全部", value: "" },
					{ name: "好评", value: "/good" },
					{ name: "中评", value: "/middle" },
					{ name: "差评", value: "/bad" },
				],
				list: [],
				total: 0,
				good_rate: 0,
				page: 0
			};
		},
		onPullDownRefresh() {
			console.log("下啦刷新")
			this.getData((res) => {
				// uni.hideLoading()
				uni.showToast({
					title: "刷新成功",
					icon: "none"
				})

				uni.stopPullDownRefresh();

			}, true)
		},
		onReachBottom() {
			if (this.loadtext !== "上啦加载更多") return
			this.page++
			this.loadtext = "加载中"
			this.getData()
		},
		filters: {
			formatTime(value) {
				return $T.gettime(value)
			},
			rating(value) {
				if (value == 3) {
					return "中评"
				} else if (value > 3) return "好评"
				else return "差评"
			}
		},
		methods: {
			// 初始化
			__init() {

				this.getData()
			},
			// 加载属性
			getData(callback = false, refresh = false) {
				// http://ceshi3.dishait.cn/api/goods/:id/comments/[:comment_type]?page=[:page]
				let value = this.cateList[this.cateIndex].value
				this.$H.get(`/goods/${this.id}/comments${value}?page=${this.page}`).then(res => {
					console.log(res);
					this.total = res.total
					this.good_rate = res.good_rate
					this.list = !refresh ? [...this.list, ...res.list] : [...res.list]

					this.loadtext = res.list.length < 10 ? "没有更多数据了" : "上啦加载更多"
					if (typeof callback == 'function') {
						callback(true)
					}
				})
			},
			catechange(index) {
				this.cateIndex = index
				uni.showLoading({
					title: "加载中"
				})
				this.getData((res) => {
					uni.hideLoading()
					if (res) {
						uni.showToast({
							title: "加载成功"
						})
					}
				}, true)
			}
		}
	}
</script>

<style lang="scss">
	.cate-item {
		background: #ffebec;
		color: #7b6d6c;
		border-color: #f4e0e1;
	}

	.cate-item.active {
		background: #ff6b01 !important;
		color: #FFFFFF !important;
		border-color: #De7232 !important;
	}
</style>
