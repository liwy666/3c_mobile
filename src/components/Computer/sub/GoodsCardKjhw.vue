<template>
	<div class="goods-card-type1" @click="toSonControl(goods_info)">
		<div class="goods-tag">{{this.goods_tag}}</div>
		<div class="goods-img"><img :src="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{this.goods_name}}</div>
		<div class="goods-price">￥<span>{{this.goods_price}}</span></div>
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
		margin-left: 10px;
		box-sizing: border-box;
		box-shadow: 0 0 5px 0px rgba(0, 0, 0, .1);
		border-radius: 3px;
		margin-bottom: 5px;

		.goods-img {
			width: 100%;
			margin: 0 auto;
			padding-bottom: 90%;
			height: 0;
			overflow: hidden;
		}

		.goods-name {
			margin-top: 5px;
			padding: 0 5px;
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
			line-height: 12px;
			height: 22px;
			color: rgb(62, 62, 62);
			-webkit-line-clamp: 2;
			font-weight: bolder;
			overflow: hidden;
		}

		.goods-price {
			color: rgb(68, 100, 235);
			margin: 5px 0;
			text-align: left;
			padding-left: 5px;
			font-weight: bolder;

			span {
				font-size: 11px;
			}
		}

		.button {
			line-height: 16px;
			background-color: red;
			font-size: 10px;
			width: 60%;
			margin: 1px auto;
			color: white;
			border-radius: 5px;
		}

		.goods-tag {
			color: #007aff;
			margin-bottom: 5px;
		}
	}
</style>