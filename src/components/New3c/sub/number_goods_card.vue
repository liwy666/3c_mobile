<template>
	<div class="goods-card-type1" @click="toSonControl(goods_info)">
		<div class="goods-img"><img v-lazy="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{this.goods_name}}</div>
		<div v-if="this.number>1" class="number-goods-price-box">
			<div class="goods-price">￥<span>{{this.number_goods_price}}</span>×{{number}}期</div>
			<div class="count-goods-price">￥{{this.goods_price}}</div>
		</div>
		<div v-if="this.number===1" class="goods-price-box">
			<div class="goods-price">￥<span>{{this.goods_price}}</span></div>
			<div class="origin-goods-price">￥<span>{{this.origin_goods_price}}</span></div>
		</div>

	</div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        props: {
            goods_info: Object,
            toControl: Function,
			number:Number,
        },
        computed: {
            goods_name: {
                get: function () {
                    let result = '';
                    if (this.goods_info) {
                        result = this.goods_info.goods_name.split('|');
                        result = result[0];
                    }
                    return result;
                }
            },
            goods_tag: {
                get: function () {
                    let result = '';
                    if (this.goods_info) {
                        result = this.goods_info.goods_name.split('|');
                        result = result[1];
                    }
                    return result;
                }
            },
            goods_price: {
                get: function () {
                    let result = '';
                    if (this.goods_info) {
                        result = this.goods_info.goods_price;
                    }
                    return result;
                }
            },
            origin_goods_price: {
                get: function () {
                    let result = '';
                    if (this.goods_info) {
                        result = this.goods_info.origin_goods_price;
                    }
                    return result;
                }
            },
            number_goods_price:{
                get: function () {
                    let result = '';
                    if (this.goods_info && this.number>0) {
                        result = this.goods_info.goods_price/this.number;
                        result =result.toFixed(2);
                    }
                    return result;
                }
            },
        },
        created() {

        },
        methods: {
            toSonControl(ad_info) {
                this.toControl(ad_info)
            }
        },
    };
</script>
<style lang="scss" scoped>
	.goods-card-type1 {
		background-color: white;
		width: 50%;
		overflow: hidden;
		.goods-img {
			width: 70%;
			margin: 0 auto;
			margin-top: 5%;
			margin-bottom: 10%;
			padding-bottom: 70%;
			height: 0;
			overflow: hidden;
		}
		.goods-name {
			padding-left: 10px;
			padding-right: 10px;
			width: 100%;
			border: 0px solid black;
			position: relative;
			box-sizing: border-box;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			flex-direction: column;
			align-content: flex-start;
			flex-shrink: 0;
			font-size: 11px;
			text-align: left;
			line-height: 15px;
			height: 30px;
			color: rgb(62, 62, 62);
			font-weight: bolder;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.number-goods-price-box{
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 10px;
			margin-bottom: 5px;
			line-height: 20px;
			.goods-price{
				color: red;
				font-size: 12px;
				span{
					font-size: 16px;
					font-weight: bolder;
				}
			}
			.count-goods-price{
				color: gray;
				margin-left: 8px;
				font-size: 12px;
			}
		}
		.goods-price-box{
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 10px;
			margin-bottom: 5px;
			line-height: 20px;
			.goods-price {
				color: red;
				span{
					font-size: 16px;
					font-weight: bolder;
				}
			}
			.origin-goods-price {
				color: gray;
				margin-left: 8px;
				text-decoration: line-through;
				font-size: 12px;
			}
		}

	}
</style>