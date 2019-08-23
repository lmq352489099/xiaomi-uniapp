<template>
	<view>
		<card headTitle="热门搜索"
		 bodyCover="../../static/images/demo/search-banner.png"></card>
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<color-tag v-for="(item,index) in hot" :key='index' :item="item"></color-tag>
		</view>
		<!-- 常用分类 -->
		<card headTitle="常用分类">
			<color-tag v-for="(item,index) in hot" color="false" :key='index' :item="item"></color-tag>
		</card>

		<!-- 分割线 -->


		<!-- 搜索记录 -->
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import colorTag from "@/components/search/color-tag.vue"

	export default {
		computed: {

		},
		components: {
			card,
			colorTag
		},
		data() {
			return {
				hot: [
					{ name: "领券中心" },
					{ name: "Redmi K20" },
					{ name: "RedmiBook 14" },
					{ name: "智能积木 越野四驱车" },
					{ name: "手环 腕带" }
				]
			};
		}
	}
</script>

<style lang="less">

</style>
