<template>
	<view>
		<view class="p-2">
			<view class="d-flex a-center py-2 border-bottom border-light-secondary">
				<text class="text-muted">用户评论 (132)</text>
				<text class="main-text-color ml-auto mr-1">98.5%</text>
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
		<view class="p-2 d-flex a-start border-bottom border-light-secondary">
			<image src="../../static/images/demo/demo6.jpg" mode="widthFix" style="width: 90rpx;height: 90rpx;"
			 class="rounded flex-shrink"></image>
			<view class="pl-2 flex-1 ">
				<view class="d-flex a-center " style="height: 90rpx;">
					<text class="font-md text-primary font-weight  ml-auto">昵称</text>
					<view class="iconfont icon-service main-text-color">
						<text class="pl-1">超好</text>
					</view>
				</view>
				<view class="line-h-md font-md">
					非常好
				</view>
				<view class="row">
					<view class="span24-8 px pb">
						<image src="../../static/images/demo/cate_08.png" mode="widthFix" style="height: 100rpx;"></image>
					</view>
				</view>
				<view class="d-flex a-center ">
					<text class="text-light-muted mr-auto">2019-08-20</text>
					<view class="d-flex a-center text-light-muted mr-2">
						0 <text class="iconfont icon-dianzan text-muted ml-1"></text>
					</view>
					<view class="d-flex a-center text-light-muted ">
						10 <text class="iconfont icon-pinglun text-muted ml-1"></text>
					</view>
				</view>
				<!-- 客服回复 -->
				<view class="bg-light-secondary rounded p-2 d-flex flex-wrap a-center mt-1">
					<text class="main-text-color">官方回复:</text>
					官府回复,哈哈哈哈
					<view class="iconfont icon-dianzan text-light-muted line-h-md font ml-2">
						<text class="text-muted pl-1">赞客服 120 </text>
					</view>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				cateIndex: 0,
				cateList: [
					{ name: "全部" },
					{ name: "有图" },
					{ name: "非常喜欢" },
					{ name: "拍照好" },
					{ name: "手感很棒" },
					{ name: "效果好" },
					{ name: "性能很棒" },
				],
			};
		},
		methods: {
			catechange(index) {
				this.cateIndex = index
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
