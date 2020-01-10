<template>
	<view>
<<<<<<< HEAD
		<view
		 @click="$emit('click',item)"
		 class="bg-white rounded border d-flex a-center border-light-secondary mb-3">
			<view class="flex-1 d-flex flex-column j-center px-3">
				<view class="font-lg" :class="item.disable || !item.status ? 'text-light-muted' : ''">{{item.title}} </view>
				<view class="text-light-muted font">
					{{item.start_time | formatTime}}~{{item.end_time | formatTime}}
=======
		<view class="bg-white rounded border d-flex a-center border-light-secondary mb-3">
			<view class="flex-1 d-flex flex-column j-center px-3">
				<view class="font-lg" :class="item.disable || !item.status ? 'text-light-muted' : ''">{{item.title}} </view>
				<view class="text-light-muted font">
					{{item.start_time}}~{{item.end_time}}
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
				</view>
			</view>
			<view
			 :class="item.disable || !item.status ? 'bg-secondary' : 'main-bg-color'"
			 class=" flex-column text-white d-flex a-center j-center" style="width: 220rpx;height: 200rpx;">
<<<<<<< HEAD
				<view class="font-lg line-h-md">{{item.price}} <text class="font">
				{{item.type ==0 ? '元' : '折'}}
			</text> </view>
=======
				<view class="font-lg line-h-md">{{item.price}} <text class="font">元</text> </view>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
				<view class="font">{{item.desc}} </view>
				<view
				 :class="item.disable || !item.status ? 'text-secondary' : 'main-text-color'"
				 class="rounded  bg-white w-50  text-center"
				 hover-class="bg-light-secondary">
<<<<<<< HEAD
					<slot> {{item.status ? '去使用' : '已失效'}} </slot>

				</view>
=======
				 {{item.status ? '去使用' : '已失效'}}
				 </view>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {

			};
<<<<<<< HEAD
		},
		filters: {
			formatTime(shorttime) {
				shorttime = shorttime.toString().length < 13 ? shorttime * 1000 : shorttime;
				let date = new Date(shorttime)
				let parseNumber = (num) => {
					return num < 10 ? "0" + num : num;
				}
				return date.getFullYear() + '-' + parseNumber(date.getMonth() + 1) + '-' + parseNumber(date.getDate()) + ' ' +
					parseNumber(date.getHours()) + ':' + parseNumber(date.getMinutes())
			}
=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
		}
	}
</script>

<style lang="scss">

</style>
