<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad() {
			this.getFirstTime()
		},
		methods: {
			 getFirstTime() {
				console.log(1)
				this.asyfun()
				// asyfun();
				console.log(3)
			},
			async asyfun() {
				 console.log(2)
			}
		},
	}
</script>

<style lang="scss">

</style>
