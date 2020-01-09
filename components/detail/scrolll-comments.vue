<template>
	<view class="p-2">
		<scroll-view scroll-x class="scroll-row">
			<view v-for="(item,index) in comments" :key='index' class="scroll-row-item rounded bg-light-secondary mr-2 p-2"
			 style="width: 620rpx; height:380rpx;">
				<view class="d-flex a-center mb-1">
					<image
					 class="rounded-circle"
					 :src="item.userpic" mode="widthFix" style="width: 70rpx; height: 70rpx;">
					</image>
					<view class="ml-2">
						<text class="font-md line-h">{{item.username}}</text>
						<text class="font d-block text-light-muted">{{item.create_time | formatTime}}</text>
					</view>
					<view class="iconfont icon-dianzan text-light-muted pl-1 ml-auto">{{item.goods_num}}</view>
				</view>

				<text class="d-block font-md mb-2">
					{{item.context}}
				</text>
				<view class="row">
					<view class="span24-8 px-2" v-for="(img,i) in item.imgList" :key='i'>
						<image
						 class="rounded"
						 :src="img" mode="widthFix" style="height: 115rpx;">
						</image>
					</view>
				</view>
			</view>
		</scroll-view>

		<view @tap="open">
			<view class="d-flex j-center a-center py-2 mt-2 text-primary "
			 hover-class="bg-light-secondary">
				更多评论 <view class="iconfont icon-you"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import $T from '@/common/lib/time.js';
	export default {
		props: ['comments', 'goods_id'],
		filters: {
			formatTime(value) {
				return $T.gettime(value)
			}
		},
		methods: {
			open() {
				uni.navigateTo({
					url: '/pages/detail-comment/detail-comment?id=' + this.goods_id
				});
			}
		},
	}
</script>

<style>
</style>
