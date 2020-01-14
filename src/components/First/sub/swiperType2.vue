<template>
	<div class="swiper-type2-main">
		<swiper :options="swiper_option" ref="mySwiper">
			<swiper-slide v-for="(item,i) in data" :key="item.id" :data_index="i">
				<div class="img-card"><img :src="item.ad_img" :alt="item.ad_img"></div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                swiper_option: {
                    loop: true,
                    effect: 'coverflow',
                    slidesPerView: 3,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 50,
                        depth: 150,
                        modifier: 3,
                        slideShadows: true,
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
    };
</script>
<style lang="scss" scoped>
	.swiper-type2-main {
		padding: 15px 0;
		height: 246px;
		width: 747px;
		overflow: hidden;
		background-color: #FFFFFF;
		position: relative;
		left: 50%;
		transform: translate(-50%, 0);

		.swiper-container {
			padding-bottom: 5px;
		}

		.swiper-wrapper {
			height: 201.16px;
			position: absolute;
			top: 8%;

			.swiper-slide {
				//width:249px !important;
				width: 249px;
				height: 201.16px;
				border-radius: 0.3rem;
				box-shadow: 1px 3px 6px 2px rgba(0, 0, 0, 0.1);
				padding: 15px;
				box-sizing: border-box;
				background-color: white;
			}
		}
	}
</style>