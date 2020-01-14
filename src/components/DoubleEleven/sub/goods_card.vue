<template>
	<div class="goods-card" @click="toSonControl(goods_info)">
		<div class="goods-img"><img v-lazy="goods_info.ad_img" alt=""></div>
		<div class="goods-name">{{goods_info.goods_name}}</div>
		<div class="goods-price">
			<del>￥{{goods_info.origin_goods_price}}</del>
			<span>￥{{goods_info.goods_price}}</span></div>
		<div class="button">马上购买 ></div>
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

		.button {
			width: 70%;
			background-color: rgb(223, 8, 65);
			color: white;
			height: 25px;
			line-height: 25px;
			font-size: 12px;
			margin: 5px auto;
			border-radius:1000px;
		}
	}
</style>