<template>
	<view>
		<!-- 排序-筛选 -->
		<view class="d-flex border-top border-bottom a-center position-fixed top-0 left-0 right-0 bg-white"
		 style="height: 100upx;z-index: 100;">


			<view v-for="(item,index) in screen.list" :key='index'
			 @tap="chageScreen(index)"
			 class="flex-1 d-flex a-center j-center font-md">
				<text :class="screen.currentIndex === index ? 'main-text-color' : 'text-muted' ">{{item.name}}</text>
				<view>
					<view class="iconfont icon-paixu-shengxu line-h0 "
					 :class="item.status === 1 ? 'main-text-color' : 'text-light-muted' "></view>
					<view class="iconfont icon-paixu-jiangxu line-h0 "
					 :class="item.status === 2 ? 'main-text-color' : 'text-light-muted'"></view>
				</view>
			</view>
			<view class="flex-1 d-flex a-center j-center font-md">
				<text class="text-muted" @tap="showDrawer">筛选</text>

			</view>
		</view>

		<!-- 站位 -->
		<view style="height: 100rpx;"></view>
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="index">

			<searchList :index='index' :item="item"></searchList>
		</block>


		<nothing msg="空空如也" v-if="list.length === 0"></nothing>
		<!-- 上拉加载更多 -->
		<divider />
		<view
		 class="d-flex a-center j-center text-light-muted font-md py-3">
			{{loadtext }}
		</view>



















		<!-- 抽屉 -->
		<uni-drawer :visible="showRight" mode="right" @close="closeDrawer">
			<card headTitle="价格范围" :headBorderBottom='false' :headTitleWeight="false">
				<!-- 单选按钮租 -->
				<zcmadioGroup :selected111.sync='label.selected' :label='label'></zcmadioGroup>
			</card>
			<!--按钮 -->
			<view class="d-flex position-fixed bottom-0 right-0 w-100">
				<view class=" flex-1 main-bg-color text-white font-md py-2 text-center"
				 hover-class="main-bg-hover-color" @click="confirm">确定</view>
				<view class="flex-1 font-md py-2 text-center "
				 hover-class="main-bg-hover-color" @click="reset">重置</view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
	const demo = [{
			title: "真无线蓝牙耳机",
			titlePic: '/static/images/demo/demo6.jpg',
			desc: '雅致简约 / 分体式入耳 / 收纳盒重登 / 蓝牙5.0 / 触控操作',
			pprice: 100,
			comment_num: 1300,
			good_num: "98%"
		},
		{
			title: "真无线蓝牙耳机",
			titlePic: '/static/images/demo/demo6.jpg',
			desc: '雅致简约 / 分体式入耳 / 收纳盒重登 / 蓝牙5.0 / 触控操作',
			pprice: 100,
			comment_num: 1300,
			good_num: "98%"
		},
		{
			title: "真无线蓝牙耳机",
			titlePic: '/static/images/demo/demo6.jpg',
			desc: '雅致简约 / 分体式入耳 / 收纳盒重登 / 蓝牙5.0 / 触控操作',
			pprice: 100,
			comment_num: 1300,
			good_num: "98%"
		},
		{
			title: "真无线蓝牙耳机",
			titlePic: '/static/images/demo/demo6.jpg',
			desc: '雅致简约 / 分体式入耳 / 收纳盒重登 / 蓝牙5.0 / 触控操作',
			pprice: 100,
			comment_num: 1300,
			good_num: "98%"
		},
		{
			title: "真无线蓝牙耳机",
			titlePic: '/static/images/demo/demo6.jpg',
			desc: '雅致简约 / 分体式入耳 / 收纳盒重登 / 蓝牙5.0 / 触控操作',
			pprice: 100,
			comment_num: 1300,
			good_num: "98%"
		}
	]
	import uniDrawer from '@/components/uni-ui/uni-drawer/uni-drawer.vue'
	import card from "@/components/common/card.vue"
	import zcmadioGroup from "@/components/common/radio-group.vue"
	import nothing from "../../components/common/no-thing.vue"
	import searchList from "@/components/search-list/search-list.vue"
	export default {
		components: {
			uniDrawer,
			card,
			zcmadioGroup,
			nothing,
			searchList
		},
		data() {
			return {
				loadtext: "上啦加载更多",
				keyword: "",
				page: 1,
				list: demo,
				showRight: false,

				screen: {
					currentIndex: 0,
					list: [
						{ name: '综合', status: 1, key: "all" },
						{ name: '销量', status: 0, key: "sale_count" },
						{ name: '价格', status: 0, key: "min_price" },
					]
				},
				label: {
					selected: 0,
					list: [
						{ name: "不限", rule: false, value: false },
						{ name: "0-50", rule: "between", value: "0,50" },
						{ name: "50-100", rule: "between", value: "50,100" },
						{ name: "100-500", rule: "between", value: "100,500" },
						{ name: "500-1000", rule: "between", value: "500,1000" },
						{ name: "大于1000", rule: ">", value: "1000" }
					]
				},
				condition: {},
				oldselected: 0
			};
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
		onReachBottom() {

			// 是否已经处于加载状态
			if (this.loadtext !== "上啦加载更多") return
			// 改变加载状态
			this.loadtext = '加载中...'
			this.page++
			// 请求数据
			this.getData(false, () => {
				uni.showToast({
					title: "加载成功"
				})
			})

		},
		computed: {
			// 排序相关
			options() {
				let obj = this.screen.list[this.screen.currentIndex]
				let value = obj.status == 1 ? 'asc' : 'desc'
				return {
					[obj.key]: value
				}
			},

		},
		onLoad(e) {
			console.log(e.keyword);
			this.keyword = e.keyword
			// 加载数据
			this.getData()
		},
		onPullDownRefresh() {
			this.getData(true, () => {
				uni.showToast({
					title: "刷新成功",
					icon: "none"
				})
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			// 初始化筛搜索
			initSearch() {
				this.label.selected = 0
				this.condition = {}
				this.page = 1
			},
			search() {
				if (this.keyword == "") {
					return uni.showToast({
						title: "关键词不能为空",
						icon: "none"
					})
				}
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif

				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif
				this.addHistory()
				this.initSearch()
				this.getData()
			},
			addHistory() {
				// 拿到所以的搜索历史
				let history = uni.getStorageSync("searchHistory")
				history = history ? JSON.parse(history) : []
				// 判断之前是否有该搜索记录
				let index = history.indexOf(this.keyword)
				if (index == -1) {
					historyList.unshift(this.keyword)
				} else {
					historyList.unshift(historyList.splice(index, 1)[0])
				}
				uni.setStorageSync('searchHistory', JSON.stringify(historyList))
			},
			// 加载数据
			getData(refresh = true, callback = false) {
				let page = refresh ? 1 : this.page
				this.$H.post('/goods/search', {
					title: this.keyword,
					page: page,
					...this.options, //排序
					...this.condition //筛选
					// ...this.price
					// price: "between,100,200"
					// all :"desc"
					// min_price:"desc"
					//sale_count:"desc"
				}).then(res => {

					let list = this.format(res)

					this.list = refresh ? [...list] : [...this.list, ...list]
					// 恢复加载状态
					this.loadtext = res.length < 10 ? '没有更多了' : '上啦加载更多'

					if (typeof callback == 'function') {
						callback
					}

				})
			},
			// 格式化
			format(res) {
				return res.map(item => {
					let good_num = item.comments_good_count == 0 ? 0 : (item.comments_good_count / item.comments_count) * 100
					return {
						id: item.id,
						title: item.title,
						titlePic: item.cover,
						desc: item.desc,
						pprice: item.min_price,
						comment_num: item.comments_count,
						good_num: good_num.toFixed(2) + "%"
					}

				})
			},
			changeRadio(index) {
				this.label.selected = index
			},
			chageScreen(index) {
				//判断当前点击是否已经是激活状态
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				// 如果是激活的
				if (oldIndex == index) {
					oldItem.status = oldItem.status === 1 ? 2 : 1
					// 加载数据
					this.getData()
					return
				}
				// 不是激活的设置新的
				let newItem = this.screen.list[index]
				//移除旧激活状态
				oldItem.status = 0
				this.screen.currentIndex = index
				//增加新激活状态
				newItem.status = 1
				this.getData()
			},
			// 打开抽屉
			showDrawer() {
				console.log(this.label.selected);
				this.showRight = true
				// 记录旧的值
				this.oldselected = this.label.selected
			},
			// 关闭抽屉
			closeDrawer() {
				// 恢复回原来的值
				this.label.selected = this.oldselected
				this.showRight = false
				this.oldselected = 0
			},
			// 重置
			reset() {
				this.condition = {}
				this.label.selected = 0
				// 获取数据
				this.getData()
				// 关闭抽屉
				this.showRight = false
			},
			confirm() {

				// 组织筛选条件
				this.getCondition()
				// 获取数据
				this.getData()
				// 关闭抽屉
				this.showRight = false
			},
			// 组织筛选条件
			getCondition() {
				let item = this.label.list[this.label.selected]
				if (item.rule && item.value) {
					this.condition = {
						price: item.rule + ',' + item.value
					}
				} else {
					// 为空 ,服务端获取的就是最多的
					this.condition = {}
				}

			}
		}
	}
</script>

<style lang="scss">

</style>
