<template>
	<view>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">收货人:</view>
			<input type="text" v-model="form.name" class="px-1 fong-md flex-1" />
		</view>
		<view class="p-2  d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">手机号码:</view>
			<input type="text" v-model="form.phone" class="px-1 fong-md flex-1" />
		</view>
		<divider></divider>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">所在地区:</view>
			<input type="text" :value="form.path" placeholder="请选择所在地区" disabled="true" @click="showMulLinkageThreePicker"
			 class="px-1 fong-md flex-1" />
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="pickerValue"
			 @onConfirm="onConfirm"></mpvue-city-picker>
		</view>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">详细地址:</view>
			<input type="text" v-model="form.detailPath" class="px-1 fong-md flex-1" />
		</view>
		<divider></divider>
		<view class="p-2 border-bottom d-flex a-center bg-white">
			<view class="font-md text-secondary mr-1 flex-shrink">设为默认地址:</view>
			<switch :checked="form.isdefault" color="#FD6801" class="ml-auto" @change="form.isdefault = $event.detail.value" />
		</view>
		<view class="p-3">
			<view class="text-center w-100 main-bg-color text-white font-md rounded py-2"
			 hover-class="main-bg-hover-color" @click="submit">保存</view>

		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from "@/components/uni-ui/mpvue-citypicker/mpvueCityPicker.vue"
	import { mapMutations, mapActions } from "vuex"
	export default {
		components: {
			mpvueCityPicker

		},
		data() {
			return {
				isedit: false,
				pickerValue: [0, 0, 1],
				index: -1,
				themeColor: '#007AFF',
				form: {
					path: '',
					name: "",
					phone: "",
					detailPath: '',
					isdefault: false
				}

			};
		},
		onLoad(e) {
			if (e.data) {
				let result = JSON.parse(e.data)
				this.form = result.item
				this.index = result.index
				this.isedit = true
				uni.setNavigationBarTitle({
					title: "修改收货地址"
				})
			}
			// console.log(e.data);

		},
		// 监听返回
		onBackPress() {

			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();

			}
		},
		methods: {
			...mapMutations(["createPath", "updatePath"]),
			...mapActions(['updatePathAction', 'createPathAction']),
			// 提交
			submit() {
				// 验证表单

				// 修改
				if (this.isedit) {
					// this.updatePath({
					// 	index: this.index,
					// 	item:this.form
					// })
					this.updatePathAction({
						index: this.index,
						item: this.form
					})
					uni.showToast({
						title: '修改成功'
					});
					uni.navigateBack()
					return
				}

				// 创建
				// this.createPath(this.form)
				this.createPathAction(this.form)
				uni.showToast({
					title: '创建成功'
				});
			},
			// 三级联动确定
			onConfirm(e) {
				console.log(e)
				this.form.path = e.label
				this.pickerValue = e.value

			},
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
		}
	}
</script>

<style lang="scss">
	page {}
</style>
