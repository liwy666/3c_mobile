<template>
	<div class="goods-card-xpsf-main" @click="toSonControl(goods_info)">
		<div class="goods-img"><img :src="goods_info.ad_img" alt=""></div>
		<div class="goods-info">
			<div class="goods-name">{{this.goods_name}}</div>
			<div class="button-box">
				<div class="goods-desc">{{this.goods_tag}}</div>
				<div class="button">立即查看</div>
			</div>
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
		width: 100%;
		display: flex;
		justify-content: space-around;
		overflow: hidden;
		height: 140px;
		box-sizing: border-box;
		padding: 10px 0;
		background-color: white;

		.goods-img {
			height: 120px;
			width: 120px;
		}

		.goods-info {
			width: 55%;
			position: relative;
			padding: 0 10px;

			.goods-name {
				font-size: 14px;
				text-align: left;
				line-height: 21px;
				color: rgb(62, 62, 62);
				font-weight: bolder;
			}

			.button-box {
				display: flex;
				justify-content: space-between;
				position: absolute;
				bottom: 0px;
				width: 95%;

				.goods-desc {
					font-size: 12px;
					line-height: 18px;
					color: rgb(200, 200, 200);
				}

				.button {
					font-size: 12px;
					border: 1px solid rgb(0, 0, 0);
					padding: 0 5px;
					border-radius: 3px;
				}
			}
		}


	}
</style>