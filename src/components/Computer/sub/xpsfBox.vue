<template>
	<div class="xpsf-box-main">
		<swiper :options="swiper_option" ref="mySwiper">
			<swiper-slide v-for="(item,i) in data" :key="item.id" :data_index="i">
				<goodsCard :goods_info="item"></goodsCard>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
    import goodsCard from './GoodsCardXpsf';

    export default {
        data() {
            return {
                swiper_option: {
                    loop : true,
                    loopAdditionalSlides: 1,
                    slidesPerView : 1.2,
                    effect: 'coverflow',
                    autoplay: {
                        delay: 3500,
                        disableOnInteraction: false,
                    },
                    coverflowEffect: {
                        rotate: 0,
                        stretch: -10,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
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
	.xpsf-box-main {
		width: 100%;
		background-color: rgb(245,245,245);
	}
</style>