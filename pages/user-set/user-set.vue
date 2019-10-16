<template>
	<view>
		<card :headTitle="item.label" bodyStyle="background:#ffffff;" v-for="(item,index) in list" :key="index">
			<uni-list-item :title="list.title" v-for="(list,listIndex) in item.value"
			 :key="listIndex" @click="navigate(list.path)"></uni-list-item>
		</card>
		<view class="p-3">
			<button type="default" class="bg-white">退出登录</button>
		</view>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue'
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"

	export default {
		components: {
			card,
			uniListItem
		},
		methods: {
			navigate(path) {
				if(!path) return
				
				
				uni.navigateTo({
					url: `/pages/${path}/${path}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		data() {
			return {
				list: [{
						label: "账号管理",
						value: [
							{ title: "个人资料", path: "" },
							{ title: "收货地址", path: "" },
						]
					},
					{
						label: "关于",
						value: [
							{ title: "关于商城", path: "about" },
							{ title: "意见反馈", path: "" },
							{ title: "协议规则", path: "" },
							{ title: "资质证件", path: "" },
							{ title: "用户协议", path: "" },
							{ title: "隐私政策", path: "" }
						]
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	page {
		background: #EEEEEE;
	}
</style>
