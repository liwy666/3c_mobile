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
                    autoplay: {
                        delay: 2500,
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
	.top-swiper-main {
		width: 100%;
	}
</style>