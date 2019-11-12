<template>
	<div class="swiper">
		<div class="swiper-container" :class="idcar">
			<div class="swiper-wrapper">
				<slot></slot>
				<!-- <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div> -->
			</div>
			<!-- 如果需要分页器 -->
			<!-- 此处用v-show判断 使用v-if会造成分页器被其他轮播图组件控制的bug -->
			<div class="swiper-pagination" v-show="paginationshow" :style="{'text-align':textAlign}"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/css/swiper.min.css";
	export default {
		name: "Slider",
		props: {
			//标识
			idcar: {
				type: String,
				default: ''
			},
			// 切换方式
			effect: {
				type: String,
				default: "slide"
			},
			//小圆点对其方式
			textAlign: {
				type: String,
				default: "center"
			},
			//分页器样式
			pagination: {
				type: String,
				default: 'bullets'
			},
			//分页器是否显示
			paginationshow: {
				type: Boolean,
				default: true
			},
		},
		mounted() {
			var mySwiper = new Swiper('.' + this.idcar, {
				// direction: 'vertical', // 垂直切换选项
				loop: true, // 循环模式选项
				autoplay: {//自动播放
					delay: 3000, 
					stopOnLastSlide: false,
					disableOnInteraction: true
				}, 
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					//分液器样式
					type: this.pagination,
				},
				effect: this.effect,

				// // 如果需要前进后退按钮
				// navigation: {
				//   nextEl: '.swiper-button-next',
				//   prevEl: '.swiper-button-prev',
				// },

				// // 如果需要滚动条
				// scrollbar: {
				//   el: '.swiper-scrollbar',
				// },
			})
		}
	};
</script>
<style scoped>
	.swiper .swiper-wrapper {
		height: 1rem;
	}
	.swiper-slide img {
		width: 100%;
		height: 100%;
	}
</style>