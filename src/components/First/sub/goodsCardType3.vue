<template>
	<div class="goods-card-type1" @click="toSonControl(goods_info)">
		<div class="goods-tag">
			<p class="t">{{this.goods_tag}}</p>
		</div>
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
            goods_price:{
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
		padding: 5px;
		width: 50%;
		position: relative;
		background-color: white;
		box-sizing: border-box;
		.goods-img {
			width: 70%;
			padding-bottom:70%;
			margin: 15% auto;
			height:0;
			overflow: hidden;
		}
		.goods-name{
			padding-left: 3px;
			padding-right: 3px;
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
			line-height: 15px;
			font-weight: bolder;
			height: 30px;
			color: rgb(62, 62, 62);
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.goods-price{
			font-size: 10px;
			color: red;
			text-align: left;
			span{
				font-size: 14px;
				font-weight: bolder;
			}
		}
		.goods-tag{
			left: 5px;
			top:15px;
			position: absolute;
			.t{
				color: white;
				font-size: 11px;
				background-color:rgb(51,31,207);
				border-radius: 5px;
				padding-left: 5px;
				line-height: 18px;
				padding-right: 5px;
			}
		}
	}
</style>