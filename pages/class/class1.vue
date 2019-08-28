<template>
	<view>
		<view style="display: flex;justify-content: center;font-size: 100upx;">
			{{text}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "1111"
			}
		},
		onLoad() {
			console.log(uni.getStorageSync('index'))
			uni.$on('index', e => {
				console.log('分类页');
				this.text = e.data;

			})
		},
		// 显示
		onShow() {
			this.text = getApp().globalData.text;
		},
		methods: {

		}
	}
</script>

<style>

</style>
