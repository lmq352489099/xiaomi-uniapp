import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//引入全局组件
import divider from "@/components/common/divider.vue"
Vue.component("divider", divider)


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
