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

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
