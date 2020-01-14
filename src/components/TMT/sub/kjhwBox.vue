<template>
	<div class="kjhw-box-main">
		<div class="solitary-banner" v-if="banner"
			@click="toControl(banner)"><img
			:src="banner.ad_img"
			:alt="banner.ad_img"></div>
		<swiper :options="swiper_option" ref="mySwiper">
			<swiper-slide v-for="(item,i) in data" :key="item.id" :data_index="i">
				<goodsCard :goods_info="item"></goodsCard>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
    import goodsCard from './GoodsCardKjhw';

    export default {
        data() {
            return {
                swiper_option: {
                    loop: true,
                    loopAdditionalSlides: 1,
                    slidesPerView: 3.5,
                    autoplay: {
                        delay: 3500,
                        disableOnInteraction: false,
                    },
                }
            };
        },
        props: {
            data: Array,
            toControl: Function,
            banner: Object,
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {
            let _this = this;
            this.swiper.on('tap', function () {
                _this.toSonControl(_this.data[this.clickedSlide.getAttribute('data_index')]);
            })
        },
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            }
        },
        components: {
            goodsCard
        }
    };
</script>
<style lang="scss" scoped>
	.kjhw-box-main {
		width: 100%;
		//background-image: url("https://mate.ganglonggou.com/lib/images/tmt_b20716.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.solitary-banner{
			margin-bottom: -5px;
		}
	}
</style>