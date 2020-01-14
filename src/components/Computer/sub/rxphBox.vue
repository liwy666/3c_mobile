<template>
	<div class="rxph-box-main">
		<div class="rxph-box">
			<swiper :options="swiper_option" ref="mySwiper">
				<swiper-slide v-for="(item,i) in data" :key="item.id" :data_index="i">
					<goodsCard :to-control="toSonControl" :goods_info="item" :goods_index="i+1"></goodsCard>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>
<script>
    import goodsCard from './GoodsCardrxph';

    export default {
        data() {
            return {
                swiper_option: {
                    loop: true,
                    slidesPerGroup : 3,
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
            goodsCard
        }
    };
</script>
<style lang="scss" scoped>
	.rxph-box-main {
		width: 100%;
		//background-image: linear-gradient(45deg, rgb(217, 193, 255), rgb(150, 243, 247));
		background-image: url("https://mate.ganglonggou.com/lib/images/tmt_b20011302.jpg");
		padding: 15px 10px;
		box-sizing: border-box;

		.rxph-box {
			box-sizing: border-box;
			width: 100%;
			background-color: white;
			display: flex;
			justify-content: space-around;
		}
	}
</style>