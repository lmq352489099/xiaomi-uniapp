import Vue from 'vue'
import App from './App'
import store from './store'


Vue.prototype.$store = store

Vue.config.productionTip = false

//引入全局组件
import divider from "@/components/common/divider.vue"
Vue.component("divider", divider)
import loading from '@/components/common/loading.vue';
Vue.component("loading", loading)


// 引入request库
import $H from '@/common/lib/request.js';
Vue.prototype.$H = $H

<<<<<<< HEAD
// 权限跳转

Vue.prototype.navigateTo = (options) => {
	// 判断用户是否登录
	if (!store.state.user.loginStatus) {
		uni.showToast({
			title: '请先登录',
			icon: "none"
		});
		return uni.navigateTo({
			url: '/pages/login/login',
		});
	}

	uni.navigateTo(options)

}


import $U from './common/lib/util.js';
// 更新tabbat角标
Vue.prototype.$U = $U
=======

>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0


App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
