<template>
	<div class="goods-card" @click="toSonControl(goods_info)">
		<div class="goods-img"><img v-lazy="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{goods_info.goods_name}}</div>
		<div class="goods-price">
			<del>￥{{goods_info.origin_goods_price}}</del>
			<span>￥{{goods_info.goods_price}}</span></div>
		<div class="button">马上购买</div>
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
        computed: {},
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
	@font-face {
		font-family: 'goods-name-font';
		font-display: swap;
		src: url('//at.alicdn.com/t/webfont_410dchtzoqe.eot'); /* IE9*/
		src: url('//at.alicdn.com/t/webfont_410dchtzoqe.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url('//at.alicdn.com/t/webfont_410dchtzoqe.woff2') format('woff2'),
		url('//at.alicdn.com/t/webfont_410dchtzoqe.woff') format('woff'), /* chrome、firefox */
		url('//at.alicdn.com/t/webfont_410dchtzoqe.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
		url('//at.alicdn.com/t/webfont_410dchtzoqe.svg#AlibabaPuHuiTiL') format('svg'); /* iOS 4.1- */
	}

	.goods-card {
		background-color: white;
		width: 48%;
		overflow: hidden;
		margin-top: 5px;
		border-radius: 5px;

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
			font-family: "goods-name-font";
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

		.button {
			width: 60%;
			background-color: rgb(223, 8, 65);
			color: white;
			height: 20px;
			line-height: 20px;
			font-size: 12px;
			margin: 8px auto;
			border-radius: 1000px;
		}
	}
</style>