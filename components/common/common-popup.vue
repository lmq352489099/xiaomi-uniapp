<template>
<<<<<<< HEAD
	<view class="_popup"  :class="popupClass">
		<view class="_mask" @touchmove.stop.prevent="move" @tap.stop="$emit('hide')"></view>
=======
	<view class="_popup" @touchmove.stop.prevent :class="popupClass">
		<view class="_mask" @tap.stop="$emit('hide')"></view>
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
		<view class="_body">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			popupClass: {
				type: String,
				default: "none"
			},
		},
<<<<<<< HEAD
		methods: {
			move() {
				
			}
		},
=======
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
	}
</script>

<style scoped lang="scss">
	.public_mask {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
	}

	._popup ._mask {
		@extend .public_mask
	}

	._popup {
		z-index: 2000;
		display: none;
<<<<<<< HEAD
		
=======
		;
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0

	}

	._mask {
		z-index: 2002;
		background: rgba(0, 0, 0, 0.5);
	}

	._popup ._body {
		position: fixed;
		bottom: -1035rpx;
		width: 92%;
<<<<<<< HEAD
		z-index: 12003;
=======
		z-index: 2003;
>>>>>>> 71002b7df0f0182c8acc60d01ec0dda756b003d0
		padding: 0 4%;
		height: 1035rpx;
		border-radius: 20rpx 20rpx 0 0;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
	}

	._popup.show {
		display: block;

		._mask {
			animation: showPopupMask 0.2s linear both;
		}

		._body {
			animation: showPopupBody 0.2s linear both;
		}
	}

	._popup.hide {
		display: block;

		._body {
			animation: hidePopupBody 0.2s linear both;
		}

		._mask {
			animation: hidePopupMask 0.2s linear both;
		}
	}

	._popup.none {
		display: none;
	}

	@keyframes hidePopupBody {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}

	@keyframes showPopupBody {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}


	@keyframes showPopupMask {
		0% {
			opacify: 0
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes hidePopupMask {
		0% {
			opacify: 1
		}

		100% {
			opacity: 0;
		}
	}
</style>
