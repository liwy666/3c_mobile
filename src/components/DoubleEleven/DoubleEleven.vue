<template>
	<div class="main" v-if="load_finish">
		<div class="head"><img :src="head_data.ad_img" @click="toControl(head_data)"></div>
		<div class="coupon-box">
			<img :src="item.ad_img" class="coupon-item" v-for="item in coupon_data" :key="item.id"
				@click="toControl(item)">
		</div>
		<img class="title" v-if="mark_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/mark_goods.png">
		<mark-goods :data="mark_goods" :to-control="toControl"></mark-goods>
		<img class="title" v-if="cut_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/cut_goods.png">
		<div class="cut-goods-box">
			<div class="cut-goods-item" v-for="item in cut_goods" :key="item.id" @click="toControl(item)">
				<img :src="item.ad_img">
			</div>
		</div>
		<img class="title" v-if="boutique_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/boutique_goods.png">
		<div class="goods-list-box">
			<goods-card :goods_info="item" v-for="item in boutique_goods" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<img class="title" v-if="characteristic_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/characteristic_goods.png">
		<div class="goods-list-box">
			<goods-card :goods_info="item" v-for="item in characteristic_goods" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<img class="title" v-if="kitchen_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/kitchen_goods.png">
		<div class="goods-list-box">
			<goods-card :goods_info="item" v-for="item in kitchen_goods" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<img class="title" v-if="digit_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/digit_goods.png">
		<div class="goods-list-box">
			<goods-card :goods_info="item" v-for="item in digit_goods" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<img class="title" v-if="live_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/live_goods.png">
		<div class="goods-list-box">
			<goods-card :goods_info="item" v-for="item in live_goods" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<img class="title" v-if="brand_data.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/brand.png">
		<div class="brand-box">
			<div class="brand-box-item" v-for="item in brand_data" :key="item.id" @click="toControl(item)">
				<img :src="item.ad_img">
			</div>
		</div>
		<img :src="describe_data.ad_img" alt="" style="width: 95%">
		<div class="back-top" v-show="window_top>300" @click="goBackTop">
			<van-icon name="upgrade"/>
		</div>
	</div>
</template>
<script>
    import markGoods from './sub/mark_goods'
    import goodsCard from './sub/goods_card'
    import goodsCardOther from './sub/goods_card_other'

    export default {
        data() {
            return {
                load_finish: false,
                head_data: {},
                coupon_data: [],
                mark_goods: [],
                cut_goods: [],
                boutique_goods: [],
                characteristic_goods: [],
                kitchen_goods: [],
                digit_goods: [],
                live_goods: [],
                brand_data: [],
                describe_data: {},
                window_top: 0,
            };
        },
        computed: {},
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
                this.$fetch("get_index_info", {into_type: 'double_eleven'}).then((index_info) => {
                    if (index_info) {
                        index_info.ad_list.forEach(item => {
                            switch (item.position_type) {
                                case "手机端头图":
                                    this.head_data = item;
                                    break;
                                case "整点抢券":
                                    this.coupon_data.push(item);
                                    break;
                                case "预约抢购":
                                    this.mark_goods.push(item);
                                    break;
                                case "满减专区":
                                    this.cut_goods.push(item);
                                    break;
                                case "品悦精选GN":
                                    this.boutique_goods.push(item);
                                    break;
                                case "特色满减GN":
                                    this.characteristic_goods.push(item);
                                    break;
                                case "厨卫电器GN":
                                    this.kitchen_goods.push(item);
                                    break;
                                case "3C数码GN":
                                    this.digit_goods.push(item);
                                    break;
                                case "生活电器GN":
                                    this.live_goods.push(item);
                                    break;
                                case "品牌推荐":
                                    this.brand_data.push(item);
                                    break;
                                case "手机端价格说明":
                                    this.describe_data = item;
                                    break;

                            }
                        });
                        this.boutique_goods = this.getRandomArray(this.boutique_goods, 20);
                        this.characteristic_goods = this.getRandomArray(this.characteristic_goods, 20);
                        this.kitchen_goods = this.getRandomArray(this.kitchen_goods, 20);
                        this.digit_goods = this.getRandomArray(this.digit_goods, 20);
                        this.live_goods = this.getRandomArray(this.live_goods, 20);
                        this.load_finish = true;
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
            'mark-goods': markGoods,
            'goods-card': goodsCard,
            'goods-card-other': goodsCardOther,
        }
    };
</script>
<style lang="scss" scoped>
	.main {
		background-color: rgb(3, 116, 222);

		.head {
			img {
				display: block;
			}
		}

		.coupon-box {
			display: flex;
			flex-wrap: wrap;

			img {
				width: 50%;
				display: block;
			}
		}

		.title {
			width: 100%;
			display: block;
			margin-bottom: 15px;
			margin-top: 15px;
		}

		.cut-goods-box {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;


			.cut-goods-item {
				width: 48%;
				margin-top: 5px;

				img {
					width: 100%;
				}
			}
		}

		.goods-list-box {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
		}

		.brand-box {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			margin: 0 auto;

			.brand-box-item {
				width: 22%;

				img {
					width: 100%;
				}
			}
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