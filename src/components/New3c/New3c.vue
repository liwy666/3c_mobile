<template>
	<div class="appliances-main" v-if="get_info">
		<top-swiper v-if="index_ad_list.top_swiper" :data="index_ad_list.top_swiper"
			:to-control="toControl"></top-swiper>
		<grid-navigation></grid-navigation>
		<activity-box></activity-box>
		<goods-list-1 :to-control="toControl" list_id="number_24_goods_list" title_name="24期分期" title_color="rgb(246,112,114)"
			:banner_data="index_ad_list.number_24_banner" :number="24" :goods_list="index_ad_list.number_24_goods_list"></goods-list-1>
		<goods-list-1 :to-control="toControl" list_id="number_12_goods_list" title_name="12期分期" title_color="rgb(220,160,92)"
			:banner_data="index_ad_list.number_12_banner" :number="12" :goods_list="index_ad_list.number_12_goods_list"></goods-list-1>
		<goods-list-1 :to-control="toControl" list_id="number_6_goods_list"  title_name="6期分期" title_color="rgb(115,119,230)"
			:banner_data="index_ad_list.number_6_banner" :number="6" :goods_list="index_ad_list.number_6_goods_list"></goods-list-1>
		<goods-list-1 :to-control="toControl" list_id="parts_list" title_name="品质配件" title_color="rgb(109,212,140)"
			:banner_data="index_ad_list.parts_banner" :number="1" :goods_list="index_ad_list.parts_list"></goods-list-1>
		<goods-list-2 :to-control="toControl" title_name="手机通讯"  :goods_list="index_ad_list.phone_list" goods_list_id="phone_list"></goods-list-2>
		<goods-list-2 :to-control="toControl" title_name="数码配件"  :goods_list="index_ad_list.electronics_list" goods_list_id="electronics_list"></goods-list-2>
		<goods-list-2 :to-control="toControl" title_name="车载配件"  :goods_list="index_ad_list.car_list" goods_list_id="car_list"></goods-list-2>
		<goods-list-2 :to-control="toControl" title_name="穿戴设备"  :goods_list="index_ad_list.put_list" goods_list_id="put_list"></goods-list-2>
		<goods-list-2 :to-control="toControl" title_name="影音娱乐"  :goods_list="index_ad_list.movie_list" goods_list_id="movie_list"></goods-list-2>
		<goods-list-2 :to-control="toControl" title_name="智能设备"  :goods_list="index_ad_list.intellect_list" goods_list_id="intellect_list"></goods-list-2>
		<div class="back-top" v-show="window_top>300" @click="goBackTop">
			<van-icon name="upgrade"/>
		</div>
	</div>
</template>
<script>
    import topSwiper from './sub/top_swiper'
    import gridNavigation from './sub/grid_navigation'
    import activityBox from './sub/activity_box'
    import goodsList1 from './sub/goods-list1'
	import goodsList2 from './sub/goods-list2'


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
                        number_24_banner: null,
						number_24_goods_list:[],
                        number_12_banner: null,
                        number_12_goods_list:[],
                        number_6_banner: null,
                        number_6_goods_list:[],
                        parts_banner: null,
                        parts_list:[],
						phone_list:[],
                        electronics_list:[],
                        car_list:[],
                        put_list:[],
                        movie_list:[],
                        intellect_list:[],
                    };
                    if (this.get_info) {
                        this.get_info.ad_list.forEach(item => {
                            switch (item.position_type) {
                                case '顶部轮播':
                                    result.top_swiper.push(item);
                                    break;
                                case '24期分期-通栏':
                                    result.number_24_banner = item;
                                    break;
                                case '24期分期-商品GN':
                                    result.number_24_goods_list.push(item);
                                    break;
                                case '12期分期-通栏':
                                    result.number_12_banner = item;
                                    break;
                                case '12期分期-商品GN':
                                    result.number_12_goods_list.push(item);
                                    break;
                                case '6期分期-通栏':
                                    result.number_6_banner = item;
                                    break;
                                case '6期分期-商品GN':
                                    result.number_6_goods_list.push(item);
                                    break;
                                case '品质配件-通栏':
                                    result.parts_banner = item;
                                    break;
                                case '品质配件-商品GN':
                                    result.parts_list.push(item);
                                    break;
                                case '手机通讯-商品GN':
                                    result.phone_list.push(item);
                                    break;
                                case '数码配件-商品GN':
                                    result.electronics_list.push(item);
                                    break;
                                case '车载配件-商品GN':
                                    result.car_list.push(item);
                                    break;
                                case '穿戴设备-商品GN':
                                    result.put_list.push(item);
                                    break;
                                case '影音娱乐-商品GN':
                                    result.movie_list.push(item);
                                    break;
                                case '智能设备-商品GN':
                                    result.intellect_list.push(item);
                                    break;
                            }
                        });
                        result.number_24_goods_list = this.getRandomArray(result.number_24_goods_list);
                        result.number_12_goods_list = this.getRandomArray(result.number_12_goods_list);
                        result.number_6_goods_list = this.getRandomArray(result.number_6_goods_list);
                        result.parts_list = this.getRandomArray(result.parts_list);
                        result.phone_list = this.getRandomArray(result.phone_list);
                        result.electronics_list = this.getRandomArray(result.electronics_list);
                        result.car_list = this.getRandomArray(result.car_list);
                        result.put_list = this.getRandomArray(result.put_list);
                        result.movie_list = this.getRandomArray(result.movie_list);
                        result.intellect_list = this.getRandomArray(result.intellect_list);
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
                this.$fetch("get_index_info", {into_type: 'new_3c_mobile'}).then((msg) => {
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
            getRandomArray(_array) {
                if (_array.length > 0) {
                    /*打乱数组*/
                    _array.sort(
                        function () {
                            return Math.random() > 0.5 ? -1 : 1;
                        }
                    );
                }
                return _array;
            }
        },
        components: {
            'top-swiper': topSwiper,
            'grid-navigation': gridNavigation,
            'activity-box': activityBox,
            'goods-list-1': goodsList1,
			'goods-list-2':goodsList2,
        }
    };
</script>
<style lang="scss" scoped>
	.appliances-main {
		width: 100%;
		background-color: rgb(247, 247, 247);


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