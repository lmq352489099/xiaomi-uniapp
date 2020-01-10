import Vue from "vue"
import Vuex from 'vuex'
import cart from "@/store/modules/cart.js"
import path from "@/store/modules/path.js"
<<<<<<< HEAD
import user from "@/store/modules/user.js"
=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		cart,
<<<<<<< HEAD
		path,
		user
=======
		path
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	}
})
