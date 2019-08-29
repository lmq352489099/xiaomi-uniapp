<template>
	<view class="row">
		<view class=" px-2 span24-8 mb-2" v-for="(item,index) in label.list" :key="index">
			<view
						@tap="changeRadio(index)"
			 :class="label.selected == index ? 'radio-active' : 'bg-light-secondary'"
			 class="border border-light-secondary rounded  px-2 py-1  text-center">
	
				{{item.name}}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props:{
			label:Object
		},
		methods: {
			changeRadio(index) {
				console.log(index);
				this.$emit('update:selected111',index)
				
			}
		},
	}
</script>

<style>
	.radio-active {
		background: #FCE0D5 !important;
		color: #EB7320 !important;
		border-color: #eB7320 !important;
		// border-style: solid;
		// border-width: 1px;
		// border: 1upx solid #eB7320 ;
	}
</style>
