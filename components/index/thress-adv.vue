<template>
	<view class="d-flex ">
		<image @tap="event(resdata.big)" :src="resdata.big.src"
		 lazy-load
		 style="width: 373upx; height: 530upx; border-right: 2upx solid #F5F5F5;">
		</image>
		<view class="d-flex flex-column">
			<image @tap="event(resdata.smalltop)" :src="resdata.smalltop.src"
			 style="width: 375upx; height: 264upx; border-bottom: 2upx solid #F5F5F5;"></image>
			<image @tap="event(resdata.smalltop2)" :src="resdata.smalltop2.src"
			 style="width: 375upx; height:264upx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			// key: value
			}
		},
		props: {
			resdata: Object
		},
		methods:{
			event(item){
				console.log(item);
			}
		}
	}
</script>

<style>
</style>
