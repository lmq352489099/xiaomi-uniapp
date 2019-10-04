<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<uniSwipeAction :options="options"
			 @click="bindClick($event,index)">
				<uniListItem @click="choose(item)">
					<view class="text-secondary">
						<view class="d-flex a-center">
							<text>{{item.name}}</text>
							{{item.phone}}
							<text class="main-text-color" v-if="item.isdefault">[默认]</text>
						</view>
						<view>{{item.path}}</view>
						<view>{{item.detailPath}}</view>
					</view>
				</uniListItem>
			</uniSwipeAction>
		</block>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue'
	import { mapState, mapMutations } from "vuex"
	export default {

		components: {
			uniListItem,
			uniSwipeAction
		},
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
		methods: {
			...mapMutations(['delPath']),
			bindClick(e, value) {
				console.log(e, value);
				// uni.showToast({
				// 	title: `点击了${value.text}按钮`,
				// 	icon: 'none'
				// })
				console.log("哈哈哈");
				switch (e.index) {
					case 0: //修改
						let obj = JSON.stringify({ index: value, item: this.list[value] })
						setTimeout(function() {
							uni.navigateTo({
								url: "../user-path-edit/user-path-edit?data=" + obj
							})
						}, 50);

						break;
					case 1: //删除
						console.log("删除成男公关");
						uni.showModal({
							content: '要删除该收货地址吗',
							success: (res) => {
								if (res.confirm) {
									this.delPath(value)
									uni.showToast({
										title: "删除成功"
									})
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
				isChoose: false,
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
			if (e.type === "choose") {
				this.isChoose = true
			}
		}
	}
</script>

<style lang="scss">

</style>
