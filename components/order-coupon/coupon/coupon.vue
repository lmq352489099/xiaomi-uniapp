<template>
	<view>
		<view class="bg-white rounded border d-flex a-center border-light-secondary mb-3">
			<view class="flex-1 d-flex flex-column j-center px-3">
				<view class="font-lg" :class="item.disable || !item.status ? 'text-light-muted' : ''">{{item.title}} </view>
				<view class="text-light-muted font">
					{{item.start_time}}~{{item.end_time}}
				</view>
			</view>
			<view
			 :class="item.disable || !item.status ? 'bg-secondary' : 'main-bg-color'"
			 class=" flex-column text-white d-flex a-center j-center" style="width: 220rpx;height: 200rpx;">
				<view class="font-lg line-h-md">{{item.price}} <text class="font">元</text> </view>
				<view class="font">{{item.desc}} </view>
				<view
				 :class="item.disable || !item.status ? 'text-secondary' : 'main-text-color'"
				 class="rounded  bg-white w-50  text-center"
				 hover-class="bg-light-secondary">
				 {{item.status ? '去使用' : '已失效'}}
				 </view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>
