<template>
	<div class="goods-card-type1">
		<div class="goods-tag">
			<p class="t">{{this.goods_tag}}</p>
			<p class="b">免息</p>
		</div>
		<div class="goods-img"><img :src="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{this.goods_name}}</div>
		<div class="goods-price">￥<span>{{this.goods_price}}</span>/期</div>
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
                      result = this.goods_info.goods_price/(parseInt(this.goods_tag));
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
		width: 120px;
		position: relative;
		.goods-img {
			width: 120px;
			height: 120px;
			overflow: hidden;
			text-align: center;
		}
		.goods-name{
			margin-top: 5px;
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
			font-size: 11px;
			text-align: center;
			line-height: 13px;
			font-weight: bolder;
			height: 26px;
			color: rgb(62, 62, 62);
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.goods-price{
			font-size: 10px;
			color: red;
			span{
				font-size: 14px;
				font-weight: bolder;
			}
		}
		.goods-tag{
			left: 0;
			position: absolute;
			border: 1px solid red;
			.b{
				color: white;
				background-color: red;
				padding-left: 5px;
				padding-right: 5px;
			}
			.t{
				color: red;
				background-color: white;
			}
		}
	}
</style>