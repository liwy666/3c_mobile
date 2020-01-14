<template>
	<div class="goods-card-type1">
		<div class="goods-img"><img :src="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{this.goods_name}}</div>
		<div class="goods-tag" v-if="this.goods_tag">
			<van-icon name="fire"/>
			{{this.goods_tag}}
		</div>
		<div class="goods-tag" v-if="!this.goods_tag"></div>
		<div class="price-box">
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
        },
        created() {

        },
        methods: {},
    };
</script>
<style lang="scss" scoped>
	.goods-card-type1 {
		background-color: white;
		margin-left: 10px;
		padding: 5px;
		border-radius: 5px;
		height: 210px;

		.goods-img {
			width: 90%;
			border-radius: 5px;
			margin: 0 auto;
			margin-top: 3%;
			padding-bottom: 100%;
			height: 0;
			overflow: hidden;
		}

		.goods-name {
			padding-left: 5px;
			padding-right: 5px;
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
			line-height: 13px;
			height: 24px;
			color: rgb(62, 62, 62);
			font-weight: bolder;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}

		.price-box {
			display: flex;
			margin-top: 5px;

			.goods-price {
				color: rgb(249, 88, 3);
				text-align: left;
				padding-left: 5px;

				span {
					font-size: 13px;
					font-weight: bolder;
				}
			}

			.origin-goods-price {
				text-decoration: line-through;
				margin-left: 5px;
				color: gray;
				text-align: left;
				padding-left: 4px;

				span {
					font-size: 12px;
				}
			}
		}

		.goods-tag {
			margin-top: 5px;
			padding-left: 5px;
			width: 100%;
			border: 0px solid black;
			position: relative;
			box-sizing: border-box;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			flex-direction: column;
			align-content: flex-start;
			flex-shrink: 0;
			font-size: 10px;
			text-align: left;
			line-height: 13px;
			height: 26px;
			-webkit-line-clamp: 2;
			overflow: hidden;
			color: rgb(249, 88, 3);
		}
	}
</style>