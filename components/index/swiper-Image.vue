<template>
	<view>
		<swiper :style="getStyle" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<block v-for="(item, index) in resdata" :key="index">
				<swiper-item>
					<view @tap="event(item,index)" class="swiper-item">
						<image lazy-load :style="getStyle" :src="item.src" mode=""></image>
					</view>
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
			resdata: Array,
			height: {
				type: String,
				default: '350'
			},
			preview: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			getStyle() {
				return `height:${this.height}rpx`
			},
			getUrls() {
				return this.resdata.map((v) => v.src)

			}
		},
		methods: {
			event(item, index) {
				console.log('点击了轮播图');
				if (this.preview) {
					return uni.previewImage({
						current: index,
						urls: this.getUrls,
						indicator: "default"
					})
				}
			}
		}
	};
</script>

<style></style>
