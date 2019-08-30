<template>
	<view>

		<!-- 商品详情大图 -->
		<swiperImage :resdata="banners" height="750" :preview="true"></swiperImage>
	</view>
</template>

<script>
	import swiperImage from "@/components/index/swiper-Image.vue"
	export default {
		components: {
			swiperImage
		},
		props: {

		},
		data() {
			return {
				banners: [
					{ src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13c41ccd1bd8b38f9017c6faf569fb24.jpg' },
					{ src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg' }
				],
			};
		}
	}
</script>

<style lang="scss">

</style>
