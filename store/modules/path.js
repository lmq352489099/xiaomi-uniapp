export default {
	state: {
		list: [{
				name: "summer",
				phone: "158****531",
				path: "广东省 广州市 白云区",
				detailPath: 'xxxx街道',
				isdefault: false
			},
			{
				name: "summer12",
				phone: "158****531",
				path: "广东省 广州市 白云区",
				detailPath: 'xxxx街道',
				isdefault: false
			}
		],
	},
	getters:{
		// 获取默认地址
		defaultPath:(state)=>{
			return state.list.filter(v=>{
				return v.isdefault
			})
		}
	},
	mutations: {
		// 创建收货地址
		createPath(state, item) {
			state.list.unshift(item)
		},
		// 删除收货地址
		delPath(state, index) {
			state.list.splice(index, 1)
		},
		// 修改收货地址
		updatePath(state, { index, item }) {
			for (let key in item) {
				state.list[index][key] = item[key]

			}

			// state.list[index] = item
		},
		// 取消默认地址
		removeDefault(state) {
			state.list.forEach(v => {
				if (v.isdefault) {
					v.isdefault = false
				}
			})
		}
	},
	actions:{
		// 修改地址
		updatePathAction({commit},obj){
			if(obj.item.isdefault){
				commit('removeDefault')
			}
			commit('updatePath',obj)
		},
		// 增加地址
		createPathAction({commit},item){
			if(obj.item.isdefault){
				commit('removeDefault')
			}
			commit('createPath',item)
		}
	}
}
