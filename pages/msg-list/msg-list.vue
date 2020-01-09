<template>
	<view class="p-2">
		<view @tap="navigate('msg-detail',item)" class="mb-2 p-2 bg-white rounded" hover-class="bg-light"
		 v-for="(item,index) in list" :key="index">
			<view class="text-dark font-md">{{item.title}}</view>
			<view class="font text-light-muted">
				{{item.desc}}
			</view>
			<view class="font text-light-muted">{{item.create_time}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: "uni-app第三季仿微信app正式开售啦",
						desc: "开启纯nvue原生渲染，大大提高性能",
						create_time: "9月份"
					},
					{
						title: "uni-app第三季仿微信app正式开售啦",
						desc: "开启纯nvue原生渲染，大大提高性能",
						create_time: "9月份"
					}
				]
			}
		},
		methods: {
			navigate(path, item) {

				if (!path) return
				uni.navigateTo({

					url: `/pages/${path}/${path}?detail=${JSON.stringify(item)}`
				})
			}
		},
	}
</script>

<style>
	page {
		background-color: #EEEEEE;
	}
</style>
