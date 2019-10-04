<template>
	<view class="bg-white">
		
		<divider></divider>
		<!-- 头部 -->
		<view class="d-flex a-center p-2 border-bottom border-light-secondary">
			<text class="text-light-muted font-md">{{item.create_time}}</text>
			<text class="font-md main-text-color ml-auto">{{item.status}}</text>
		</view>
		<!-- 身体 -->
		<view class="px-2 ">
			<view v-for="(item1,index1) in item.order_items" :key="index1" class="border-bottom border-light-secondary d-flex a-center py-2">
				<image :src="item1.cover" mode="widthFix"
				 style="width: 150rpx;height: 150rpx;" class="rounded mx-2 flex-shrink"></image>
				<view class="flex-1  ">
					<view class="d-flex a-center">
						<text class="font-md text-dark">{{item1.title}}</text>
						<text class="font-md text-muted ml-auto">{{item1.pprice}}</text>
					</view>
					<view class="d-flex a-center">
						<text class="font text-dark">{{item1.attrs}}</text>
						<text class="font text-muted ml-auto">X{{item1.num}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="d-flex a-center p-2">

			<text class="text-dark font-md ml-auto">
				共{{item.total_num}}件商品,合计: ¥{{item.total_price}}
			</text>
		</view>
		<view class="d-flex j-end p-2">
			<view class="  border border-light-secondary py-1 px-2 text-secondary"
			 hover-class="bg-light-secondary">
				查看物流
			</view>
			<view class="ml-2  border border-light-secondary py-1 px-2 text-secondary"
			 hover-class="bg-light-secondary">
				确认收货
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index:Number
		},
	}
</script>

<style>
</style>
