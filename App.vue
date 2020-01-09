<script>
	export default {
		// 全局变量
		globalData: {
			text: ""
		},
		onUniNViewMessage(e) {
			let data = e.data;
			console.log(e.data)
			// 处理
			if (data.from && data.from === 'index') {
				// 通知分类页修改数据
				uni.$emit('index', data)
			}
		},
		onLaunch: function() {
			console.log('App Launch')
			// 初始化登录状态
			this.$store.commit('initUser')
			// 更新购物车数据
			this.$store.dispatch('updateCartList')
			// 监听购物车更新
			uni.$on('updateCart', () => {
				this.$store.dispatch('updateCartList')
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("/common/uni.css");
	@import url("/common/animate.css");
	@import url("/common/icon.css");
	@import url("/common/common.css");
	@import url("/common/zcm-main.css");
</style>
