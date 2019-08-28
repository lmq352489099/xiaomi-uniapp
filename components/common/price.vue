<template>
	<view class="d-flex main-text-color font-md line-h">
		<text class="font-sm a-self-start">¥</text>  <slot></slot>
	</view>
</template>

<script>
	export default {
		props: { price: [Number, String] }
	}
</script>

<style>
</style>
