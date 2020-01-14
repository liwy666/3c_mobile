<template>
	<div class="goods-card" @click="toSonControl(goods_info)">
		<div class="goods-img"><img v-lazy="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{goods_name}}</div>
		<div class="goods-price">
			<del>￥{{goods_info.origin_goods_price}}</del>
			<span>￥{{goods_info.goods_price}}</span></div>
		<div class="button-box">
			<div class="button">{{goods_tag}}</div>
			GO >
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
	.goods-card {
		background-color: white;
		width: 48%;
		overflow: hidden;
		margin-top: 5px;

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
			text-align: center;
			line-height: 15px;
			height: 30px;
			color: rgb(62, 62, 62);
			-webkit-line-clamp: 2;
			overflow: hidden;
		}

		.goods-price {
			color: rgb(247, 24, 32);
			font-size: 16px;
			padding-left: 10px;
			padding-right: 10px;
			text-align: center;

			del {
				color: gray;
				font-size: 12px;
			}

			span {
				font-weight: bolder;
			}
		}

		.button-box {
			width: 80%;
			height: 25px;
			display: flex;
			align-items: center;
			border: 1px solid rgba(0, 0, 0, .2);
			border-radius: 1000px;
			margin: 5px auto;
			color: rgb(223, 8, 65);
			font-size: 12px;
			.button {
				width: 75%;
				background-color: rgb(223, 8, 65);
				color: white;
				height: 25px;
				line-height: 25px;
				font-size: 12px;
				border-radius: 1000px;
				margin-right: 2px;
				overflow: hidden;
			}
		}

	}
</style>