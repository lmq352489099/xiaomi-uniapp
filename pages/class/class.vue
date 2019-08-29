<template>
	<view class="d-flex border-top border-light-secondary" style="height: 100%;box-sizing: border-box;">
		<scroll-view scroll-y style="flex: 1;height: 100%;"
		 class="border-right border-light-secondary">
			<!-- <view v-for="i in 50" key=" i">{{i}}</view> -->
			<view
			 class="border-bottom border-light-secondary py-1 left-scroll-item"
			 hover-class="bg-light-secondary"
			 @tap="changeCate(index)"
			 v-for="(item,index) in cate" :key='index'>

				<view
				 :class=" activeIndex==index ? 'class-active' : ''"
				 class="py-1 font-md text-muted text-center "
				 style="">分类一</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y
		 @scoll="onRightScoll"
		 style="flex: 3.5;height: 100%;" :scroll-with-animation="true" :scroll-top="rightScrollTop">
			<view>
				<view class="row right-scroll-item" v-for="(item,index) in list" :key='index'>
					<view class="span24-8 text-center py-2" v-for="(item2,index2) in item.list" :key='index2'>
						<image :src="item2.src"
						 style="width: 120upx; height: 120upx;"></image>
						<text class="d-block">{{item2.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 当前选中的分类
				activeIndex: 0,
				cate: [],
				list: [],
				leftDomsTop: '',
				rigtDomsTop: [],
				rightScrollTop:0
			}
		},
		onLoad() {
			this.getData()
			// console.log(this.list);
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.selectAll('.left-scroll-item').boundingClientRect(data => {
				// console.log("得到布局位置信息" + JSON.stringify(data));
				this.leftDomsTop = data.map(v => {
					return v.top
				})
				console.log(this.leftDomsTop);
				// console.log("节点离页面顶部的距离为" + data.top);
			}).exec();
			query.selectAll('.right-scroll-item').boundingClientRect(data => {
				// console.log("得到布局位置信息" + JSON.stringify(data));
				this.rightDomsTop = data.map(v => {
					return v.top
				})

				console.log(this.rightDomsTop);


				// console.log("节点离页面顶部的距离为" + data.top);
			}).exec();
		},
		methods: {
			getData() {
				for (var i = 0; i < 20; i++) {
					this.cate.push({
						name: "分类" + "i"
					})
					this.list.push({
						list: []
					})
				}
				for (let i = 0; i < this.list.length; i++) {
					for (let j = 0; j < 24; j++) {
						this.list[i].list.push({
							src: '/static/images/demo/cate_01.png',
							name: `分类${i}-商品${j}`
						}, )
					}


				}
			},
			// 点击左边分类
			changeCate(index) {
				this.activeIndex = index
				// 右边scroll-view 滚动到 对应区块
				this.rightScrollTop = this.rightDomsTop[index]

			},
			async onRightScoll(e){
				
			}
		},
		onShow() {

		}
	}
</script>

<style>
	.class-active {
		border-left: 8upx solid #FD6801;
		color: #FD6801 !important;
	}
</style>
