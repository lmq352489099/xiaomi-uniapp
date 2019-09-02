<template>
	<view>
		<scroll-view scroll-x class="scroll-row">
			<view v-for="(item,index) in baseAttrs" :key='index' class="scroll-row-item " style="width: 170upx;height: 110upx;">
				<view class="d-flex flex-column a-center j-center">
					<view class="iconfont icon-cpu line-h-sm"></view>
					<view class="line-h-sm">{{item.title}}</view>
					<view class="text-light-muted font-sm line-h-sm">
						{{item.desc}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			baseAttrs: Array,
		},
	}
</script>

<style>
</style>
