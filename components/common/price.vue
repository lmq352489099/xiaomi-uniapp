<template>
	<view class="d-flex main-text-color line-h" :class="priceSize">
		<text class="a-self-start" :class="unitSize">¥</text>
		<slot ></slot> 

	</view>
</template>

<script>
	export default {
		props: {
			priceSize: {
				type:String,
				default:'font-md'
			},
			unitSize:{
				type:String,
				default:'font-sm'
			}
		}
	}
</script>

<style>
</style>
