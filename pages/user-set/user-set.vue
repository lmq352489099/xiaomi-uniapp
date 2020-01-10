<template>
	<view>
<<<<<<< HEAD
		<card v-if="loginStatus" headTitle="账号管理" bodyStyle="background:#ffffff;">
			<uni-list-item title="个人资料"></uni-list-item>
			<uni-list-item title="收货地址" @click="navigate('user-path-list')"></uni-list-item>
		</card>


=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
		<card :headTitle="item.label" bodyStyle="background:#ffffff;" v-for="(item,index) in list" :key="index">
			<uni-list-item :title="list.title" v-for="(list,listIndex) in item.value"
			 :key="listIndex" @click="navigate(list.path)"></uni-list-item>
		</card>
<<<<<<< HEAD

		<view class="p-3" v-if="loginStatus">
			<button type="default" @click="logoutEvent" class="bg-white">退出登录</button>
=======
		<view class="p-3">
			<button type="default" class="bg-white">退出登录</button>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
		</view>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue'
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
<<<<<<< HEAD
	import { mapState, mapMutations } from "vuex"
=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0

	export default {
		components: {
			card,
			uniListItem
		},
<<<<<<< HEAD
		computed: {
			...mapState({
				token: state => state.user.token,
				loginStatus: state => state.user.loginStatus
			})
		},

		methods: {
			...mapMutations(['logout','clearCart']),
			// 退出登录
			logoutEvent() {
				this.$H.post('/logout', {}, { token: true, checkToken: true, toast: false }).then(res => {
					this.logout()
					uni.showToast({
						title: '退出成功',
						icon: "none"
					});
					// 清空购物车
					this.clearCart()
					
					uni.navigateBack({
						delta: 1
					});
				}).catch(err => {
					console.log(err)
				})
			},
			navigate(path) {
				if (!path) return


=======
		methods: {
			navigate(path) {
				if(!path) return
				
				
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
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
<<<<<<< HEAD
				list1: [{
					label: "账号管理",
					show: true,
					value: [
						{ title: "个人资料", path: "" },
						{ title: "收货地址", path: "" },
					]
				}, ],
				list: [{
					label: "关于",
					show: true,
					value: [
						{ title: "关于商城", path: "about" },
						{ title: "意见反馈", path: "" },
						{ title: "协议规则", path: "" },
						{ title: "资质证件", path: "" },
						{ title: "用户协议", path: "" },
						{ title: "隐私政策", path: "" }
					]
				}]
=======
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
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			};
		}
	}
</script>

<style lang="scss">
	page {
		background: #EEEEEE;
	}
</style>
