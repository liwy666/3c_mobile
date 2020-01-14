<template>
	<div class="main" v-if="load_finish">
		<div class="head"><img :src="head_data.ad_img" @click="toControl(head_data)"></div>
		<img class="title" v-if="mark_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/mark_goods_head.png">
		<mark-goods :data="mark_goods" :to-control="toControl"></mark-goods>
		<img
			:src="mark_goods_date.ad_img" style="width: 90%;display: block;margin: 0 auto">
		<img class="title" v-if="three_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/three_goods_head.png">
		<div class="goods-list-box">
			<goods-card :goods_info="item" v-for="item in three_goods" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<img class="title" v-if="job_goods.length>0"
			src="https://mate.ganglonggou.com/lib/images/double_eleven/job_goods_head.png">
		<div class="goods-list-box">
			<goods-card :goods_info="item" v-for="item in job_goods" :key="item.id"
				:to-control="toControl"></goods-card>
		</div>
		<img :src="describe_data.ad_img" alt=""
			style="width: 90%;margin-top: 20px;margin-bottom: 20px;border-radius: 5px">
		<div class="back-top" v-show="window_top>300" @click="goBackTop">
			<van-icon name="arrow-up"/>
		</div>
	</div>
</template>
<script>
    import markGoods from './sub/mark_goods'
    import goodsCard from './sub/goods_card'
    //import goodsCardOther from './sub/goods_card_other'

    export default {
        data() {
            return {
                load_finish: false,
                head_data: {},
                mark_goods: [],
                mark_goods_date: {},
                coupon_shop: [],
                characteristic_goods: [],
                selected_goods: [],
                three_goods: [],
                live_goods: [],
                kitchen_goods: [],
                job_goods: [],
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
                this.$fetch("get_index_info", {into_type: 'double_eleven_burst'}).then((index_info) => {
                    if (index_info) {
                        index_info.ad_list.forEach(item => {
                            switch (item.position_type) {
                                case "手机端头图":
                                    this.head_data = item;
                                    break;
                                case "预约抢购":
                                    this.mark_goods.push(item);
                                    break;
                                case "预约抢购日期":
                                    this.mark_goods_date = item;
                                    break;
                                case "领券店铺":
                                    this.coupon_shop.push(item);
                                    break;
                                case "特色买赠GN":
                                    this.characteristic_goods.push(item);
                                    break;
                                case "周年精选GN":
                                    this.selected_goods.push(item);
                                    break;
                                case "3C数码GN":
                                    this.three_goods.push(item);
                                    break;
                                case "生活电器GN":
                                    this.live_goods.push(item);
                                    break;
                                case "厨卫电器GN":
                                    this.kitchen_goods.push(item);
                                    break;
                                case "办公配件GN":
                                    this.job_goods.push(item);
                                    break;
                                case "手机端价格说明":
                                    this.describe_data = item;
                                    break;

                            }
                        });
                        console.log(this.characteristic_goods.length);
                        this.characteristic_goods = this.getRandomArray(this.characteristic_goods, 20);
                        this.selected_goods = this.getRandomArray(this.selected_goods, 20);
                        this.three_goods = this.getRandomArray(this.three_goods, 20);
                        this.live_goods = this.getRandomArray(this.live_goods, 20);
                        this.kitchen_goods = this.getRandomArray(this.kitchen_goods, 20);
                        this.job_goods = this.getRandomArray(this.job_goods, 20);
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
                    _length = _length < 1 ? 0 : _length;
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
        }
    };
</script>
<style lang="scss" scoped>
	.main {
		background-color: #94b8da;

		.head {
			img {
				display: block;
			}
		}

		.coupon-box {
			display: flex;
			flex-wrap: wrap;

			.coupon-item {
				width: 50%;

				img {
					display: block;
				}
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
			background-color: rgba(255, 255, 255, 0.8);
			bottom: 3%;
			right: 3%;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			z-index: 9999;

			i {
				width: 40px;
				height: 40px;
				line-height: 40px;
				font-size: 25px;
				color: #007aff;
			}
		}
	}
</style>