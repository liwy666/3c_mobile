<template>
	<div class="appliances-main" v-if="get_info">
		<search-box :window_top="window_top"></search-box>
		<top-swiper v-if="index_ad_list.top_swiper" :data="index_ad_list.top_swiper"
			:to-control="toControl"></top-swiper>
		<grid-navigation></grid-navigation>
		<today-seckill v-if="index_ad_list.today_seckill_goods_list" :data="index_ad_list.today_seckill_goods_list"
			:to-control="toControl"></today-seckill>
		<p class="title" v-if="index_ad_list.nice_goods_list"><i style="color: rgb(48,44,46)">品质</i><i
			style="color: rgb(232,25,252)">好货</i><i class="small" style="color: gray">都是你喜欢的好品牌</i></p>
		<div class="banner-box"><img :src="index_ad_list.nice_goods_banner.ad_img"
			@click="toControl(index_ad_list.nice_goods_banner)"></div>
		<div class="goods-list-box">
			<goods-card v-for="item in index_ad_list.nice_goods_list" :goods_info="item" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<p class="title" v-if="index_ad_list.choice_brand_list"><i style="color: rgb(48,44,46)">精选</i><i
			style="color: rgb(252,65,30)">品牌</i><i class="small" style="color: gray">优质品牌 放心之选</i></p>
		<choice-brand v-if="index_ad_list.choice_brand_list" :data="index_ad_list.choice_brand_list"
			:to-control="toControl"></choice-brand>
		<p class="title" id="live-appliances" v-if="index_ad_list.live_appliances_list"><i style="color: rgb(48,44,46)">生活</i><i
			style="color: rgb(1,187,185)">电器</i></p>
		<div class="goods-list-box">
			<goods-card v-for="item in index_ad_list.live_appliances_list" :goods_info="item" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<p class="title" id="kitchen-appliances" v-if="index_ad_list.kitchen_appliances_list"><i
			style="color: rgb(48,44,46)">厨卫</i><i
			style="color: rgb(92,178,240)">电器</i></p>
		<div class="goods-list-box">
			<goods-card v-for="item in index_ad_list.kitchen_appliances_list" :goods_info="item" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<p class="title" id="nursing-appliances" v-if="index_ad_list.nursing_appliances_list"><i
			style="color: rgb(48,44,46)">个护</i><i
			style="color: rgb(201,122,240)">电器</i></p>
		<div class="goods-list-box">
			<goods-card v-for="item in index_ad_list.nursing_appliances_list" :goods_info="item" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<p class="title" v-if="index_ad_list.large_appliances_list"><i style="color: rgb(48,44,46)">大家电</i></p>
		<div class="goods-list-box">
			<goods-card v-for="item in index_ad_list.large_appliances_list" :goods_info="item" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<p class="title" id="large-appliances" v-if="index_ad_list.shop_list"><i style="color: rgb(48,44,46)">店铺推荐</i>
		</p>
		<shop v-if="index_ad_list.shop_list" :data="index_ad_list.shop_list"
			:to-control="toControl"></shop>
		<div class="back-top" v-show="window_top>300" @click="goBackTop">
			<van-icon name="upgrade"/>
		</div>
	</div>
</template>
<script>
    import topSwiper from './sub/top_swiper'
    import gridNavigation from './sub/grid_navigation'
    import todaySeckill from './sub/today_seckill'
    import goodsCard from './sub/common_goods_card'
    import choiceBrand from './sub/choice_brand'
    import shop from './sub/shop'
    import searchBox from './sub/search_box'


    export default {
        data() {
            return {
                get_info: null,
                window_top: 0,
            };
        },
        computed: {
            index_ad_list: {
                get: function () {
                    let result = {
                        top_swiper: [],
                        today_seckill_goods_list: [],
                        nice_goods_banner: null,
                        nice_goods_list: [],
                        choice_brand_list: [],
                        live_appliances_list: [],
                        kitchen_appliances_list: [],
                        nursing_appliances_list: [],
                        large_appliances_list: [],
                        shop_list: [],
                    };
                    if (this.get_info) {
                        this.get_info.ad_list.forEach(item => {
                            switch (item.position_type) {
                                case '顶部轮播':
                                    result.top_swiper.push(item);
                                    break;
                                case '今日秒杀-商品GN':
                                    result.today_seckill_goods_list.push(item);
                                    break;
                                case '品质好货-通栏':
                                    result.nice_goods_banner = item;
                                    break;
                                case '品质好货-商品GN':
                                    result.nice_goods_list.push(item);
                                    break;
                                case '精选品牌-内容N':
                                    result.choice_brand_list.push(item);
                                    break;
                                case '生活电器-商品GN':
                                    result.live_appliances_list.push(item);
                                    break;
                                case '厨卫电器-商品GN':
                                    result.kitchen_appliances_list.push(item);
                                    break;
                                case '个护电器-商品GN':
                                    result.nursing_appliances_list.push(item);
                                    break;
                                case '大家电-商品GN':
                                    result.large_appliances_list.push(item);
                                    break;
                                case '店铺推荐-内容N':
                                    result.shop_list.push(item);
                                    break;

                            }
                        });
                        result.nice_goods_list = this.getRandomArray(result.nice_goods_list, 20);
                        result.live_appliances_list = this.getRandomArray(result.live_appliances_list, 20);
                        result.kitchen_appliances_list = this.getRandomArray(result.kitchen_appliances_list, 20);
                        result.nursing_appliances_list = this.getRandomArray(result.nursing_appliances_list, 20);
                        result.large_appliances_list = this.getRandomArray(result.large_appliances_list, 20);
                    }
                    return result;
                },
            },
        },
        created() {
            this.getIndexAd();
        },
        mounted() {
            window.addEventListener('scroll', () => {
                this.window_top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            });

        },
        methods: {
            getIndexAd() {
                this.$fetch("get_index_info", {into_type: 'appliances_mobile'}).then((msg) => {
                    if (msg) {
                        this.get_info = msg;
                    }

                })
            },
            toControl(ad_info) {
                if (ad_info.ad_type === '外链接') {
                    this.$post('ad_item_count', {id: ad_info.id});
                    window.location.href = ad_info.url;
                }
            },
            goBackTop() {
                window.scrollTo(0, 0);
            },
            getRandomArray(_array, _length) {
                let result = [];
                if (_array.length > 0) {
                    /*打乱数组*/
                    _array.sort(
                        function () {
                            return Math.random() > 0.5 ? -1 : 1;
                        }
                    );
                    let fixed_goods_array = [];
                    let new_array = _array;
                    //算出固定商品的数量
                    _array.forEach((item, i) => {
                        if (item.is_fixed) {
                            fixed_goods_array.push(item);
                            new_array.splice(i, 1);
                            _length--;
                        }
                    });
                    _length = _length < 1 ? 1 : _length;
                    if (_array.length > _length) {
                        //修剪数组
                        new_array = new_array.slice(0, _length);
                        //添加固定商品
                        fixed_goods_array.forEach((item) => {
                            let random = Math.floor(Math.random() * (_length));
                            new_array.splice(random, 0, item);
                        });
                        result = new_array;
                    } else {
                        result = _array;
                    }

                }
                return result;
            }
        },
        components: {
            'top-swiper': topSwiper,
            'grid-navigation': gridNavigation,
            'today-seckill': todaySeckill,
            'goods-card': goodsCard,
            'choice-brand': choiceBrand,
            'shop': shop,
            'search-box': searchBox
        }
    };
</script>
<style lang="scss" scoped>
	.appliances-main {
		width: 100%;
		background-color: rgb(247, 247, 247);

		.title {
			text-align: left;
			padding-left: 10px;
			margin-top: 10px;

			i {
				font-weight: bolder;
				font-size: 18px;
				letter-spacing: 2px;
				font-style: normal;
			}

			.small {
				font-weight: 300;
				font-size: 12px;
				letter-spacing: 1px;
			}
		}

		.banner-box {
			width: 100%;
			margin: 10px 0;
			text-align: center;

			img {
				width: 95%;
				border-radius: 5px;
			}
		}

		.goods-list-box {
			border-radius: 10px;
			overflow: hidden;
			background-color: white;
			width: 95%;
			margin: 10px auto;
			display: flex;
			flex-wrap: wrap;
		}

		.back-top {
			position: fixed;
			background-color: white;
			bottom: 3%;
			right: 3%;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			z-index: 9999;
			box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .1);

			i {
				width: 50px;
				height: 50px;
				line-height: 50px;
				font-size: 50px;
				color: #007aff;
			}
		}
	}
</style>