<template>
	<div class="main" v-if="get_info">
		<!--顶部轮播-->
		<topSwiper :data="index_ad_list.top_swiper" :to-control="toControl"></topSwiper>
		<!--分类导航-->
		<myNavigation :data="index_ad_list.fldh_goods_list" :to-control="toGoodsBox"></myNavigation>
		<div v-if="index_ad_list.banner_item1"><img :src="index_ad_list.banner_item1.ad_img"
			@click="toControl(index_ad_list.banner_item1)"></div>
		<!--每周特惠-->
		<p class="title" v-if="index_ad_list.mzth_goods_list"><i style="color: rgb(48,44,46)">每周</i><i
			style="color: rgb(172,94,60)">特惠</i></p>
		<mzthBox :data="index_ad_list.mzth_goods_list" :to-control="toControl"></mzthBox>
		<!--精选主题-->
		<jxztBox v-if="index_ad_list.jxzt_goods_list" :data="index_ad_list.jxzt_goods_list"
			:to-control="toControl"></jxztBox>
		<!--推荐榜单-->
		<p class="title" v-if="index_ad_list.tjbd_goods_list"><i style="color: rgb(48,44,46)">推荐</i><i
			style="color: rgb(172,94,60)">榜单</i></p>
		<tjbdBox :data="index_ad_list.tjbd_goods_list" :to-control="toControl"></tjbdBox>
		<!--精选文章1-->
		<!--		<articel1 v-if="index_ad_list.articel1" :to-control="toControl"-->
		<!--			:goods_info="index_ad_list.articel1"></articel1>-->
		<!--优选好货-->
		<p class="title" v-if="index_ad_list.yxhh_goods_list"><i style="color: rgb(48,44,46)">优选</i><i
			style="color: rgb(116,72,219)">好货</i></p>
		<yxhhBox :data="index_ad_list.yxhh_goods_list" :to-control="toControl"></yxhhBox>
		<!--精选文章1-->
		<articel1 v-if="index_ad_list.articel1" :to-control="toControl"
			:goods_info="index_ad_list.articel1"></articel1>
		<!--分类商品-->
		<p class="title prgj_goods_list" v-if="index_ad_list.prgj_goods_list"><i style="color: rgb(48,44,46)">烹饪锅具</i>
		</p>
		<commonBox :data="index_ad_list.prgj_goods_list" :to-control="toControl"></commonBox>
		<p class="title djcb_goods_list" v-if="index_ad_list.djcb_goods_list"><i style="color: rgb(48,44,46)">刀具菜板</i>
		</p>
		<commonBox :data="index_ad_list.djcb_goods_list" :to-control="toControl"></commonBox>
		<p class="title cfpj_goods_list" v-if="index_ad_list.cfpj_goods_list"><i style="color: rgb(48,44,46)">厨房配件</i>
		</p>
		<commonBox :data="index_ad_list.cfpj_goods_list" :to-control="toControl"></commonBox>
		<p class="title sjjj_goods_list" v-if="index_ad_list.sjjj_goods_list"><i style="color: rgb(48,44,46)">水具酒具</i>
		</p>
		<commonBox :data="index_ad_list.sjjj_goods_list" :to-control="toControl"></commonBox>
		<p class="title cj_goods_list" v-if="index_ad_list.cj_goods_list"><i style="color: rgb(48,44,46)">餐具</i></p>
		<commonBox :data="index_ad_list.cj_goods_list" :to-control="toControl"></commonBox>
		<p class="title cjkfj_goods_list" v-if="index_ad_list.cjkfj_goods_list"><i
			style="color: rgb(48,44,46)">茶具咖啡具</i></p>
		<commonBox :data="index_ad_list.cjkfj_goods_list" :to-control="toControl"></commonBox>
		<div class="bottom-navigation" v-show="bottom_navigation_show">
			<van-tabbar v-model="bottom_navigation_active" safe-area-inset-bottom>
				<van-tabbar-item v-for="(item,i) in index_ad_list.fldh_goods_list" :key="item.id"
					@click="toGoodsBox(i)">
					<img slot="icon" :src="item.ad_img" style="width: 0.65rem;height: 0.65rem">
					<span>{{item.goods_name}}</span>
				</van-tabbar-item>
			</van-tabbar>
		</div>
		<!--精选大牌-->
		<p class="title" v-if="index_ad_list.jxdp_goods_list"><i style="color: rgb(48,44,46)">精选</i><i
			style="color: red">大牌</i></p>
		<jxdpBox :data="index_ad_list.jxdp_goods_list" :to-control="toControl"></jxdpBox>
		<div class="floor"></div>
	</div>
</template>
<script>
    import topSwiper from './sub/topSwiper'
    import myNavigation from './sub/myNavigation'
    import mzthBox from './sub/mzthBox'
    import jxztBox from './sub/juztBox'
    import tjbdBox from './sub/tjbdBox'
    import articel1 from './sub/articleCard1'
    import yxhhBox from './sub/yxhhBox'
    import jxdpBox from './sub/jxdpBox'
    import commonBox from './sub/commonBox'

    export default {
        data() {
            return {
                get_info: null,
                bottom_navigation_active: -1,
                bottom_navigation_show: false,
            };
        },
        computed: {
            index_ad_list: {
                get: function () {
                    let result = {
                        top_swiper: [],
                        fldh_goods_list: [],
                        banner_item1: null,
                        mzth_goods_list: [],
                        jxzt_goods_list: [],
                        tjbd_goods_list: [],
                        yxhh_goods_list: [],
                        jxdp_goods_list: [],
                        articel1: null,
                        prgj_goods_list: [],
                        djcb_goods_list: [],
                        cfpj_goods_list: [],
                        sjjj_goods_list: [],
                        cj_goods_list: [],
                        cjkfj_goods_list: [],

                    };
                    if (this.get_info) {
                        this.get_info.ad_list.forEach(item => {
                            switch (item.position_type) {
                                case '顶部轮播':
                                    result.top_swiper.push(item);
                                    break;
                                case 'N分类导航':
                                    result.fldh_goods_list.push(item);
                                    break;
                                case '孤立通栏':
                                    result.banner_item1 = item;
                                    break;
                                case 'GN今日必抢-商品':
                                    result.mzth_goods_list.push(item);
                                    break;
                                case 'N精选主题-内容':
                                    result.jxzt_goods_list.push(item);
                                    break;
                                case 'N推荐榜单-内容':
                                    result.tjbd_goods_list.push(item);
                                    break;
                                case 'N精选文章1':
                                    result.articel1 = item;
                                    break;
                                case 'NG优选好货-商品':
                                    result.yxhh_goods_list.push(item);
                                    break;
                                case '精选大牌-内容':
                                    result.jxdp_goods_list.push(item);
                                    break;
                                case 'GN烹饪锅具-商品':
                                    result.prgj_goods_list.push(item);
                                    break;
                                case 'GN刀剪菜板-商品':
                                    result.djcb_goods_list.push(item);
                                    break;
                                case 'GN厨房配件-商品':
                                    result.cfpj_goods_list.push(item);
                                    break;
                                case 'GN水具酒具-商品':
                                    result.sjjj_goods_list.push(item);
                                    break;
                                case 'GN餐具-商品':
                                    result.cj_goods_list.push(item);
                                    break;
                                case 'GN茶具咖啡具-商品':
                                    result.cjkfj_goods_list.push(item);
                                    break;
                            }
                        });
                    }
                    return result;
                },
            },
        },
        created() {
            this.getIndexAd();
        },
        mounted() {
            let _this = this;
            window.addEventListener('scroll', function () {
                //要做兼容 在模拟器能正常获取scrolltop在微信h5页面和手机的浏览器页面一直为0
                let window_top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
                let navigation_top = document.querySelectorAll('.navigation-main')[0].offsetTop;

                let prgj_goods_list_top = document.querySelectorAll('.prgj_goods_list')[0].offsetTop;
                let djcb_goods_list_top = document.querySelectorAll('.djcb_goods_list')[0].offsetTop;
                let cfpj_goods_list_top = document.querySelectorAll('.cfpj_goods_list')[0].offsetTop;
                let sjjj_goods_list_top = document.querySelectorAll('.sjjj_goods_list')[0].offsetTop;
                let cj_goods_list_top = document.querySelectorAll('.cj_goods_list')[0].offsetTop;
                let cjkfj_goods_list_top = document.querySelectorAll('.cjkfj_goods_list')[0].offsetTop;

                if (window_top > navigation_top + 300) {
                    _this.bottom_navigation_show = true;
                } else {
                    _this.bottom_navigation_show = false;
                }
                window_top = window_top + 500;
                switch (true) {
                    case window_top > cjkfj_goods_list_top:
                        _this.$set(_this, 'bottom_navigation_active', 5);
                        break;
                    case window_top > cj_goods_list_top:
                        _this.$set(_this, 'bottom_navigation_active', 4);
                        break;
                    case window_top > sjjj_goods_list_top:
                        _this.$set(_this, 'bottom_navigation_active', 3);
                        break;
                    case window_top > cfpj_goods_list_top:
                        _this.$set(_this, 'bottom_navigation_active', 2);
                        break;
                    case window_top > djcb_goods_list_top:
                        _this.$set(_this, 'bottom_navigation_active', 1);
                        break;
                    case window_top > prgj_goods_list_top:
                        _this.$set(_this, 'bottom_navigation_active', 0);
                        break;
                    default:
                        _this.$set(_this, 'bottom_navigation_active', -1);
                }


            });
        },
        methods: {
            getIndexAd() {
                this.$fetch("get_index_info", {into_type: 'kettle_mobile'}).then((msg) => {
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
            toGoodsBox(index) {
                let goods_list_top_array = [];
                goods_list_top_array.push(document.querySelectorAll('.prgj_goods_list')[0].offsetTop);
                goods_list_top_array.push(document.querySelectorAll('.djcb_goods_list')[0].offsetTop);
                goods_list_top_array.push(document.querySelectorAll('.cfpj_goods_list')[0].offsetTop);
                goods_list_top_array.push(document.querySelectorAll('.sjjj_goods_list')[0].offsetTop);
                goods_list_top_array.push(document.querySelectorAll('.cj_goods_list')[0].offsetTop);
                goods_list_top_array.push(document.querySelectorAll('.cjkfj_goods_list')[0].offsetTop);
                window.scrollTo(0, goods_list_top_array[index] - 80);
            }
        },
        components: {
            topSwiper,
            myNavigation,
            mzthBox,
            jxztBox,
            tjbdBox,
            articel1,
            yxhhBox,
            jxdpBox,
            commonBox
        }
    };
</script>
<style lang="scss" scoped>
	.main {
		background-color: rgb(242, 242, 242);

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
		}

		.floor {
			width: 100%;
			height: 50px;
		}
	}
</style>