<template>
	<view>
	
			<view class="row j-center py-2 m-2">
					<block v-for="(item,index) in resdata" :key="index">
				<view @tap="event(item)" class="span-4 d-flex flex-column j-center a-center py-1">
					<image :src="item.src" style="width: 60upx; height: 60upx;" mode="widthFix"></image>
					<text class="font-sm">{{ item.text}}</text>
				</view>
	</block>
			</view>
	
	</view>
</template>

<script>
	export default {
		props: {
						resdata:[Array,Object]
		},
		methods: {
			event(item) {
				console.log("点击了图标")
			}
		}
	}
</script>

<style scoped>

</style>
