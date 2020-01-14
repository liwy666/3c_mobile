<template>
	<div class="first-main" v-if="get_info">
		<!--顶部轮播-->
		<topSwiper :data="index_ad_list.top_swiper" :to-control="toControl"></topSwiper>
		<!--导航栏-->
		<myNav :data="index_ad_list.nav" :to-control="toControl"></myNav>
		<!--孤立通栏-->
		<div class="solitary-banner" v-if="index_ad_list.solitary_banner"
			@click="toControl(index_ad_list.solitary_banner)"><img
			:src="index_ad_list.solitary_banner.ad_img"
			:alt="index_ad_list.solitary_banner.ad_img"></div>
		<!--9元9-->
		<div class="short-banner" v-if="index_ad_list.by_short_banner"
			@click="toControl(index_ad_list.by_short_banner)"><img
			:src="index_ad_list.by_short_banner.ad_img"
			:alt="index_ad_list.by_short_banner.ad_img"></div>
		<div class="three-goods-box">
			<goodsCardType7 v-for="item in this.index_ad_list.by_goods_list" :key="item.id"
				:to-control="toControl" :goods_info="item"></goodsCardType7>
		</div>
		<!--大牌分期-->
		<div class="short-banner" v-if="index_ad_list.dpfq_short_banner"
			@click="toControl(index_ad_list.dpfq_short_banner)"><img
			:src="index_ad_list.dpfq_short_banner.ad_img"
			:alt="index_ad_list.dpfq_short_banner.ad_img"></div>
		<!--大牌分期滚动商品-->
		<rollGoods :data="index_ad_list.dpfq_goods_list" :to-control="toControl"></rollGoods>
		<!--精选配件-->
		<div class="short-banner" v-if="index_ad_list.jxpj_short_banner"
			@click="toControl(index_ad_list.jxpj_short_banner)"><img
			:src="index_ad_list.jxpj_short_banner.ad_img"
			:alt="index_ad_list.jxpj_short_banner.ad_img"></div>
		<div class="tall-banner" v-if="index_ad_list.jxpj_tall_banner"
			@click="toControl(index_ad_list.jxpj_tall_banner)"><img
			:src="index_ad_list.jxpj_tall_banner.ad_img"
			:alt="index_ad_list.jxpj_tall_banner.ad_img"></div>
		<div class="three-goods-box">
			<goodsCardType2 v-for="item in this.index_ad_list.jxpj_goods_list" :key="item.id"
				:to-control="toControl" :goods_info="item"></goodsCardType2>
		</div>
		<!--爆品直降-->
		<div class="short-banner" v-if="index_ad_list.bpzj_short_banner"
			@click="toControl(index_ad_list.bpzj_short_banner)"><img
			:src="index_ad_list.bpzj_short_banner.ad_img"
			:alt="index_ad_list.bpzj_short_banner.ad_img"></div>
		<div class="tall-banner" v-if="index_ad_list.bpzj_tall_banner"
			@click="toControl(index_ad_list.bpzj_tall_banner)"><img
			:src="index_ad_list.bpzj_tall_banner.ad_img"
			:alt="index_ad_list.bpzj_tall_banner.ad_img"></div>
		<div class="three-goods-box">
			<goodsCardType3 v-for="item in this.index_ad_list.bpzj_goods_list" :key="item.id"
				:to-control="toControl" :goods_info="item"></goodsCardType3>
		</div>
		<!--精品任选-->
		<div class="short-banner" v-if="index_ad_list.jprx_short_banner"
			@click="toControl(index_ad_list.jprx_short_banner)"><img
			:src="index_ad_list.jprx_short_banner.ad_img"
			:alt="index_ad_list.jprx_short_banner.ad_img"></div>
		<div style="width: 100%; overflow: hidden">
			<swiperType2 :data="index_ad_list.jprx_goods_list" :to-control="toControl"></swiperType2>
		</div>
		<!--特色频道-->
		<div class="short-banner" v-if="index_ad_list.tspd_short_banner"
			@click="toControl(index_ad_list.tspd_short_banner)"><img
			:src="index_ad_list.tspd_short_banner.ad_img"
			:alt="index_ad_list.tspd_short_banner.ad_img"></div>
		<div class="tall-banner" v-if="index_ad_list.tspd_tall_banner"
			@click="toControl(index_ad_list.tspd_tall_banner)"><img
			:src="index_ad_list.tspd_tall_banner.ad_img"></div>
		<div class="three-goods-box">
			<goodsCardType4 v-for="item in this.index_ad_list.tspd_goods_list" :key="item.id"
				:to-control="toControl" :goods_info="item"></goodsCardType4>
		</div>
		<!--品牌TOP-->
		<div class="short-banner" v-if="index_ad_list.pp_short_banner"
			@click="toControl(index_ad_list.pp_short_banner)"><img
			:src="index_ad_list.pp_short_banner.ad_img"
			:alt="index_ad_list.pp_short_banner.ad_img"></div>
		<myTop :goods_list="index_ad_list.pp_goods_lsit" :name_list="index_ad_list.pp_name"
			:to-control="toControl"></myTop>
		<!--精选推荐-->
		<div class="short-banner" v-if="index_ad_list.jxtj_short_banner"
			@click="toControl(index_ad_list.jxtj_short_banner)"><img
			:src="index_ad_list.jxtj_short_banner.ad_img"
			:alt="index_ad_list.jxtj_short_banner.ad_img"></div>
		<div class="tall-banner" v-if="index_ad_list.jxtj_tall_banner"
			@click="toControl(index_ad_list.jxtj_tall_banner)"><img
			:src="index_ad_list.jxtj_tall_banner.ad_img"></div>
		<div class="jxtj-group" v-for="(item,i) in jxtj_group" :key="i">
			<div class="short-banner" @click="toControl(item)"><img
				:src="item.ad_img"
				:alt="item.ad_img"></div>
			<div class="three-goods-box">
				<goodsCardType6 v-for="item2 in item.children" :key="item2.id"
					:to-control="toControl" :goods_info="item2"></goodsCardType6>
			</div>
		</div>
		<!--品牌直营-->
		<div class="short-banner" v-if="index_ad_list.ppzy_short_banner"
			@click="toControl(index_ad_list.ppzy_short_banner)"><img
			:src="index_ad_list.ppzy_short_banner.ad_img"
			:alt="index_ad_list.ppzy_short_banner.ad_img"></div>
		<div class="three-goods-box">
			<div class="ppzy" v-for="item in index_ad_list.ppzy_goods_list" :key="item.id" @click="toControl(item)"><img
				v-lazy="item.ad_img" alt=""></div>
		</div>
	</div>
</template>
<script>
    import topSwiper from './sub/topSwiper'
    import myNav from './sub/myNav'
    import rollGoods from './sub/rollGoods'
    import goodsCardType2 from './sub/goodsCardType2'
    import goodsCardType3 from './sub/goodsCardType3'
    import goodsCardType4 from './sub/goodsCardType4'
    import goodsCardType6 from './sub/goodsCardType6'
    import goodsCardType7 from './sub/goodsCardType7'
    import swiperType2 from './sub/swiperType2'
    import myTop from './sub/top'

    export default {
        data() {
            return {
                get_info: null,
            };
        },
        computed: {
            index_ad_list: {
                get: function () {
                    let result = {
                        top_swiper: [],
                        nav: [],
                        solitary_banner: null,
                        by_short_banner: null,
                        by_goods_list: [],
                        dpfq_short_banner: null,
                        dpfq_goods_list: [],
                        jxpj_short_banner: null,
                        jxpj_tall_banner: null,
                        jxpj_goods_list: [],
                        bpzj_short_banner: null,
                        bpzj_tall_banner: null,
                        bpzj_goods_list: [],
                        jprx_short_banner: null,
                        jprx_goods_list: [],
                        tspd_short_banner: null,
                        tspd_tall_banner: null,
                        tspd_goods_list: [],
                        pp_short_banner: null,
                        pp_name: [],
                        pp_goods_lsit: [],
                        jxtj_short_banner: null,
                        jxtj_tall_banner: null,
                        jxtj_little_banner: [],
                        jxtj_goods_list: [],
                        ppzy_short_banner: null,
                        ppzy_goods_list: [],
                    };
                    if (this.get_info) {
                        this.get_info.ad_list.forEach(item => {
                            switch (item.position_type) {
                                case '顶部轮播':
                                    result.top_swiper.push(item);
                                    break;
                                case '分类导航':
                                    result.nav.push(item);
                                    break;
                                case '孤立通栏':
                                    result.solitary_banner = item;
                                    break;
                                case '9元9-短通栏':
                                    result.by_short_banner = item;
                                    break;
                                case '9元9-商品':
                                    result.by_goods_list.push(item);
                                    break;
                                case '大牌分期-短通栏':
                                    result.dpfq_short_banner = item;
                                    break;
                                case '大牌分期-商品':
                                    result.dpfq_goods_list.push(item);
                                    break;
                                case '精选配件-短通栏':
                                    result.jxpj_short_banner = item;
                                    break;
                                case '精选配件-长通栏':
                                    result.jxpj_tall_banner = item;
                                    break;
                                case '精选配件-商品':
                                    result.jxpj_goods_list.push(item);
                                    break;
                                case '爆品直降-短通栏':
                                    result.bpzj_short_banner = item;
                                    break;
                                case '爆品直降-长通栏':
                                    result.bpzj_tall_banner = item;
                                    break;
                                case '爆品直降-商品':
                                    result.bpzj_goods_list.push(item);
                                    break;
                                case '精品任选-短通栏':
                                    result.jprx_short_banner = item;
                                    break;
                                case '精品任选-商品':
                                    result.jprx_goods_list.push(item);
                                    break;
                                case '特色频道-短通栏':
                                    result.tspd_short_banner = item;
                                    break;
                                case '特色频道-长通栏':
                                    result.tspd_tall_banner = item;
                                    break;
                                case '特色频道-商品':
                                    result.tspd_goods_list.push(item);
                                    break;
                                case '品牌TOP榜-短通栏':
                                    result.pp_short_banner = item;
                                    break;
                                case '品牌TOP榜-品牌':
                                    result.pp_name.push(item);
                                    break;
                                case '品牌TOP榜-商品':
                                    result.pp_goods_lsit.push(item);
                                    break;
                                case '精选推荐-短通栏':
                                    result.jxtj_short_banner = item;
                                    break;
                                case '精选推荐-长通栏':
                                    result.jxtj_tall_banner = item;
                                    break;
                                case '精选推荐-小标题':
                                    result.jxtj_little_banner.push(item);
                                    break;
                                case '精选推荐-商品':
                                    result.jxtj_goods_list.push(item);
                                    break;
                                case '品牌直营-短通栏':
                                    result.ppzy_short_banner = item;
                                    break;
                                case '品牌直营-商品':
                                    result.ppzy_goods_list.push(item);
                                    break;
                            }
                        });
                    }
                    return result;
                },
            },
            jxtj_group: {
                get: function () {
                    let result = [];
                    this.index_ad_list.jxtj_little_banner.forEach(item => {
                        let parent = item;
                        parent.children = [];
                        this.index_ad_list.jxtj_goods_list.forEach(item2 => {
                            if (item2.position_type_name === parent.position_type_name) {
                                parent.children.push(item2);
                            }
                        });
                        result.push(parent);
                    });
                    return result;
                }
            }
        },
        created() {
            this.getIndexAd();
        },
        methods: {
            getIndexAd() {
                this.$fetch("get_index_info", {into_type: '3c_mobile'}).then((msg) => {
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
            }
        },
        components: {
            topSwiper,
            myNav,
            rollGoods,
            goodsCardType2,
            goodsCardType3,
            goodsCardType4,
            goodsCardType6,
            goodsCardType7,
            swiperType2,
            myTop,
        }
    };
</script>
<style lang="scss" scoped>
	.first-main {
		background-color: rgb(223, 223, 223);

		.solitary-banner {
			width: 95%;
			margin: 5px auto;
			border-radius: 5px;
			overflow: hidden;
			box-shadow: 1px 3px 6px 2px rgba(0, 0, 0, 0.1);

			img {
				display: block;
			}
		}

		.short-banner {
			width: 100%;

			img {
				display: block;
			}
		}

		.tall-banner {
			width: 100%;

			img {
				display: block;
			}
		}

		.three-goods-box {
			background-color: white;
			display: flex;
			width: 100%;
			flex-wrap: wrap;
			justify-content: space-between;
			padding-bottom: 10px;
			padding-top: 10px;

			.ppzy {
				width: 33.3%;
			}
		}
	}
</style>