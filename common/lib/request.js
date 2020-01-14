import $store from '@/store/index.js';
export default {
	// 全局配置
	common: {
		// 根路径
		baseUrl: "http://ceshi3.dishait.cn/api",
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: {},
		method: "GET",
		dataType: 'json'
	},
	// 请求 返回promise
	request(options = {}) {
		// 组织参数
		options.url = this.common.baseUrl + options.url
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		//token
		if (options.token) {
			options.header.token = $store.state.user.token
			// 二次验证
			if (options.checkToken && !options.header.token) {
				uni.showToast({
					title: '请先登录',
					icon: "none"
				});

				return uni.navigateTo({
					url: '/pages/login/login',
				});

			}
		}


		// 请求
		return new Promise((res, rej) => {

			// 请求之前...  todo


			// 请求中
			uni.request({
				// url: '',
				// method: 'GET',
				// data: {},
				// header,dataType
				...options,
				success: result => {
        //返回原始数据
					if (options.native) {
						return res(result)
					}

					// 服务端失败
					if (result.statusCode !== 200) {
						console.log("dsadsa");
						if (options.toast !== false) {
							return uni.showToast({
								title: result.data.msg || '服务端失败',
								icon: "none"
							})
						}



						return rej(result.data)
					}
					// 成功
					let data = result.data.data
					res(data)


				},
				fail: (error) => {
					uni.showToast({
						title: error.errMsg || '请求失败',
						icon: "none"
					})
					return rej()
				},
			});
		})


	},
	// get 请求
	get(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = "GET"
		return this.request(options)
	},
	// POST 请求
	post(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = "POST"
		return this.request(options)
	},
	// delete 请求
	del(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = "DELETE"
		return this.request(options)
	}

}
