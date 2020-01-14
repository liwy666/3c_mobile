<template>
	<div class="tmt-main" v-if="get_info">
		<!--顶部轮播-->
		<topSwiper :data="index_ad_list.top_swiper" :to-control="toControl"></topSwiper>
		<!--科技好物-->
		<kjhwBox :data="index_ad_list.kjhw_goods_list" :to-control="toControl"
			:banner="this.index_ad_list.kjhw_banner"></kjhwBox>
		<!--新品首发-->
		<div class="solitary-banner" v-if="index_ad_list.xpsf_banner"
			@click="toControl(index_ad_list.xpsf_banner)"><img
			:src="index_ad_list.xpsf_banner.ad_img"
			:alt="index_ad_list.xpsf_banner.ad_img"></div>
		<xpsfBox :data="index_ad_list.xpsf_goods_list" :to-control="toControl"></xpsfBox>
		<!--用券专区-->
		<div class="solitary-banner" v-if="index_ad_list.coupon_banner"
			@click="toControl(index_ad_list.coupon_banner)"><img
			:src="index_ad_list.coupon_banner.ad_img"
			:alt="index_ad_list.coupon_banner.ad_img"></div>
		<div class="goods-list-box">
			<GoodsCardT v-for="item in this.index_ad_list.coupon_goods_list" :key="item.id"
				:to-control="toControl" :goods_info="item"></GoodsCardT>
		</div>
		<!--潮流推荐-->
		<div class="solitary-banner" v-if="index_ad_list.cltj_banner"
			@click="toControl(index_ad_list.cltj_banner)"><img
			:src="index_ad_list.cltj_banner.ad_img"
			:alt="index_ad_list.cltj_banner.ad_img"></div>
		<div class="goods-list-box">
			<GoodsCardT v-for="item in this.index_ad_list.cltj_goods_list" :key="item.id"
				:to-control="toControl" :goods_info="item"></GoodsCardT>
		</div>
		<articel1 v-if="index_ad_list.cltj_article1" :to-control="toControl"
			:goods_info="index_ad_list.cltj_article1"></articel1>
		<articel2 v-if="index_ad_list.cltj_article2" :to-control="toControl"
			:goods_info="index_ad_list.cltj_article2"></articel2>
		<!--热销排行-->
		<div class="solitary-banner" v-if="index_ad_list.rxph_banner"
			@click="toControl(index_ad_list.rxph_banner)"><img
			:src="index_ad_list.rxph_banner.ad_img"
			:alt="index_ad_list.rxph_banner.ad_img"></div>
		<rxphBox :data="index_ad_list.rxph_goods_list" :to-control="toControl"></rxphBox>
		<!--好评如潮-->
		<div class="solitary-banner" v-if="index_ad_list.hprc_banner"
			@click="toControl(index_ad_list.hprc_banner)"><img
			:src="index_ad_list.hprc_banner.ad_img"
			:alt="index_ad_list.hprc_banner.ad_img"></div>
		<div class="goods-list-box">
			<GoodsCardT v-for="item in this.index_ad_list.hprc_goods_list" :key="item.id"
				:to-control="toControl" :goods_info="item"></GoodsCardT>
		</div>
		<articel1 v-if="index_ad_list.hprc_article1" :to-control="toControl"
			:goods_info="index_ad_list.hprc_article1"></articel1>
		<articel2 v-if="index_ad_list.hprc_article2" :to-control="toControl"
			:goods_info="index_ad_list.hprc_article2"></articel2>
		<!--品牌推荐-->
		<div class="solitary-banner" v-if="index_ad_list.ppjx_banner"
			@click="toControl(index_ad_list.ppjx_banner)"><img
			:src="index_ad_list.ppjx_banner.ad_img"
			:alt="index_ad_list.ppjx_banner.ad_img"></div>
		<div class="goods-list-box">
			<div style="width: 33%;margin-top: 0" v-for="item in this.index_ad_list.ppjx_goods_list" :key="item.id"
				@click="toControl(item)"><img
				v-lazy="item.ad_img"></div>
		</div>
	</div>
</template>
<script>
    import topSwiper from './sub/topSwiper'
    import kjhwBox from './sub/kjhwBox'
    import xpsfBox from './sub/xpsfBox'
    import rxphBox from './sub/rxphBox'
    import GoodsCardT from './sub/GoodsCardT'
    import articel1 from './sub/articleCard1'
    import articel2 from './sub/articleCard2'

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
                        kjhw_banner: null,
                        kjhw_goods_list: [],
                        xpsf_banner: null,
                        xpsf_goods_list: [],
                        coupon_banner: null,
                        coupon_goods_list: [],
                        cltj_banner: null,
                        cltj_goods_list: [],
                        cltj_article1: null,
                        cltj_article2: null,
                        rxph_banner: null,
                        rxph_goods_list: [],
                        hprc_banner: null,
                        hprc_goods_list: [],
                        hprc_article1: null,
                        hprc_article2: null,
                        ppjx_banner: null,
                        ppjx_goods_list: [],
                    };
                    if (this.get_info) {
                        this.get_info.ad_list.forEach(item => {
                            switch (item.position_type) {
                                case '顶部轮播':
                                    result.top_swiper.push(item);
                                    break;
                                case '科技好物-标题':
                                    result.kjhw_banner = item;
                                    break;
                                case '科技好物-商品G':
                                    result.kjhw_goods_list.push(item);
                                    break;
                                case '用券专区-标题':
                                    result.coupon_banner = item;
                                    break;
                                case '用券专区-商品G':
                                    result.coupon_goods_list.push(item);
                                    break;
                                case '新品首发-标题':
                                    result.xpsf_banner = item;
                                    break;
                                case '新品首发-商品G':
                                    result.xpsf_goods_list.push(item);
                                    break;
                                case '潮流推荐-标题':
                                    result.cltj_banner = item;
                                    break;
                                case '潮流推荐-商品G':
                                    result.cltj_goods_list.push(item);
                                    break;
                                case '潮流推荐-文章1':
                                    result.cltj_article1 = item;
                                    break;
                                case '潮流推荐-文章2':
                                    result.cltj_article2 = item;
                                    break;
                                case '热销排行-标题':
                                    result.rxph_banner = item;
                                    break;
                                case '热销排行-商品':
                                    result.rxph_goods_list.push(item);
                                    break;
                                case '好评如潮-标题':
                                    result.hprc_banner = item;
                                    break;
                                case '好评如潮-商品G':
                                    result.hprc_goods_list.push(item);
                                    break;
                                case '好评如潮-文章1':
                                    result.hprc_article1 = item;
                                    break;
                                case '好评如潮-文章2':
                                    result.hprc_article2 = item;
                                    break;
                                case '品牌精选-标题':
                                    result.ppjx_banner = item;
                                    break;
                                case '品牌精选-内容':
                                    result.ppjx_goods_list.push(item);
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
        methods: {
            getIndexAd() {
                this.$fetch("get_index_info", {into_type: 'computer_mobile'}).then((msg) => {
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
            kjhwBox,
            xpsfBox,
            rxphBox,
            GoodsCardT,
            articel1,
            articel2,
        }
    };
</script>
<style lang="scss" scoped>
	.tmt-main {
		width: 100%;
		background-color: rgb(245,245,245);

		.goods-list-box {
			display: flex;
			width: 100%;
			flex-wrap: wrap;
			justify-content: space-around;
		}
	}
</style>