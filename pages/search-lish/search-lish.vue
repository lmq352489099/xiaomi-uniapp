<template>
	<view>
		<!-- 排序-筛选 -->
		<view class="d-flex border-top border-bottom a-center" style="height: 100upx;">


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
				<text class="text-muted">筛选</text>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screen: {
					currentIndex: 0,
					list: [
						{ name: '综合', status: 1 },
						{ name: '销量', status: 0 },
						{ name: '价格', status: 0 },
					]
				}
			};
		},
		methods: {
			chageScreen(index) {
				//判断当前点击是否已经是激活状态
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				// 如果是激活的
				if (oldIndex == index) {
					return oldItem.status= oldItem.status === 1 ? 2 : 1
				}
				// 不是激活的设置新的
				let newItem = this.screen.list[index]
				//移除旧激活状态
				oldItem.status = 0
				this.screen.currentIndex = index
				//增加新激活状态
				newItem.status = 1
			}
		}
	}
</script>

<style lang="scss">

</style>
