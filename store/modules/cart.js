export default {
	state: {
		list: [{
				checked: false,
				id: 11,
				title: "商品标题111",
				cover: "/static/images/demo/list/1.jpg",
				// 选中商品属性
				attrs: [{
						title: "颜色",
						selected: 0,
						list: [
							{ name: '火焰红', },
							{ name: '炭黑', },
							{ name: '冰川兰', }
						]
					},
					{
						title: "容量",
						selected: 0,
						list: [
							{ name: '64GB', },
							{ name: '128GB', },
						]
					},
					{
						title: "套餐",
						selected: 0,
						list: [
							{ name: '标配', },
							{ name: '套餐一', },
							{ name: '套餐二', }
						]
					},
				],
				pprice: 336,
				num: 1,
				minnum: 1,
				maxnum: 10, // 该商品最大商品数，跟库存有关
			},
			{
				checked: false,
				id: 12,
				title: "商品标题111",
				cover: "/static/images/demo/list/1.jpg",
				// 选中商品属性
				attrs: [{
						title: "颜色",
						selected: 0,
						list: [
							{ name: '火焰红', },
							{ name: '炭黑', },
							{ name: '冰川兰', }
						]
					},
					{
						title: "容量",
						selected: 0,
						list: [
							{ name: '64GB', },
							{ name: '128GB', },
						]
					},
					{
						title: "套餐",
						selected: 0,
						list: [
							{ name: '标配', },
							{ name: '套餐一', },
							{ name: '套餐二', }
						]
					},
				],
				pprice: 336,
				num: 1,
				minnum: 1,
				maxnum: 10, // 该商品最大商品数，跟库存有关
			},
		],
		// 选中列表 (存放选中的id)
		selectedList: [],
		popupShow: 'none',
		popupIndex: -1
	},
	getters: {
		// 判断是否全选
		checkedAll: (state) => {
			return state.list.length === state.selectedList.length
		},
		// 合计
		totalPrice: (state) => {
			var total = 0
			state.list.forEach(v => {
				if (state.selectedList.indexOf(v.id) > -1) {
					total += v.pprice * v.num
				}
			})
			return total
		},
		// 禁用全选
		disableSelectAll: (state) => {
			return state.list.length === 0
		},
		// 拿到当前需要修改属性的商品
		popupData: (state) => {
			// 取到当前的商品规格
			return state.popupIndex > -1 ? state.list[state.popupIndex] : {}
		}
	},
	mutations: {
		// 选中/取消选中某个商品
		selectItem(state, index) {
			// 当前索引的id
			let id = state.list[index].id
			let i = state.selectedList.indexOf(id)
			// 之前是选中的,现在取消选中
			if (i > -1) {
				// 取消当前商品选中状态
				state.list[index].checked = false
				// 移除选中列表中的当前商品
				return state.selectedList.splice(i, 1)
			}
			// 之前是没选中的,现在选中
			state.list[index].checked = true
			state.selectedList.push(id)
		},


		// 全选
		selectAll(state) {
			state.selectedList = state.list.map(v => {
				// 设置选中状态

				v.checked = true
				return v.id
			})
		},
		// 取消全选
		unSelectAll(state) {
			state.list.forEach(v => {
				// 设置选中状态
				v.checked = false
			})
			state.selectedList = []
		},
		// 删除选中
		delGoods(state) {
			// 没被选中的留下来了
			state.list = state.list.filter(v => {
				return state.selectedList.indexOf(v.id) == -1
			})
		},
		// 初始化 popupIndex
		initPopupIndex(state, index) {
			state.popupIndex = index
		},
		addGoodsToCart(state,goods){
			state.list.unshift(goods)
			}
		
	},
	actions: {
		// 显示pop
		doShowPopup({ state, commit }, index) {
			commit('initPopupIndex', index)
			state.popupShow = 'show'
		},
		// 隐藏 pop
		doHidePopup({ state,commit }) {
			state.popupShow = 'hide'
			setTimeout(() => {
				state.popupShow = 'none'
					commit('initPopupIndex', -1)
			}, 200)
		},


		// 点击全选
		doSelectAll({ commit, getters }) {

			getters.checkedAll ? commit('unSelectAll') : commit('selectAll')
		},
		doDelGoods({ commit }) {
			uni.showModal({
				content: "是否删除选中",
				success(res) {
					if (res.confirm) {
						commit('delGoods')
						uni.showToast({
							title: "删除成功"
						})
					}
				}
			})
		}
	}

}
