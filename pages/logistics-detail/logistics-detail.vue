<template>
	<view>
		<view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;">
			<view v-for="(item,index) in list" :key="index"
			 :class="{'uni-timeline-first-item': index == 0,'uni-timeline-last-item':index == list.length -1}"
			 class="uni-timeline-item ">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view>
						{{item.status}}
					</view>
					<view class="datetime">
						{{item.time}}
					</view>
				</view>
			</view>

			<view v-if="list.length == 0" class="d-flex a-center j-center py-5">
				<text class="font-md text-light-muted">暂无物流信息</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				list: []
			};
		},
		onLoad(e) {
			console.log(e);
			if (!e.detail) {
				return uni.showToast({
					title: "非法参数",
					icon: "none"
				})
			}
			this.id = JSON.parse(e.detail).id
		},
		methods: {

			getShipInfo() {
				let arr = {
					1: "在途中",
					2: "派件中",
					3: "已签收",
					4: "派送失败(拒签等)"
				}
				this.$H.get('/order/' + this.id + '/get_ship_info', {}, { token: true }).then(res => {
					console.log(res);
					let status = arr[res.result.deliverystatus]
					if (status) {
						uni.setNavigationBarTitle({
							title: status
						})
						this.list = res.result.list
					}
				})
			}
		},
	}
</script>

<style lang="scss">

</style>
