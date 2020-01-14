<template>
	<view>
		<uni-status-bar></uni-status-bar>
		<view class="d-flex a-center j-sb j-sb py-2 px-3 text-light-muted">
			<view class="iconfont icon-shanchu1" @click="goback"></view>
			<view class="font-md " @click="forget">忘记密码</view>
		</view>


		<view class="p-5">
			<view class="font-big mb-5">密码登录</view>
			<input type="text"
			 v-model="username"
			 @focus="focuss('username')"
			 @blur="blur('username')"
			 :class="focus.username ? 'input-border-color' : ''"
			 placeholder-class="text-light-muted" placeholder="请输入手机号/邮箱/账号" class="border-bottom px-0 mb-4" />
			<input
			 :class="focus.password ? 'input-border-color' : ''"
			 @focus="focuss('password')"
			 @blur="blur('password')"
			 type="text" v-model="password"
			 placeholder-class="text-light-muted" placeholder="请输入密码" class="border-bottom px-0 mb-4" />
			<view class="py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4"
			 hover-class="main-bg-hover-color"
			 @click="submit">
				登录
			</view>
			<label class="checkbx d-flex a-center" @click="check = !check">
				<checkbox :checked="check" />
				<text class="text-light-muted font">已阅读并同意xxx协议</text>
			</label>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "../../components/uni-ui/uni-status-bar/uni-status-bar.vue"
	import { mapState, mapMutations } from "vuex"
	export default {
		components: {
			uniStatusBar
		},
		data() {

			return {
				check: true,
				password: '',
				username: '',
				// 验证规则
				rules: {
					username: [{
							rule: /^[a-zA-Z]\w{5,17}$/,
							msg: "以字母开头,长度在6~18之间,只能包含字母,数字和下划线"
						},

					],
					password: [{
						rule: /^.{5,20}$/,
						msg: "密码长度为5-20的所有字符"
					}]
				},
				focus: {
					username: false,
					password: false
				}

			}
		},
		// computed: {
		// 	..mapState() {
		// 		loginStatus:s
		// 	}
		// },
		onLoad() {
			console.log(this.focus.username);
		},
		methods: {
			...mapMutations(["login"]),
			// 表单验证
			validate(key) {
				var check = true
				this.rules[key].forEach((v) => {
					if (!(v.rule).test(this[key])) {
						uni.showToast({
							title: v.msg,
							icon: "none"
						});
						console.log(v.msg);
						check = false
						return false
					}
				})
				return check
			},
			// 提交表单
			submit() {
				if (!this.check) {
					return uni.showToast({
						title: "请同意xx协议",
						icon: "none"
					})
				}

				// 验证码用户名
				// if (!this.validate('username')) return

				// if (!this.validate('password')) return/
				uni.showLoading({
					title: '登录中...',
					mask: true
				})
				this.$H.post('/login', {
					username: this.username,
					password: this.password
				}).then(res => {
					// 状态存储
					this.login(res)

					// 刷新购物车
					uni.$emit('updateCart')

					uni.hideLoading()
					uni.showToast({
						title: "登录成功",
						icon: "none"
					})
					uni.navigateBack({

					})
				})




			},
			goback() {
			
				uni.navigateBack({

				})
			},
			forget() {

			},
			focuss(key) {
				console.log(key);
				this.focus[key] = true
				// console.log(this.focus['username']);

			},
			blur(key) {
				this.focus[key] = false
			},


		}
	}
</script>

<style>

</style>
