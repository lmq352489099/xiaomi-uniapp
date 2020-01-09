<template>
	<view class="ml-2  border border-light-secondary py-1 px-2 text-secondary"
	 hover-class="bg-light-secondary"
	 @click.stop="$emit('click')">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>
