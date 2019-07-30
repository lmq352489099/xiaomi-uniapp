<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<block v-for="(item, index) in resdata" :key="index">
				<swiper-item>
					<view @tap="event(item)" class="swiper-item"><image lazy-load style="height: 365upx;" :src="item.src" mode=""></image></view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		resdata: Array
	},
	methods: {
		event(item) {
			console.log('点击了轮播图');
		}
	}
};
</script>

<style></style>
