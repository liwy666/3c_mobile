<template>
	<div class="mark-goods-main">
		<div class="son-mark-goods-main">
			<swiper :options="swiper_option" ref="mySwiper">
				<swiper-slide v-for="(item,i) in data" :key="item.id" :data_index="i">
					<div class="img-card"><img :src="item.ad_img" :alt="item.ad_img"></div>
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                swiper_option: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    }
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
	.mark-goods-main {
		width: 100%;
		overflow: hidden;
		.img-card {
			width: 100%;
			text-align: center;
			img {
				width: 90%;
				border-radius: 5px;
			}
		}
	}
</style>