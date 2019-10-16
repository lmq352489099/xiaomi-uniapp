<template>
	<view>
		<divider></divider>
		<card headTitle="申请售后的产品"></card>
		<view class="d-flex a-center px-3 py-2">
			<image src="../../static/images/demo/cate_01.png" mode="widthFix"
			 style="height:100rpx ;width:100rpx ;"></image>
			<view class="flex-1 ml-3">
				<view class="font-md">商品名称</view>
				<view class="font-md text-light-muted">
					维修服务: 剩余111天
				</view>
			</view>
		</view>
		<divider></divider>

		<card headTitle="服务类型" bodyPadding carStyle="background-color:#ffffff">
			<zcmradiGroup :label="label1" :selected111.sync="label1.selected"></zcmradiGroup>
		</card>
		<card headTitle="问题描述" bodyPadding carStyle="background-color:#ffffff">
			<view class="position-relative">
				<textarea v-model="content" :maxlength="maxlength" style="width: 100%;height: 400rpx;box-sizing: border-box;"
				 class="border  rounded p-2"
				 placeholder="详情描述一下你遇到的问题" />
				<view class="position-absolute text-light-muted font" 
				:class="remain >=0 ? 'text-light-muted' : 'text-danger'"
				style="right: 5rpx;bottom: 5rpx;">
			 	{{remain}}/{{maxlength}}
			 </view>
			 
			 </view>
			</card>
			
			<view class="p-3">
				<view class="rounded main-bg-color text-white text-center font-md py-3"
				hover-class="main-bg-hover-color"
				>
				 下一步
				 </view>
			</view>
			
	</view>
</template>

<script>
	import card from "../../components/common/card.vue"
	import uniListItem from "../../components/uni-ui/uni-list-item/uni-list-item.vue"
	import zcmradiGroup from "../../components/common/radio-group.vue"
	export default {
		components: {
			card,
			uniListItem,
			zcmradiGroup
		},
		data() {
			return {
				content:"",
				maxlength:50,
				label1: {
					selected: 0,
					list: [
						{ name: "维修" },
					]
				},
			}
		},
		computed: {
			//剩余可输入字数
			remain() {
				return this.maxlength - this.content.length
			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background: #EEEEEE;
	}
</style>
