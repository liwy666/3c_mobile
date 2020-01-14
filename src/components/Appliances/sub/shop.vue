<template>
	<div class="choice-brand">
		<swiper :options="swiper_option" ref="mySwiper">
			<swiper-slide v-for="(item,i) in data" :key="item.id" :data_index="i">
				<goods-card :goods_info="item" :goods_index="i+1"></goods-card>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
    import goodsCard from './shop_card'

    export default {
        data() {
            return {
                swiper_option: {
                    loop: true,
                    loopAdditionalSlides: 1,
                    slidesPerView: 3,
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
            },
        },
        components: {
            'goods-card': goodsCard
        }
    };
</script>
<style lang="scss" scoped>
	.choice-brand {
		width: 95%;
		margin: 0 auto;
		margin-top: 10px;
		padding-bottom: 20px;
	}
</style>