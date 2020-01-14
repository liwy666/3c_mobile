<template>
	<div class="top-swiper-main">
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
                    loop : true,
                    autoplay: {
                        delay: 2000,
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
        mounted()
        {
            let _this = this;
            this.swiper.on('tap', function () {
                _this.toSonControl(_this.data[this.clickedSlide.getAttribute('data_index')]);
            })
        },
        methods: {
            toSonControl(ad_info) {
                console.log(ad_info);
                this.toControl(ad_info)
            }
        },
    };
</script>
<style lang="scss" scoped>
	.top-swiper-main {
		.img-card {
			width: 100%;
			img{
				display: block;
			}
		}
	}
</style>