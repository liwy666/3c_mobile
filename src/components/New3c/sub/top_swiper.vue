<template>
	<div class="top-swiper-main">
		<div class="son-top-swiper-main">
			<swiper :options="swiper_option" ref="mySwiper">
				<swiper-slide v-for="(item,i) in data" :key="item.id" :data_index="i">
					<div class="img-card"><img :src="item.ad_img" :alt="item.ad_img"></div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                swiper_option: {
                    loop: true,
                    loopAdditionalSlides: 1,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    slidesPerView: 1.2,
                    spaceBetween: 15,
                    centeredSlides: true,
                },
                index: 1,
            };
        },
        props: {
            data: Array,
            toControl: Function,
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        created() {

        },
        mounted() {
            // this.swiper的函数里的this指向swiper, 所以这里要定义一个_this指向vue
            let _this = this;
            this.swiper.on('slideChangeTransitionEnd', function () {
                _this.index = this.realIndex + 1;
            });
            this.swiper.on('tap', function () {
                _this.toSonControl(_this.data[this.clickedSlide.getAttribute('data_index')]);
            })
        },
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            }
        },
    };
</script>
<style lang="scss" scoped>
	.top-swiper-main {
		width: 100%;
		padding: 10px 0;

		.son-top-swiper-main {
			width: 100%;

			img {
				border-radius: 10px;
				width: 100%;
				box-shadow: 0 0 10px 1px rgba(0, 0, 0, .1);
			}
		}
	}
</style>