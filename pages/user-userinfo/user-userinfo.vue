<template>
	<view>
		<divider></divider>
		<uniListItem title="头像">
			<block slot="right">
				<image src="../../static/images/demo/demo6.jpg" style="height: 90rpx;width: 90rpx;"
				class="rounded-circle border border-light"
				></image>
			</block>
			
		</uniListItem>
		<uniListItem title="姓名">
			<block slot="right">holiday</block>
		</uniListItem>
		<uniListItem title="性别"></uniListItem>
		<uniListItem title="生日"></uniListItem>
			<divider></divider>
		<uniListItem title="修改密码"></uniListItem>
		<uniListItem title="密保手机"></uniListItem>

	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			uniListItem
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">

</style>
