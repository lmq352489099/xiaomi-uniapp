import $H from "@/common/lib/request.js"

import $U from '@/common/lib/util.js';
/*
*
*{
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
* 
* 


*/
export default {
	state: {
		list: [],
		// 选中列表 (存放选中的id)
		selectedList: [],
		popupShow: 'none',
		popupIndex: -1,
		popupData: {}
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
		// popupData: (state) => {
		// 	// 取到当前的商品规格
		// 	return state.popupIndex > -1 ? state.list[state.popupIndex] : {}
		// }
		// 购物车商品数量
		cartCount: (state) => {
			if (state.list.length <= 99) {
				return state.list.length
			}
			return "99+"
		}
	},
	mutations: {
		// 初始化list
		initCartList(state, list) {
			state.list = list
			// 更新tabbat角标
			$U.updaCaartBadge(state.list.length)
		},

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

			$U.updaCaartBadge(state.list.length)
		},
		// 初始化 popupIndex
		initPopupIndex(state, index) {
			state.popupIndex = index
		},
		addGoodsToCart(state, goods) {
			state.list.unshift(goods)
			console.log(state.list.length);
			$U.updaCaartBadge(state.list.length)
		},
		// 清空购物车
		clearCart(state) {
			state.list = []
			state.selectedList = []
			$U.updaCaartBadge(state.list.length)
		}

	},
	actions: {
		// 更新购物车列表方法
		updateCartList({ state, commit }) {
			return new Promise((res, rej) => {
				// 获取购物车数据
				$H.get('/cart', {}, { token: true, toast: false }).then(ress => {
					// 取消选中状态
					commit('unSelectAll')
					// 赋值
					commit('initCartList', ress)
					res(ress)
				}).catch(err => {
					rej(err)
				})

			})


		},


		// 显示pop
		doShowPopup({ state, commit }, { index, data }) {
			commit('initPopupIndex', index)
			// 显示之后复制给popDATA 数据(点击一次变一次数据)
			state.popupData = data
			//d当前购物车的操作对象
			state.popupData.item = state.list[index]
			state.popupShow = 'show'
		},
		// 隐藏 pop
		doHidePopup({ state, commit }) {
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
		doDelGoods({ commit, state }) {

			if (state.selectedList.length == 0) {
				return uni.showToast({
					title: '请选择要删除的商品',
					icon: "none"
				});
			}

			uni.showModal({
				content: "是否删除选中",
				success(res) {
					if (res.confirm) {

						$H.post('/cart/delete', {
							shop_ids: state.selectedList.join(",")
						}, { token: true }).then(res => {
							commit('delGoods')
							commit('unSelectAll')
							uni.showToast({
								title: "删除成功"
							})
						})


					}
				}
			})
		}
	}

}
