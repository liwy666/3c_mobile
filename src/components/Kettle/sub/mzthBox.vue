<template>
	<div class="kjhw-box-main">
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
                    slidesPerView: 2.5,
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
		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>