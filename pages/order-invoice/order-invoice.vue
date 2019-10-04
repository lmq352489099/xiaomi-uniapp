<template>
	<view>
		<divider></divider>
		<card headTitle="发票类型" bodyPadding carStyle="background-color:#ffffff">
			<zcmradiGroup :label="label1" :selected111.sync="label1.selected"></zcmradiGroup>
			<view class="text-light-muted line-h-md">
				电子发票管理电子发票管理电子发票管理电子发票管理电子发票管理电子发票管理电子发票管理电子发票管理电子发票管理电子发票管理电子发票管理电子发票管理电子发票管理
			</view>
		</card>
		<divider></divider>
		<card headTitle="发票抬头" bodyPadding carStyle="background-color:#ffffff">
			<zcmradiGroup :label="label2" :selected111.sync="label1.selected"></zcmradiGroup>

		</card>
		<divider></divider>

		<view class="p-2 border-bottom d-flex a-cente bg-white">
			<text class="font-md">个人姓名: </text>
			<text class="font-md ml-2">个人</text>

		</view>
		<view class="p-2 border-bottom d-flex a-cente bg-white">
			<text class="font-md">发票内容: </text>
			<text class="font-md ml-2">商品明细 </text>

		</view>
		<view class="p-2 border-bottom d-flex a-cente bg-white">
			<text class="font-md">收票人手机: </text>
			<text class="font-md ml-2">158****123</text>

		</view>

		<view class="p-2 text-light-muted d-flex flex-column">
			<text>发票须知:</text>
			<text>发票须知:发票须知:发票须知:</text>
			<text>发票须知:发票须知:发票须知:发票须知:</text>
		</view>
	</view>
</template>

<script>
	import card from "../../components/common/card.vue"
	import zcmradiGroup from "../../components/common/radio-group.vue"
	export default {
		components: {
			card,
			zcmradiGroup
		},
		data() {
			return {
				label1: {
					selected: 0,
					list: [
						{ name: "电子发票" },
					]
				},
				label2: {
					selected: 0,
					list: [
						{ name: "个人" },
						{ name: "单位" },
					]
				}
			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F5F5F5;
	}
</style>
