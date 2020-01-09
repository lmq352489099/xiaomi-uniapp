<template>
	<view>
		<card headTitle="热门搜索"
		 bodyCover="../../static/images/demo/search-banner.png"></card>
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<color-tag @click="handleGO(item.name)" v-for="(item,index) in hot" :key='index' :item="item"></color-tag>
		</view>
		<!-- 常用分类 -->
		<card headTitle="常用分类" :bodyPadding="true" :headBorderBottom="false">
			<color-tag @tap="handleGO(item.name)" v-for="(item,index) in cate" :color="false" :key='index' :item="item"></color-tag>
		</card>


		<template v-if="historyList.length>0">
			<!-- 分割线 -->
			<divider></divider>

			<!-- 搜索记录 -->

			<card headTitle="搜索记录">
				<view slot="right" class="font  text-primary"
				 @click="cleatHistory">清除搜索记录 </view>
				<uni-list-item @tap="handleGO(item)" v-for="(item,index) in historyList"
				 :key="index" :title="item" :showArrow="false"></uni-list-item>
			</card>
		</template>

	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import colorTag from "@/components/search/color-tag.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		computed: {

		},
		components: {
			card,
			colorTag,
			uniListItem
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				uni.navigateTo({
					url: "../search-lish/search-lish"
				})
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.keyword = e.text
		},
		onNavigationBarSearchInputConfirmed() {
			this.search()
		},
		onNavigationBarButtonTap() {
			this.search()
		},
		onShow() {
			// 加载历史记录
			let history = uni.getStorageSync('searchHistory')

			this.historyList = history ? JSON.parse(history) : []
		},
		methods: {
			handleGO(item) {
				// uni.navigateTo({
				// 	url: "../search-lish/search-lish?keyword=" + item
				// })
				this.keyword = item
				this.search()
			},
			search() {
				if (this.keyword == "") {
					return uni.showToast({
						title: "不能为空",
						icon: "none"
					})
				}
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif

				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif


				uni.navigateTo({
					url: "../search-lish/search-lish?keyword=" + this.keyword,

				})
				setTimeout(() => {
					this.addHistory()
				}, 100)
			},
			// 加入搜索记录
			addHistory() {
				// this.keyword == ""
				let index = this.historyList.indexOf(this.keyword)
				if (index == -1) {
					this.historyList.unshift(this.keyword)
				} else {
					this.historyList.unshift(this.historyList.splice(index, 1)[0])
				}
				// 移除最后一条
				if (this.historyList.length > 6) {
					this.historyList.splice(this.historyList.length - 1, 1)
				}

				uni.setStorageSync('searchHistory', JSON.stringify(this.historyList))

			},
			// 清除记录
			cleatHistory() {
				uni.showModal({
					title: '提示',
					content: '是否清除搜索历史',
					cancelText: '取消',
					confirmText: '清除',
					success: res => {
						if (res.confirm) {
							// uni.clearStorageSync()
							uni.removeStorageSync("searchHistory")
							this.historyList = []
						}
					}
				});
			}
		},
		data() {
			return {
				historyList: ["小米"],
				keyword: "",
				hot: [

					{ name: "领券中心" },
					{ name: "Redmi K20" },
					{ name: "RedmiBook 14" },
					{ name: "智能积木 越野四驱车" },
					{ name: "手环 腕带" }
				],
				cate: [
					{ name: "耳机" },
					{ name: "手机" },
					{ name: "音箱" },
					{ name: "手鸟" },
					{ name: "配件" },
					{ name: "配件" },
					{ name: "配件" },
					{ name: "配件" }
				]

			};
		}
	}
</script>

<style lang="less">

</style>
