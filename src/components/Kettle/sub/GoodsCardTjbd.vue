<template>
	<div class="goods-card-type1" @click="toSonControl(goods_info)">
		<div class="goods-tag2"><van-icon name="medel"/>{{goods_tag2}}</div>
		<div class="goods-img"><img :src="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{this.goods_name}}</div>
		<div class="goods-tag">{{this.goods_tag}}</div>
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
		padding: 5px;
		border-radius: 10px;
		height: 210px;
		background-image: url("https://mate.ganglonggou.com/lib/images/ketlle_goods_b1.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		box-sizing: border-box;
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
			margin-top: 5px;
			width: 100%;
			border: 0px solid black;
			position: relative;
			box-sizing: border-box;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			flex-direction: column;
			align-content: flex-start;
			flex-shrink: 0;
			font-size: 12px;
			font-weight: bolder;
			text-align: center;
			line-height: 20px;
			height: 20px;
			color: white;
			-webkit-line-clamp: 1;
			letter-spacing: 1px;
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
			padding-left: 5px;
			padding-right: 5px;
			margin-top: 5px;
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
			text-align: center;
			line-height: 14px;
			height: 14px;
			color: white;
			-webkit-line-clamp: 1;
			letter-spacing: 1px;
			overflow: hidden;
		}
		.goods-tag2{
			text-align: center;
			padding: 5px;
			height: 15px;
			color: rgb(242,106,106);
			line-height: 15px;
			font-size: 10px;
			font-weight: bolder;
		}
	}
</style>