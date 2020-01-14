<template>
	<div class="roll-goods-main">
		<swiper :options="swiper_option" ref="mySwiper">
			<swiper-slide v-for="(item,i) in data" :key="item.id" :data_index="i">
				<goodsCard :goods_info="item"></goodsCard>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
	import goodsCard from './goodsCardType1'
    export default {
        data() {
            return {
                swiper_option: {
                    loop : true,
                    slidesPerView : 3,
                    speed:2000,
                    // freeMode : true,
                    // freeModeMomentumRatio : 1,
                    spaceBetween: 0,
                    // freeModeMomentum : false,
                    autoplay: {
                        delay: 0,
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
            swiper(){
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted()
        {
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
		components:{
            goodsCard,
		}
    };
</script>
<style lang="scss" scoped>
	.roll-goods-main {
		background-color: white;
		height: 175px;
		padding-top: 5px;
		overflow: hidden;

		.swiper-wrapper {
			transition-timing-function: linear;
		}
	}
</style>