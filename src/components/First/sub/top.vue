<template>
	<div class="top-main">
		<div class="name-box">
			<swiper :options="swiper_option_name" ref="mySwiper">
				<swiper-slide v-for="(item,i) in name_list" :key="item.id">
					<li :class="i===switch_index?'top-xz':''" @click="switch_index=i">{{item.position_type_name}}</li>
				</swiper-slide>
			</swiper>
		</div>
		<div class="goods-list-box">
			<swiper :options="swiper_option_goods_list" ref="mySwiperGoods">
				<swiper-slide v-for="(item,i) in goods_group" :key="i">
					<div class="goods-list">
						<goodsCard v-for="item2 in item" :key="item2.id" :goods_info="item2"
							:to-control="toControl"></goodsCard>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>
<script>
    import goodsCard from './goodsCardType5'

    export default {
        data() {
            return {
                swiper_option_name: {
                    slidesPerView: 5.5,
                },
                swiper_option_goods_list: {
                    on: {
                        slideChangeTransitionEnd: () => {
                            let swiper = this.$refs.mySwiperGoods.swiper;
                            this.switch_index = swiper.activeIndex;
                        },
                    },
                },
                switch_index: 0,
            };
        },
        props: {
            goods_list: Array,
            name_list: Array,
            toControl: Function,
        },
        watch: {
            'switch_index': function (val) {
                this.$refs.mySwiperGoods.swiper.slideToLoop(val);
            },
            '$refs.mySwiperGoods.swiper.slideToLoop.activeIndex': function (val) {
                console.log(val);
            }
        },
        computed: {
            goods_group: {
                get: function () {
                    let result = [];
                    if (this.goods_list && this.name_list) {
                        this.name_list.forEach(item => {
                            let son_result = [];
                            this.goods_list.forEach(item2 => {
                                if (item.position_type_name === item2.position_type_name) {
                                    son_result.push(item2);
                                }
                            });
                            result.push(son_result);
                        })
                    }
                    return result;
                }
            },
        },
        created() {

        },
        methods: {},
        components: {
            goodsCard
        }
    };
</script>
<style lang="scss" scoped>
	.top-main {
		.name-box {
			box-shadow: 0 0 10px 1px rgba(0, 0, 0, .1);
			height: 40px;
			width: 100%;
			overflow: hidden;
			background-color: #FFFFFF;
			font-size: 15px;
			line-height: 40px;
			text-align: center;

			li {
				box-sizing: border-box;
				color: #0b131c;
				height: 40px;
			}

			.top-xz {
				color: rgb(234, 18, 19);
				border-bottom: 3px solid rgb(234, 18, 19);
			}
		}

		.goods-list-box {
			/*background-color: white;*/

			.goods-list {
				display: flex;
				width: 100%;
				flex-wrap: wrap;
				justify-content: space-around;
				padding-bottom: 3px;
			}
		}
	}
</style>