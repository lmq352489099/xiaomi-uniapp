<template>
	<view>
		<view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;">
<<<<<<< HEAD
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
=======
			<view class="uni-timeline-item uni-timeline-first-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view>
						uni-app 立项
					</view>
					<view class="datetime">
						2018.05
					</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view>uni-app 正式发布，使用vue技术，开发一次，App、小程序、H5多端同时生成</view>
					<view class="datetime">2018.07</view>
				</view>
			</view>
			<view class="uni-timeline-item uni-timeline-last-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view>uni-app 支持使用 npm 安装依赖，支持微信小程序自定义组件</view>
					<view class="datetime">2018.10</view>
				</view>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
<<<<<<< HEAD
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
=======
				
			};
		}
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	}
</script>

<style lang="scss">

</style>
