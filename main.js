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




App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
