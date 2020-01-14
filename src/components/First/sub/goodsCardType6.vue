<template>
	<div class="goods-card-type1" @click="toSonControl(goods_info)">
		<div class="goods-img"><img v-lazy="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{this.goods_name}}</div>
		<div class="goods-price">￥<span>{{this.goods_price}}</span><i class="goods-tag">{{this.goods_tag}}</i></div>
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
            goods_tag2: {
                get: function () {
                    let result = '';
                    if (this.goods_info) {
                        result = this.goods_info.goods_name.split('|');
                        result = result[2];
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
		width: 50%;
		position: relative;
		background-color: white;
		box-sizing: border-box;
		padding: 10px;
		.goods-img {
			width: 80%;
			padding-bottom:80%;
			margin: 0 auto;
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
			text-align: center;
			line-height: 15px;
			font-weight: bolder;
			height: 30px;
			color: rgb(62, 62, 62);
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.goods-price{
			padding-left: 3px;
			font-size: 10px;
			color: red;
			text-align: left;
			span{
				font-size: 14px;
				font-weight: bolder;
			}
		}
		.goods-tag{
			color: rgb(235,37,33);
			font-size: 10px;
			border: 1px solid rgb(235,37,33);
			border-radius: 5px;
			height: 20px;
			margin-left: 10px;
			line-height: 20px;
			padding-left: 5px;
			padding-right: 5px;
			font-style: normal;
		}
		.button{
			line-height: 16px;
			background-color: rgb(41,24,246);
			font-size: 10px;
			width: 60%;
			margin: 5px auto;
			color: white;
			border-radius: 3px;
		}
	}
</style>