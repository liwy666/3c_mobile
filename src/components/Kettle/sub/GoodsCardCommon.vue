<template>
	<div class="goods-card-type1" @click="toSonControl(goods_info)">
		<div class="goods-img"><img :src="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{this.goods_name}}</div>
		<div class="goods-tag" v-if="this.goods_tag"><van-icon name="fire"/>{{this.goods_tag}}</div>
		<div class="goods-tag"  v-if="!this.goods_tag"></div>
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
		margin-top: 5px;
		box-sizing: border-box;
		width: 32%;
		background-color: white;
		padding: 5px;
		border-radius: 5px;
		height: 200px;
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

		.goods-price {
			color: rgb(249,88,3);
			margin-top: 10px;
			text-align: left;
			padding-left: 5px;
			span {
				font-size: 13px;
				font-weight: bolder;
			}
		}
		.goods-tag{
			text-align: left;
			padding: 5px;
			height: 15px;
			color: rgb(249,88,3);
		}
	}
</style>