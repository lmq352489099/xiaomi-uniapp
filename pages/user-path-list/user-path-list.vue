<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<uniSwipeAction :options="options"
			 @click="bindClick($event,index)">
				<uniListItem @click="choose(item)">
					<view class="text-secondary">
						<view class="d-flex a-center">
<<<<<<< HEAD
							<text class="main-text-color">{{item.name}}</text>
							{{item.phone}}
							<text class="main-text-color" v-if="index == 0 && item.last_used_time !== null">[默认]</text>
						</view>
						<view>{{item.province}}{{item.city}}{{item.district}}</view>
						<view>{{item.address}}</view>
=======
							<text>{{item.name}}</text>
							{{item.phone}}
							<text class="main-text-color" v-if="item.isdefault">[默认]</text>
						</view>
						<view>{{item.path}}</view>
						<view>{{item.detailPath}}</view>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
					</view>
				</uniListItem>
			</uniSwipeAction>
		</block>
<<<<<<< HEAD
		<nothing msg="空空如也" v-if="list.length === 0"></nothing>
		<!-- 上拉加载更多 -->
		<divider />
		<view
		 class="d-flex a-center j-center text-light-muted font-md py-3">
			{{loadtext }}
		</view>

=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue'
<<<<<<< HEAD
	import nothing from "../../components/common/no-thing.vue"
=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	import { mapState, mapMutations } from "vuex"
	export default {

		components: {
<<<<<<< HEAD
			nothing,
			uniListItem,
			uniSwipeAction
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
=======
			uniListItem,
			uniSwipeAction
		},
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
		computed: {
			...mapState({ list: state => state.path.list })
		},
		// 监听导航栏按钮
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				uni.navigateTo({
					url: "../user-path-edit/user-path-edit"
				})
			}
		},
<<<<<<< HEAD
		onPullDownRefresh() {
			this.page = 1
			this.getData(() => {
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			...mapMutations(['delPath', 'updatePahtList']),
			// 初始化
			getData(callback = false) {
				this.$H.get('/useraddresses/' + this.page, {}, {
					token: true
				}).then(res => {
					let refresh = this.page == 1
					this.updatePahtList({
						refresh: refresh,
						list: res
					})
					this.loadtext = res.length < 10 ? "没有更多了" : "上啦加载更多"


					if (typeof callback == "function") {
						uni.showToast({
							title: "刷新成果",
							icon: "none"
						});
						callback()
					}




				}).catch(err => {
					if (typeof callback == "function") {
						callback()
					}

					// 页面回归上一页
					if (this.page > 1) {
						this.page--
						this.loadtext = "上啦加载更多"
					}

				})
			},
=======
		methods: {
			...mapMutations(['delPath']),
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			bindClick(e, value) {
				console.log(e, value);
				// uni.showToast({
				// 	title: `点击了${value.text}按钮`,
				// 	icon: 'none'
				// })
				console.log("哈哈哈");
				switch (e.index) {
					case 0: //修改
<<<<<<< HEAD
						let obj = { index: value, item: this.list[value] }
						console.log(obj);

						// 加上是否默认
						obj.item.default = (value == 0 && obj.item.last_used_time !== null) ? 1 : 0
						setTimeout(function() {
							uni.navigateTo({
								url: "../user-path-edit/user-path-edit?data=" + JSON.stringify(obj)
=======
						let obj = JSON.stringify({ index: value, item: this.list[value] })
						console.log(obj);
						setTimeout(function() {
							uni.navigateTo({
								url: "../user-path-edit/user-path-edit?data=" + obj
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
							})
						}, 50);

						break;
					case 1: //删除
						console.log("删除成功");
						uni.showModal({
							content: '要删除该收货地址吗',
							success: (res) => {
								if (res.confirm) {
<<<<<<< HEAD

									this.$H.del('/useraddresses/' + this.list[value].id, {}, { token: true }).then(res => {
										this.delPath(value)
										uni.showToast({
											title: "删除成功"
										})
									})


=======
									this.delPath(value)
									uni.showToast({
										title: "删除成功"
									})
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
								} else if (res.cancel) {

								}
							}
						});

						break
				}
			},
			// 选择收货地址
			choose(item) {
				if (this.isChoose) {
					// 通知订单提交页修改收货地址
					uni.$emit('choosePath', item)
					// 关闭当前页
					uni.navigateBack({

					})
				}



			}
		},
		data() {
			return {
<<<<<<< HEAD
				loadtext: "上啦加载更多",
				isChoose: false,
				page: 1,
=======
				isChoose: false,
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
				options: [{
					text: '修改',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
			};
		},
		onLoad(e) {
			console.log(e);
<<<<<<< HEAD
			this.getData()
			if (e.type === "choose") {
				this.isChoose = true
			}
			// 注册一个监听事件
			uni.$on("uPLodateUserPathLIST", () => {
				this.page = 1
				this.getData()
			})
		},
		onUnload() {
			uni.$off("uPLodateUserPathLIST")
		},
=======
			if (e.type === "choose") {
				this.isChoose = true
			}
		}
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	}
</script>

<style lang="scss">

</style>
