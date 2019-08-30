<template>
	<view class="d-flex border-top border-light-secondary" style="height: 100%;box-sizing: border-box;">

		<loading :show="showLoading"></loading>
		<scroll-view id="leftScroll" scroll-y style="flex: 1;height: 100%;"
		 class="border-right border-light-secondary"
		 :scroll-top="leftScrollTop">
			<!-- <view v-for="i in 50" key=" i">{{i}}</view> -->
			<view
			 class="border-bottom border-light-secondary py-1 left-scroll-item"
			 hover-class="bg-light-secondary"
			 @tap="changeCate(index)"
			 v-for="(item,index) in cate" :key='index'>

				<view
				 :class=" activeIndex==index ? 'class-active' : ''"
				 class="py-1 font-md text-muted text-center "
				 style="">{{item.name}}</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y
		 @scroll="onRightScroll"
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
				showLoading: true,
				// 当前选中的分类
				activeIndex: 0,
				cate: [],
				list: [],
				leftDomsTop: '',
				rigtDomsTop: [],
				rightScrollTop: 0,
				// 左边类目的高度
				cateItemHeight: 0,
				// 右边滑动监听左边的类目的样式
				leftScrollTop: 0,
			}
		},
		onLoad() {
			this.getData()
			// console.log(this.list);
		},
		onReady() {
			// 左右边的每个top
			this.getElInfo({
				all: 'left',
				size: true,
				rect: true
			}).then(data => {
				this.leftDomsTop = data.map(v => {

					this.cateItemHeight = v.height
					return v.top
				})
				console.log("this.leftDomsTop ", this.leftDomsTop);
			})


			this.getElInfo({
				all: 'right',
				size: false,
				rect: true
			}).then(data => {
				this.rightDomsTop = data.map(v => {
					return v.top
				})
				console.log("this.rightDomsTop", this.rightDomsTop);
			})


		},
		watch: {
			async activeIndex(newValue, oldValue) {
				// 获取scoll-view 高度,scroolTop 
				console.log(newValue);
				let data = await this.getElInfo({
					size: true,
					scrollOffset: true
				})


				let H = data.height
				console.log("H", H);
				let ST = data.scrollTop
				console.log(ST);
				// 下边
				// 523 + 47.5 > 572.5 + 0(如果超出了左边你的高度就是45)
				if ((this.leftDomsTop[newValue] + this.cateItemHeight) > (H + ST)) {
					//570.5 + 47.5 - 572 = 45.5
					console.log("560.8", this.leftScrollTop = this.leftDomsTop[newValue] + this.cateItemHeight - H);
					return this.leftScrollTop = this.leftDomsTop[newValue] + this.cateItemHeight - H
				}
				// 上边
				if (ST > this.cateItemHeight) {
					this.leftScrollTop = this.leftDomsTop[newValue]
				}

			}
		},
		methods: {
			// 获取节点信息
			getElInfo(obj = {}) {
				return new Promise((res, rej) => {
					let options = {
						size: obj.size ? true : false,
						rect: obj.rect ? true : false,
						scrollOffset: obj.scrollOffset ? true : false
					}
					const query = uni.createSelectorQuery().in(this);
					let q = obj.all ? query.selectAll(`.${obj.all}-scroll-item`) : query.select('#leftScroll')
					q.fields(options, data => {
						res(data)
					}).exec();
				})
			},
			getData() {
				for (var i = 0; i < 20; i++) {
					this.cate.push({
						name: "分类" + i
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
				this.$nextTick(function(){
							this.showLoading = false
				})
		
			},
			// 点击左边分类
			changeCate(index) {
				this.activeIndex = index
				// 右边scroll-view 滚动到 对应区块
				this.rightScrollTop = this.rightDomsTop[index]

			},
			// 监听右边滚动
			// 顶部到滚动的距离
			async onRightScroll(e) {

				console.log(e.detail.scrollTop);
				// 匹配到当前的scrollTop所处的索引
				// 如果右边的滚动距离大于 右边的每个DOOM节点的固定TOP
				//就重新复制index,使左边动态改变
				this.rightDomsTop.forEach((v, k) => {
					if (v < e.detail.scrollTop) {
						this.activeIndex = k
						return false
					}

				})
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
