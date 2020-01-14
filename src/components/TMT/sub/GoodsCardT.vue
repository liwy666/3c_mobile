<template>
	<div class="goods-card-type1" @click="toSonControl(goods_info)">
		<div class="goods-img"><img v-lazy="goods_info.ad_img" alt=""></div>
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
		width: 49%;
		overflow: hidden;
		margin-bottom: 3px;
		border-radius: 5px;
		.goods-img {
			width: 100%;
			margin: 0 auto;
			padding-bottom: 100%;
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
			font-size: 14px;
			text-align: left;
			line-height: 16px;
			height: 32px;
			color: rgb(62, 62, 62);
			font-weight: bolder;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}

		.goods-price {
			color: rgb(247, 24, 32);
			margin-top: 5px;
			text-align: left;
			font-size: 16px;
			font-weight: bolder;
			padding-left: 10px;
			padding-right: 10px;
			margin-bottom: 10px;
		}
	}
</style>