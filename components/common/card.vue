<template>
	<view class="card" :style="carStyle">
		<!-- 标题 -->
		<view v-if="showHead"
		 :class="getHeadClass"
		 class="p-2 d-flex a-center j-sb">
		 <!-- //有插槽,里面消失,没插槽,默认里面显示 -->
			<slot name="title">  
				<text v-if="headTitle" class="font-md" 
				:class="headTitleWeight? 'font-weight' : ''    "
				>{{ headTitle }}</text>
			</slot>
			<slot name="right"></slot>
		</view>
		<!-- body -->
		<view :class="getBodyClass" :style="bodyStyle">
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
			bodyStyle:String,
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
			},
			carStyle:{
				type:String,
				default:""
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
