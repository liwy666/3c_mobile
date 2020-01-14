<template>
	<div class="goods-card-xpsf-main" @click="toSonControl(goods_info)">
		<i class="tag">NEW</i>
		<div class="goods-img"><img :src="goods_info.ad_img" alt=""></div>
		<div class="goods-info">
			<div class="goods-name">{{this.goods_name}}</div>
			<div class="goods-desc">{{this.goods_tag}}</div>
			<p class="goods-price">￥<span>{{this.goods_price}}</span></p>
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
	.goods-card-xpsf-main {
		border-radius: 3px;
		display: flex;
		background-color: white;
		padding: 5px;
		box-shadow: 0 0 1px 0px rgba(0, 0, 0, .1);
		margin: 1px 10px;
		height: 120px;

		.tag {
			background-color: rgba(68, 93, 235);
			display: block;
			position: absolute;
			color: white;
			padding: 2px;
			top: 20px;
			left: 5px;
		}

		.goods-img {
			width: 140px;
			height: 140px;
			overflow: hidden;
		}

		.goods-info {
			padding: 10px;

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
				font-size: 14px;
				letter-spacing: 1px;
				text-align: left;
				line-height: 18px;
				height: 36px;
				color: rgb(62, 62, 62);
				font-weight: bolder;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}

			.goods-desc {
				font-size: 11px;
				text-align: left;
				line-height: 18px;
				color: rgb(200, 200, 200);
			}

			.goods-price {
				color: rgb(68, 100, 235);
				text-align: right;
				bottom: 20px;
				right: 20px;
				position: absolute;

				span {
					font-size: 18px;
					font-weight: bolder;
				}
			}
		}


	}
</style>