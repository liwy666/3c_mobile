<template>
	<div class="goods-card-type1" @click="toSonControl(goods_info)">
		<div class="goods-tag">
			<p class="t">{{this.goods_tag}}</p>
		</div>
		<div class="goods-img"><img v-lazy="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{this.goods_name}}</div>
		<div class="button">{{this.goods_tag2}}</div>
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
		box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .1);
		border-radius: 5px;
		overflow: hidden;
		width: 32.5%;
		position: relative;
		margin-top: 3px;
		background-color: white;

		.goods-img {
			width: 85%;
			margin: 0 auto;
			margin-top: 25px;
			padding-bottom: 90%;
			height: 0;
			overflow: hidden;
		}

		.goods-name {
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
			font-size: 12px;
			text-align: center;
			line-height: 13px;
			font-weight: bolder;
			height: 25px;
			color: rgb(62, 62, 62);
			-webkit-line-clamp: 2;
			overflow: hidden;
		}

		.goods-price {
			font-size: 10px;
			color: red;
			text-align: left;

			span {
				font-size: 14px;
				font-weight: bolder;
			}
		}

		.goods-tag {
			position: absolute;

			.t {
				color: white;
				font-size: 10px;
				background-color: rgb(235, 37, 33);
				padding: 5px;
			}
		}

		.button {
			line-height: 16px;
			background-color: rgb(41, 24, 246);
			font-size: 10px;
			width: 60%;
			margin: 5px auto;
			color: white;
			border-radius: 3px;
		}
	}
</style>