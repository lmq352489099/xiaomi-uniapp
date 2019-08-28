<template>
	<view class="card">
		<!-- 标题 -->
		<view v-if="showHead"
		 :class="getHeadClass"
		 class="p-2">
			<slot name="title">
				<text v-if="headTitle" class="font-md" 
				:class="headTitleWeight? 'font-weight' : ''    "
				>{{ headTitle }}</text>
			</slot>
		</view>
		<!-- body -->
		<view :class="getBodyClass">
			<image v-if="bodyCover" :src="bodyCover" mode="widthFix"></image>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {

		props: {
			// 头部标题
			headTitle: String,
			// 封面图
			bodyCover: String,
			// 是否显示头部
			showHead: {
				type: Boolean,
				default: true
			},
			// 是否显示下边线
			headBorderBottom: {
				type: Boolean,
				default: true
			},
			// 是否给body加padding
			bodyPadding: {
				type: Boolean,
				default: false
			},
			// 标题是否是否加粗
			headTitleWeight:{
				type:Boolean,
				default:true
			}
		},
		computed: {
			getHeadClass() {
				let borderBottom = this.headBorderBottom ? 'border-bottom' : ''
				return `${borderBottom}`
				// return { 'border-bottom': this.headBorderBottom }
			},
			getBodyClass() {
					let bodyPadding = this.bodyPadding ? 'p-2' : ''
					
					return `${bodyPadding}`
					
			// return {'p-2':this.bodyPadding}
			}
		}
	};
</script>

<style></style>
