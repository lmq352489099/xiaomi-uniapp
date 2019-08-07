<template>
	<view>
		<button type="primary" @click="ceshi">修改首页数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			ceshi(){
				let pages = getCurrentPages();
				let index = pages[0].$getAppWebview();
				plus.webview.postMessageToUniNView({
					res:'ceshi'
				},index.id);
				uni.navigateBack();
			}
		}
	}
</script>

<style>

</style>
